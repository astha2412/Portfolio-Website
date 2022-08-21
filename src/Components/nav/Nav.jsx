import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <>
    <nav>
     <a href="#home"> <i class="fa-solid fa-house"></i> </a>
     <a href="#about"> <i class="fa-solid fa-user-alien"></i> </a>
     <a href="#experience"> <i class="fa-solid fa-book"></i> </a>
     <a href="#services"> <i class="fa-brands fa-servicestack"></i> </a>
     <a href="#contact"> <i class="fa-solid fa-address-book"></i> </a>
    </nav>
    </>
  )
}

export default Nav;