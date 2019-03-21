import React from 'react';

function Joke(props) {
    return (
        <div>
            <p style={{display: !props.question && 'none'}}>Question: {props.question}</p>
            <p style={{backgroundColor: !props.question && 'gray'}}>Punchline: {props.punchline}</p>
        </div>
    );
    
}

export default Joke;