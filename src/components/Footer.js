import React from "react";

/* Add LinkedIn, Github and Medium icons from FontAwesomeIcon React component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function Footer() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/sripriya-bhikshesvaran-8520992/">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href="https://github.com/sbhikshe">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="https://medium.com/@priya.bhikshesvaran">
        <FontAwesomeIcon icon={['fab', 'medium']} />
      </a>
    </footer>
  );
}