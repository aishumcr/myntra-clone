import ToDoitem from "./ToDoitem";
const ToDoitems=({todoItems,onDeleteClick})=>{
    return <>
        <div className="items-container">
            {todoItems.map((item)=>(<ToDoitem todoName={item.name} todoDate={item.dueDate} 
            onDeleteClick={onDeleteClick}
            key={item}/>
            ))}
    </div>
    </>
}
export default ToDoitems;