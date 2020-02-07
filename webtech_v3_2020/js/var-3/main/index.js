class Queue {
 constructor(){
     this.items = [];
 }
 insert(element){
     if (typeof element !== "string")
        throw new Error("Invalid Type")
     else this.items.push(element)
 }
 extract(){
     if (this.items.length === 0)
        throw new Error("Invalid Operation")
        else return this.items.shift()
 }
}

module.exports = Queue;

