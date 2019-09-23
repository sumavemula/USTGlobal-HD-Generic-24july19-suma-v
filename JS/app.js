var todayDate=new Date();
console.log(todayDate);
var todaysDate=new Date(2018,11,24,10,33,30,0);
console.log(todaysDate);
var date=new Date(0);
console.log(date);     
var dte=new Date("october 13,2014 11:13:00");
console.log(dte);
var month=['jan','feb','march','april','may','june','aug','september','october','november','december'];
var day=['sun','monday','tuesday','wednesday','thursday','friday','saturday'];
var year=todayDate.getFullYear();
console.log(year);
console.log("day "+month[todayDate.getMonth()]);
console.log("day "+day[todayDate.getDay()]);
console.log("===============================");
console.log(Math.PI);
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(Math.random()*100))
console.log(Math.pow(4,2));
console.log(Math.round(4.5));

console.log('===================');
var num1 = 10;
var num2 = '10';
if(num1===num2)
{
    console.log('Equal');
}
else{ 
    console.log('Not Equal');
}
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof undefined);
console.log(typeof null);
var fruits=['orange','apple'];
console.log(typeof fruits);
var val = true;
console.log(typeof val);
var age = 18;
console.log((age>=18)?"adult":"minor");
console.log((age>18)?'greater':(age==18)?'equal':'lessthan');
console.log('======================================');
var emp=[{
    name : 'suma',
    age : 24,
},
{
name : 'vani',
age : '26',
},
{
    name : 'harshi',
    age : '23'
}
];
for(var i=0;i<emp.length;i++){
    console.log(emp[i]);
}
var hobbies = ['cricket','painting','singing','dancing'];
for(var index in hobbies){
    console.log(hobbies[index]);
}
console.log('----------------');    
for(var val of hobbies){
    console.log(val);
}

