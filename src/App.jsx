import { useState } from 'react'
import { Footer, Home, Navbar, About, AppComing, Faq } from '../src/components';
import "./assets/css/onto3.css";

function App() {

  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <AppComing/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
