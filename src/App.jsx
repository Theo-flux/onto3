import { useState } from 'react'
import { Footer, Home, Navbar, About, Video, AppComing, Faq } from '../src/components';
import "./assets/css/onto3.css";

function App() {

  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Video/>
      <AppComing/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
