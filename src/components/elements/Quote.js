/* Quote */
import React from 'react';

const Quote = ({item}) => {
    const currentText = item.TEXT ? item.TEXT : '';
    const currentName = item.NAME ? item.NAME : '';
    return (
        <span class="quote">
            <q>{ currentText }</q>
            { currentName }
        </span>
    )
}

export default Quote;