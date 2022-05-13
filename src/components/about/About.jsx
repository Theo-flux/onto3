import React from "react";
import { Section, Text, Title, Tag, Div } from "../../shared";
import nft from "../../images/nft.png";
import about from "../../images/about-2.png";

function About() {
  return (
    <Section id="about" className={"bg-black"}>
     <Div>
       <div className="w-full mx-auto max-w-4xl">
        <div className="flex justify-between mb-4 items-start font-oxanium">
          <div className="flex flex-col">
            <Title>About</Title> 
            <span className="text-white">ONTO3 <span className="text-green border-b-2">APP</span></span>
          </div>
          <div className="font-oxanium flex flex-col justify-center items-center">
             <span className="text-white text-lg font-thin"><span className="text-5xl font-bold">.</span> June</span>
             <span className="font-bold text-white block">2022</span>
          </div>
        </div>
        <div className="text-white md:text-center w-full mx-auto max-w-2xl font-oxanium text-gray">
          <Text className="">ONTO3 is a Social Media Blockchain App that allows users to join and launch exclusive
          Communities using Non-Fungible Tokens. Support your most loyal projects, brands,
          businesses, influencers and creatives by investing in an NFT token to own access into
          their interactive Web 3.0 Social Account. Owners acquire entry into an exclusive Live
          Feed Profile where they can view, value, and receive disclosed announcements and
          opportunities directly from the creator or creatives behind the profile. Community NFT
          ownership additionally permits access to communicate in the community Panel, and
          provides its owners with a scannable QR Barcode that gives real world utility and access
          to even more. Value the benefits of ownership with the ability to engage and connect,
          while also organizing your community on one single App. To onboard, simply connect
          your wallet and collection, or mint your first NFT on ONTO3.
          </Text>
        </div>
      </div>
     
      <div className="mt-8 md:mt-16 w-full mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-start font-oxanium">
          <div className="order-2 mb-8 md:mb-0 md:order-1 w-full max-w-[300px]">
            <h3 className="text-2xl text-white">About <span className="text-green">Us</span></h3>
            <Text className="text-white mt-3 text-gray lg:text-justify">
              We are a team of creatives, innovators, and Web 3.0 enthusiasts who believe in the rights
            of ownership. Using Blockchain analytics such as market intelligence, trend analysis and
            an investigation among emerging spaces, our team at ONTO3 has successfully developed
            an Application that allows individuals to connect and socialize using blockchain
            technology and Non-Fungible tokens as the method of governance.

            </Text>
          </div>

          <figure className="order-1 border border-bunker mb-4 md:mb-0 md:order-2">
            <img src={about} className="w-[100px] lg:w-[200px]" alt="" />
          </figure>

          <div className="font-oxanium order-3 md:order-3 w-full max-w-[300px]">
            <h3 className="text-2xl text-white">Why <span className="text-green">Us</span></h3>
            <Text className="text-white mt-3 text-gray  lg:text-justify">
            Our App transforms your token into a collectible by giving it more value and benefits
            upon purchase. We provide the tools needed to view, engage, and organize your
            community all on one single App. ONTO3 allows both the seller and the owner to do
            more with Non-Fungible tokens and delivers overall growth in return for both parties.
            When minting an NFT Onto3, you are in control of the price and can increase it over
            time, giving the owners a chance to sell, collect, and profit from their purchase
            </Text>
          </div>
        </div>
       </div>
     </Div>
    </Section>
  )
}

export default About;

