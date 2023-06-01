import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer>
      <a href="#" className="footer__logo">Wanna go back up?</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><FaFacebookF /></a>
        <a href=""><FaInstagramSquare /></a>
        <a href=""><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Kumari  Astha Rani. All rights reserved.
        </small>
      </div>

    </footer>
    </>
  )
}

export default Footer;