import React from 'react';
import { withTranslation } from 'react-i18next';

const Home = ({ t }) => {
  const data = t('DATA', { returnObjects: true});

  return (
    <div className="Home" dir="auto">
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

export default withTranslation('home')(Home);