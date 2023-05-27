import * as React from "react";
import { NameHeader } from "@components/NameHeader";
import { BlobBackground } from "@components/BlobBackground";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <BlobBackground>
        <NameHeader name='Erik Hricka' />
      </BlobBackground>
    </main>
  );
};
