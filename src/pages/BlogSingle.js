import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { useParams } from "react-router";

const BlogSingle = ( {data} ) => {
    const { page } = useParams();
    const { id } = useParams();
    console.log('data', data);
    const translationId = page + "/" + id;
    const { t } = useTranslation( translationId );
    const singleBlogData = t('DATA', { returnObjects: true }) 
    const ComponentType = singleBlogData.TYPE;
    const importedComponentModule = require("../components/" + ComponentType).default;
    const index = 0;
  
    return (
      <div className="BlogSingle container" dir="auto">
        { singleBlogData.SEO && <SEO data={singleBlogData.SEO} /> }
        {
          React.createElement(importedComponentModule, { item:singleBlogData, index, key: index, className:ComponentType + ' single-blog'})
        }
      </div>
    );
}

export default BlogSingle;