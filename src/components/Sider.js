// src/components/Sidebar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Make sure to create this CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://www.linkedin.com/in/pardhasaradhichodey" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a><br/><br/>
      <a href="https://github.com/pardhasaradhichodey" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a><br/><br/><br/>
      <a href="https://www.instagram.com/pardhu_chodey" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a><br/><br/>
      <a href="https://leetcode.com/PardhuChodey" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faCode} size="2x" />
      </a>
    </div>
  );
};

export default Sidebar;
