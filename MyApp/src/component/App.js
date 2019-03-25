import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./TodosData";

const data = todosData.map(element => <TodoItem key={element.id} text={element.text} element={element} />);

function App() {
    return (
        <div className="todo-list">
            {data}
        </div>
    )
}

export default App