import React from "react";


function TodoItem(props) {
    const doneStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "#cdcdcd"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onClick={() => {props.handleChange(props.item.id)}}/>
            <p style={props.item.completed ? doneStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;