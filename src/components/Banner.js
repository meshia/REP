/* Banner */
import React from 'react';
import bannerVideo from '../assets/videos/time-Lapse.mp4';
import JoinUsButton from './elements/joinUsButton';
import { withTranslation } from 'react-i18next';

const Banner = ({ t }) => {
  const headerData = t('HEADER', { returnObjects: true});
  return (
    <div className="Banner">
        <video className="banner-video-wrap" muted={true} loop={true} preload="auto" autoPlay={true} data-object-fit="cover">
                <source src={ bannerVideo } type="video/mp4" />
        </video>
        <h1>{ headerData['BANNER_TITLE'] }</h1>
        <JoinUsButton />
    </div>
  )
}

export default withTranslation('main')(Banner);