import React from 'react'

import classes from './Article.module.css';

const Article = ({imgurl, date, text}) => {
    return (
        <div className={classes.article}>
            <div className={classes.image}>
                <img src={imgurl} alt="blog_image" />
            </div>
            <div className={classes.content}>
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article
