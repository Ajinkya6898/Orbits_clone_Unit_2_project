    document.querySelector("form").addEventListener("submit",myform) 
    var userStack=JSON.parse(localStorage.getItem("userDataBase"))|| [];

    function myform (event){
    event.preventDefault();

    var emailId = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    

    // console.log(emailId,password);

    var userData = {
        emailId : emailId,
        password : pass,
    };
    userStack.push(userData);

    console.log(userData);

    localStorage.setItem("userDataBase",JSON.stringify(userStack));

    alert("Sign Up Successful")
    window.location.href="sign_in.html"
}