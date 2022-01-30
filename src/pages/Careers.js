import React from 'react';
import SEO from '../components/SEO';
import Title from '../components/elements/Title';

const Careers = ({ data }) => {
  const careersData = data;
  const careersTitle = careersData.TITLE;
  const careersSEO = careersData.SEO;
  const careersCategoriesData = careersData.CAREERS_CATEGORIES;

  return (
    <div className="Careers" dir="auto">
      { careersTitle && <Title title={ careersTitle }/> }
      { careersSEO && <SEO data={ careersSEO } /> }
      <div className="container">
        {
          Object.values(careersCategoriesData).map( function(item, index) {
            const ComponentType = "LinkTitleBackgroundImage";
            const importedComponentModule = require("../components/" + ComponentType).default;
            return ( React.createElement(importedComponentModule, {item, index, key: index, className:ComponentType}))
          })
        }
      </div>
    </div>
  );
}

export default Careers;