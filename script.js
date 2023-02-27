
function addTask(value){
    event.preventDefault();
// get input task from field 
const inputField = document.getElementById('inputField');
const getInputFieldValue = inputField.value;
// get list class 
const taskList = document.querySelector('.task-list');
if (getInputFieldValue !== ''){
    const taskItem = document.createElement('li');
    // taskItem.classList.add("list-group-item list-group-item-action list-group-item-success");
    const classes = ["list-group-item", "list-group-item-action", "list-group-item-success" , "m-3"];
    taskItem.classList.add(...classes);
    taskItem.textContent = getInputFieldValue;
    taskList.appendChild(taskItem);
    console.log(getInputFieldValue);
    document.getElementById('inputField').value = '';
}
}
const form = document.querySelector("form");
form.addEventListener('submit',addTask);