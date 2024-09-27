import { useState } from 'react';

function TaskInput({ addTask }) {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim()) {
            addTask(input);
        }
        setInput("");
    };

    return (
        <div>
            <label>
                <h2>Ingrese una nueva tarea</h2>
                <input 
                    type="text"
                    value={input}
                    placeholder="Nueva tarea"
                    onChange={(event) => setInput(event.target.value)}
                /> 
            </label> 
            <button onClick={handleSubmit}>Agregar</button>
        </div>
    );
}

export default TaskInput;
