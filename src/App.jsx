import { useState } from 'react'
import { Footer, Home, Navbar, About, Roadmap, AppComing } from '../src/components';
import "./assets/css/onto3.css";

function App() {

  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Roadmap/>
      <AppComing/>
      <Footer/>
    </div>
  )
}

export default App
