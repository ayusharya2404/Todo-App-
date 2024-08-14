//it is stored in object form so that more than one value can be stored and display
let todoList = [
    // {
    //     item : '',
    //     dueDate : '',
    //
];
//here this function is called so when page is loaded this  should be empty.
displayItems();

function addtodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
// this statement is used to fetch element from inputElement and store it in todoItems
    let todoItems = inputElement.value;
    let todoDate = dateElement.value;
//it is stored in object form so that more than one value can be stored and display
    todoList.push({item : todoItems , dueDate : todoDate});
//to make default value empty it is used
    inputElement.value = '';
    dateElement.value = '';

    //this function is called so that every new entered element should get stored and display on the page. 
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    //to add elements and show on page
    for(let i = 0; i < todoList.length ; i++){
        let {item , dueDate} = todoList[i];
        newHtml +=`
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="del-button" onclick="todoList.splice(${i},1);displayItems()"> Delete </button>
        `;
    }
    //it is used to change the html of the givem text inside the loop.
    containerElement.innerHTML = newHtml;
}