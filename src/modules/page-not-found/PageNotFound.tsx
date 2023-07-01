import * as React from "react";
import { Fira_Mono } from '@next/font/google';
import { GlitchButton } from "@components/GlitchButton";
import styles from "./PageNotFound.module.css";

export const glitch = Fira_Mono({
  subsets: ['latin'],
  weight: ['400']
});

export const PageNotFound: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={[styles.glitch, glitch.className].join(' ')} title="404">404</div>
      <GlitchButton
        title="BACK HOME"
        href="/"
      />
    </main>
  );
};
