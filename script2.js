//jshint esversion:6

const items = document.getElementById('items');

// ParentElement
console.log(items.parentElement.parentElement.parentElement.parentElement.parentElement);

//ParentNode
console.log(items.parentNode.parentNode.parentNode.parentNode.parentNode);


// childNodes - also selects the empty spaces

console.log(items.childNodes);

//children - only selects the Elements
console.log(items.children);


// firstChild - selects the first child including text
console.log(items.firstChild);

// firstElementChild - selects the first element child
console.log(items.firstElementChild.textContent);
items.firstElementChild.textContent = "Hello 1";
items.firstElementChild.style.color = "#fff";
items.firstElementChild.style.backgroundColor = "rebeccapurple";



// lastChild - selects the last child including text
console.log(items.lastChild);

// last ElementChild - selects the last  element child
console.log(items.lastElementChild.textContent);
items.lastElementChild.textContent = "Hello 5";
items.lastElementChild.style.color = "#fff";
items.lastElementChild.style.backgroundColor = "darkblue";

items.children[2].style.color = "#fff";
items.children[2].style.backgroundColor = "red";



//nextSibling
console.log(items.nextSibling);

//nextElementSibling
console.log(items.nextElementSibling);

//previousSibling
console.log(items.previousSibling);

//previousElementSibling
console.log(items.previousElementSibling);
items.previousElementSibling.textContent = "dekh badal diya na tujhe !!!";



// Creating new element using dom
// first way

var newDiv = document.createElement("div");
newDiv.innerText = "Hello World!";

var header = document.getElementsByClassName("container")[0];
var h1 = header.firstElementChild;

header.insertBefore(newDiv, h1);

// newDiv.classList.add('Hello');
newDiv.className = "Hello";
newDiv.id = "naya-div";
newDiv.setAttribute('value', 'Hello World!');
console.log(newDiv);


// Second way

newDiv = document.createElement("div");
newDiv.className = 'hello';
newDiv.id = 'naya-div';

newDivText = document.createTextNode('Hello World!');
newDiv.appendChild(newDivText);

console.log(newDiv);

header = document.getElementsByClassName('container')[0];
h1 = header.firstElementChild;
header.insertBefore(newDiv, h1);
console.log(h1);    