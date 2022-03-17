import React from 'react';

import classes from './Security.module.css';
import doctor from '../../assets/Doctor3.png';

const Security = () => {
    return (
        <div className={`section__padding ${classes.container}`} id="security">
            <div className={classes.image}>
                <img alt="doctor" src={doctor} />
            </div>
            <div className={classes.content}>
                <h1 className="gradient__text">Improving And Secure Instantly</h1>
                <p>HEALTH Cloud® offers healthcare industry clients an open, secure and enterprise-grade environment to support workloads, no matter your stage in the journey to the cloud or your workload needs. Accelerate research, inspire patient confidence with innovative customer experiences, and improve system uptime while meeting security and compliance standards.</p>
                <p>Diverse solutions help you lift, shift and modernize heritage workloads to the cloud. Use open source technology to easily create applications on the cloud, then integrate them with your existing workloads. With HEALTH Cloud, healthcare institutions of all sizes can operate like nimble startups by quickly delivering innovative services that meet ever-changing customer and industry demands — HEALTH Cloud has the solution to meet your needs.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Security;
