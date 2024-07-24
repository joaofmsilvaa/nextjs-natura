import React from "react";
import Button from "../Buttons";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerDetails}>
        <div className={styles.left}>
          <div className={styles.list}>
            <div className={styles.logo}>
              <img src="/assets/1.svg" alt="Natura"></img>
            </div>
            <span>Natura: Connect with nature</span>
          </div>
          <div className={styles.list}>
            <div>
              <Button message={"Explore now"} type={"primary"} />
            </div>
            <div>
              <Button message={"Learn more"} type={"secondary"} />
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.socialMedia}>
              <img src="/assets/footer/instagram.svg" alt="Instagram"></img>
            </div>
            <div className={styles.socialMedia}>
              <img src="/assets/footer/twitter.svg" alt="Twitter"></img>
            </div>
            <div className={styles.socialMedia}>
              <img src="/assets/footer/github.svg" alt="Github"></img>
            </div>
          </div>
        </div>
        <div>
          <ul className={styles.linksList}>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/donations">Donations</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>2024 Natura Inc. All rights reserved.</div>
        <div>
          <a href="/terms-of-services">Terms of Services</a>
        </div>
      </div>
    </footer>
  );
}
