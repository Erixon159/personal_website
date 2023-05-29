import * as React from "react";
import { NameHeader } from "@components/NameHeader";
import { BlobBackground } from "@components/BlobBackground";
import { UnderConstruction } from "@components/UnderConstruction";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <BlobBackground>
        <NameHeader name='Holy Spirit' />
      </BlobBackground>
      <UnderConstruction />
    </main>
  );
};
