import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router";
import SEO from '../components/SEO';

const CareerCategory = ( {data} ) => {
  let { category } = useParams();
  category = category.toUpperCase();
  const categories = data.CAREERS_CATEGORIES;
  const categoryItem = categories[category];
  const categoryItemTitle = categoryItem.TITLE;

  /* set Title and Summary */
  const ComponentType = categoryItem.TYPE;
  const importedComponentModule = require("../components/" + ComponentType).default;

  /* set SEO */
  let categoryItemSEO = data.SEO;
  categoryItemSEO.TITLE = categoryItemSEO.TITLE + ' - ' + categoryItemTitle;
  categoryItemSEO.DESCRIPTION = categoryItemSEO.DESCRIPTION + ' - ' + categoryItemTitle;


  const careerCategoryFiles = categoryItem.CAREER_FILES;
  let { t } = useTranslation( careerCategoryFiles );
   let categoryData = [];
  
   careerCategoryFiles.forEach(element => {
    let parseElement = {};
    const originalElement = t('DATA', { returnObjects: true, ns: element });
    if(originalElement['TITLE']) {
      parseElement['TITLE'] = originalElement['TITLE'];
    }
    if(originalElement['LOCATION']) {
      parseElement['LOCATION'] = originalElement['LOCATION'];
    }
    
    parseElement.LINK = {
      "LINK_GOTO": element,
      "DATA": element
    }
    categoryData.push(parseElement);
  });
  
  return (
    <div className="CareerCategory container" dir="auto">
      { categoryItemSEO && <SEO data={ categoryItemSEO } /> }
      { React.createElement(importedComponentModule, { item:categoryItem, className:ComponentType }) }
    </div>
  );
}

export default CareerCategory;