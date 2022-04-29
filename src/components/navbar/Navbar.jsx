import React from "react";
import { Section, Div, Nav, Button } from "../../shared";
import onto3Logo from "../../images/onto3-logo.svg";

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

function Navbar() {
  return (
    <Section className="bg-[#0B121875] border-b border-green">
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

                <div className="">
                    <Button className="bg-[#67EFA480]">Launch App</Button>
                </div>
            </div>
        </Nav>
    </Section>
  )
}

export default Navbar;