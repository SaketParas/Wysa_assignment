import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home';
import ViewNote from './Component/ViewNote';
import Edit from './Component/Edit';

function App() {
  return (
    <BrowserRouter>
      <h1 className="heading"><u>Note Management System <span>&#9997;</span></u></h1>
      <Route exact path="/"  render={props => <Home {...props}/>}/>
      <Route  path="/view"  render={props => <ViewNote {...props}/>}/>
      <Route  path="/edit/:id" render={props=> < Edit {...props}/>} />
    </BrowserRouter>
  );
}
export default App;
