// traversing the nodes
// parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode)

var itemList = document.querySelector('#items');

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement);

// childNodes
console.log(itemList.childNodes);

// children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

// firstchild and firstelementchild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='ITEM1';

// lastchild and lastelementchild
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello4';

// nextsibling and nextElementSibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);


// previousSibling and previousElementSibling

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

// createElement
// create div
newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// adding attributes
newDiv.setAttribute('title','hello Div');

// create textNode
var newDivText = document.createTextNode("Hello World");

// add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);

// CREATING LIST ELEMENT

var newLi = document.createElement('li');

// adding class
newLi.className = 'list-group-item'

var newLiText = document.createTextNode("Hello world");
// adding text to li

newLi.appendChild(newLiText);

var box = document.querySelector('.list-group');

var box2 = document.querySelector('.list-group-item');



box.insertBefore(newLi,box2);

console.log(box.textContent);



console.log(newLi);