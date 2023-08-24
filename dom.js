// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title='hello';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='vamshi';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
// headerTitle.textContent = 'vamshi';
header.style.borderBottom = '3px solid black'

var task = document.getElementsByClassName('title')
console.log(task);
task[0].style.color = 'green';
task[0].style.fontWeight = 'bold';

// getElementsByClassName

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}