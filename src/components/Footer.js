import React from "react";
import './css/Footer.css';

/* Add LinkedIn, Github and Medium icons from FontAwesomeIcon React component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function Footer() {

  const styles = {
    "--fa-animation-duration": "3s", 
    "--fa-fade-opacity": "0.2",
  }

  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/sripriya-bhikshesvaran-8520992/">
        <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} size="5x" fade style={styles} />
      </a>
      <a href="https://github.com/sbhikshe">
        <FontAwesomeIcon icon={['fab', 'github']} size="5x" fade style={styles}/>
      </a>
      <a href="https://medium.com/@priya.bhikshesvaran">
        <FontAwesomeIcon icon={['fab', 'medium']} size="5x" fade style={styles}/>
      </a>
    </footer>
  );
}