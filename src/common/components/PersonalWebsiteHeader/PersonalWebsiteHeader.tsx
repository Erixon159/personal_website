import * as React from "react";
import styles from "./PersonalWebsiteHeader.module.css";

export const PersonalWebsiteHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={[styles.section, styles['top-section']].join(' ')}>
        <div className={[styles['content-container'], styles['content-theme-dark']].join(' ')}>
          <div className={styles['content-inner']}>
            <div className={styles['content-center']}>
              <h1>Finest</h1>
              <p>Dual Color Text Effect by Finest Pixels</p>
            </div>
          </div>
        </div>
      </section>
      <section className={[styles.section, styles['bottom-section']].join(' ')}>
        <div className={[styles['content-container'], styles['content-theme-light']].join(' ')}>
          <div className={styles['content-inner']}>
            <div className={styles['content-center']}>
              <h1>Finest</h1>
              <p>Dual Color Text Effect by Finest Pixels</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
