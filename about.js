console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Submitted Succesfully");
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);