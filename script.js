const form = document.querySelector('form');


function checkEmail(){
    const email = document.querySelector('#email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if(emailPattern.test(email.value)){
        console.log("Valid");
    }
    else{
        email.setCustomValidity('Enter a valid email');
        email.reportValidity();
    }
}

function checkPswd(){
    const pswd = document.querySelector('#pswd');
    //Must include upper-case, lower-case, numbers, and be greater than 8
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(regex.test(pswd.value)){
        console.log("Valid");
    }
    else {
        pswd.setCustomValidity("Password must contain alphanumeric characters");
        pswd.reportValidity();
    }
}

form.addEventListener('submit', (e)=>{
    //Prevent page reload
    e.preventDefault();
    checkEmail();
    checkPswd();
})

