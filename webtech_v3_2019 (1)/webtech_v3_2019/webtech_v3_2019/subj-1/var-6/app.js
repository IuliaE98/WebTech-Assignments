function applyBonus(employees, bonus){
   let promise = new Promise(function(resolve, reject) 
   {
      if(typeof bonus!=='number')
      {reject(new Error("Invalid bonus"));}
      for(let i=0;i<employees.length;i++)
{
    if(typeof employees[i].name != 'string' || typeof employees[i].salary != 'number'){
        reject(new Error("Invalid array format!"));
    }
}
let max = 0;
for ( let i=0;i<employees.length;i++)
{
    if(employees[i].salary>max){
        max = employees[i].salary;
    }
}

let bonusNew = 0.1*max;
if(bonus< bonusNew){
    reject("Bonus too small");
}
if(bonus> bonusNew){
    for(let i = 0;i<employees.length;i++){
        employees[i].salary = employees[i].salary + bonus;
    }
    resolve(employees);
}
 });
return promise;
}

let app = {
    applyBonus: applyBonus,
}

module.exports = app;