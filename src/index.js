const errorList = document.querySelector(".error-list")
const errorDisplay = document.querySelector("#errorDisplay")
const registrationForm = document.querySelector("#registration"); 
console.log(`registrationForm ----> ${registrationForm}`);

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hello")
    errorDisplay.style.display = "flex"; 
    if (registrationForm["username"].value == "") {
        let input = prompt("what do you think your error is ?")
        let errorItem = document.createElement("li");
        errorItem.innerHTML = input
        errorList.appendChild(errorItem);
    }
})
function validateForm(e) {
    e.preventDefault();
    console.log("hello")
    // e.preventDefault();
    // let errors = document.querySelector("#errorDisplay")
    // // errors.style.display = "flex";
    // let x = document.forms[0]["username"].value; 
    // if (x == "") {
    //     // alert("username cannot be blank");

    //     errors.appendChild()
    //     let e = document.createElement("li"); 
    //     e.innerHTML = "Username cannot be blank";
    //     errorList.innerText = "<p>There are some errors</p>"
    //         }
    //         else {
    //             console.log('hellno')
    //         }
}

