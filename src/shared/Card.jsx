import React from "react";

function Card({className, children}){
    return(
        <div className={`bg-black rounded-2xl px-8 pt-8 pb-0 ${className}`}>
            {children}
        </div>
    )
}


function CardTitle({className, children}) {

  return(
    <h3 className={`text-white mb-4 sm:text-xl lg:text-2xl font-medium ${className}`}>
        {children}

    </h3>
  );
}

function CardText({children, className}) {
    return(
        <p className={`text-aluminium text-xs sm:text-sm ${className}`}>
            {children}
        </p>
    )
}

export {
    Card, 
    CardTitle, 
    CardText
};
