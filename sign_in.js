document.querySelector("form").addEventListener("submit",signin);
var registeredUser =JSON.parse(localStorage.getItem("userDataBase"));
// console.log(registeredUser);
function signin(event){
    event.preventDefault();

    var pass = document.querySelector("#pass").value;
    var emailId = document.querySelector("#email").value;
    for(var i=0;i<registeredUser.length;i++){
        console.log(registeredUser[i].pass,registeredUser[i].emailId);
        if(registeredUser[i].emailId==emailId && registeredUser[i].password==pass){
            alert("Sign In Success")
            window.location.href="index.html"
        }
    }
}