import Layout from "@/components/layout/layout.component";
import { Container, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export const AboutPage = () => {
  return (
    <>
      <Head>
        <title>React Virtual List - About</title>
        <meta name="description" content="Virtual List Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container maxW="7xl">
          <Flex w="full" h="80vh" justifyContent="center" alignItems="center">
            <Heading as="h1" fontSize="5xl">
              About Page
            </Heading>
          </Flex>
        </Container>
      </Layout>
    </>
  );
};
