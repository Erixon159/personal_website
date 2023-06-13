import * as React from "react";
import styles from "./TriangleBackground.module.css";

interface TriangleBackgroundProps {
  children: React.ReactNode;
}

export const TriangleBackground: React.FC<TriangleBackgroundProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.triangle}>
        <div className={[styles['triangle-outer'], styles.clip].join(' ')}></div>
        <div className={[styles['triangle-inner'], styles.clip].join(' ')}></div>
      </div>
      {children}
    </div>
  );
};
