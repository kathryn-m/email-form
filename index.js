/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")
const formContainer = document.querySelector(".form-container")
const closeErrorMsgBtn = document.getElementById("close-error-msg-btn")
const closeSuccessMsgBtn = document.getElementById("close-success-msg-btn")
const errorMsgContainer = document.getElementById("error-msg-container")
const successMsgContainer = document.getElementById("success-msg-container")

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function(e) {
    e.preventDefault()
    if (validateEmail(email.value)) {
        console.log('valid email')
        console.log("email: ", email.value)
        email.value = ""
        formContainer.style.display = "none"
        successMsgContainer.style.display = "block"
        console.log(successMsgContainer.style.display)
        console.log(successMsgContainer)
    
    }else{
        console.log('not a valid email')
        errorMsgContainer.style.display = "block"

    }


})


closeErrorMsgBtn.addEventListener("click", function(e){
    //e.preventDefault()
    errorMsgContainer.style.display = "none"
})

closeSuccessMsgBtn.addEventListener("click", function(e){
    successMsgContainer.style.display = "none"
    formContainer.style.display = "block"
})