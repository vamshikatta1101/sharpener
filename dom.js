// query selector
// making second child background color yellow
var nthItem = document.querySelector('.list-group-item:nth-child(2)');
nthItem.style.backgroundColor='#90EE90';


// making 3rc child inivisble
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='None'

// getting multiple items
// changing 2nd item font color to blue
var items = document.querySelectorAll('.list-group-item');
console.log(items);
items[1].style.color='blue';

// changing odd number items background color to green

var odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
