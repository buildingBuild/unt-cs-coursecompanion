import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Chatbox } from './components/Chatbox/Chatbox'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import './App.css'

function App() {

  return (
    
    <div className='grid-container'>
      <div className='header-nav'>
<Header></Header>
      </div>
      <div className='chatBox'>
        <Chatbox></Chatbox>
      </div>
       <div className='sidebar'>
        <Sidebar></Sidebar>
       </div>
       <div className='footlower'>
        <Footer></Footer>
       </div>

  </div>
    
  )
}

export default App
