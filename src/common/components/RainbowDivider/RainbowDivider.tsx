import * as React from "react";
import styles from "./RainbowDivider.module.css";

export const RainbowDivider: React.FC = () => {
  return (
    <div className={styles.container}>
      <b className={styles.rainbow}></b>
    </div>
  );
};
