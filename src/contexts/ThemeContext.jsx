import { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {


  return (
    <ThemeContext.Provider value={{ }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;