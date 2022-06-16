import React from 'react'
import { Div, Section, SubTitle, Text, Tag } from '../../shared';
import {mapData} from "./roadmapData";

const Card = ({item}) => {

  return(
    <div className={`relative w-full mx-auto  max-w-[200px] hover:scale-110 transition-all duration-500 ease-in-out`}>
      <div className={``}>
        <div className={`absolute grid grid-cols-1 z-30 top-[20px] left-[-25px] bg-green w-full pt-12 px-4 rounded-md`}>
          <div className={``}></div>
          <div className={`place-self-end flex flex-col justify-center items-center`}>
            <p className={`tracking-[.1rem] font-bebas font-bold`}>STEP</p>
            <h1 className={`text-5xl font-bebas font-bold`}>{item.id}</h1>
          </div> 
        </div>
        <div className={`max-h-fit bg-gray pt-40 pb-4 px-4 rounded-md`}>
            <h1 className={`text-lg text-black font-bold`}>{item.step}</h1>
            <div className={`mt-2 text-sm`}>
              {
                item.items.map((el, index) => {
                  return(
                    <p className={`mb-2`}>{el}</p>
                  )
                })
              }
            </div>
        </div>
      </div>
      <div className={`rounded absolute top-[100px] left-[-15px] bg-green h-[100px] w-[11px]`}>

      </div>
      <div className={`rounded absolute top-[100px] left-[-20px] bg-darkgreen skew-x-6 transform-gpu h-[100px] w-[10px]`}>

      </div>
    </div>
  )
}

function Roadmap() {
  return (
    <Section id="roadmap" className={"bg-bunker"}>
      <Div>
        <div className="">
          <div className="text-center mb-8">
            <Tag>Our Goals</Tag>
            <SubTitle className="">Roadmap</SubTitle>
            <Text className="w-[100%] mx-auto max-w-[500px]">The path to adoption and improving the utility and features of the protocol for players and guilds</Text>
          </div>

          <div className="grid place-content-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
              mapData.map((item, index) => {
                return(
                  <Card key={index} item={item}/>
                )
              })
            }
          </div>
        </div>
      </Div>
    </Section>
  )
}

export default Roadmap;
