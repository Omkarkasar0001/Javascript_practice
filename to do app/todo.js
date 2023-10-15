let todoList=[
    {
        item:'Buy Milk',
        dueDate:'19/10/23'
    }
    {
        item:'T-Shirt Print',
        dueDate:'20/10/23'
    }
]
displayItems();

function addTodo()
{
 let inputElement = document.querySelector('#todo-input');   //Get Input button value
 let todoItem = inputElement.value;                         //Store input Value in todoItem  
  todoList.push(todoItem);                                  //Add items in todoItems(push)
  inputElement.value='';                                    //Make input button again emppty for next input text

}

function