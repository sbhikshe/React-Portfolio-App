import React, { useState, useEffect } from "react";
import '../css/Project.css';

/* Add Github icon from FontAwesomeIcon React component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

export default function Project({title, imageUrl, ghLink, appLink}) {

  /* for the background image style: default is opaque.
    onMouseOver, links are visible and image is transparent,
    else (onMouseLeave), links are invisible and image is opaque */
  const styleOpaque = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    //"opacity": "1"
    backgroundColor: "currentcolor"
  }

  const styleTransparent = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    //"opacity": "0.2"
    backgroundColor: "transparent"
  }

  /* app link and github link are visible when isLinkVisible is true */
  /* initial value should be false, and only image is visible */
  const [isLinkVisible, setVisible] = useState(false);
  const [imageStyle, setImageStyle] = useState(styleOpaque);
  const [linkOpacity, setLinkOpacity] = useState(0);

  const handleMouseOver = () => { 
    setVisible(true);
    setImageStyle(styleTransparent);
    setLinkOpacity(1);
  };
  const handleMouseLeave = () => { 
    setVisible(false);
    setImageStyle(styleOpaque); 
    setLinkOpacity(0);
  };

  /*
      <img className="img-fluid"
      src={imageUrl} 
      alt='projectImage' hidden={true}></img>
  */
  return (
    <div className="project"  
          style={imageStyle}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          >
                <a href={appLink} opacity={linkOpacity}>{title}</a>
                <a href={ghLink} opacity={linkOpacity}>
                  <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                </a>
    </div> 
  );
}