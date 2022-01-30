/* Join Us Button */
import React from 'react';
import { withTranslation } from 'react-i18next';
import { GenerateKey } from '../../utils/UtilsMain.js';

const JoinUsButton = ({ t }) => {
  const headerData = t('HEADER', { returnObjects: true});
  if( !headerData )
    return false;
    
  return (
    <button className="button" key={GenerateKey(0)} onClick={
      ()=>{
        window.open( headerData['JOIN_US']['LINK'],'popup','width=600,height=600');
        return false;
      } }>{ headerData['JOIN_US']['LABEL'] }</button>
  )
}

export default withTranslation('main')(JoinUsButton);