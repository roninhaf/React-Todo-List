import React from "react";
import Joke from "./Joke";

function App() {
    return (
        <div className="todo-list">
            <Joke question= 'question1' punchline= 'punchline1' />
            <Joke question= 'question2' punchline= 'punchline2' />
            <Joke punchline= 'punchline3' />
            <Joke question= 'question4' punchline= 'punchline4' />
            <Joke question= 'question5' punchline= 'punchline5' />
        </div>
    )
}

export default App