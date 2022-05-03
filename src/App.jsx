import { useState } from 'react'
import { Footer, Home, Navbar, About } from '../src/components';
import "./assets/css/onto3.css";

function App() {

  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
