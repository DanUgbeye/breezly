import React from 'react'
import { useContext, useState } from 'react'
import { QuotesContext } from '../contexts/QuotesContext'
import Quote from './Quote';
import { v1 as uuid } from 'uuid';

const QuoteSlider = () => {

  const { quotes } = useContext(QuotesContext);
  const maxIndex = quotes.length - 1;
  const [currentIndex, setIndex] = useState(0);

  const slideLeft = () => {
    // console.log('left')
    if(currentIndex === 0) {
      setIndex(maxIndex);
    } else {
      setIndex(currentIndex - 1);
    }
  }

  const slideRight = () => {
    // console.log('right')
    if(currentIndex === maxIndex) {
      setIndex(0);
    } else {
      setIndex(currentIndex + 1);
    }
  }

  return (
    <div className=" flex w-full justify-center items-center " >
      <i onClick={slideLeft} className=" fal fa-arrow-left-long text-4xl -mr-8 z-50 p-2 bg-green-500 text-white rounded-full "></i>
      <div className=" relative w-[90%] border-solid border-red-500 border-2 p-4 min-h-[25rem] ">
        { 
          quotes.map((quote, index) => (<Quote myIndex={index} currentIndex={currentIndex} quote={quote} key={uuid()} />)) 
        }

      </div>
      <i onClick={slideRight} className=" fal fa-arrow-right-long text-4xl -ml-8 z-50 p-2 bg-green-500 text-white rounded-full "></i>
    </div>
  );
}

export default QuoteSlider