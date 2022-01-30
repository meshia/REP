/* Tags */
import React from 'react';

const Tags = ({item}) => {
    const currentData = item;
    return (
        <div class="tags">
            <span>{ currentData.TITLE }</span>
            <ul class="tags-bar">
                {
                    currentData.LIST.map(element => <li>{ element }</li> )
                }
            </ul>
        </div>
    )
}

export default Tags;