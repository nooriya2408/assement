import React from 'react'
import './Header.css'
import vegetable from '../Assests/vegetable.avif'
import FruitsF from '../Assests/fruitsF.jpg'
const Header = () => {
  return (
    <div>
    <div className='header'>
        <div className='content'>
        <h1>UOMO</h1>
       </div>
       
    </div>
     <div className='header2'>

<ul className='nav'>
        <li>HOME</li>
        <li>PRODUCTS</li>
        <li>CATEGORIES</li>
        <li>SHOP</li>
        <li>PAGES</li>
      </ul> 

     </div>
     <div className='header3'>
<p >SHOP OUR FRESHEST</p>
<h1>Fresh Hand-Picked Vegetables</h1>
<h1>Everyday</h1>
<p>DISCOVER MORE</p>

<div class="image-container">
   
  </div>
  
     </div>
     
     </div>
  )
}

export default Header