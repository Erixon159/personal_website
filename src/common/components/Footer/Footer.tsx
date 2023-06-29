import * as React from "react";
import { SocialButtons } from "@components/SocialButtons";
import { LifeLine } from "@components/LifeLine";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <SocialButtons />
      <div className={styles.copyright}>
        ErixWrld
        <LifeLine
          width = '24px'
          height = '18px'
        />
        2023
      </div>
    </footer>
  );
};
