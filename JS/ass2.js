console.log("FACTORIAL USING ALL FUNCTIONS");
// NAMED FUNCTION
function fact(num){
     var fact = 1;
for(var i=1;i<=num;i++)
{
     fact = fact*i;
}
console.log(fact);
 }
fact(5);
//anonymous function
var factValue=function(num){
    var fact = 1;
    for(var i=1;i<=num;i++)
    {
     fact = fact*i;
    }
    return fact;
}
console.log(factValue(6));

//self invoked function
console.log((function(num){
    var fact = 1;
    for(var i=1;i<=num;i++)
    {
     fact = fact*i;
    }
    return fact;
}(4)));
//fat arrow function
var factValue = (num)=>{
    var fact = 1;
    for(var i=1;i<=num;i++)
    {
     fact = fact*i;
    }
    return fact;
}
console.log(factValue(3));
console.log("fibonacci using all functions");
//named function
function fib(num){
    var a = 0,b = 1,c;
console.log(a);
console.log(b);
    for(var i=3;i<=num;i++){   
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
console.log(fib(5));
//anonymous function
var fibValue=function(num){
    var a = 0,b = 1,c;
    console.log(a);
    console.log(b);
        for(var i=3;i<=num;i++){   
            c=a+b;
            console.log(c);
            a=b;
          b=c;
        }
    
}
console.log(fibValue(8));
//self invoked function
console.log((function(num){
    var a = 0,b = 1,c;
    console.log(a);
    console.log(b);
        for(var i=3;i<=num;i++){   
            c=a+b;
            console.log(c);
            a=b;
          b=c;
        }
    
}(3)));
//fat arrow function
var fibValue = (num)=>{
    var a = 0,b = 1,c;
    console.log(a);
    console.log(b);
        for(var i=3;i<=num;i++){   
            c=a+b;
            console.log(c);
            a=b;
          b=c;
        }
}
fibValue(4);
//to add numbers in an array
console.log("to add number in an array");
//named function
function add(arr){
    sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
}
var arr = [10,20,30,40];
add(arr);
//anonymous function
var sumValue = function(arr){
    sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
        return sum;
}
var arr = [10,20,30,40,50];
console.log(sumValue(arr));
//self invoked function
console.log((function(arr){
        sum=0;
        for(var i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
            return sum;
}([10,20,5])));
console.log("prime number");
//named function
function prime(num){
       if(num===1 || num===0){
           console.log("not a prime");
       }else if(num%2===0){
        console.log("not a prime number");
        }
        else{
            console.log("prime");
        }
        
}
prime(9);
//anonymous function
var primeNum = function prime(num){
    if(num===1 || num===0){
        console.log("not a prime");
    }else if(num%2===0){
        console.log("not a prime number");
        }
        else{
            console.log("prime");
        }
    
}
primeNum(23);
//self invoked function
console.log((function(num){
    if(num===1 || num===0){
        console.log("not a prime");
    }else if(num%2===0){
        console.log("not a prime number");
        }
        else{
            console.log("prime");
        }
    
}(24)));
//fat arrow function
var factVal = (num)=>{
    if(num===1 || num===0){
        console.log("not a prime");
    }else if(num%2===0){
        console.log("not a prime number");
        }
        else{
            console.log("prime");
        }
    
}
factVal(42);
console.log("circumference of a number");
//named function
function circumference(radius){
    var res = Math.PI*2*radius;
    console.log(res);
}
circumference(55);
//anonymous function
var tot = function circumference(radius){
    var res = Math.PI*2*radius;
    console.log(res);
}
tot(23);
//self invoked
console.log((function circumference(radius){
    var res = Math.PI*2*radius;
    console.log(res);
}(15)));
//fat arrow function
var result = (radius)=>{
    var res = Math.PI*2*radius;
    console.log(res);
}
result(34);
