import React,{useState} from "react";
import { FaTwitter,FaInstagram ,FaLinkedin,FaBars} from "react-icons/fa";
import { MdOutlineRocket } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import "./Navbar.css"
const Navbar = () => {
  const [navBar,setNavBar]=useState(false)
  return <div>
    <nav className="bg_dark">
      <div className="container d_flex items_center">
        <div className="logo">
         <h3 className="text_white"> solnHub</h3>
        </div>
       <div className= {navBar?"show right d_flex items_center":"  hide right d_flex items_center"}>
        <div className="close">
          <IoCloseSharp className="fs_36" onClick={()=>setNavBar(!navBar)}/>
        </div>
       <ul className="navList d_flex">
          <li>
          <a href="#home" className="text_white transition">home</a>
          </li>
          <li>
          <a href="#"className="text_white transition" >featured</a>
          </li>
          <li>
          <a href="#"className="text_white transition" >pricing</a>
          </li>
          <li>
          <a href="#" className="text_white transition">contacts</a>
          </li>
        </ul>
        <div className="icon d_flex">
        <span className="text_white cursor">
            <FaInstagram className="transition"/>
          </span>
          <span className="text_white cursor">

            <FaTwitter/>
          </span>
          <span className="text_white cursor ">
            <FaLinkedin className="transition"/>
          </span>
        </div>
        <div className="btn ">
          <button className="cursor transition">
            <span className="text_white">
              <MdOutlineRocket className="transition"/>
            </span>
            <span className="uppercase fw_500 text_clr_whitesmoke fs_16"  >
              get started
            </span>
          </button>
        </div>
       </div>
       <div className="menu text_white fs_22" onClick={()=>setNavBar(!navBar)}>
        <FaBars/>
       </div>
      </div>
    </nav>
  </div>;
};

export default Navbar;