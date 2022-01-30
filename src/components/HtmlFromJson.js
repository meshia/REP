/* Tags */
import React from 'react';

const HtmlFromJson = ({item, wrapper}) => {
    const currentData = item;
    const CustomTag = `${wrapper}`;
    let returnElement = "";

    const parseHtml = (data) => {
        Object.keys(data).map( function(key, index) {
            const element = key.toLowerCase();
            switch(true) {
                case Array.isArray(data[key]):
                    Object.values(data[key]).map( function(value) {
                        returnElement += "<" + key + ">";
                        if(typeof value === 'object') {
                            parseHtml(value);
                        } else {
                            returnElement += value;
                        }
                        returnElement += "</" + key + ">"
                    }) 
                    break;

                case typeof data[key] === 'object':
                    parseHtml(data[key]);
                    break;
                default:
                    returnElement += "<" + element + ">" + data[key]+ "</" + element + ">";
            }
            
        });
    }
    parseHtml(currentData);

    return (
        <CustomTag dangerouslySetInnerHTML={ { __html: returnElement } }></CustomTag>
    )
}

export default HtmlFromJson;