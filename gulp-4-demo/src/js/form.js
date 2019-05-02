const sendButton = document.querySelector('.button--submit');
const MyForm = document.querySelector('.form__wrapp');


sendButton.addEventListener('click', (e)=>{
	e.preventDefault();
	
	validateForm(MyForm);
});

function validateForm(form){
    let valid =true;

    if(!validateField(form.elements.names)){
        valid = false;
    }

    if(!validateField(form.elements.email)){
        valid = false;
    }

    if(!validateField(form.elements.tel)){
        valid = false;
    }

    if(!validateField(form.elements.comment)){
        valid = false;
    }
}

function validateField(field){
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}