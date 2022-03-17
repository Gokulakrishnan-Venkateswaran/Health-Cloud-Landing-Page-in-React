import React from 'react'

import classes from './Register.module.css';

const Register = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <p>Request Early Access to Get Started</p>
                 <h3>Register Today & start exploring the endless possibilities.</h3>
            </div>
            <div className={classes.btn}>
                 <button type="button">Get Started</button>
            </div>
        </div>
    )
}

export default Register;
