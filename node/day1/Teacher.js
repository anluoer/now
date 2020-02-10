var Person=require('./Person.js')
var util=require('util')

function Teacher(){
    Person.call(this);
    
}
Teacher.prototype.teach=function(){
    console.log('教书')
}
util.inherits(Teacher,Person)
// var teacher=new Teacher()
// teacher.sleep();
// teacher.teach();
module.exports=Teacher