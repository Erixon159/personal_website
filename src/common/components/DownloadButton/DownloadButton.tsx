import * as React from "react";
import { Poppins } from '@next/font/google';
import styles from "./DownloadButton.module.css";

interface DownloadButtonProps {
  link: string;
  text: string;
}

export const line = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

export const DownloadButton: React.FC<DownloadButtonProps> = ({ link, text }) => {
  return (
    <div className={styles.button}>
      <a href={link} target="_blank" rel="noreferrer" className={line.className}>
        {text}
        <span className={styles.shift}>›</span>
      </a>
      <div className={styles.mask}></div>
    </div>
  );
};
