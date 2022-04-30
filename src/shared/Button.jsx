import React from "react";

function Button({className, children, ...restProps}) {
  return (
    <div {...restProps} className={`${className} cursor-pointer font-oxanium py-2 px-2 lg:py-2 lg:px-4 text-white text-sm lg:text-[15px] font-medium hover:opacity-80 transition-all duration-300`}>
        {children}
    </div>
  )
}

export default Button;
