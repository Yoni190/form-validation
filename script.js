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

function checkIfCountryEmpty(){
    const country = document.querySelector('#country');

    if(country.value === ""){
        country.setCustomValidity("Fill the country field");
        country.reportValidity();
    }
    else {
        country.setCustomValidity('');
    }
}

function checkIfPcodeEmpty(){
    const postal_code = document.querySelector('#pcode');

    if(postal_code.value === ""){
        postal_code.setCustomValidity("Fill the postal code field");
        postal_code.reportValidity();
    }
    else {
        postal_code.setCustomValidity('');
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
        confirm.setCustomValidity('');
    }
}

window.onload = () => {
    document.querySelector('#email').oninput = checkEmail;
    document.querySelector('#pswd').oninput = checkPswd;
    document.querySelector('#confirm').oninput = checkConfirmPswd;
    document.querySelector('#country').oninput = checkIfCountryEmpty;
    document.querySelector('#pcode').oninput = checkIfPcodeEmpty;
}

// form.addEventListener('submit', (e)=>{
//     //Prevent page reload
//     e.preventDefault();
//     checkConfirmPswd();
//     checkPswd();
//     checkIfEmpty();
//     checkEmail();
    
// })

