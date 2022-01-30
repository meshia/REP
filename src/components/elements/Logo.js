/* Title */
import React from 'react';
import logo from '../../assets/images/rep-logo.svg';
import logoWhite from '../../assets/images/rep-logo-white.svg';

const Logo = ({color}) => {
    let currentLogo = logo;
    if(color === 'white') {
        currentLogo = logoWhite;
    }
    return (
        <a className="logo-container" href="/">
            <img src={ currentLogo } className="App-logo" alt="logo" />
        </a>
    )
}

export default Logo;