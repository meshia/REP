import React from 'react';
import { withTranslation } from 'react-i18next';
import Logo from '../components/elements/Logo';
import SEO from '../components/SEO';

const ContactUs = ({ t }) => {
  const data = t('DATA', { returnObjects: true});
  return (
    <div className="ContactUs" dir="auto">
        <div className="container">
            <div className="card">
                {
                    Object.keys(data).map( function(key, index) {
                        switch(true) {
                            case  key === "SEO":
                                return <SEO data={ data[key] } />
                            case  key === "MAP":
                                return (
                                        <div className="iframe-container">
                                            <iframe title="googleMapAddress" src={ data[key].SRC } frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                        </div>
                                    )
                            case  key === "ADDRESS":
                                return (
                                    <div className="address-container">
                                        <Logo />
                                        <span className="address 1">{ data[key]['ADDRESS_1'] }</span>
                                        <span className="address 2">{ data[key]['ADDRESS_2'] }</span>
                                        <a href={ "mailto:" + data[key]['EMAIL'] }>{ data[key]['EMAIL'] }</a>
                                    </div>
                                    )
                            case  key === "FORM":
                                    const importedComponentModule = require("../components/Form").default;
                                    return (
                                        <div className="form-container">
                                            { React.createElement(importedComponentModule, { item: data[key],  className:"contact-us-form" }) }
                                        </div>
                                    )
                            default:
                                break;
                        }
                    })
                }
        </div>
      </div>
    </div>
  );
}

export default withTranslation('contact-us')(ContactUs);