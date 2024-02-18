
document.getElementById('color').addEventListener('click', tellColor)
document.getElementById('place').addEventListener('click', tellPlace)
document.getElementById('ritual').addEventListener('click', tellRitual)

function tellColor() {
    alert('Blue is my favorite color');
}

function tellPlace() {
    alert('At home with my family');
}

function tellRitual() {
    alert('Checking to make sure all the lights off in my car before I lock it up and walk away');
}

///

function lieOrNo () {
    alert('The answer is true!');
}

document.getElementById('liarSubmission').addEventListener('click', lieOrNo);
