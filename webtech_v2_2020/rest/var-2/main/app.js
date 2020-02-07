const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'root'
const DB_PASSWORD = ''

let conn

mysql.createConnection({
    user: DB_USERNAME,
    password: DB_PASSWORD
})
    .then((connection) => {
        conn = connection
        return connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
    })
    .then(() => {
        return conn.end()
    })
    .catch((err) => {
        console.warn(err.stack)
    })

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    logging: false
})

let Ship = sequelize.define('student', {
    name: Sequelize.STRING,
    portOfSail: Sequelize.STRING,
    displacement: Sequelize.INTEGER
}, {
    timestamps: false
})


const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
    try {
        await sequelize.sync({force: true})
        for (let i = 0; i < 10; i++) {
            let ship = new Ship({
                name: `name${i}`,
                portOfSail: `port ${i}`,
                displacement: 3000 + 10 * i
            })
            await ship.save()
        }
        res.status(201).json({message: 'created'})
    } catch (err) {
        console.warn(err.stack)
        res.status(500).json({message: 'server error'})
    }
})

app.get('/ships', async (req, res) => {
    try {
        let pageNo = parseInt(req.query.pageNo)
        let pageSize = parseInt(req.query.pageSize)
        const offset = pageNo * pageSize;
        const limit = pageSize;

        if (!pageNo && !pageSize) {
            let ships = await Ship.findAll();
            res.status(200).json(ships)
        } else if (!pageSize) {
            let ships = await Ship.findAll({
                limit: 5,
                offset: pageNo * 5
            });
            res.status(200).json(ships)
        } else {
            let ships = await Ship.findAll({
                limit: limit,
                offset: offset
            });
            res.status(200).json(ships)
        }


    } catch (err) {
        console.warn(err.stack)
        res.status(500).json({message: 'server error'})
    }
})

app.post('/ships', async (req, res) => {
    try {
        let ship = new Ship(req.body)
        await ship.save()
        res.status(201).json({message: 'created'})
    } catch (err) {
        res.status(500).json({message: 'server error'})
    }
})

module.exports = app