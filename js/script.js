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
})