import React from 'react';
import { withTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const OurTeam = ({ t }) => {
  const data = t('DATA', { returnObjects: true});
  const seoData = t('SEO', { returnObjects: true});

  return (
    <div className="OurTeam" dir="auto">
      { seoData && <SEO data={ seoData } /> }
      {
        Object.values(data).map( function(item, index) {
          const ComponentType = item.TYPE;
          const importedComponentModule = require("../components/" + ComponentType).default;
          return React.createElement(importedComponentModule, {item, index, key: index, className:ComponentType});
        })
      }
    </div>
  );
}

export default withTranslation('our-team')(OurTeam);