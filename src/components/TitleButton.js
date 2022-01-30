import React from 'react';
import Title from '../components/elements/Title';
import { GenerateKey } from '../utils/UtilsMain.js';

class TitleButton extends React.Component {
    render() {
    const currentData = this.props.item ? this.props.item : '';
    const currentIndex = this.props.index ? this.props.index : '';
    const currentClassName = this.props.className ? this.props.className + ' container' : 'container';

      return (
        <section className={currentClassName} data-index={currentIndex + 1} key={GenerateKey(currentIndex)}>
          {
            Object.keys(currentData).map( function(key) {
              switch(true) {
                case  key === "TITLE":
                  return <Title title={currentData[key]}/>
                case  key === "BUTTON":
                  const importedButton = require("../components/elements/" + currentData[key]).default;
                  return React.createElement(importedButton);
                default:
                  break;
              }
            })
          }
        </section>
      );
    }
};

export default TitleButton;