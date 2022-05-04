import React from "react";
import { Section, Text, Title, Tag, Div } from "../../shared";
import nft from "../../images/nft.png";

function About() {
  return (
    <Section id="about" className={""}>
     <Div>
        <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-[45%]">
                    <Tag>Our story</Tag>
                    <Title className="mb-8">About us</Title>
                    <Text className=''>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ullam magnam iure ratione? Dolorum molestiae iusto ducimus officiis hic quia non expedita at? Vero quam ratione, explicabo velit modi totam!</p> 
                    
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis ratione quibusdam in earum similique quos, voluptatem officia accusantium eveniet sed aliquid atque non repellendus dolorum. Praesentium vitae obcaecati asperiores.</p>
                    </Text>
                </div>
                <div className="w-full md:w-[40%] mt-8 md:m-0">
                    <img src={nft} alt="" className="w-[100%] border border-green object-fit"  />
                    <div className="flex">
                        <div></div>
                        <div></div>
                    </div>
                </div>
        </div>
       
     </Div>
    </Section>
  )
}

export default About;

