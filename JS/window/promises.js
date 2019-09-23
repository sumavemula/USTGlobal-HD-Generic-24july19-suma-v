let result = new Promise(function(resolve,reject){
    if(10===10){
        reject('failed');
    }else{
        resolve('success');
    }
});
result.then((data)=>{
    console.log("then block "+data);
}).catch((error)=>{
    console.log("catch block "+error);
});
let employeeData = new Promise(function(resolve,reject){
    const employee = [
        {
            name : 'suma',
            age : 24
        },
        {
            name : 'vani',
            age : 26
        },
        {
            name : 'tanvi',
            age : 10
        }
    ];
    if(10>10){
        reject('failed');
    }else{
        resolve(employee);
    }
});
employeeData.then((data)=>{
    //console.log("Employee data ," data);
    return data;
}).catch((error)=>{
    console.log("catch block "+error);
}).then(function(data1){
    console.log('this is then block 2 ',data1);
});
