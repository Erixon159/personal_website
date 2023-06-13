import * as React from "react";
import styles from "./BlobBackground.module.css";

interface BlobBackgroundProps {
  children: React.ReactNode;
}

export const BlobBackground: React.FC<BlobBackgroundProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.blob}>
        <div className={styles['shape-blob']}></div>
        <div className={[styles['shape-blob'], styles.one].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.two].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.three].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.four].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.five].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.six].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.seven].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.eight].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.nine].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.ten].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.eleven].join(' ')}></div>
        <div className={[styles['shape-blob'], styles.twelve].join(' ')}></div>
      </div>
      {children}
    </div>
  );
};
