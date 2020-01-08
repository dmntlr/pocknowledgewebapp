import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './components/DropDown'
import thmlogo from './assets/thm_logo.png'

function App() {
  return (
    <div className="App">

<div class="dropDowns">
  <h1>Project for "Knowledgebased Methods"</h1>
  <DropDown/>
    </div>
    <div class="infoleft">
    <a href="https://github.com/dmntlr/pocknowledgewebapp">Github</a>
    </div>
    <div class="inforight">
    <img src={thmlogo} width="200px"/>
    </div>
    </div>
  );
}

export default App;
