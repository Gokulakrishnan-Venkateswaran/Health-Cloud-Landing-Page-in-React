import React from 'react';
import { Feature } from '../../components';


import '../../components/Feature/Feature.module.css';
import classes from './About.module.css';

const What = () => {
    return (
        <div className={`section__margin ${classes.about}`} id="about">
            <div className={classes.abtfeature}>
                 <Feature className={classes.about_title} title="Why HEALTH Cloud?" text="Using HEALTH Cloud deep industry expertise and HIPAA-enabled and GxP-enabled data sets, we can help you accelerate your journey to the cloud. Unlock the power of your data, create more efficient systems, and improve the customer experience with a wide variety of innovative services like HEALTH Cloud Garage™ and HEALTHCARE® Watson Health®. HEALTH Cloud is the only cloud provider using the highest-level encryption certification (FIPS 140-2 Level 4) and keep your own key (KYOK) with a dedicated hardware-security module (HSM). Meaning you, and only you, have access to your data." />
            </div>
            <div className={classes.heading}>
                <h1 className="gradient__text">Cloud Technology Ensures Patients Receive The Best Possible Care Without Unnecessary Delay.</h1>
                <p>Explore Health Cloud</p>
            </div>
            <div className={classes.container}>
                <Feature title="AI" text="AI helps you predict and shape future outcomes, automate complex processes and optimize your employees’ time." />
                <Feature title="Compute" text="Cloud computing lets you allocate your compute, network, storage and security resources on demand." />
                <Feature title="Security" text="Use market-leading protection of data at rest, in motion and in use with only you in control.." />
            </div>
        </div>
    )
}

export default What
