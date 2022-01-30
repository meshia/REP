import React from 'react';
import Title from '../components/elements/Title';
import { GenerateKey, CamelizeString } from '../utils/UtilsMain.js';

class ImageTitleContent extends React.Component {
    render() {
    const currentData = this.props.item ? this.props.item : '';
    const currentIndex = this.props.index ? this.props.index : '';
    let currentClassName = this.props.className ? this.props.className : '';

      return (
        <section className={currentClassName} data-index={currentIndex + 1} key={GenerateKey(currentIndex)}>
          <div className='container'>
          {
            Object.keys(currentData).map( function(key, index) {
              switch(true) {
                case  key.indexOf("TITLE") !== -1:
                  let underline = true;
                  if( key !== "TITLE" ) {
                    underline = false;
                  }
                  return <Title title={currentData[key]} useUnderline={underline}/>
                case  key === "DATE":
                  return <span className="date" dangerouslySetInnerHTML={ { __html: currentData[key] } }></span>
                case  key === "QUOTE":
                case  key === "TAGS":
                case  key === "ROUTE_LINK":
                case  key === "SHARE":
                  const data = currentData[key];
                  const elementModuleName = CamelizeString(key);
                  const importedElementModule = require(`../components/elements/${elementModuleName}`).default;
                  return React.createElement(importedElementModule, {'item':data});
                case  key.indexOf("TABLE") !== -1:
                  const tableData = currentData[key];
                  const importedTableModule = require("./HtmlFromJson").default;
                  return React.createElement(importedTableModule, {'item':tableData, 'wrapper': 'table'});
                case  key === "IMAGE":
                  const importedImageSrc = currentData[key].SRC;
                  const importedImage = require(`../assets/images/${importedImageSrc}`).default;
                  const imageWrapperClasses = currentData[key].CLASSES ? 'image-wrapper ' + currentData[key].CLASSES : 'image-wrapper';
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
                  const currentContainerItem = currentData[key];
                  const importedContainerComponentModule = require("../components/ImageTitleContent").default;
                  let classList = 'title-para-container';
                    if(currentContainerItem.CLASSNAME) {
                      classList += " " + currentContainerItem.CLASSNAME;
                    }
                  return React.createElement(importedContainerComponentModule, {'item':currentContainerItem, index, key: index, className:classList});
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

export default ImageTitleContent;