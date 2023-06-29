import * as React from "react";
import { NameHeader } from "@components/NameHeader";
import { BlobBackground } from "@components/BlobBackground";
import { TriangleBackground } from "@components/TriangleBackground";
import { UnderConstruction } from "@components/UnderConstruction";
import styles from "./Home.module.css";
import { RainbowDivider } from "@components/RainbowDivider";
import { PersonalWebsiteHeader } from "@components/PersonalWebsiteHeader";
import { CodeSnippets } from "@components/CodeSnippets";

export const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* <BlobBackground>
        <NameHeader name='Erik Test' />
      </BlobBackground> */}

      <TriangleBackground>
        <NameHeader name='Erik Hricka' />
      </TriangleBackground>

      <PersonalWebsiteHeader />

      {/* <RainbowDivider /> */}

      <CodeSnippets />

      {/* <UnderConstruction />s */}
    </main>
  );
};
