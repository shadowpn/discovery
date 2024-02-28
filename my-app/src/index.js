import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text = 'Hello World';
const elem = (
      <div>
        <h2>Текст:{text}</h2>
        <input type="text" />
        <button>Click</button>      
      </div>
);

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hello world!');

// const element = {
//   type: 'h2',
//   props: {
//     className: 'greeting',
//     children: 'Привет мир!'
//   }
// };

ReactDOM.render(
  elem, 
  document.getElementById('root')
);

