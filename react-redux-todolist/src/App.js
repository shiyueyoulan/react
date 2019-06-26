import React from 'react';
import AddTo from './todo/AddTo'
import Fileter from './todo/Filter'
import ToDoList from './todo/ToDoList'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <AddTo/>
      <ToDoList/>
      <Fileter/>
    </div>
  );
}

export default App;
