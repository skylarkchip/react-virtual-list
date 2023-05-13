import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bgColor="gray.100" py="16">
      <Container maxW="7xl">
        <Flex justifyContent="flex-start">
          <Text fontFamily="body" fontWeight="medium" fontSize="lg">
            &copy; 2023 Mark Marasigan. React Virtual List
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
