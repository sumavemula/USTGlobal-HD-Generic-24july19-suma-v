var hobbies = ['football','sleeping','singing','dancing','gardening','shopping'];
hobbies.forEach(function(value,index){
    if(value.length>7)
    console.log(value);
});
console.log(myName);
var myName="suma";
console.log(myName);
function getAge(){
    var age;
    console.log(age);
    age=10;
    console.log(age);
}
getAge();
console.log("************ARRAY METHODS***********");
var arr = Array.isArray(hobbies);
console.log(arr);
 var inc = hobbies.includes('gardening');
 console.log(inc);
 var push = hobbies.push('cooking','reading');
 console.log(push);
 var pop = hobbies.pop();
 console.log(pop);
 var unshift = hobbies.unshift('swimming','skipping');
 console.log(unshift);
 var shift =  hobbies.shift();
 console.log(shift);
 var splice = hobbies.splice(0,2,'kabaddi','jumping');
 console.log(splice);
 var slice = hobbies.slice(1,4);
 console.log(slice);
 var join = hobbies.join('==>');
 console.log(join);
 var index = hobbies.indexOf('gardening');
 console.log(index);
 var numbers = [10,20,30,40,50];
 var number1 = numbers.map(function(value,index){
     value = value+10;
     return value;
 });
 console.log(number1);
 var filter = numbers.filter(function(value){
     return value>10;
 });        
 console.log(filter);
 var items = [{
     name : 'lipstick',
     price : 100,
     id : 1
 },
{
    name : 'perfume',
     price : 400,
     id : 2
},
{
    name : 'watch',
     price : 2000,
    id : 3
},
{
    name : 'powder',
     price : 130,
    id : 3
}];
var item1 =items.map(function(item){
    item.price = item.price+100;
    return item;
});
console.log(item1);
var fil = items.filter(function(value){
    return value.price>100 && value.name.length>7;
});
console.log(fil);
console.log("***********STRING METHODS************");
