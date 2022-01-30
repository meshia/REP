import React from 'react';
import { GenerateKey } from '../utils/UtilsMain.js';

class LinkTitleBackgroundImage extends React.Component {
    render() {
    const currentData = this.props.item ? this.props.item : '';
    const currentIndex = this.props.index ? this.props.index : '';
    const currentClassName = this.props.className ? this.props.className : '';

      return (
        <a href={currentData.CATEGORY} className={currentClassName} data-index={currentIndex + 1}  key={GenerateKey(currentIndex)}>
          {
            Object.keys(currentData).map( function(key, index) {
              switch(true) {
                case  key === "TITLE":
                  return <h2 className={key.toLowerCase()} dangerouslySetInnerHTML={ { __html: currentData[key] } }/>
                case  key === "IMAGE":
                  const importedImageSrc = currentData[key].SRC;
                  const importedImage = require(`../assets/images/${importedImageSrc}`).default;
                  const imageWrapperClasses = 'image-wrapper ' + currentData[key].CLASSES;
                  return (
                      <div className={imageWrapperClasses}>
                        <img src={importedImage} alt={currentData[key].ALT} title={currentData[key].TITLE}></img>
                      </div>
                      )
                default:
                  break;
              }
            })
          }
        </a>
      );
    }
};

export default LinkTitleBackgroundImage;