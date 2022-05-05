import React from "react";
import { Section, Text, Title, Button, Div } from "../../shared";
import nft from "../../images/nft.png";

function About() {
  return (
    <Section className={""}>
     <Div>
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="w-full md:w-[45%]">
              <Title className="mt-5"> <span className="font-thin">On-Chain Resume</span> <br /> New</Title>
              <Text className='mt-4'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ullam magnam iure ratione? Dolorum molestiae iusto ducimus officiis hic quia non expedita at? Vero quam ratione, explicabo velit modi totam!</p> 
              
                  <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis ratione quibusdam in earum similique quos, voluptatem officia accusantium eveniet sed aliquid atque non repellendus dolorum. Praesentium vitae obcaecati asperiores.</p>
                  <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis ratione quibusdam in earum similique quos, voluptatem officia accusantium eveniet sed aliquid atque non repellendus dolorum. Praesentium vitae obcaecati asperiores.</p>
              </Text>
          </div>
          <div className="w-full md:w-[40%] border border-green mt-8 md:m-0">
              <img src={nft} alt="" className="w-[100%] object-fit"  />
              <div className="flex">
                  <div></div>
                  <div></div>
              </div>
          </div>
        </div>
        <div className="flex mt-4 justify-between space-x-8">
          <div className="border border-gray w-50 ">
            <p className="text-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eveniet, accusamus iure enim debitis illo exercitationem similique quo? Distinctio tenetur facilis dolore expedita cum ut quia quod. Praesentium, atque. Veritatis!</p>
          </div>
          <div className="border border-gray w-50">
            <p className="text-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eveniet, accusamus iure enim debitis illo exercitationem similique quo? Distinctio tenetur facilis dolore expedita cum ut quia quod. Praesentium, atque. Veritatis!</p>
          </div>
          <div className="border border-gray w-50">
            <p className="text-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eveniet, accusamus iure enim debitis illo exercitationem similique quo? Distinctio tenetur facilis dolore expedita cum ut quia quod. Praesentium, atque. Veritatis!</p>
          </div>
        </div>
     </Div>
     <Div>
       <div>
       <Title className="mt-5 text-center"> </Title>
       </div>
     </Div>
    </Section>
  )
}

export default About;

