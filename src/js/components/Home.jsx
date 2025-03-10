import React, { useState } from "react";

// Create your first component
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="container">
            <h1>TO DO LIST</h1>
            <div className="input-container">
                <ul>
                    <li>
                        <input 
                            type="text"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setTodos(todos.concat(inputValue));
                                    setInputValue("");
                                }
                            }}
                            placeholder="Tarea por agregar"
                        />
                    </li>
                    {todos.map((t, index) => (
                        <li key={index}>
                            {t} <i className="fa-solid fa-x" onClick={()=> setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
                        </li>
                    ))}
                </ul>
                <div className="cuenta-tareas">{todos.length} tareas</div>
            </div>
        </div>
    );
};

export default Home;