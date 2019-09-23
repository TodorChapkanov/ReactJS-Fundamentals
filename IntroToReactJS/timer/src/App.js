import React from 'react';
import './App.css';
import rerender from './index';

setInterval(() => {
  rerender(Timer(), document.getElementById('root'));
}, 1000);

const Timer = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h4>{new Date(Date.now()).toLocaleTimeString()}</h4>
      </header>
    </div>
  );
}

export default Timer;
