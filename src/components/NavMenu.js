import React from "react";
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { IsMobile } from '../utils/UtilsMain.js';

const NavMenu = ({ t }) => {
    const menuData = t('MENU', { returnObjects: true});
    const isMobile = IsMobile();
    const handleClick = (e) => {
      window.scrollTo(0, 0)
      if(isMobile ) {
        const currentElementToOpen = document.querySelector('.main-menu-wrapper');
        const currentBody = document.querySelector('body');
        const overlay = document.querySelector('.overlay');
        const closeButton = document.querySelector('.menu-button');

        if( currentElementToOpen.classList.contains('opened')) {
          currentBody.classList.remove('fixed');
          currentElementToOpen.classList.remove('opened');
          overlay.classList.remove('opened');
          closeButton.classList.remove('clicked');
        }
      }
    }

    // TODO: change to loop over the menuData and not hard-coded
    
    return (
        <nav className="menu-items">
            <NavLink className="menu-item" onClick={ handleClick } to="/">{         menuData['LINK_HOME']      }</NavLink>
            <NavLink className="menu-item" onClick={ handleClick } to="/About">{    menuData['LINK_ABOUT']     }</NavLink>
            <NavLink className="menu-item" onClick={ handleClick } to="/OurTeam">{  menuData['LINK_OUR_TEAM']  }</NavLink>
            <NavLink className="menu-item" onClick={ handleClick } to="/Tech">{     menuData['LINK_TECH']      }</NavLink>
            <NavLink className="menu-item" onClick={ handleClick } to="/Blog">{     menuData['LINK_BLOG']      }</NavLink>
{/*             <NavLink className="menu-item" onClick={ handleClick } to="/Careers">{  menuData['LINK_CAREERS']   }</NavLink> */}
        </nav>
    );
}

export default withTranslation('main')(NavMenu);