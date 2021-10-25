var validMail = (valid) => {
	var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return reg.test(String(valid).toLowerCase());
};

var validPass = (valid) => {
	var reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
	return reg.test(valid);
};

var validPhone = (valid) => {
	var reg = /^01[0-2,5]\d{8}$/gm;
	return reg.test(String(valid).toLowerCase());
};

var form = document.querySelector('form');
var userName = document.querySelector('input[type="text"]');
var userMail = document.querySelector('input[type="email"]');
var userPhone = document.querySelector('input[type="tel"]');
var userPass = document.querySelector('input[type="password"]');
var userMessage = document.querySelector('textarea');

var inputs = [ userName, userMail, userPhone, userPass, userMessage ];

var isFormValid = false;

var resetInput = (element) => {
	element.classList.remove('error');
};

var invalidInput = (element) => {
	element.classList.add('error');
};

var validInputs = () => {
	isFormValid = true;
	inputs.forEach(resetInput);

	if (!userName.value) {
		isFormValid = false;
		invalidInput(userName);
	}

	if (!validMail(userMail.value)) {
		isFormValid = false;
		invalidInput(userMail);
	}

	if (!validPass(userPass.value)) {
		isFormValid = false;
		invalidInput(userPass);
	}

	if (!validPhone(userPhone.value)) {
		isFormValid = false;
		invalidInput(userPhone);
	}

	if (!userMessage.value) {
		isFormValid = false;
		invalidInput(userMessage);
	}
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	validInputs();
});

inputs.forEach((input) => {
	input.addEventListener('input', validInputs);
});
