import React from 'react'
import { Article } from '../../components';

import classes from './Blog.module.css';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
    return (
        <div className={`section__padding ${classes.blog}`}>
            <div className={classes.heading}>
                <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.
                </h1>
            </div>
            <div className={classes.container}>
                <div className={classes.groupA}>
                    <Article imgurl={blog01} date="Oct 28, 2021" text="HEALTH Cloud and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className={classes.groupB}>
                    <Article imgurl={blog02} date="Oct 28, 2021" text="HEALTH Cloud and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgurl={blog03} date="Oct 28, 2021" text="HEALTH Cloud and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgurl={blog04} date="Oct 28, 2021" text="HEALTH Cloud and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgurl={blog05} date="Oct 28, 2021" text="HEALTH Cloud and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog
