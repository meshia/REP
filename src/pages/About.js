import React from 'react';
import { withTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const About = ({ t }) => {
  const data = t('DATA', { returnObjects: true});

  return (
    <div className="About" dir="auto">
      { data.ABOUT.SEO && <SEO data={ data.ABOUT.SEO } /> }
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

export default withTranslation('about')(About);