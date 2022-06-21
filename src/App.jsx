import { useEffect, useContext } from 'react'
import { Footer, Home, Navbar, About, Video, AppComing, Faq, Roadmap, Modal } from '../src/components';
import { AppContext } from './context/appContext'

import "./assets/css/onto3.css";



function App() {

  const { isModalOpen } = useContext(AppContext);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      reveal();
    })
  })

  reveal();

  return (
    <div className="relative">
      {
        isModalOpen && <Modal />
      }
      <Modal/>
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
