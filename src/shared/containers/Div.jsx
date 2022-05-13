import React from "react";

const Div = ({children, className, ...restProps}) => {
    return(
        <div {...restProps} className = {`mx-auto w-11/12 max-w-5xl py-16 ${className}`}>
            { children }
        </div>
    )
}

const Nav = ({children, className, ...restProps}) => {
    return(
        <div {...restProps} className = {`mx-auto w-11/12 max-w-4xl py-4 ${className}`}>
            { children }
        </div>
    )
}


export { Div, Nav };