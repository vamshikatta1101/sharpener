var form = document.getElementById("addForm");
var listItems = document.getElementById("items");


// form submit event

form.addEventListener('submit',addItem);
listItems.addEventListener('click',removeItem);


// Add Item
 function addItem(e){
    e.preventDefault();
    
    // creating list element
    var newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    var content = document.getElementById('item').value
    newLi.appendChild(document.createTextNode(content));
    var newBtn = document.createElement('button');
    newBtn.className='btn btn-danger btn-sm float-right delete ml-3';
    newBtn.appendChild(document.createTextNode('X'));
    newLi.appendChild(newBtn);

    //  try
    var edit = document.createElement("button");
    edit.className = 'btn  btn-primary btn-sm float-right ml-3 ';
    edit.appendChild(document.createTextNode("Edit"));
    
    newLi.appendChild(edit);
    
    listItems.appendChild(newLi);
 }

//  remove Item 
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure, You want to delete")){
            var li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
    
}



// Adding edit button
var items = document.getElementsByClassName('list-group-item');
for(var i=0;i<items.length;i++){   
    var editBtn = document.createElement('button');
    editBtn.className='btn  btn-primary btn-sm float-right mr-2'
    editBtn.appendChild(document.createTextNode('Edit'));
    items[i].appendChild(editBtn);
}
