// console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Submitted Succesfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
///
function giveComp() {
	alert('Looking good, Ducky');
}

document.getElementById('rubber-ducky').addEventListener('mouseover', giveComp);