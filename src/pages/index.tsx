import type { NextPage } from "next";
import Head from "next/head";
import { Home } from "@modules/home";
import { Footer } from "@components/Footer";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ErixWrld</title>
        <meta name="description" content="This is my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <Footer />
    </div>
  );
};

export default IndexPage;
