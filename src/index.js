import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from './components/context'
import App from './App';


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
