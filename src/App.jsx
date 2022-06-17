import { useEffect } from 'react'
import { Footer, Home, Navbar, About, Video, AppComing, Faq, Roadmap } from '../src/components';
import "./assets/css/onto3.css";

function App() {

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
