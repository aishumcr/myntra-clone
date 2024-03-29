import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddToDo({onNewItem}){
    //useref is used instead of usestate to prevent rendering when there is a change in input.
    const todoNameElement=useRef();
    const duedateElement=useRef();

    const handleAddButtonClicked=(event)=>{
        const todoName=todoNameElement.current.value;
        const duedate=duedateElement.current.value;
        todoNameElement.current.value="";
        duedateElement.current.value="";
        onNewItem(todoName,duedate);
        console.log(`${todoName},${duedate}`);
        //if we dont use stop prevent default what we added is submitted to server 
        //and doesnot appear in screen as of now no server so we used.
        event.preventDefault();
    }

    return <div className="container text-center">
        <form  onSubmit={handleAddButtonClicked} className="row kg-row">
            <div className="col-6">
                <input type="text"
                ref={todoNameElement} placeholder="enter to do"
                />
            </div>
            <div className="col-4">
                <input type="date"
                ref={duedateElement}
               /></div>
            <div className="col-2">
                {/* we imported icons using npm install react-icons --save and added icon for add button */}
                <button type="submit" className="btn btn-success kg-button" ><IoMdAddCircle/></button>
            </div>
        
        </form>
    </div>
}
export default AddToDo;