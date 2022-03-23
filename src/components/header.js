import { useState } from "react";
import Nav from "./nav";
import menuPic from "../assets/img/menu-icon.svg";
import closePic from "../assets/img/close.svg";

const Header = () => {

  const [navExpanded, setNavExpanded] = useState(false);

  function toggleNav(){
    setNavExpanded(!navExpanded);
  }

  return (
    <header className=" flex justify-center h-12 mb-6 text-green-600 border-b-2 border-solid border-green-600 md:flex-col md:justify-start md:h-full md:relative  md:bg-green-600 md:text-white " >
      <h2 className=" text-2xl text-center mt-0 self-center md:mt-4  " >Breezly</h2>
      
      <img 
        src={closePic} 
        alt="close" 
        className={ " cursor-pointer absolute left-[12rem] z-50 top-0 w-7 h-7 bg-green-700 self-end mr-6 mt-3 md:hidden translate-x-[-100%] " + (navExpanded ? "opacity-100 translate-x-0 transition-all delay-300 duration-400 " : "opacity-0 pointer-events-none")} 
        onClick={() => { toggleNav() }} 
      /> 
      
      <img 
        src={menuPic} 
        alt="Menu" 
        className={" cursor-pointer h-6 w-7 absolute mr-4 mt-3 top-0 right-0 md:hidden transition-opacity duration-200 " + (navExpanded ? "opacity-0 pointer-events-none" : "opacity-100")} 
        onClick={() => { toggleNav() } } 
      />
      
      
      <Nav expanded={navExpanded} close={setNavExpanded} isOpen={navExpanded} toggleNav={toggleNav} />
    </header>
  );
}

export default Header;