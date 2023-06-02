import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/astha2412" target="_blank"> <FaGithubSquare />  </a>
        <a href="https://www.linkedin.com/in/kumari-astha-rani-552662212/" target="_blank"> <FaLinkedinIn /> </a>
        <a href="https://www.facebook.com/aastha.barnwal.35/" target="_blank"> <FaFacebookF/> </a>
        <a href="https://www.instagram.com/way_that.ilike/" target="_blank"> <FaInstagramSquare /> </a>
    </div>
  )
}

export default HeaderSocials;