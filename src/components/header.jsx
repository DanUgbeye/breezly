import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import Nav from "./Nav";

const Header = () => {

  const { isNavExpanded, setNavState } = useContext(NavContext);  

  return (
    <header className=" sticky top-0 left-0 bg-[#F0F4EF] flex justify-center h-12 mb-6 z-50 text-green-600 shadow-md md:flex-col md:justify-start md:h-full md:relative  md:bg-green-600 md:text-white " >

      <h2 className=" text-2xl font-semibold text-center mt-0 self-center md:mt-4 md:fixed " >Breezly</h2>
      
      {/* close menu icon */}
      <i
        className={ " fal fa-close text-[2rem] text-white cursor-pointer absolute left-[12rem] z-50 top-0 px-2 bg-green-700 self-end mr-6 mt-2 md:opacity-0 md:pointer-events-none translate-x-[-100%] " + (isNavExpanded ? "opacity-100 translate-x-0 transition-all delay-300 duration-400 " : "opacity-0 pointer-events-none")} 
        onClick={setNavState} 
      ></i>

      {/* open menu icon */}
      <i
        className={" far fa-bars text-[2rem] cursor-pointer h-6 w-7 absolute mr-4 mt-2 top-0 right-0 md:opacity-0 md:pointer-events-none transition-opacity duration-200 " + (isNavExpanded ? "opacity-0 pointer-events-none" : "opacity-100")} 
        onClick={setNavState } 
      ></i>
      
      <Nav />
    </header>
  );
}

export default Header;