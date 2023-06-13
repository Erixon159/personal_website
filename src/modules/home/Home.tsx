import * as React from "react";
import { NameHeader } from "@components/NameHeader";
import { BlobBackground } from "@components/BlobBackground";
import { TriangleBackground } from "@components/TriangleBackground";
import { UnderConstruction } from "@components/UnderConstruction";
import styles from "./Home.module.css";
import { RainbowDivider } from "@components/RainbowDivider";
import { PersonalWebsiteHeader } from "@components/PersonalWebsiteHeader";

export const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* <BlobBackground>
        <NameHeader name='Erik Hricka' />
      </BlobBackground> */}

      <TriangleBackground>
        <NameHeader name='Erik Hricka' />
      </TriangleBackground>

      <RainbowDivider />

      <PersonalWebsiteHeader />

      <UnderConstruction />
    </main>
  );
};
