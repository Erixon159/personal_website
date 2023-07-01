import * as React from "react";
import { Poppins } from '@next/font/google';
import { SocialButtons } from "@components/SocialButtons";
import { LifeLine } from "@components/LifeLine";
import styles from "./Footer.module.css";

export const copyright = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <SocialButtons />
      <div className={[styles.copyright, copyright.className].join(' ')}>
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
