import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import './App.css';
import image from '../src/amazoncom.jpeg';
import location from './locations.jpeg';
import alls from './alls.jpg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import rasa from './rasa.jpeg';
import Coffee from './sugar.jpeg';
import coffeelove from './coffeelove.jpg';
function App() {
  return (
<div >
<header className='Box'><img className='box2' src={image}/>
<h3>
  <LocationOnOutlinedIcon/>  update location  <input type='search'/><select><option>english</option>
  <option selected>tamil</option></select>  
    Hello, Sign in
    <select><option> Account & lists </option></select>
    Returns 
    & Orders <ShoppingCartOutlinedIcon /> Cart
</h3></header>
<h4>
 <img src = {alls}/>
 <nav>
  <ul>
    <li><a href="#all">All</a></li>
    <li><a href="#fresh">Fresh</a></li>
    <li><a href="#minitv">Amazon miniTV</a></li>
    <li><a href="#sell">Sell</a></li>
    <li><a href="#bestseller">Best Sellers</a></li>
    <li><a href="#todaysdeal">Today's Deal</a></li>
    <li><a>Prime</a></li>
    <li><a href="#customerservice">Customer Service</a></li>
    <li><a href="#electronics">Electronics</a></li>
    <li><a href="#fashion">Fashion</a></li>
    <li><a href="#home&kitchen">Home & Kitchen</a></li>
    <li><a href="#newreleases">New Releases</a></li>
    <li><a href="#bestchoice">Best Choice</a></li>


  </ul>
</nav>
</h4>
<main>
  <h4>
    
    </h4>
</main>

<body>
<div class='container'>
<img src = {rasa}/>
<img src={Coffee}/>
<img src={coffeelove}/>
</div>
</body>
</div>

  );
}

export default App;
