/* Title */
import React from 'react';
import linkedinIcon from '../../assets/images/social/linkedin.png';

const LinkedinButton = ({url}) => {
    let currentLinkedinLogo = linkedinIcon;
    
    return (
        <a className="linkedin-icon-container" href={ url }>
            <img src={ currentLinkedinLogo } className="linkedin-icon" alt="linkedin-icon" />
        </a>
    )
}

export default LinkedinButton;