console.log("******* NAMED FUNCTION**********")
function sum(num1,num2){
if(num1!==undefined && num2!==undefined){
sumvalue = num1+num2;
console.log("sum = "+sumvalue);
 }
}
sum(10,20);
var total=sum1(20,20);
function sum1(num1,num2){
    if(num1!==undefined && num2!==undefined){
    sumvalue = num1+num2;
    return sumvalue;
     }
    }
    console.log(total);
    console.log("******** ANONYMOUS FUN***********")
    var addData = function(num1,num2){
        var tot = num1+num2;
        return tot;
    }
    console.log(addData(20,30)); 
    console.log("******** SELF-INVOKED FUN***********")
   console.log((function (num1,num2){
        totval = num1+num2;
        return totval;
    }(40,20)));
    console.log("******** FAT ARROW FUN***********")                       
    var sum = (num1,num2)=>{
        var tot = num1+num2;
        return tot;
    }
    console.log(sum(40,30));
    console.log("============");
    var sumVal=(num1,num2)=>num1+num2;
    var sumData = sumVal(50,40);
    console.log("sum = "+sumData);
    console.log("==========================================================")
    

                             