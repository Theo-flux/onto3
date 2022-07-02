import React from "react";
import { Section, Div } from "../../shared";
import onto3Logo from "../../images/onto3-logo.svg";
import Newsletter from "../Newsletter";

const socials = [
    {
        name:  "ri-twitter-fill",
        link: "https://twitter.com/onto3app"
    },

    {
        name:  "ri-discord-fill",
        link: "https://discord.com/invite/Onto3#6157"
    },

    {
        name:  "ri-instagram-fill",
        link: "https://www.instagram.com/onto3app/"
    }
]

const onto3 = [
    {
        id: "1",
        category: "Quicklinks",
        items: [
            {
                id: "1",
                name: "Home",
                link: "#home"
            },

            {
                id: "2",
                name: "About",
                link: "#about"
            },

            {
                id: "3",
                name: "Roadmap",
                link: "#roadmap"
            },

            {
                id: "6",
                name: "Mobile App",
                link: "#app"
            }
        ]
    },

    // {
    //     id: "2",
    //     category: "Resources",
    //     items: [
    //         {
    //             id: "1",
    //             name: "Help Center",
    //             link: "#"
    //         },

    //         {
    //             id: "2",
    //             name: "NewsLetter",
    //             link: "#"
    //         },

    //         {
    //             id: "3",
    //             name: "Docs",
    //             link: "#"
    //         }
    //     ]
    // },
    
    {
        id: "3",
        category: "ONTO3",
        items: [
            {
                id: "1",
                name: "All NFTs",
                link: "https://opensea.io/collection/onto3app"
            },

        //     {
        //         id: "2",
        //         name: "Photography",
        //         link: "#"
        //     },

        //     {
        //         id: "3",
        //         name: "3D Arts",
        //         link: "#"
        //     }
        ]
    },
]

function Footer() {
  return (
    <Section className={""}>
        <Div>
            <div>
                <div className="mb-8 md:mb-16 flex flex-col md:flex-row justify-between items-start">
                    <figure className="mb-12 md:m-0">
                        <img src={onto3Logo} className="w-[70px] h-[70px]" alt="onto3-logo"/>
                    </figure>

                    {
                        onto3.map((el, index) => {
                            return(
                                <div key={index} className={`font-neue ${index == el.length - 1 ? "mb-0" : "mb-12"} md:m-0 order-2 md:order-1`}>
                                    <h4 className="text-white font-bold mb-4 ">{el.category}</h4>

                                    <div className="flex flex-col">
                                        {
                                            el.items.map((item, index) => {
                                                return(
                                                    <a key={index} href={item.link} className={`text-gray cursor-pointer ${index == el.items.length - 1 ? "mb-0" : "mb-4"}`}>{item.name}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }

                    <Newsletter className="order-1 mb-12 md:m-0 md:order-2"/>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <p className="font-oxanium text-gray font-medium mb-4 md:m-0 text-sm lg:text-base">&copy; ONTO3 NFT 2022. All rights reserved.</p>

                    <div className="flex justify-between items-center w-[100px]">
                        {
                            socials.map((medium, index) => {
                                return(
                                    <a
                                        target='_blank'
                                        key={index}
                                        href={medium.link}
                                    >
                                        <i className={`${medium.name} text-green text-xl`}></i>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Div>
    </Section>
  )
}


export default  Footer;