let student = {
        name : 'suma',
        age : 24,
        hobbies : ['dancing','singing']
}
console.log(`my name is ${student.name}`);//string interpolation
console.log(`my age is ${student.age}`);
let jsonobject = JSON.stringify(student);//convert javascript to JSON
console.log(jsonobject);
let jsobject = JSON.parse(jsonobject);//convert JSON to javascript
console.log(jsobject);
let {name,age,hobbies} = student;//object re structuring
//*******Array restucturing ************
const hobbie = ['singing','dancing','swimming'];
let h1 = hobbie[0];
let h2 = hobbie[1];
let h3 = hobbie[2];
let [h1, h2, h3] = hobbie;
//rest operator
function sum(a,b,..c){
    console.log(c);
}
sum(1,2,3);