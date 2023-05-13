import {
  Avatar,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";

const Header = () => {
  return (
    <Container maxW="7xl">
      <Flex py="8" justifyContent="space-between">
        <Link href="/">
          <Text
            fontFamily="heading"
            fontSize="3xl"
            fontWeight="bold"
            textTransform="lowercase"
            textDecoration="underline"
            textDecorationThickness="4px"
          >
            reactvirtual-list.
          </Text>
        </Link>
        <HStack spacing="6">
          <Link href="/">
            <Text
              as="span"
              fontFamily="body"
              fontSize="lg"
              fontWeight="medium"
              color="black"
            >
              Home
            </Text>
          </Link>
          <Link href="/about">
            <Text
              as="span"
              fontFamily="body"
              fontSize="lg"
              fontWeight="medium"
              color="black"
            >
              About
            </Text>
          </Link>
          <Link href="/list">
            <Text
              as="span"
              fontFamily="body"
              fontSize="lg"
              fontWeight="medium"
              color="black"
            >
              List
            </Text>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Header;
