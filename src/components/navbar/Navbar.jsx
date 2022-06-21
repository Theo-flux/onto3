import React, { useState, useContext } from "react";
import { Nav, Button } from "../../shared";
import { AppContext } from '../../context/appContext'
import onto3Logo from "../../images/onto3-logo.svg";
import "./nav.css";

const navigations = [
    {
        id: "1",
        name: "Home",
        link: "#home",
    },

    {
        id: "2",
        name: "About",
        link: "#about",
    },

    {
        id: "3",
        name: "Roadmap",
        link: "#roadmap",
    },

    {
        id: "4",
        name: "App (coming soon)",
        link: "#app",
    },

    {
        id: "5",
        name: "FAQs",
        link: "#faq",
    }
]

const MobileNav = ({className, handler, handleModal, isActive}) => {
    return(
        <div className={`${className} md:hidden text-white absolute z-40 w-full h-[100vh] top-[68px] ${isActive ? "right-0" : "right-[-760px]"} transition-all duration-300 delay-700 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] bg-bunker px-4 py-4`}>

            <div className="flex flex-col items-center justify-center">
                {
                    navigations.map((item, index) => {
                        return(
                            <a 
                                key={index}
                                onClick={() => handler()} 
                                href={item.link}
                                className="mb-4 py-4 text-center border text-[14px] tracking-[.1em] font-oxanium border-gray w-full"
                            >
                                {item.name}
                            </a>
                        )
                    })
                }
                <Button onClick={() => {
                    handler();
                    handleModal();
                }} className="bg-[#67EFA480] w-full text-center py-4">Launch App</Button>
            </div>
            
        </div>
    )
}

function Navbar() {
    const [toggleClass, setToggleClass] = useState(false);
    const { isModalOpen, handleModal } = useContext(AppContext);

    function handleClassToggle(){
        setToggleClass(!toggleClass);
    }

    return (
        <section className="fixed backdrop-filter backdrop-blur-lg bg-opacity-30 z-40 w-full bg-[#0B1218]">
            <Nav className="">
                <div className="flex justify-between items-center">
                    <a href="#home" className="cursor-pointer flex justify-between items-center w-[100px]">
                        <figure>
                            <img src={onto3Logo} className="w-[35px] h-[35px]" alt="onto3 logo"/>
                        </figure>

                        <p className="text-green font-bold font-neue">ONTO3</p>
                    </a>

                    <div className="hidden md:flex w-[55%] xl:w-[45%] justify-between items-center">
                        {
                            navigations.map((item, index) => {
                                return(
                                    <a 
                                        className="cursor-pointer font-regular font-oxanium text-white text-[12px] lg:text-[15px]"
                                        href={item.link} 
                                        key={index}
                                    >
                                        {item.name}
                                    </a>
                                )
                            })
                        }
                    </div>

                    <div className="hidden md:block">
                        <Button onClick={() => handleModal()} className="bg-[#67EFA480]">Launch App</Button>
                    </div>

                    <div onClick={() => handleClassToggle()} id="navMenu" className={`${toggleClass ? "active" : ""} md:hidden`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </Nav>
        
            <MobileNav isActive={toggleClass} handler={handleClassToggle} handleModal={handleModal}/>
            
        </section>
    )
}

export default Navbar;