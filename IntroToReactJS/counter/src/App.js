import React from 'react';
import './App.css';
import rerender from './index';

let count = 0;

const Increment = () => {
  count = count + 1;
  console.log(count);
  rerender(Counter(), document.getElementById('root'));
};

const Counter = () => {
  return (
    <div className="App">
      <header className="App-header">
        <button className="btn btn-success" onClick={Increment}>
          {count}
        </button>
      </header>
    </div>
  );
}

export default Counter;
