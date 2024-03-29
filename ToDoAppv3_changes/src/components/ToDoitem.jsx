import { MdDelete } from "react-icons/md";

function ToDoitem({todoName,todoDate,onDeleteClick}){
    
    return <div className="container text-container">
        <div className="row kg-row">
        <div key={todoName}className="col-6">
            {todoName}
        </div>
        <div key={todoDate} className="col-4">{todoDate}</div>
        <div className="col-2">
        <button type="button" className="btn btn-danger kg-button" 
        // we added delete icon
        onClick={()=>onDeleteClick(todoName)}><MdDelete/></button>
        </div>
        </div>
    </div>
}
export default ToDoitem;