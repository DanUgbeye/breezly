import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const Nav = () => {
  
  const { isNavExpanded, setNavState } = useContext(NavContext)

  return (
    <nav className = { " flex flex-col fixed left-0 top-0 bottom-0 w-[15rem] bg-green-600 text-white md:bg-transparent md:fixed md:top-12 h-full md:p-0 md:translate-x-0 transition-all duration-500 " + (isNavExpanded ? "" : "translate-x-[-100%]")} >
     
      <ul className=" list-none flex flex-col mt-[9rem] px-4 ">

        <NavLink to="/" className={ ({ isActive }) =>{ return ( (isActive ? "bg-green-500 hover:bg-green-500" : "hover:bg-green-700") + " text-left mb-4 rounded-sm p-2 flex gap-2 items-baseline font-[500] text-lg") }} onClick={setNavState} >
          <i className=" far fa-home "></i>
          Home
        </NavLink>

        <NavLink to="/News" className={ ({ isActive }) =>{ return ( (isActive ? "bg-green-500 hover:bg-green-500" : "hover:bg-green-700") + " text-left mb-4 rounded-sm p-2 flex gap-2 items-baseline font-[500] text-lg ") }} onClick={setNavState} >
          <i className=" far fa-memo-pad "></i>
          News
        </NavLink>

        <NavLink to="/Motivation" className={ ({ isActive }) =>{ return ( (isActive ? "bg-green-500 hover:bg-green-500" : "hover:bg-green-700") + " text-left mb-4 rounded-sm p-2 flex gap-2 items-baseline font-[500] text-lg ") }} onClick={setNavState} >
          <i className=" far fa-laugh "></i>
          Motivation
        </NavLink>

      </ul>
    </nav>
  )
}

export default Nav;