import React from "react";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.frameEntire}>
        <div className={styles.frameTwo}>
          <div className={styles.frame}>
            <img
              alt=""
              className={styles.logo}
              src="https://static.overlay-tech.com/assets/441b432b-ffc9-4902-a0b5-9acb1e5b312e.svg"
            />
          </div>
          <p className={styles.spiceUpYourCreatingProcess}>
            Spice up your creating process
          </p>
        </div>
        <div className={styles.relativeWrapperOne}>
          <div className={styles.frameThree}>
            <div className={styles.frame7}>
              <div className={styles.frame9}>
                <p className={styles.login}>Login</p>
              </div>
              <div className={styles.frame8}>
                <p className={styles.createAnAccount}>
                  Create an account
                </p>
              </div>
            </div>
          </div>
          <div className={styles.frame10}>
            <p
              className={styles.beginWithAnExistingAccount}
            >
              Begin with an existing account
            </p>
            <img
              alt=""
              className={styles.num11}
              src="https://static.overlay-tech.com/assets/782a0729-3c31-4dec-b8d4-7cf12c419899.png"
            />
          </div>
        </div>
        <div className={styles.rectangle} />

        <div className={styles.group1}>
          <p className={styles.privacyPolicy}>
            Privacy Policy
          </p>
          <p className={styles.termsOfService}>
            Terms of Service
          </p>
          
          <p className={styles.aboutYumeket}>
            About Yumeket
          </p>


        </div>
      </div>
    </div>
  );
};

export default Desktop1;