import React, { useState } from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {BiMessageDots} from 'react-icons/bi';
import {BiBookBookmark} from 'react-icons/bi';
import {SiFiles} from 'react-icons/si';
import {IoMdContact} from 'react-icons/io';


const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
    <nav>
     <a href="#" onClick={() => setActiveNav("#")}  className={activeNav === "#home" ? "active" : " "}> <FaHome /> </a>
     <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : " "}> <BiMessageDots /> </a>
     <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : " "}> <BiBookBookmark /> </a>
     <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : " "}> <SiFiles /> </a>
     <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : " "}> <IoMdContact /> </a>
    </nav>
    </>
  )
}


export default Nav;