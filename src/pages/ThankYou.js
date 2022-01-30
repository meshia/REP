import React from 'react';
import { withTranslation } from 'react-i18next';

const ThankYou = ({ t }) => {
    const data = t('THANK_YOU', { returnObjects: true});
    const ComponentType = data.TYPE;
    const importedComponentModule = require("../components/" + ComponentType).default;

  return (
    <div className="ThankYou" dir="auto">
        <div className="card container">
            { React.createElement(importedComponentModule, { item: data, index: 0, key: 0, className:ComponentType }) }
        </div>
    </div>
  );
}

export default withTranslation('main')(ThankYou);