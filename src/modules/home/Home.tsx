import * as React from "react";
import { NameHeader } from "@components/NameHeader";
import { TriangleBackground } from "@components/TriangleBackground";
import styles from "./Home.module.css";
import { PersonalWebsiteHeader } from "@components/PersonalWebsiteHeader";
import { CodeSnippets } from "@components/CodeSnippets";
import { Resume } from "@components/Resume";

export const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <TriangleBackground>
        <NameHeader name='Erik Hricka' />
      </TriangleBackground>
      <PersonalWebsiteHeader />
      <CodeSnippets />
      <Resume />
    </main>
  );
};
