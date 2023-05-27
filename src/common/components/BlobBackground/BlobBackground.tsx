import * as React from "react";
import styles from "./BlobBackground.module.css";

export const BlobBackground: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.blob_c}>
        <div className={styles.shape_blob}></div>
        <div className={[styles.shape_blob, styles.one].join(' ')}></div>
        <div className={[styles.shape_blob, styles.two].join(' ')}></div>
        <div className={[styles.shape_blob, styles.three].join(' ')}></div>
        <div className={[styles.shape_blob, styles.four].join(' ')}></div>
        <div className={[styles.shape_blob, styles.five].join(' ')}></div>
        <div className={[styles.shape_blob, styles.six].join(' ')}></div>

      </div>
      {children}
    </div>
  );
};
