import React, { useContext } from "react";
import { AppContext } from '../../context/appContext'
import { Text, HomeText, Title, Button } from "../../shared";
import phoneMockup from "../../images/logo-mockup.png"
import { useMediaQuery } from "react-responsive";

const Form = ({className}) => {
  return(
    <form className={`flex justify-between w-full mx-auto max-w-[500px] items-center bg-[#a5acaf50] px-2 py-2 border border-gray ${className}`}>
      <input 
          className="w-[50%] placeholder:text-gray placeholder:font-oxanium placeholder:text-xs md:text-base text-sm text-oxanium bg-transparent py-2 outline-0 text-gray"
          placeholder="Enter your Email Address"
      />

      <Button className="bg-[#67EFA480]">Stay Updated</Button>
    </form>
  )
}

function Home() {
  const isMobile = useMediaQuery({ minWidth: 767 })
  const { handleModal } = useContext(AppContext);

  return (
    <section id="home" className={"bg-black"}>
      <div 
        className="relative py-48 md:py-48" 
        style={{
          backgroundImage: `url(${phoneMockup})`,
          boxShadow: 'inset 0 0 0 100vmax #151B2290',
          backgroundPosition: 'center',
          backgroundSize: '530px 396px',
          backgroundRepeat: 'no-repeat'
         }}
      >
        <div className="flex relative flex-col md:flex-row md:justify-between md:items-start mb-8 mx-auto w-11/12 max-w-4xl">
          <div className="">
            <Title className="">ONTO3<span className="text-green">.</span></Title>
            <HomeText className={"w-full max-w-[350px]"}>
            The Social Media Blockchain App that allows users to join and launch exclusive
              Web 3.0 Communities using Non-Fungible Tokens for entry access only.
            </HomeText>

            <div className="flex justify-between items-center w-fit mt-4">
              <Button onClick={() => handleModal()} className="bg-[#67EFA4] w-fit mr-4 text-black font-bold">Launch Now</Button>
              {/* <Button className="ring-2 ring-gray ring-inset w-fit">Explore</Button> */}
            </div> 
          </div>

          <div className="absolute top-[-90px] md:top-0 right-0 flex justify-between items-center text-white w-fit">
            <p className="rotate-[-90deg] text-[10px] md:text-sm font-oxanium">COMING</p>
            <div className="text-[12px] md:text-base p-2 border border-white font-oxanium font-bold w-fit">
              <p>July</p> 
              <p>2022</p>
            </div>
          </div>
        </div>

        <div className="bg-bunker absolute w-full bottom-0 md:bottom-[-10px] py-4 shadow-lg">
          <Text className="text-center mb-4">JOIN OUR WAITLIST</Text>
          <Form className="mx-auto w-11/12"/>
        </div>
      </div>

    </section>
  )
}

export default Home;

