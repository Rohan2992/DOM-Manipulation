//jshint esversion:6

console.dir(document); // To display all the Properties of a dom element

//dom property
console.log(window);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.title);
console.log(document.URL);


// Change title using the js
document.title = "DOM manipulation";
const header = document.getElementById("header-title");

//InnerText property - it displays all the text keeping in mind the style properties
console.log(header.innerText);

//textContent property - it displays all the text regardless of the style
console.log(header.textContent);

//InnerHTMl property - it displays all the HTMl content regardless of the style
console.log(header.innerHTML);


// document.getElementsByClassName

var titles = document.getElementsByClassName('title');

for(let title of titles) {
    console.log(title);
}

//convert from HTML Collection to Array
titles = Array.from(titles);

titles.forEach((title)=>{
    console.log(title);
});


// document.getElementsByTagName

var titles = document.getElementsByTagName('li');

for(let title of titles) {
    console.log(title.textContent);
}


//document.querySelector/ querySelectorAll

// changing the name of the input type="Submit"
const inputTypeSubmit = document.querySelector('input[type="submit"]');
// inputTypeSubmit.value = 'PRESS';


//changing the colour of whole card to black
// const items = document.querySelector('.card');
// items.style.backgroundColor = "#000";
// items.style.color = "#fff";
// console.log(items);

var ul = document.querySelectorAll('li:nth-child(even)');
ul.forEach((listItem) => {
    listItem.style.color = "blue";
    listItem.style.backgroundColor = '#ccc';
});

ul = document.querySelectorAll('li:nth-child(odd)');
ul.forEach((listItem) => {
    listItem.style.color = "red";
    listItem.style.backgroundColor = '#f2f2f2';
});


ul = document.querySelectorAll('li');

ul.forEach((list) => {
    console.log(list.innerText);
});


// Changing the color of the list items
const li = document.querySelectorAll('li');


//changing the colour of all list-items to black
// li.forEach((list) => {
//     list.style.backgroundColor = 'black';
//     list.style.color = '#fff';
// });


