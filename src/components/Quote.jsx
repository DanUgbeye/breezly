import { useState } from "react";

const Quote = ({quote, myIndex, currentIndex}) => {
  
  const changeVisibility = () => {
    if((myIndex !== currentIndex) && (myIndex - currentIndex !== 1) && (myIndex - currentIndex !== -1)) {
      return false;
    }
    return true;
  }

  const [visibility] = useState(changeVisibility());

  return (
    <div 
      className={ 
        " bg-green-300 rounded-sm px-12 py-8 min-h-[20rem] max-h-[25rem] transition-all duration-500 self-center grid place-items-center font-semibold font-sans min-w-[20rem] max-w-[20rem] mb-4 shadow-[0px_0px_15px_1px] shadow-gray-500 absolute " +
        (myIndex === currentIndex && " translate-x-0 " ) +
        (myIndex - currentIndex === 1 && " translate-x-[90%] ") +
        (myIndex - currentIndex === -1 && " -translate-x-[90%] ") +
        (visibility && "hidden opacity-0")
      }>
      <i className=" far fa-lightbulb-on  absolute text-3xl -rotate-45 -top-2 -left-1 w-12 h-12 "></i>
      {quote}
    </div>
  );
};

export default Quote;