import { useState } from 'react'
import { Footer, Home, Navbar, About, Video, AppComing, Faq, Roadmap } from '../src/components';
import "./assets/css/onto3.css";

function App() {

  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Roadmap/>
      <Video/>
      <AppComing/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
