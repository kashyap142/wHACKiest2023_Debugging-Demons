var username=document.querySelector(".user-name-span");
console.log(localStorage.getItem("username"))
username.innerHTML+=localStorage.getItem("username");