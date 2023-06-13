import * as React from "react";
import styles from "./PrintLn.module.css";

interface PrintLnProps {
  lines: string[];
}

export const PrintLn: React.FC<PrintLnProps> = ({ lines }) => {
  return (
    <div className={styles['print-ln']}>
      <h1>System<span className={styles.white}>.<span className={styles.red}>out</span>.</span><span className={styles.blue}>println</span>(&quot;</h1>
      <div className={styles.lines}>
        {lines.map((line, index) => (
          <h1
            key={index}
            className={[styles.line, styles[`line-${index}`]].join(' ')}
          >
            {line}
          </h1>))
        }
      </div>
      <h1 className={styles.closure}>&quot;);</h1>
    </div>
  );
};
