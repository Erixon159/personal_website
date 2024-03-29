import * as React from "react";
import { Raleway } from '@next/font/google';
import styles from "./PersonalWebsiteHeader.module.css";

export const title = Raleway({
  subsets: ['latin'],
  weight: ['700', '900']
});

export const PersonalWebsiteHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={[styles.section, styles['top-section']].join(' ')}>
        <div className={[styles['content-container'], styles['content-theme-dark']].join(' ')}>
          <div className={styles['content-inner']}>
            <div className={styles['content-center']}>
              <h1 className={title.className}>HELLO</h1>
              <p className={title.className}>MY NAME IS ERIK AND I AM PROGRAMMER</p>
            </div>
          </div>
        </div>
      </section>
      <section className={[styles.section, styles['bottom-section']].join(' ')}>
        <div className={[styles['content-container'], styles['content-theme-light']].join(' ')}>
          <div className={styles['content-inner']}>
            <div className={styles['content-center']}>
              <h1 className={title.className}>WORLD</h1>
              <p className={title.className}>WELCOME TO MY PERSONAL WORLD</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
