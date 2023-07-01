import * as React from "react";
import { Poppins } from '@next/font/google';
import { PrintLn } from "@components/PrintLn";
import styles from "./NameHeader.module.css";

interface NameHeaderProps {
  name: string;
}

export const title = Poppins({
  subsets: ['latin'],
  weight: ['700']
});

export const NameHeader: React.FC<NameHeaderProps> = ({ name }) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <span className={styles.block}></span>
        <h1 className={title.className}>
          {name}<span></span>
        </h1>
      </div>
      <div className={styles.role}>
        <PrintLn lines={['Ruby on Rails', 'Vue.js', 'Postgre SQL 🐘', 'Docker 🐋']}/>
      </div>
    </div>
  );
};
