let errorList = document.querySelector(".error-list");

function validateForm() {
    let errors = document.querySelector("#errorDisplay")
    errors.style.display = "flex";
    let x = document.forms[0]["username"].value; 
    if (x == "") {
        // alert("username cannot be blank");
        let e = document.createElement("li"); 
        e.innerHTML = "Username cannot be blank";
        errorList.appendChild(e); 
            }
            else {
                console.log('hellno')
            }
}

