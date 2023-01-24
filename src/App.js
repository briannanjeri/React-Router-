import React from 'react';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ItemDetail from './ItemDetail'
import './App.css';
import {  Routes,Switch, Route } from 'react-router-dom';

function App() {
  
    return (
      <div className="App">
        <Nav/>

      <Routes>
        
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/shop/:item_id" element={<ItemDetail/>}/>
      </Routes>
      </div>
     
    );
  
}

export default App;

const Home=()=> (
  <div>
    <h1>home page</h1>
  </div>
)
  
