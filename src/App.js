import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemon from './Components/pokemon.js';
import Machines from './Components/Extras/machines';
class App extends React.Component {
 
  render(){
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/Home' element={<Pokemon/>}></Route>
            <Route path='/Machines' element={<Machines/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
