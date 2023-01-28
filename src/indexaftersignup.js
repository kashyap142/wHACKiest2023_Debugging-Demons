var username=document.querySelector(".usernamedisplay");
var email=document.querySelector(".dropemail");
var dropusername=document.querySelector(".dropusername");
username.innerHTML+=localStorage.getItem("username");
dropusername.innerHTML=localStorage.getItem("username");
email.innerHTML=localStorage.getItem("email");