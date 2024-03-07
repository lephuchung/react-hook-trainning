import { useState } from 'react';
import './ListTodo.scss';
import List from './List';

const ListTodo = () => {
    const [todos, setTodos] = useState([
        { id: 'todo1', title: 'playing game', type: 'Noris' },
        { id: 'todo2', title: 'watching video', type: 'Nora' }
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
            title: todoAdd,
            type: 'Noris'
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
            <List todos={todos} title={"All"} />
            <List todos={todos.filter(item => item.type === 'Noris')} title={'Noris'} />
        </div>
    )
}

export default ListTodo;