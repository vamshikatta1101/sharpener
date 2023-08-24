
// // GETELEMENTBYID
// // console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textContent = 'vamshi';
// header.style.borderBottom = '3px solid black'

// var task = document.getElementsByClassName('title')
// console.log(task);
// task[0].style.color = 'green';
// task[0].style.fontWeight = 'bold';

// // getElementsByClassName

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor = 'green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

// getElementsByTagName
// editing by Tagname

var list1 = document.getElementsByTagName('li')
console.log(list1);

for(var i=0;i<list1.length;i++){
    list1[i].style.backgroundColor='#f4f4f4';
}

// editing by ClassName

var items = document.getElementsByClassName('list-group-item');
for(var i=0;i<items.length;i++){
    items[i].style.color='red';
}
