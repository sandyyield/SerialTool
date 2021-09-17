import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const handlerClick = () =>{
    window.fun();
  }
  
  return (
    <div>
      <h1 onClick={handlerClick}>react click</h1>
    </div>
  );
}

export default App;

