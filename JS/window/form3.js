         var flag=0;
        function username()
        {
            user=loginform.username.value;
            if(user=="")
            {
                document.getElementById("error").innerHTML="Enter UserID";
                flag=1;
                loginform.username.style.border = '1px solid red';
            }
            
        }
           function password(){
            pass=loginform.password.value;
            if(pass=="")
            {
                document.getElementById("error1").innerHTML="Enter password";   
                flag=1;
                loginform.password.style.border = '1px solid red';
            }
            
        }
        function result(form)
        {
            flag=0;
            username();
            password();
            if(flag==1)
                return false;
            else
                return true;
        } 
            
    