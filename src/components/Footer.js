import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './footerStyles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Dambulla,</p>
              <p>Sri Lanka.</p>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <a href="tel:+94771501357">+94 77 150 13 57</a>
            </h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <a href="mailto:1128dilan@gmail.com">1128dilan@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>This is me Dilan Ranasinghe.</p>
          <div className='social'>
            <a href="https://www.facebook.com/dilan.ranasinha.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/dilan-ranasinghe-801996255/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/dilanranasinghe96" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://wa.me/+94771501357" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
