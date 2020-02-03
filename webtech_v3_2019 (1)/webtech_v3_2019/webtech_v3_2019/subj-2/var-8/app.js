const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.students = [
    {
        name: "Gigel",
        surname: "Popel",
        age: 23
    },
    {
        name: "Gigescu",
        surname: "Ionel",
        age: 25
    }
];

app.get('/students', (req, res) => {
    res.status(200).json(app.locals.students);
});

app.post('/students', (req, res, next) => {
const student = req.body;
if(student.constructor === Object && Object.keys(req.body).length === 0){
    res.status(500).json({message:"Body is missing"});
}

if(!student.name  || !student.surname || !student.age ){
    res.status(500).json({message:"Invalid body format"});
}
if(student.age<0){
    res.status(500).json({message:"Age should be a positive number"});
}
// lista de studenti se ia din get 
   else if(student.age>=0) 
   {let ok=0;
    for(let i=0;i<app.locals.students.length;i++){
        if(student.name===app.locals.students[i].name){
            res.status(500).json({message: "Student already exists"});
            ok=1;
      }
    if(student.name&&student.surname&&student.age&&student.age>0&&ok===0){
     app.locals.students.push(student);
     res.status(201).json({message: 'Created'});
    }
    }}
  

})

module.exports = app;