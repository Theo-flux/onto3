import React from "react";
import { Button } from "../shared";

function Newsletter({className}) {
  return (
    <div className={`${className} w-full max-w-[280px] md:max-w-[280px] lg:max-w-[340px]`}>
        <div className="font-neue mb-4">
            <h4 className="font-bold text-white mb-1 ">Stay up to date</h4>
            <p className="text-[13px] text-gray">Get early access to our news & releases</p>
        </div>
        
        <form className="flex justify-between items-center bg-[#a5acaf50] px-2 py-2">
            <input 
                className="w-[60%] placeholder:text-gray placeholder:font-oxanium placeholder:text-xs md:text-base text-sm text-oxanium bg-transparent py-2 outline-0 text-gray"
                placeholder="Enter your Email Address"
            />

            <Button className="bg-[#67EFA480]">Stay Updated</Button>
        </form>
    </div>
  )
}

export default Newsletter;
