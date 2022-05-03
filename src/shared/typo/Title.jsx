import React, { Children } from "react";


function Title({className, children}) {
  return (
    <h2
      className={`text-white font-neue font-bold text-2xl mb-4 md:text-4xl lg:text-6xl md:mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

function SubTitle({className, children}) {
  return (
    <h3
      className={`text-white font-neue font-bold text-2xl mb-2 md:text-3xl lg:text-5xl md:mb-4 ${className}`}
    >
      {children}
    </h3>
  );
}

function Text({className, children}) {
  return (
    <h2
      className={`text-gray font-neue text-xs md:text-base  ${className}`}
    >
      {children}
    </h2>
  );
}

export {
  Title,
  SubTitle,
  Text
};
