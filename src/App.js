import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Pokemon from './Components/pokemon.js';
import Machines from './Components/Extras/machines';
import { useNavigate } from 'react-router-dom';
class App extends React.Component {
 
  render(){
    return (
      <BrowserRouter>
        <Routes>
        
            <Route exact path='/' element={<Navigate to="/Home"/>}></Route>
            <Route path='/Home' element={<Pokemon/>}></Route>
            <Route path='/Machines' element={<Machines/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
