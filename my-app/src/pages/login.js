import React from "react";
import styles from "./login.module.css";
import { Link } from 'react-router-dom';
import img from '../assets/logo.jpg';
import img_rec3 from '../assets/Rectangle3login.png';
import img_logo from '../assets/yumeket.svg';
class login extends React.Component {
  render() {
    return (
      <div className={styles.desktop1}>
        <div>
          <img
            alt=""
            className={styles.logo}
            src={img_logo}
          />
        </div>

        <p className={styles.spiceUpYourCreatingProcess}>
          Spice up your creating process
        </p>
        <div className={styles.flexWrapperTwo}>
          <p className={styles.createAnAccount}>
            Create an account
          </p>
        </div>
        <Link to="/Page1/" >
        <div className={styles.flexWrapperOne}>
          <Link to="/Page1/" ><p className={styles.login}>Login</p></Link>
        </div>
        </Link>
        <p className={styles.beginWithAnExistingAccount}>
          Begin with an existing account
        </p>
        <img
          alt=""
          className={styles.num11}
          src={img}
        />
        <img
          alt=""
          className={styles.rectangle311}
          src={img_rec3}
        />
        <div className={styles.relativeWrapperOne}>
          <p className={styles.privacyPolicy}>
            Privacy Policy
          </p>
          <p className={styles.termsOfService}>
            Terms of Service
          </p>
          <p className={styles.aboutYumeket}>About Yumeket</p>
        </div>
      </div>
    );
  }
}

export default login;