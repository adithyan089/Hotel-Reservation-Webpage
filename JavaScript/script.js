const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	clearFormFields(signUpForm); // Clear sign in form fields
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	clearFormFields(signInForm); // Clear sign up form fields
});

// Function to clear form fields
function clearFormFields(form) {
	const inputs = form.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = ''; // Clear input value
	}
}