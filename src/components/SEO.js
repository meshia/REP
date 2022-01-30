/* Banner */
import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ data }) => {
  const seoData = data;

  return (
    <>
    { seoData && Object.keys(seoData).length > 0 &&
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        { seoData.TITLE && <title>{ seoData.TITLE }</title> }
        { seoData.DESCRIPTION && <meta name="description" content= { seoData.DESCRIPTION } /> }
        { seoData.IMAGE && <meta property="image" content={ seoData.IMAGE } /> }
        { seoData.IMAGE && <meta property="og:image" content={ seoData.IMAGE } /> }
        { seoData.IMAGE && <meta property="og:image:secure_url" content={ seoData.IMAGE } /> }
        <meta name="msapplication-TileImage" content="%PUBLIC_URL%/REP_default_share-01.png" />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:type" content="website" />
      </Helmet>
    }
    </>
  )
}

export default SEO;