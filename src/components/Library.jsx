import React from 'react'
import Folder from '../public/Opened Folder.png'
import Star1 from '../public/Star 1.png'
import Pin from '../public/Pin.png'

const Library = () => {
  return (
  <div className='Library'>
    <div className='Folder'>
      <img src={Folder} />
      <h1>Бібліотека</h1>
    </div>
    <div className='Star_div'>
      <img className="Star1" src={Star1} />
    </div>
    <div className='Like'>
      <h2>Ваші вподобані пісні</h2>
      <img src={Pin} />
      <p>Улюблені</p>
      <li>120 пісень</li>
    </div>
  </div>
  )
}

export default Library
