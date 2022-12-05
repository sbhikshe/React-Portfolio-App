import React from "react";
import '../css/Project.css';

/* Add Github icon from FontAwesomeIcon React component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

export default function Project({title, imageUrl, ghLink, appLink}) {

  return (
    <div className="project">
      <img className="img-fluid"
            src={imageUrl} 
            alt='projectImage'></img>
      <a href={ghLink}>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href={appLink}>{title}</a>
    </div>
  );
}