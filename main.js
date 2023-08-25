// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));



    // Append to ul
    userList.appendChild(li);

    // Stroing into local Storage
    // localStorage.setItem(nameInput.value,emailInput.value);
    // console.log(localStorage.getItem('vamshi'));

    // storing into local storage inthe form of objects
    let myobj ={
        name : nameInput.value,
        email : emailInput.value
    };
    console.log(myobj);
    var myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem(myobj.email,myobj_serialized);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}