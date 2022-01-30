import React from 'react';
import Title from '../components/elements/Title';
import { GenerateKey } from '../utils/UtilsMain.js';

class IconTitle extends React.Component {

  render() {
  const currentData = this.props.item ? this.props.item : '';
  const currentIndex = this.props.index ? this.props.index : '';
  const currentClassName = this.props.className ? this.props.className : '';
  
    return (
      <section className={currentClassName} data-index={currentIndex + 1} key={GenerateKey(currentIndex)}>
        <div className='container'>
        {
          Object.keys(currentData).map( function(key) {
            switch(true) {
              case key === "TYPE":
                break;
              case  key === "TITLE":
                return <Title title={currentData[key]}/>
              case  key === "ICONS":
                const icons = Object.values(currentData[key]).map( function(value) {
                  const importedIconSrc = value.ICON;
                  const importedIcon = require(`../assets/images/${importedIconSrc}`).default;
                  const icon = <div className='icon-item'>
                                  <img src={importedIcon} alt={value.TITLE} title={value.TITLE}></img>
                                  <span className='icon-item-title'>{value.TITLE}</span>
                                  <span className='icon-item-content'>{value.CONTENT}</span>
                                </div>;
                  return icon
                })
                return icons
              
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

export default IconTitle;