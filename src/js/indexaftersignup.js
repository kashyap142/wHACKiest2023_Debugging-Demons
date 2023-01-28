var username=document.querySelector(".usernamedisplay");
var email=document.querySelector(".dropemail");
var search=document.querySelector(".search");
var dropusername=document.querySelector(".dropusername");
var destination=document.querySelector(".destination");
username.innerHTML=localStorage.getItem("username");
search.addEventListener('click',function(){
    console.log("hello");
   location.replace("mumbai.html")
    
})



