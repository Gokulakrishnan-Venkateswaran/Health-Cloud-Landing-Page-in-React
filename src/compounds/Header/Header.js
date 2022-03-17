import React from 'react';

import classes from './Header.module.css';
import people from '../../assets/people.png';
import cloud from '../../assets/cloud1.png';


const Header = () => {
    return (
        <div className={`section__padding ${classes.header}`} id="home">
            <div className={classes.content}>
                <h1 className="gradient__text">
                Cloud solutions for healthcare and life sciences
                </h1>
                <p>With technological advances, the future is set to be highly competitive and agility is the need of the hour. With cloud computing, organizations can save money on storage, servers and management services, as these services can be moved to the cloud with minimum cost, making your operations more efficient.</p>
                <div className={classes.email_input}>
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className={classes.people}>
                    <img src={people} alt="people" />
                    <p>1.2 million people access a visit in last 72 hours</p>
                </div>
            </div>
            <div className={classes.image}>
                <img src={cloud} alt="cloud computing" />
            </div>
        </div>
    )
}

export default Header
