import React from "react";
import { Section, SubTitle, Title, Button } from "../../shared";

function Home() {
  return (
    <Section className={""}>
      <div className="mx-auto w-11/12 max-w-7xl pt-36 pb-48 ">
        <div className="">
          <div className="w-full mx-auto max-w-[950px] mb-8">
            <Title className="text-center">Discover. Collect. Sell rare collections of NFTs and Artworks</Title>
            <SubTitle className={"w-full text-center mx-auto max-w-[500px]"}>
              ONOT3 is the largest digital marketplace for cryptocurrency collectibles and non fungible tokens
            </SubTitle>
          </div>
          <form className="flex justify-between w-full mx-auto max-w-[500px] items-center bg-[#a5acaf50] px-4 py-2">
            <input 
                className="w-[60%] placeholder:text-gray placeholder:font-oxanium placeholder:text-xs md:text-base text-sm text-oxanium bg-transparent py-2 outline-0 text-gray"
                placeholder="Enter your Email Address"
            />

            <Button className="bg-[#67EFA480] py-8">Stay Updated</Button>
        </form>
        </div>
      </div>
    </Section>
  )
}

export default Home;

