import React from 'react';
import { Feature } from '../../components';

import classes from './Features.module.css';

const Features = () => {
    return (
        <div className={`section__padding ${classes.features}`} id="solution" >
            <div className={classes.heading}>
                <h1 className="gradient__text" >The Future is now to more secure and innovative healthcare solutions. Step into future today & make it happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className={classes.container}>
            <Feature className={classes.container_feature} title="HEALTH Cloud Bare Metal Servers" text="The server and its resources are dedicated to single-tenant use and hosted on the HEALTH Cloud network." />
            <Feature className={classes.container_feature} title="Clarify Health Solutions" text="Together with HEALTH Cloud, Clarify Health is solving that problem using big data and AI to predict how patients will likely respond to care." />
            <Feature className={classes.container_feature} title="HEALTH Cloud for VMware solutions" text="Maintain your on-premises infrastructure while adding the scalability and availability of public cloud." />
            </div>
        </div>
    )
}

export default Features
