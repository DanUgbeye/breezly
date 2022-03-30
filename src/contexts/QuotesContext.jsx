import { useState, createContext } from 'react';

export const QuotesContext = createContext();

const QuotesContextProvider = (props) => {

  const [quotes, setQuotes] = useState([
    (' Quote 1: This is the very wonderful but funny quote 1'),

    (' Quote 2: This is the very wonderful but funny quote 2'),

    (' Quote 3: This is the very wonderful but funny quote 3')
  ]);

  const addQuote = (newQuote) => {
    setQuotes([...quotes, newQuote]);
  }

  return (
    <QuotesContext.Provider value={{ quotes: quotes, addQuote }}>
      { props.children }
    </QuotesContext.Provider>
  );
}

export default QuotesContextProvider