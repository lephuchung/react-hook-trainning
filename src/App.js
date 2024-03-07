import './App.css';
import { useState } from 'react';
import logo from './logo.svg';
import Nav from './Component/Nav/Nav';
import Example from './Component/Example/Example';
import CheckEvent from './Component/CheckEvent/CheckEvent';
import ListTodo from './Component/Todos/ListTodo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Lê Phúc Hưng hello world</h3>
        {/* <Example /> */}
        {/* <CheckEvent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
