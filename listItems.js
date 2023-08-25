var form = document.getElementById("addForm");
var listItems = document.getElementById("items");


// form submit event

form.addEventListener('submit',addItem);

// removeItem event
listItems.addEventListener('click',removeItem);

// filter event
filter.addEventListener('keyup',filterItems);

// Add Item
 function addItem(e){
    e.preventDefault();
    
    // creating list element
    var newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    var content = document.getElementById('item').value
    newLi.appendChild(document.createTextNode(content));


     // remove Button
     var newBtn = document.createElement('button');
     newBtn.className='btn btn-danger btn-sm float-right delete ml-3';
     newBtn.appendChild(document.createTextNode('X'));
     newLi.appendChild(newBtn);

    // Adding Description
    var content1 = document.getElementById('item1').value;
    var newPara = document.createElement('text');
    newPara.appendChild(document.createTextNode(" "+content1));
    newLi.appendChild(newPara);

    // adding edit button
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
    // adding description
    var content1 = 'None...'

    var newPara = document.createElement('text');
    newPara.appendChild(document.createTextNode(content1));
    items[i].appendChild(newPara);


    var editBtn = document.createElement('button');
    editBtn.className='btn  btn-primary btn-sm float-right mr-2'
    editBtn.appendChild(document.createTextNode('Edit'));
    items[i].appendChild(editBtn);
}

// Filter

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    // get list
    var items = listItems.getElementsByTagName('li');
    
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var item0 = item.children[1].textContent;
        if((itemName.toLowerCase().indexOf(text) != -1 ) || (item0.toLowerCase().indexOf(text) != -1)){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
      
    })
}
