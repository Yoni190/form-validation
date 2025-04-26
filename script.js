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

form.addEventListener('submit', (e)=>{
    //Prevent page reload
    e.preventDefault();
    checkEmail();
})

