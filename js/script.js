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
})