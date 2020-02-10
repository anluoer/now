var Person=require('./Person.js')
var util=require('util')
// var person=new Person();
// person.eat()
function Student(){
    Person.call(this);
    
}
Student.prototype.study=function(){
    console.log('努力学习')
}
util.inherits(Student,Person)

module.exports=Student
