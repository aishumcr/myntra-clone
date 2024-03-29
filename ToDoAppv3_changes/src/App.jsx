import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import './App.css';
import ToDoitems from "./components/ToDoitems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App(){


  const initialtodoItems=[];
  const [todoItems,setTodoItems]=useState(initialtodoItems);
  //adding new to do
  const handleNewItem=(itemName,itemDueDate)=>{
    //console.log(`new item added ${itemName} ${itemDueDate}`);
    //here currvalue is bedore state of todoitems that are already set.
    setTodoItems((currValue)=>[...currValue,
      {name:itemName,dueDate:itemDueDate}]);
    }
  //delete todo item 
  const handleDeleteItem=(todoItemName)=>{
    //console.log(`item deleted ${todoItemName}`);
    const newTodoItems=todoItems.filter(item=>item.name!==todoItemName);
    setTodoItems(newTodoItems);
  }

  return <center className='todo-container'>
    <AppName/>
    
    <AddToDo onNewItem={handleNewItem}/>
    {/* we are displaying message only when there are  no todo items */}
    {todoItems.length===0 && <WelcomeMessage ></WelcomeMessage>}
    <ToDoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    
  </center>
}
export default App;