const myForm = document.querySelector('form.login-form');

myForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('input');

    let isValid = true;
   inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            alert('All form fields must be filled in');
    
        }
    });
    if (isValid) {
        const email = myForm.elements.email.value.trim();
        const password = myForm.elements.password.value.trim();
        const obj = {
            email,
            password
        }
        console.log(obj);
        myForm.reset();
    }
};