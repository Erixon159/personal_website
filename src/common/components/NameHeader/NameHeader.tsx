import * as React from "react";
import { PrintLn } from "@components/PrintLn";
import styles from "./NameHeader.module.css";

interface NameHeaderProps {
  name: string;
}

export const NameHeader: React.FC<NameHeaderProps> = ({ name }) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <span className={styles.block}></span>
        <h1>
          {name}<span></span>
        </h1>
      </div>
      <div className={styles.role}>
        <PrintLn lines={['Front-End', 'Back-End', 'Deployment', 'Testing']}/>
      </div>
    </div>
  );
};
