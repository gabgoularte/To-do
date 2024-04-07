import React, { useState } from "react";

function TodoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        let input = event.target.value;
        setText(input);
    }

    function addItem(event) {
        event.preventDefault();

        if(text){
            //setItems([...items, text]);
            props.onAddItem(text);
            setText("");
        }
    }

    return (
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    );
}

export default TodoForm;