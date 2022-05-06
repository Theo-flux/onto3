import React from "react";
import { Section, Text, Title, Tag, Div } from "../../shared";
import nft from "../../images/nft.png";
import about from "../../images/about-2.png"

function About() {
  return (
    <Section id="about" className={"bg-black"}>
     <Div>
        <div className="flex flex-col md:flex-row justify-between mb-10 mt-4 items-center">
          <div>
            <Title className="inline-block">About</Title> <span className="text-white ml-3 ">ONTO3 <span className="text-green border-b-2">APP</span></span>
          </div>
          <div>
             <span className="text-white text-lg font-thin"><span className="text-5xl font-bold">.</span> June</span>
             <span className="font-bold text-white block ml-5">2022</span>
          </div>

        </div>
        <div className="text-white text-center w-full mx-auto max-w-2xl">
            <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt soluta ratione dolor quisquam numquam ipsam illum consequatur necessitatibus dicta exercitationem nihil voluptatibus, error similique impedit, velit perferendis tempora, beatae accusamus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae recusandae impedit in, quaerat iusto commodi culpa odio facilis deleniti ex soluta. Corrupti laboriosam aut quas vero dolorem natus facilis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae ipsam et aliquam itaque nobis quas odit rem nihil similique nam est exercitationem fugit, magni vel corporis. Molestiae, atque fugit!
            </p>
          </div>
     </Div>
     <Div>
       <div className="flex justify-between">
         <div className="">
           <h3 className="text-2xl text-white">About <span className="text-green">Us</span></h3>
           <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem laborum in accusamus sed nihil repellendus illum modi consequatur. Officia, quas sequi. Quis asperiores porro repudiandae alias, dicta vitae totam?</p>
          </div>
         <div>
           <img src={about} alt="" />
         </div>
         <div className="ml-8">
           <h3 className="text-2xl text-white">Why <span className="text-green">Us</span></h3>
           <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem laborum in accusamus sed nihil repellendus illum modi consequatur. Officia, quas sequi. Quis asperiores porro repudiandae alias, dicta vitae totam?</p>
          </div>
       </div>
     </Div>
    </Section>
  )
}

export default About;

