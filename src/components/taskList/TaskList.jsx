import React from 'react';

function TaskList({ tasks, toggleComplete, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.length > 0 && (
                <li>(Click sobre la tarea para Marcar o Desmarcar)</li>
            )}
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    <p 
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? 'lightgray' : 'black'
                        }}
                        onClick={() => toggleComplete(task.id)}
                    >
                        {task.text}
                    </p>
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;