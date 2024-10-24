import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function todoApp() {
    // let [todos, setTodos] = useState([{ task: "sample", id: uuidv4(), isDone: false }]);
    let[todos,setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");


    let addTask = (prevTodos) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTask = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }
    let markAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo, isDone: true,
                };
            })
        );
    };
    let markOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo, isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            <h1>────୨DailyDashৎ────</h1>
            <br />
            <input placeholder="add task" value={newTodo} onChange={updateTask}></input>
            &nbsp;
            <button onClick={addTask}>Add𖥔˚</button>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Deleteˎˊ˗</button>
                        <button onClick={() => markOne(todo.id)}>Doneᡣ𐭩</button>
                    </li>
                })}
            </ul>
            <br></br>
            <button onClick={markAll}>۫ ꣑All Doneৎ</button>
        </div>
    )
}

export default todoApp;
