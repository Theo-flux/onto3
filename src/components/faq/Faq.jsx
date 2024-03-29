import React, { useState } from 'react'
import { Section, Div, SubTitle, Tag } from '../../shared';
import {faqs} from "./faqs";


function FaqCard({faq, index, toggleFaq, handler}){
    const {question, answer} = faq;

    return(
        <div>
        <div className={`bg-bunker p-4`}>
            <div onClick={() => {handler(index)}} className="text-white flex justify-between items-center cursor-pointer">
                <h5 className="font-oxanium font-medium text-md md:text-xl">{question}</h5>
                <i className={`font-oxanium text-2xl ${toggleFaq === index ? "ri-subtract-line" : "ri-add-line"}`}></i>
            </div>
        </div>
             {
                toggleFaq === index &&
                <div className={`p-4 pt-0 bg-bunker ${toggleFaq === index ? "max-h-fit" : "max-h-[0] overflow-hidden border border-white"}`}>
                    <p className="text-gray text-sm md:text-base">{ answer }</p>
                </div> 
            }
        </div>

    )
}

function Faq() {
    const [toggleFaq, setToggleFaq] = useState()

    function handleIndex(arg){
        if(toggleFaq === arg){
          return setToggleFaq(null)
        }
        setToggleFaq(arg)
    }

    return (
        <Section id="faq" className={"bg-black"}>
            <Div className="">
                <div className="">
                    <div className="text-center mb-8">
                        <Tag>Questions & Answers</Tag>
                        <SubTitle>Frequently Asked Questions</SubTitle>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 w-full mx-auto max-w-2xl">
                        {
                            faqs.map((faq, index) => {
                                return(
                                    <FaqCard
                                        index={index}
                                        handler={handleIndex}
                                        toggleFaq={toggleFaq}
                                        key={index}
                                        faq={faq}
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

export default Faq;