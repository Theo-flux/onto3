import React from 'react'
import { Div, Section, SubTitle, Text, Tag } from '../../shared';
import {mapData} from "./roadmapData";

const Card = ({data}) => {

  return(
    <div className={``}>
      card
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

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-auto w-full max-w-[1100px]">
            <Card />
          </div>
        </div>
      </Div>
    </Section>
  )
}

export default Roadmap;
