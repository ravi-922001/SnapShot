import React from 'react';
import './Picture.css'

function Picture(props) {
    return (
        <div>
            <a href={props.link} target="_self">
                <img src={props.link} alt={props.title} />
            </a>
        </div>
    )
}

export default Picture
