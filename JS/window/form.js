function validateForm(){
    let formData = document.forms[0];
  // console.log(formData.uname.value);
  let userName = formData.uname.value;
  let pass = formData.pwd.value;
   if(userName.length>4 && pass.length>7){
       formData.uname.style.border = '2px solid green';
       formData.pwd.style.border = '2px solid green';
       formData.loginSubmit.disabled = false;
   }else{
       formData.uname.style.border = '2px solid red';
       formData.pwd.style.border = '2px solid red';
       formData.loginSubmit.disabled = true;
   }
}
