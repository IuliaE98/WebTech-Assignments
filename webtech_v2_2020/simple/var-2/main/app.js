const express = require('express')

const app = express()
app.use('/', express.static('public'))

app.locals.cars = [{
    name :  'a',
    color : 'red'
},{
    name :  'b',
    color : 'blue'
}]


app.get('/cars', (req, res) => {
    res.status(200).json(app.locals.cars)
})

app.delete('/cars/:name', (req, res) => {
    app.locals.cars = app.locals.cars.filter((e) => e.name !== req.params.name)
    res.status(202).json({message : 'accepted'}) 
})

module.exports = app