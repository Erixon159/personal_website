import * as React from "react";
import { GlitchButton } from "@components/GlitchButton";
import styles from "./PageNotFound.module.css";

export const PageNotFound: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.glitch} title="404">404</div>
      <GlitchButton
        title="BACK HOME"
        href="/"
      />
    </main>
  );
};
