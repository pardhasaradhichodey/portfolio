// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Assuming this is for LeetCode
import './Footer.css';
const Footer = () => {
  return (
      <div className="container">
        <a href="https://www.linkedin.com/in/yourusername" className="text-light me-4">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="https://www.instagram.com/yourusername" className="text-light me-4">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="https://leetcode.com/yourusername" className="text-light me-4">
          <FontAwesomeIcon icon={faCode} size="2x" />
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="https://github.com/yourusername" className="text-light">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
  );
};

export default Footer;
