import React from 'react'
import { Div, Section, SubTitle, Text } from '../../shared';
import {mapData} from "./roadmapData";

const Card = ({data}) => {
  const {id, month, items} = data;

  return(
    <div className={`${id == '2' ? "md:border-x-0 xl:border": ""} border border-[#a5acaf80] w-full md:w-[350px] font-oxanium mb-4 md:m-0`}>
      <div className="p-8">
        <div className="animate-pulse flex justify-center items-center w-[35px] h-[35px] bg-gray rotate-45 mb-8">
          <p className="text-white absolute font-bold rotate-[-45deg]">{id}</p>
        </div>
        
        <div className="">
          <h4 className="font-bold text-xl text-white mb-2">{month}</h4>
          <ul className="">
            {
              items.map((el, index) => {
                return(
                  <li
                    key={index}
                    className="mb-1 text-white text-sm last:mb-0"
                  >
                    {el}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

function Roadmap() {
  return (
    <Section id="roadmap">
      <Div>
        <div className="">
          <div className="text-center mb-8">
            <SubTitle className="">Roadmap</SubTitle>
            <Text className="">The path to adoption and improving the utility and features of the protocol for players and guilds</Text>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-auto w-full max-w-[1100px]">
              {
                mapData.map((data, index) => {
                  return (
                    <Card 
                      key={index}
                      data={data}
                    />
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
