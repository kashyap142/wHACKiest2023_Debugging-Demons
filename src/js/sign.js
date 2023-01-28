

var username=document.querySelector("#name");
var email=document.querySelector("#email");
var password=document.querySelector("#password");
var submit=document.querySelector("#submit");
submit.addEventListener("click",function(){
    if(username.value.length>0 && email.value.length>0 && password.value.length>0){
        localStorage.setItem("username",username.value);
        location.reload();
    }
    else{
        alert("invalid");
    }
 
   
     

    
  
})


