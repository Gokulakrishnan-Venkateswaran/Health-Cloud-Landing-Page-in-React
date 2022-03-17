import React from 'react';

import classes from './Footer.module.css';
import Logo from '../../assets/health cloud logo-02.svg';

const Footer = () => {
    return (
        <div className={`section__padding ${classes.footer}`}>
            <div className={classes.heading}>
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className={classes.btn}>
                <p>Request Early Access</p>
            </div>

            <div className={classes.links}>
                <div className={classes.logo}>
                    <img src={Logo} alt="HEALTH CLoud logo" />
                     <p>Car Street, 182A corner plaza <br /> All Rights Reserved</p>
                </div>
                <div className={classes.division}>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className={classes.division}>
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className={classes.division}>
                    <h4>Get in touch</h4>
                    <p>Car Street, 182A corner plaza</p>
                    <p>012-3456789</p>
                    <p>info@healthcloud.net</p>
                </div>
            </div>

            <div className={classes.copyright}>
                <p>@2021 HEALTH Cloud. All rights reserved.</p>
            </div>
         </div>
    )
}

export default Footer
