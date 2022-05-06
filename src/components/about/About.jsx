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
          <Text className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt soluta ratione dolor quisquam numquam ipsam illum consequatur necessitatibus dicta exercitationem nihil voluptatibus, error similique impedit, velit perferendis tempora, beatae accusamus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae recusandae impedit in, quaerat iusto commodi culpa odio facilis deleniti ex soluta. Corrupti laboriosam aut quas vero dolorem natus facilis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae ipsam et aliquam itaque nobis quas odit rem nihil similique nam est exercitationem fugit, magni vel corporis. Molestiae, atque fugit!
          </Text>
        </div>
      </div>
     
      <div className="mt-8 md:mt-16 w-full mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start font-oxanium">
          <div className="order-2 mb-8 md:mb-0 md:order-1 w-full max-w-[300px]">
            <h3 className="text-2xl text-white">About <span className="text-green">Us</span></h3>
            <Text className="text-white mt-3 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem laborum in accusamus sed nihil repellendus illum modi consequatur. Officia, quas sequi. Quis asperiores porro repudiandae alias, dicta vitae totam?</Text>
          </div>

          <figure className="order-1 border border-bunker mb-4 md:mb-0 md:order-2">
            <img src={about} className="w-[100px] md:w-[200px]" alt="" />
          </figure>

          <div className="font-oxanium order-3 md:order-3 w-full max-w-[300px]">
            <h3 className="text-2xl text-white">Why <span className="text-green">Us</span></h3>
            <Text className="text-white mt-3 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem laborum in accusamus sed nihil repellendus illum modi consequatur. Officia, quas sequi. Quis asperiores porro repudiandae alias, dicta vitae totam?</Text>
          </div>
        </div>
       </div>
     </Div>
    </Section>
  )
}

export default About;

