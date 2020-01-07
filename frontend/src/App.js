import React from 'react';
import logo from './logo.svg';
import './App.css';
import Query from './components/Query'
import DropDown from './components/DropDown'

function App() {
  return (
    <div className="App">
      <div class="manualQuery">
<Query></Query>
</div>
<div class="dropDowns">
  <DropDown></DropDown>
    </div>
    </div>
  );
}

export default App;
