import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber = "1234567890" }) => {
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    border: 'none',
    outline: 'none',
  };

  return (
    <a 
      href={whatsappURL} 
      target="_blank" 
      rel="noopener noreferrer"
      style={buttonStyle}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppButton;
