import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./TodosData";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState(
            prevState => {
                const updatedTodo = prevState.todos.map(element => {
                    if(element.id === id) {
                        element.completed = !element.completed;
                    }
                    return element;
                })
                return {todos: updatedTodo};
            }
        )
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} handleChange={this.handleClick} item={item}/>);
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )

    }
}

export default App