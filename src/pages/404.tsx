import type { NextPage } from "next";
import Head from "next/head";
import { PageNotFound } from "@modules/page-not-found";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ErixWrld | 404</title>
        <meta name="description" content="This page is not part of my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageNotFound />
    </div>
  );
};

export default IndexPage;
