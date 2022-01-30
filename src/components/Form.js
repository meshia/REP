/* Tags */
import React from 'react';

const Form = ({ item, className }) => {
    const data = item;
    const currentClassList = className ? className : "";
    if ( !item ) 
        return false
    let formData = {};
    let returnElement = "";
    const parseHtml = (data) => {
        Object.values(data).map( function(value, index) {
            Object.keys(value).map( function(key) {
                if(key !== 'action' && key !== 'method') {
                    returnElement += "<" + key;
                    switch (true) {
                        case key === 'input':
                        case key === 'textarea':
                            for (const [itemK ,itemV] of Object.entries(value[key])) {
                                returnElement += " " + itemK + '="' + itemV + '"';
                            }
                            returnElement += ">"
                            break;
                        case key === 'button':
                        case key === 'label':
                            if(value[key].name) {
                                returnElement += ' name="' + value[key].name + '"';
                            }
                            if(value[key].for) {
                                returnElement += ' for="' + value[key].for + '"';
                            }
                            returnElement += '>' + value[key].html;
                        break;
                        default:
                            break;
                    }
                    returnElement += "</" + key + ">"
                } else {
                    formData[key] = value[key];
                }
                })
        });
    }
    parseHtml(data);
    return (
        <form action={formData['action']} method={formData['method']} dangerouslySetInnerHTML={ { __html: returnElement } }></form>
    )
}

export default Form;