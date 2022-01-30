/* Join Us Button */
import React from 'react';
import { GenerateKey } from '../../utils/UtilsMain.js';

const Button = ({title , classList, link, target}) => {
  const currentTitle = title;
  const currentClassList = classList + ' button';
  const currentLink = link;
  const currentTarget = target;
  return (
    <a href={currentLink} className={currentClassList} key={GenerateKey(0)} target={currentTarget} dangerouslySetInnerHTML={ { __html: currentTitle } } />
  )
}

export default Button;