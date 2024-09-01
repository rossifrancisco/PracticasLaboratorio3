import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");

    const inputChange = (event) => {
        const newValue = event.target.value;
        if ( newValue[newValue.length-1] === "o" || newValue[newValue.length-1] === "O" ) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
        }
        setUsername(newValue);
    };

    const buttonClick = () => {
        if ( username.includes("o") || username.includes("O") || username === "") {
            alert("Usuario inválido para registrarse");
        } else {
            alert("¡Usuario registrado correctamente!");
            setUsername("")
        }
    };

    return (
        <div>
            <label>
                Ingrese su nombre de usuario:
                <input onChange={inputChange} value={username} />
            </label> 
            <button onClick={buttonClick}>Registrarse</button>
            <p>{username}</p>
        </div>
    );
};

export default Login;
