import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Components
const Layout = dynamic(() => import("@/components/layout/layout.component"));

const ListSection = dynamic(() =>
  import("@/components/sections/list-section/list-section.component")
);

export const ListPage = () => {
  return (
    <>
      <Head>
        <title>React Virtual List - List</title>
        <meta name="description" content="Virtual List Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ListSection />
      </Layout>
    </>
  );
};
