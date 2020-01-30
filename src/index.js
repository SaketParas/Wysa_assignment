import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import AllReducers from './Redux/AllReducer';



const store = createStore(AllReducers)
console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));