//jshint esversion:6

// Working with events and event listeners

const button = document.getElementById('button');
const inputTypeText = document.querySelector('input[type="text"]');
const form = document.querySelector('form');

function clickEvent(e) {
    e.preventDefault();
    console.log(e);
    console.log("EVENT TYPE : " + e.type);
    console.log(e.target);
    console.log(e.target.textContent);

    // console log for X-axis and Y-axis
    console.log(e.clientX);
    console.log(e.clientY);

    console.log(e.offsetX);
    console.log(e.offsetY);

    //console log for keyboard events
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);

}

button.addEventListener('click', clickEvent);

//MOUSE EVENTS

button.addEventListener('mouseover', clickEvent); // gets triggered when mouse is over the child also
button.addEventListener('mouseout', clickEvent);

button.addEventListener('mouseup', clickEvent);
button.addEventListener('mousedown', clickEvent);

button.addEventListener('mouseleave', clickEvent);
button.addEventListener('mouseenter', clickEvent);

button.addEventListener('mousemove', clickEvent);


// KEYBOARD AND INPUT EVENTS
inputTypeText.addEventListener('keydown', clickEvent);
inputTypeText.addEventListener('keyup', clickEvent);
inputTypeText.addEventListener('keypress', clickEvent);


inputTypeText.addEventListener('focus', clickEvent);
inputTypeText.addEventListener('blur', clickEvent);


inputTypeText.addEventListener('cut', clickEvent);
inputTypeText.addEventListener('paste', clickEvent);


form.addEventListener('submit', clickEvent);
inputTypeText.addEventListener('change', clickEvent);
inputTypeText.addEventListener('input', clickEvent);