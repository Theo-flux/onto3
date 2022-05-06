import React from "react";
import { Section, Text, Title, Button } from "../../shared";
import phoneMockup from "../../images/logo-mockup.png"
import { useMediaQuery } from "react-responsive";

const Form = ({className}) => {
  return(
    <form className={`flex justify-between w-full mx-auto max-w-[500px] items-center bg-[#a5acaf50] px-2 py-2 ${className}`}>
      <input 
          className="w-[60%] placeholder:text-gray placeholder:font-oxanium placeholder:text-xs md:text-base text-sm text-oxanium bg-transparent py-2 outline-0 text-gray"
          placeholder="Enter your Email Address"
      />

      <Button className="bg-[#67EFA480]">Stay Updated</Button>
    </form>
  )
}

function Home() {
  const isMobile = useMediaQuery({ minWidth: 767 })
  return (
    <Section id="home" className={"bg-black"}>
      <div 
        className="relative py-48 md:py-48" 
        style={{
          backgroundImage: `url(${isMobile && phoneMockup})`,
          backgroundPosition: 'center',
          backgroundSize: '530px 396px',
          backgroundRepeat: 'no-repeat'
         }}
      >
        <div className="flex relative flex-col md:flex-row md:justify-between md:items-start mb-8 mx-auto w-11/12 max-w-5xl">
          <div className="">
            <Title className="">ONTO3<span className="text-green">.</span></Title>
            <Text className={"w-full max-w-[350px]"}>
              ONOT3 is the largest digital marketplace for cryptocurrency collectibles and non fungible tokens
            </Text>

            <div className="flex justify-between items-center w-fit mt-4">
              <Button className="bg-[#67EFA480] w-fit mr-4">Explore Now</Button>
              <Button className="ring-2 ring-gray ring-inset w-fit">Explore</Button>
            </div>
          </div>

          <div className="absolute top-[-90px] md:top-0 right-0 flex justify-between items-center text-white w-fit">
            <p className="rotate-[-90deg] text-[10px] md:text-sm font-oxanium">COMING</p>
            <div className="text-[12px] md:text-base p-2 border border-white font-oxanium font-bold w-fit">
              <p>June</p> 
              <p>2022</p>
            </div>
          </div>
        </div>

        <div className="bg-bunker absolute w-full bottom-0 md:bottom-[-10px] py-4 shadow-lg">
          <Text className="text-center mb-4">JOIN OUR WAITLIST</Text>
          <Form className="mx-auto w-4/5"/>
        </div>
      </div>

    </Section>
  )
}

export default Home;

