import React, { useState } from 'react';
import './nav.css';

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
    <nav>
     <a href="#" onClick={() => setActiveNav("#")}  className={activeNav === "#home" ? "active" : " "}> <i class="fa-solid fa-house"></i> </a>
     <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : " "}> <i class="fa-solid fa-circle-info"></i> </a>
     <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : " "}> <i class="fa-solid fa-book"></i> </a>
     <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : " "}> <i class="fa-brands fa-servicestack"></i> </a>
     <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : " "}> <i class="fa-solid fa-address-book"></i> </a>
    </nav>
    </>
  )
}


export default Nav;