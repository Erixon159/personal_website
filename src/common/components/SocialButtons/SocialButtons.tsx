import * as React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import styles from "./SocialButtons.module.css";

export const SocialButtons: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.element}>
          <a href="https://www.linkedin.com/in/erik-h-2b1a27163" className={styles.link} target="_blank" rel="noreferrer">
            <FaLinkedin className={styles.icon}/>
            <span className={styles.name}>LinkedIn</span>
          </a>
        </li>
        <li className={styles.element}>
          <a href="https://twitter.com/ErikHricka" className={styles.link} target="_blank" rel="noreferrer">
            <FaTwitter className={styles.icon}/>
            <span className={styles.name}>Twitter</span>
          </a>
        </li>
        <li className={styles.element}>
          <a href="https://github.com/Erixon159" className={styles.link} target="_blank" rel="noreferrer">
            <FaGithub className={styles.icon}/>
            <span className={styles.name}>GitHub</span>
          </a>
        </li>
        <li className={styles.element}>
          <a href="https://www.instagram.com/_erik159/" className={styles.link} target="_blank" rel="noreferrer">
            <FaInstagram className={styles.icon}/>
            <span className={styles.name}>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
