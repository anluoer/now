var Person=require('./Person.js')
var util=require('util')

function Code(){
    Person.call(this);
    
}
Code.prototype.dama=function(){
    console.log('打代码')
}
util.inherits(Code,Person)
// var code=new Code()
// code.sleep();
// code.dama();
// code.sleep();
module.exports=Code