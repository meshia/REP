/* Tags */
import React from 'react';
import {FacebookShareButton} from "react-share";

const Share = ({item}) => {
    const currentData = item;
    return (
        <ul class="share">
            {
                Object.keys(currentData).map( function(key) {
                    const currentShare = key.toLowerCase();
                    const currentShareData = currentData[key];
                    const currentLink = currentShareData.LINK ? currentShareData.LINK : "";
                    const currentOnClick = currentShareData.ONCLICK ? currentShareData.ONCLICK : "";
                    const currentTitle = currentShareData.TITLE ? currentShareData.TITLE : "";
                    const currentImage = currentShareData.IMAGE ? currentShareData.IMAGE : "https://storage.googleapis.com/cmperstribe_storage_usha/Banner/IMG_3640.JPG";
                    const currentIcon = require(`../../assets/images/${currentShareData.ICON}`).default;
                    if(currentShare === 'facebook') {
                        return (
                            <FacebookShareButton 
                                url={ currentLink }
                                quote={ currentTitle }
                                hashtag="#REPRealty"
                                imageURL= { currentImage }
                                className="">
                                <img src={ currentIcon } alt="" />
                            </FacebookShareButton>
                        )
                    } else {
                        return (
                            <li>
                                <a class={ currentShare } href={ currentLink } onclick={ currentOnClick } target="_blank" title={ currentTitle }>
                                    <img src={ currentIcon } alt="" />
                                </a>
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

export default Share;