import React from 'react'

import classes from './Feature.module.css';

const Feature = (props) => {
    return (
        <div className={`${classes.feature} ${props.className}`}>
           <div>
               <h1>{props.title}</h1>
           </div>
           <div>
               <p>{props.text}</p>
           </div>
        </div>
    )
}

export default Feature;
