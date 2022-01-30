import React from 'react';
import Title from '../components/elements/Title';
import { GenerateKey } from '../utils/UtilsMain.js';

class TitleContent extends React.Component {
    render() {
    const currentData = this.props.item ? this.props.item : '';
    const currentIndex = this.props.index ? this.props.index : '';
    const currentClassName = this.props.className ? this.props.className : '';

      return (
        <section className={currentClassName} data-index={currentIndex + 1}  key={GenerateKey(currentIndex)}>
          <div className='container'>
          {
            Object.keys(currentData).map( function(key, index) {
              switch(true) {
                case  key === "TITLE":
                  return <Title title={currentData[key]}/>
                case  key.indexOf("PARAGRAPH") !== -1:
                  return <p dangerouslySetInnerHTML={ { __html: currentData[key] } }></p>
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

export default TitleContent;