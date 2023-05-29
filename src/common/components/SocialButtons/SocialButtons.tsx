import * as React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import styles from "./SocialButtons.module.css";

export const SocialButtons: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.element}>
          <a href="#" className={styles.link}>
            <FaLinkedin className={styles.icon}/>
            <span className={styles.name}>LinkedIn</span>
          </a>
        </li>
        <li className={styles.element}>
          <a href="#" className={styles.link}>
            <FaTwitter className={styles.icon}/>
            <span className={styles.name}>Twitter</span>
          </a>
        </li>
        <li className={styles.element}>
          <a href="#" className={styles.link}>
            <FaGithub className={styles.icon}/>
            <span className={styles.name}>GitHub</span>
          </a>
        </li>
        <li className={styles.element}>
          <a href="#" className={styles.link}>
            <FaInstagram className={styles.icon}/>
            <span className={styles.name}>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
