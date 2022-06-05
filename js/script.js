(function (){
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let telInput = document.querySelector('#telephon');

    // show error message
    function showErrorMessage (input, message){
        let container = input.parentElement;

        // remove existing error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        // add error if the message is not empty
        let message = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error); 
    }

    // validating email input
    function validateEmail () {
        let value = emailInput.value;
        let hasAtSign = value.indexOf('@');
        let hasDot = value.indexOf('.');

        if (!value) {
            showErrorMessage(input, 'Email is a required field.');
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(input, '"@" is missing');
            return false;
        }

        if (value.indexOf('.') === -1) {
            showErrorMessage(input, '"." is missing');
            return false;
        }

        showErrorMessage(input, null);
        return true;
    }

    // validate telephon number
    function validateTelephone (){
        let value = telInput.value;
        return value.lenght === 12;

        if (!value) {
            showErrorMessage(input, 'telephone is a required field.')
            return false;
        }

        if (value.lenght !== 12) {
            showErrorMessage(input, 'telephone number is invalid');
            return false;
        }
    }
    showErrorMessage(input, null) {
        return true;
    }

    //validate form
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidTel = validateTelephone();
        return isValidEmail && isValidTel;
    } 

    //add event listener to form
    form.addEventListener('submit', e)
})