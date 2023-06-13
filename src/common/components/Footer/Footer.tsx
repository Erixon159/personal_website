import * as React from "react";
import { SocialButtons } from "@components/SocialButtons";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <SocialButtons />
      <div className={styles.copyright}>
        Erixwrld | 2023
      </div>
    </footer>
  );
};
