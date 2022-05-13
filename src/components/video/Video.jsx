import React from 'react'
import { Section, Div, SubTitle, Text, Tag } from "../../shared";

const videoUrl = "https://www.dropbox.com/s/l5iib3gdh3dyueq/Final%20Comp%20_3.mp4?raw=1"

function Video() {
  return (
    <Section className="bg-black">
        <Div>
            <div className="flex flex-col md:flex-row md:justify-between items-center w-full mx-auto max-w-4xl">
            <iframe src="https://drive.google.com/file/d/1cfP4uMaFIRpFK4bAIujc7eYhszfGOqIv/preview" frameborder="0" width="100%" height="480px" allow="autoplay;"></iframe>
            </div>
        </Div>
    </Section>
  )
}

export default Video