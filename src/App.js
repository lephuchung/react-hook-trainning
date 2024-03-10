import './App.css';
import { useState } from 'react';
import logo from './logo.svg';
import Nav from './Component/Nav/Nav';
import Example from './Component/Example/Example';
import CheckEvent from './Component/CheckEvent/CheckEvent';
import ListTodo from './Component/Todos/ListTodo';
import Covid from './Component/Covid/Covid';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Lê Phúc Hưng hello world</h3>
          <Routes>
            <Route path='/todo' element={<ListTodo />} />
            <Route path='/covid' element={<Covid />} />
            <Route path='/event' element={<CheckEvent />} />
            <Route path='/' element={<Example />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
