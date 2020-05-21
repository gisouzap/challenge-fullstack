import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <span>
        Made with <FontAwesomeIcon className="footer-icon" icon={faHeart} /> by
        Gi for{' '}
        <span className="footer-span__bold">
          Rout<span className="footer-span">Easy!</span>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
