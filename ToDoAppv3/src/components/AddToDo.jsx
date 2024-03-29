import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddToDo({onNewItem}){
    const [todoName,setTodoName]=useState("");
    const [dueDate,setDueDate]=useState("");
    const handleNameChange=(event)=>{
        
       setTodoName(event.target.value);
    }
    const handleDateChange=(event)=>{
        setDueDate(event.target.value);
    }
    const handleAddButtonClicked=()=>{
        onNewItem(todoName,dueDate);
        setDueDate("");
        setTodoName("");
    }

    return <div className="container text-center">
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="enter to do"
                value={todoName} 
                onChange={handleNameChange}/>
            </div>
            <div className="col-4">
                <input type="date"
                value={dueDate}
                onChange={handleDateChange}/></div>
            <div className="col-2">
                {/* we imported icons using npm install react-icons --save and added icon for add button */}
                <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}><IoMdAddCircle/></button>
            </div>
        </div>
    </div>
}
export default AddToDo;