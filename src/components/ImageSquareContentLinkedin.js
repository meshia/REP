import React from 'react';
import LinkedinButton from './elements/LinkedinButton';
import { GenerateKey } from '../utils/UtilsMain.js';

class ImageSquareContentLinkedin extends React.Component {
    render() {
    const currentData = this.props.item ? this.props.item : '';
    const currentIndex = this.props.index ? this.props.index : '';
    const currentClassName = this.props.className ? this.props.className : '';

      return (
        <section className={currentClassName} data-index={currentIndex + 1} key={GenerateKey(currentIndex)}>
          <div className='container'>
          {
            Object.keys(currentData).map( function(key, index) {
              switch(true) {
                case  key === "LINKEDIN":
                  return (
                    <LinkedinButton url={ currentData[key] } />
                  )
                case  key === "NAME":
                case  key === "TITLE":
                  return <h4 className={key.toLowerCase()} dangerouslySetInnerHTML={ { __html: currentData[key] } }/>
                case  key === "IMAGE":
                  const importedImageSrc = currentData[key].SRC;
                  const importedImage = require(`../assets/images/${importedImageSrc}`).default;
                  const imageWrapperClasses = 'image-wrapper ' + currentData[key].CLASSES;
                  return (
                      <div className={imageWrapperClasses}>
                        <img src={importedImage} alt={currentData[key].ALT} title={currentData[key].TITLE}></img>
                      </div>
                      )
                case  key.indexOf("PARAGRAPH") !== -1:
                  return <p dangerouslySetInnerHTML={ { __html: currentData[key] } }></p>
                case  key === "BUTTON":
                  const importedButton = require("../components/elements/" + currentData[key]).default;
                  return React.createElement(importedButton);
                case  key.indexOf("CONTAINER") !== -1:
                  const currentItem = currentData[key];
                  const importedComponentModule = require("../components/ImageSquareContentLinkedin").default;
                  return React.createElement(importedComponentModule, {item:currentItem, index, key: index, className:'square-content-linkedin'});
                default:
                  break;
              }
            })
          }
          </div>
        </section>
      );
    }
};

export default ImageSquareContentLinkedin;