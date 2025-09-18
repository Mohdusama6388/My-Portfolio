import { FaLinkedin, FaGithub, FaFacebook,FaYoutube,FaTwitter,FaInstagram } from 'react-icons/fa';
import Style from './Footer.module.css'
import React from "react";
function Footer(){
    return( <div className={Style.Container}>
         <h1 className={Style.h1}>Connect With Me</h1>
        <footer >
            <div className={Style.grid} >
              <a href="https://www.linkedin.com/in/usamaabbasi123/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Mohdusama6388" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100013081335341" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@multimedianetwork7021" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://x.com/UsamaAbbasi678" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href='https://www.instagram.com/syed_usama_abbasi/' target='_blank' rel='noopener norederrer'>
              <FaInstagram/>
              </a>
            </div>
            
          </footer>
          <h2>© 2025.Usama. All rights reserved</h2>
          </div>)
}
 export default Footer;