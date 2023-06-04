import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div>
        <Header />
        <Player />
        <Sidebar />
      </div>
    </>
  )
}

export default App
