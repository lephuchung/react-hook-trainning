import './App.css';
import { useState } from 'react';
import logo from './logo.svg';
import Nav from './Component/Nav/Nav';
import Example from './Component/Example/Example';
import CheckEvent from './Component/CheckEvent/CheckEvent';
import ListTodo from './Component/Todos/ListTodo';
import Covid from './Component/Covid/Covid';
import Blog from './Component/Blog/Blog';
import DetailBlog from './Component/Blog/DetailBlog';
import AddNewBlog from './Component/Blog/AddNewBlog';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';

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
            <Route path='/blog/:id' element={<DetailBlog />} />
            <Route path='/blog/add-new-blog' element={<AddNewBlog />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/' element={<Example />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
