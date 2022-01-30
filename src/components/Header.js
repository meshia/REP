/* Header */
import React, { useEffect } from 'react';
import NavMenu from './NavMenu';
import Logo from './elements/Logo';
import JoinUsButton from './elements/joinUsButton';
import MenuButton from './elements/MenuButton';
import Button from './elements/Button';
import Banner from './Banner';
import LanguageSwitcher from './LanguageSwitcher';
import { withTranslation } from 'react-i18next';
import { IsMobile } from '../utils/UtilsMain.js';

const Header = ({ t }) => {
  const headerData = t('HEADER', { returnObjects: true});

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if(!IsMobile()) {
      const scrollPosition = window.pageYOffset;
      const headerElement = document.querySelector('.Header');
      const logoButtonsElement = headerElement.querySelector('.logo-buttons-top');
      if( scrollPosition > headerElement.offsetHeight ) {
        logoButtonsElement.style.top = '-100px';
        setTimeout(() => { // for the animation to work
          logoButtonsElement.classList.add('get-fixed');
      }, 0);
      } else {
        logoButtonsElement.style.top = '';
        logoButtonsElement.classList.remove('get-fixed');
      }
    }
  }

  return (
    <div className="Header">
      <div className="logo-buttons-top">
        <div className="container">
          <MenuButton />
          <JoinUsButton />
          <Button title={ headerData['ENTER_SYSTEM']['LABEL'] } classList='white login-button' link={headerData['ENTER_SYSTEM']['LINK']} target="_blank"/>
          <div className="fixed-nav-menu">
            <NavMenu />
          </div>
          <Logo />
        </div>
      </div>
      <Banner/>
      <div className='main-menu-wrapper'>
        <Logo />
        <NavMenu />
        <JoinUsButton />
        <Button title={ headerData['ENTER_SYSTEM']['LABEL'] } classList='white login-button' link={headerData['ENTER_SYSTEM']['LINK']} target="_blank"/>
        <LanguageSwitcher />
      </div>
      <span className='overlay'></span>
    </div>
  )
}

export default withTranslation('main')(Header);