
import {  useState, createContext } from 'react'

export const NavContext = createContext();



const NavContextProvider = (props) => {

  const [isNavExpanded, setNavExpanded] = useState(false);

  const setNavState = () => {
    setNavExpanded(!isNavExpanded);
  }

  return (
    <NavContext.Provider value={{ isNavExpanded: isNavExpanded, setNavState }}>
      {props.children}
    </NavContext.Provider>
  );
}

export default NavContextProvider;