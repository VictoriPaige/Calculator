import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Calculator from './Components/Calculator'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="container">

  <h1>Add with React!</h1>

  <form className="add">

    <input type="text" name="value1" />

    <span>+</span>

    <input type="text" name="value2" />

    <span>=</span>

    <h3>Addition results go here!</h3>

  </form>

</div>
    </div>
  );
} 

export default App;
