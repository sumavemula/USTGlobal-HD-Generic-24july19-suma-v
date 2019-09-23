var person = {
    name : 'samantha',
    age : 24,
    color : 'white'
};
console.log(person);
person.name = 'kajal';
console.log(person);
var person1=person;
console.log(person);
person1.name='rajani';
console.log(person);
console.log(person1);
function first(){
    setTimeout(function(){
        console.log("first");
    },1000);
}
function second(){
    console.log("second");
}
first();
second();
console.log("====================================")
function first(callback){
    setTimeout(function(){
        console.log("first");
        callback();
    },1000);
    console.log("this is first");
}
function second(){
    console.log("second");
}                                                     
first(second);
console.log("==================================");
