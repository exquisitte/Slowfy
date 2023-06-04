import React from 'react'
import Home from '../public/Home.png';
import Search from '../public/Search.png'
import Biblary from '../public/Biblary.png'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Home'>
      <img src={Home} />
      <h1>Головна</h1>
      </div>
      <div className='Biblary'>
      <img src={Biblary} />
      <h1>Бібліотека</h1> 
      </div>
      <div className='Search'>
      <img src={Search} />
      <h1>Пошук</h1>
      </div>
    </div>
  )
}

export default Header
