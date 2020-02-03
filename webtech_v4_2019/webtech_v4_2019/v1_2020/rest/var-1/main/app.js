const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'root'
const DB_PASSWORD = 'p@ss'

let conn

mysql.createConnection({
    user : DB_USERNAME,
    password : DB_PASSWORD
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

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD,{
    dialect : 'mysql',
    logging: false
})

let Ship = sequelize.define('student', {
    name : Sequelize.STRING,
    portOfSail : Sequelize.STRING,
    displacement : Sequelize.INTEGER
},{
    timestamps : false
})


const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        for (let i = 0; i < 10; i++){
            let ship = new Ship({
                name : `name${i}`,
                portOfSail : `port ${i}`,
                displacement : 3000 + 10 * i
            })
            await ship.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/ships/:id', async (req, res) => {
    try{
        let ship = await Ship.findByPk(req.params.id)
		if (!ship){
			res.status(404).json({message : 'not found'})
		}
		else{
            res.status(200).json(ship)
        }
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})        
    }
})


app.put('/ships/:id', async (req, res) => {
    // if(!req.body){
    //     res.status(404).json({"message": "not found"})   
    // }
    // else{
    //     res.status(202).json({message: "accepted"} )  ;
    // }
    try{
        let ship=await Ship.findByPk(req.params.id);
        if(!ship){
            res.status(404).json({message : 'not found'});
        }
        else{
            ship.name=req.body.name?req.body.name:ship.name;
            ship.portOfSail=req.body.portOfSail?req.body.portOfSail:ship.portOfSail;
            ship.displacement=req.body.displacement?req.body.displacement:ship.displacement;
            
            await ship.save()
             res.status(202).json({message: "accepted"} )
        }
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})        
    }
})

app.delete('/ships/:id', async (req, res) => {
    //  if(!req.body){
    //     res.status(404).json({"message": "not found"})   
    // }
    // else{
    //     res.status(202).json({message: "accepted"} )  ;
    // }
    try{
        let ship=await Ship.findByPk(req.params.id);
        if(!ship){
            res.status(404).json({message : 'not found'});
        }
        else{
            
            await ship.destroy()
             res.status(202).json({message: "accepted"} )
        }
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})        
    }
})


module.exports = app