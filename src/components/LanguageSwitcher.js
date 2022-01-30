import React from 'react';
import Select, { components } from 'react-select';
import i18n from '../i18nextConf';

const LanguageSwitcher = () => {
  let params = (new URL(document.location)).searchParams;
  let urlLang = params.get("lang");
  const options = [
    { value: 'he', label:'Heb', icon: 'il.svg' },
    { value: 'en', label:'Eng', icon: 'us.svg' }
  ]
  const { Option } = components;

  let defaultOption = options[0];
  let language = localStorage.getItem('language');
  let appElement = document.querySelector('.App');

  if( !urlLang ) {
    if( appElement && language ) { 
      appElement.setAttribute("lang", language);
    }
  } else {
    language = urlLang;
  }
  
  if(language !== i18n.language) {
    options.forEach( element => {
      if(element.value === language) {
        defaultOption = element;
        i18n.changeLanguage(language);
      }
    });
  }

  Accessability(language);
  const IconOption = props => (
    <Option {...props}>
      <img
        src={require('../assets/images/flags/' + props.data.icon).default}
        style={{ width: 36 }}
        alt={props.data.label}
      />
    </Option>
  );

  const CustomSelectValue = props => (
      <img
        src={require('../assets/images/flags/' + props.data.icon).default}
        style={{ width: 30,
                  position: 'absolute'  
              }}
        alt={props.data.label}
      />
  )

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: 'fit-content',
      backgroundColor: 'transparent'
    }),
    control: () => ({
      width: 68,
      display: 'flex'
    }),
    menu: base => ({
      ...base,
      backgroundColor: 'transparent',
      width: 'fit-content'
    }),
    dropdownIndicator: base => ({
      ...base,
      color: 'inherit',
      border: 'none'
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  const handleChange = (e) => {
    localStorage.setItem('language', e.value);
    i18n.changeLanguage(e.value);
    Accessability(e.value);
  };

  return (
    <div className="LanguageSwitcher">
        <Select
        onChange={handleChange}
        defaultValue={ defaultOption }
        options={options}
        styles={customStyles}
        components={{ Option: IconOption,
                      SingleValue: CustomSelectValue
                    }}
      />
    </div>
  )
}

export const Accessability = (language) => {
  let currentLangSide = "Left";
  if( language !== 'he') {
    currentLangSide = "Right";
  }

  if(!window.interdeal) {
    window.interdeal = {
        "sitekey": "0becf3c29f9cfa3701028a1f1048a9c7",
        "Position": currentLangSide,
        "Menulang": language ? language.toUpperCase() : 'HE',
        "domains": { "js": "https://cdn.equalweb.com/",
        "acc": "https://access.equalweb.com/" },
        "btnStyle": {
            "vPosition": [ "80%", null ],
            "scale": [ "0.8", "0.8" ],
            "color": { "main": "#283a66" },
            "icon": { "type": 7, "shape": "semicircle", "outline": false }
        }
    };
    (function(doc, head, body){
        var coreCall = doc.createElement('script');
        coreCall.src = 'https://cdn.equalweb.com/core/3.0.3/accessibility.js';
        coreCall.defer = true;
        coreCall.integrity = 'sha512-7eVrsWwFQXxbr/QB7Zt+wVSQqLq8ulYJHplOZ5rv/8cre3RPseIPBmSERndeTFrpHRX8eDnIzwNckqynpi6IfA==';
        coreCall.crossOrigin = 'anonymous';
        coreCall.setAttribute('data-cfasync', true );
        body? body.appendChild(coreCall) : head.appendChild(coreCall);
    })(document, document.head, document.body);
  } else {
    // TODO: add change accessability when language is changed
  }
}

export default LanguageSwitcher;