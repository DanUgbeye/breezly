// import { useState } from 'react';
import homePic from "../assets/img/bx-home.svg";
import newsPic from "../assets/img/bx-news.svg";
import motivPic from "../assets/img/bx-happy-alt.svg";
import { NavLink } from "react-router-dom";



const Nav = ({expanded, toggleNav}) => {
  
  return (
    <nav className = { " flex flex-col fixed left-0 top-0 bottom-0 w-[15rem] bg-green-600 text-white md:bg-transparent md:fixed md:top-12 h-full md:p-0 md:translate-x-0 transition-all duration-500 " + (expanded ? "" : "translate-x-[-100%]")} >
     
      <ul className=" list-none flex flex-col mt-[9rem] px-4 ">

        <NavLink to="/" className={ ({ isActive }) =>{ return ( (isActive ? "bg-green-500 hover:bg-green-500" : "hover:bg-green-700") + " text-left mb-4 rounded-sm p-2 flex gap-2 items-start font-[500] text-lg") }} onClick={toggleNav} >
          <img src={homePic} alt="home" />
          Home
        </NavLink>

        <NavLink to="/News" className={ ({ isActive }) =>{ return ( (isActive ? "bg-green-500 hover:bg-green-500" : "hover:bg-green-700") + " text-left mb-4 rounded-sm p-2 flex gap-2 items-start font-[500] text-lg ") }} onClick={toggleNav} >
          <img src={newsPic} alt="news" />
          News
        </NavLink>

        <NavLink to="/Motivation" className={ ({ isActive }) =>{ return ( (isActive ? "bg-green-500 hover:bg-green-500" : "hover:bg-green-700") + " text-left mb-4 rounded-sm p-2 flex gap-2 items-start font-[500] text-lg ") }} onClick={toggleNav} >
          <img src={motivPic} alt="motivation" />
          Motivation
        </NavLink>

      </ul>
    </nav>
  )
}

export default Nav;