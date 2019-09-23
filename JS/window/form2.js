function validate(){
    let employeeData = document.forms['employeeform'];
    let empPass = employeeData.pass.value;
    let empCPassword = employeeData.cpass.value;
    if(empPass==='' && empCPassword===''){
        return true;
    }
    if(empPass === empCPassword){
        alert('success');
        return true;
    }else{
        alert('password not matching');
        return false;
    }
}