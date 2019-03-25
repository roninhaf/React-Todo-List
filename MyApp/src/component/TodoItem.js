import React from "react";


function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.element.completed}/>
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem;