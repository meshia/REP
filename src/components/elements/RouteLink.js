/* Join Us Button */
import React from 'react';
import { NavLink } from 'react-router-dom';

const RouteLink = ({ item }) => {
  const pageType = item.LINK_GOTO ? item.LINK_GOTO : '';
  const readMore = item.READ_MORE ? item.READ_MORE : '';
  const currentData = item.DATA ? item.DATA : '';

  return (
      <NavLink className="menu-item" to={ "/" + pageType + "/" + currentData } params={{ 'data': currentData }}>{ readMore }</NavLink>
  )
}

export default RouteLink;