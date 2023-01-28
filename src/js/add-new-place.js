var destination=document.querySelector(".destination");
var submit=document.querySelector(".submit");
submit.addEventListener('click',function(){
    localStorage.setItem("destination",destination.value);
})