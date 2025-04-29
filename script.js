const form = document.querySelector('form');


function checkEmail(){
    const email = document.querySelector('#email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if(emailPattern.test(email.value)){
        email.setCustomValidity("");
    }
    else{
        email.setCustomValidity('Enter a valid email');
        email.reportValidity();
    }
}

function checkIfEmpty(){
    const country = document.querySelector('#country');
    const postal_code = document.querySelector('#pcode');

    if(country.value === ""){
        country.setCustomValidity("Fill the country field");
        country.reportValidity();
    }
    else if(postal_code.value === ""){
        postal_code.setCustomValidity("Fill the postal code field");
        postal_code.reportValidity();
    }
}

function checkPswd(){
    const pswd = document.querySelector('#pswd');
    //Must include upper-case, lower-case, numbers, and be greater than 8
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(regex.test(pswd.value)){
        pswd.setCustomValidity("");
    }
    else {
        pswd.setCustomValidity("Password must contain alphanumeric characters");
        pswd.reportValidity();
    }
}

function checkConfirmPswd(){
    const pswd = document.querySelector('#pswd');
    const confirm = document.querySelector('#confirm');
    
    if(pswd.value !== confirm.value){
        confirm.setCustomValidity("Password and Confirm Password must match");
        confirm.reportValidity();
    }
    else {
        confirm.setCustomValidity("");
    }
}

window.onload = () => {
    document.querySelector('#email').oninput = checkEmail;
    document.querySelector('#pswd').oninput = checkPswd;
    document.querySelector('#confirm').oninput = checkConfirmPswd;
}

// form.addEventListener('submit', (e)=>{
//     //Prevent page reload
//     e.preventDefault();
//     checkConfirmPswd();
//     checkPswd();
//     checkIfEmpty();
//     checkEmail();
    
// })

