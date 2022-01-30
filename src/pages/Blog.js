import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { NavLink } from 'react-router-dom';

const Blog = ( {data} ) => {
  const blogSEO = data.SEO;
  const blogFiles = data.BLOG_FILES;
  let { t } = useTranslation( blogFiles );
  let blogData = [];
  
  blogFiles.forEach(element => {
    let parseElement = {};
    const originalElement = t('DATA', { returnObjects: true, ns: element });
    if(originalElement['TYPE']) {
      parseElement['TYPE'] = originalElement['TYPE'];
    }
    if(originalElement['PREVIEW_IMAGE']) {
      parseElement['IMAGE'] = originalElement['PREVIEW_IMAGE'];
    }
    if(originalElement['CONTAINER']) {
      parseElement.CONTAINER = {
        "DATE" : originalElement.CONTAINER.DATE,
        "TITLE" : originalElement.CONTAINER.TITLE,
        "PARAGRAPH_1" : originalElement.CONTAINER.PARAGRAPH_1
      }
      if(originalElement['READ_MORE']) {
        parseElement.CONTAINER.ROUTE_LINK = {
          "TITLE": originalElement.CONTAINER.TITLE,
          "READ_MORE": originalElement['READ_MORE'],
          "LINK_GOTO": "BlogSingle",
          "DATA": element
        }
      }
    }
    blogData.push(parseElement);
  });
  
  return (
    <div className="Blog container" dir="auto">
      { blogSEO && <SEO data={ blogSEO } /> }
      {
        Object.values(blogData).map( function(item, index) {
          const ComponentType = item.TYPE;
          const link = item.CONTAINER.ROUTE_LINK ? item.CONTAINER.ROUTE_LINK : false;
          const importedComponentModule = require("../components/" + ComponentType).default;
          return (
            <NavLink className="menu-item" to={ "/" + link['LINK_GOTO'] + "/" + link['DATA'] } params={{ 'data': link['DATA'] }}>
                { React.createElement(importedComponentModule, {item, index, key: index, className:ComponentType}) }
            </NavLink>
            )
        })
      }
    </div>
  );
}

export default Blog;