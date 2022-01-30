/* Title */
import React from 'react';
import { GenerateKey } from '../../utils/UtilsMain.js';

const Title = ({title, useUnderline}) => {
    const currentTitle = title;
    const currentUnderline = useUnderline ? "" : "no-underline";
    return <h2 key={GenerateKey(0)} className={currentUnderline} dangerouslySetInnerHTML={ { __html: currentTitle } } />
}

export default Title;