function sum(a,b){
    function addSum(){
        return a+b;
    }
    return addSum;
}
var addFunc = sum(10,20);
var tot = addFunc();
console.log(tot);
console.log('==========================');
console.log(window);
console.log(this);
console.log(this==window);
var name = 'suma';
console.log(this.name);
console.log(window.name);

var person = {
    name : 'dulquer salman',
    age : 30,
    getName : function(){
        console.log(this);
        console.log(window);
        getData();
        function getData(){
            console.log('get data method '+ this.name);
        }
        return this.name;
    }
}
var heroName= person.getName();
console.log('name = '+heroName);
console.log('================================');
for(var i=0;i<5;i++){
    console.log(i);
}
console.log(i);
for(let a=0;a<5;a++){
    console.log(a);
}
var hobbies = ['dancing','singing','reading'];
console.log('hobbies '+hobbies);
var hobbies = ['numismatics'];
console.log('hobbies '+hobbies);
hobbies = ['swimming'];
console.log('==========================');
let fruits = ['apple','banana'];
console.log('fruits '+fruits);
fruits = ['pineapple','strawberry']
console.log('fruits '+fruits);
console.log('==========================');
const names = ['suma','vani'];
console.log('names '+names);
//const names = ['tanvi'];
//names = 'navya';
//console.log('names '+names);
names[0] = 'kavitha';
console.log(names);
