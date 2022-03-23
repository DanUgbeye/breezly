// import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Nav = ({expanded}) => {
  
  return (
    <nav className={ " flex flex-col absolute  left-0 top-0 bottom-0 w-[15rem] bg-green-600 text-white md:bg-transparent md:fixed md:top-12 md:h-full md:p-0 md:translate-x-0 " + (expanded ? "" : "translate-x-[-100%]")} >
     
      <ul className=" list-none flex flex-col mt-[5rem] px-4 ">
        <NavLink to="/" className=" text-left mb-4 bg-green-500 rounded-sm hover:bg-[#efefef] hover:text-green-600 p-2 " >Home</NavLink>
        <NavLink to="/News" className=" text-left mb-4 bg-green-500 rounded-sm hover:bg-[#efefef] hover:text-green-600 p-2 " >News</NavLink>
        <NavLink to="/Motivation" className=" text-left mb-4 bg-green-500 rounded-sm hover:bg-[#efefef] hover:text-green-600 p-2 " >Motivation</NavLink>
      </ul>
    </nav>
  )
}

export default Nav;