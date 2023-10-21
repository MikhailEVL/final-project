import React, { useState } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';
import style from "./style.module.css"
import pic from "../../image/123.png"

function TodoList() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className={style.cont}>
      <h1 className={style.title}>Todo List</h1>
      <input type="text" value={newTodo} className={style.inputlog} onChange={handleInputChange} placeholder='Введите ваш TODO' />
      <button onClick={addTodo} className={style.btn}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <img src={pic} onClick={() => deleteTodo(index) }className={style.btnDel}></img>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;