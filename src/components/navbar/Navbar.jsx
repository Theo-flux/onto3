import React, {useState} from "react";
import { Section, Div, Nav, Button } from "../../shared";
import onto3Logo from "../../images/onto3-logo.svg";
import "./nav.css";

const navigations = [
    {
        id: "1",
        name: "Home",
        link: "#",
    },

    {
        id: "1",
        name: "About",
        link: "#",
    },

    {
        id: "1",
        name: "Roadmap",
        link: "#",
    },

    {
        id: "1",
        name: "Collections",
        link: "#",
    },

    {
        id: "1",
        name: "Team",
        link: "#",
    },

    {
        id: "1",
        name: "App (coming soon)",
        link: "#",
    }
]

const MobileNav = ({className, handler, isActive}) => {
    return(
        <div className={`${className} md:hidden text-white absolute w-full h-[100vh] top-[68px] ${isActive ? "right-0" : "right-[-450px]"} transition-all duration-300 delay-700 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] bg-bunker px-4 py-4`}>

            <div className="flex flex-col items-center justify-center">
                {
                    navigations.map((item, index) => {
                        return(
                            <a 
                                key={index}
                                onClick={() => handler()} 
                                href={item.link}
                                className="mb-4 py-2 text-center border text-[14px] tracking-[.1em] font-oxanium border-gray w-full"
                            >
                                {item.name}
                            </a>
                        )
                    })
                }
                <Button onClick={() => handler()} className="bg-[#67EFA480] w-full text-center">Launch App</Button>
            </div>
            
        </div>
    )
}

function Navbar() {
    const [toggleClass, setToggleClass] = useState(false);

    function handleClassToggle(){
        setToggleClass(!toggleClass);
    }

    return (
        <Section className="fixed w-full bg-[#0B121875]">
            <Nav className="">
                <div className="flex justify-between items-center">
                    <div className="cursor-pointer flex justify-between items-center w-[100px]">
                        <figure>
                            <img src={onto3Logo} className="w-[35px] h-[35px]" alt="onto3 logo"/>
                        </figure>

                        <p className="text-green font-bold font-neue">ONTO3</p>
                    </div>

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
                        <Button className="bg-[#67EFA480]">Launch App</Button>
                    </div>

                    <div onClick={() => handleClassToggle()} id="navMenu" className={`${toggleClass ? "active" : ""} md:hidden`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </Nav>
        
            <MobileNav isActive={toggleClass} handler={handleClassToggle}/>
            
        </Section>
    )
}

export default Navbar;