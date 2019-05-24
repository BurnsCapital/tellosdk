import React from 'react';
import './App.css';

import {Cmd, AnyInput } from './components';

function App() {
  return (
    <div className="App">
    <Cmd command="takeoff"/>    
    <Cmd command="land"/>
    <AnyInput />
    </div>
  );
}

export default App;
