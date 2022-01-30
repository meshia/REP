/* Join Us Button */
import React from 'react';

const MenuButton = () => {
  const handleClick = (e) => {
    const currentElementToOpen = document.querySelector('.main-menu-wrapper');
    const currentBody = document.querySelector('body');
    const currentOverlay = document.querySelector('.overlay');
    const currentThis = e.target;
    if( currentThis.classList.contains('clicked')) {
      currentThis.classList.remove('clicked');
      currentBody.classList.remove('fixed');
      currentElementToOpen.classList.remove('opened');
      currentOverlay.classList.remove('opened');
    } else {
      currentThis.classList.add('clicked');
      currentBody.classList.add('fixed');
      currentElementToOpen.classList.add('opened');
      currentOverlay.classList.add('opened');
    }
  }

  return (
    <div class="menu-button" onClick={handleClick}>
      <span class="bar1"></span>
      <span class="bar2"></span>
      <span class="bar3"></span>
    </div>
  )
}

export default MenuButton;