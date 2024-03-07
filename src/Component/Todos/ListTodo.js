import { useState } from 'react';
import './ListTodo.scss';
import List from './List';

const ListTodo = () => {
    const [todos, setTodos] = useState([
        { id: 'todo1', title: 'playing game' },
        { id: 'todo2', title: 'watching video' }
    ]);
    const [todoAdd, setTodoAdd] = useState('');

    const handleOnChangeAddTodo = (event) => {
        console.log("check todoAdd: ", todoAdd);
        setTodoAdd(event.target.value)
    }

    const handleOnClickAdd = (event) => {
        if (!todoAdd) {
            alert('Missing params!');
            return;
        }
        let todo = {
            id: 2,
            title: todoAdd
        }
        setTodos([...todos, todo])

        setTodoAdd('')
    }

    return (
        <div className='list-container'>
            <div className='add-part'>
                <input type='text' value={todoAdd} onChange={(event) => handleOnChangeAddTodo(event)} /> &nbsp;
                <button type='button' onClick={(event) => handleOnClickAdd(event)} >Add</button>
            </div>
            <hr></hr>
            <List todos={todos} />
        </div>
    )
}

export default ListTodo;