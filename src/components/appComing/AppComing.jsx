import React from "react";
import { Section, Div, SubTitle, Text, Tag } from "../../shared";
import mockup from "../../images/mockup.png";

function AppComing() {
  return (
    <Section id="app">
        <Div>
            <div className="flex flex-col md:flex-row md:justify-between items-center w-full mx-auto max-w-4xl">
                <div className="w-full mb-8 text-center md:w-[50%] md:text-left">
                    <Tag>Coming soon!</Tag>
                    <SubTitle>ONTO3 mobile app coming soon</SubTitle>
                    <Text>
                        Discover, collect and mint exclusive NFT Communities on our mobile app.
                    </Text>
                </div>

                <figure className="w-full w-[200px] md:w-[250px]">
                    <img src={mockup} className="w-[100%]" alt="mockup"/>
                </figure>
            </div>
        </Div>
    </Section>
  )
}

export default AppComing;