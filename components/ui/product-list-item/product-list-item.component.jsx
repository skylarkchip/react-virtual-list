import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { convertToCurrency } from "@/utils/convertToCurrency";

const ProductListItem = ({ style, index, products }) => {
  const product = products[index];

  return (
    <Box
      style={style}
      borderColor="gray.100"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      py="6"
      overflow="hidden"
      w="full"
      h="full"
      px="4"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="4"
        alignItems={{ base: "center", md: "flex-start" }}
        w="full"
      >
        <AspectRatio
          border="1px"
          borderColor="gray.300"
          w="full"
          h="250px"
          ratio={1}
          borderRadius="md"
          overflow="hidden"
          flex="1"
        >
          <Image
            h="full"
            w="full"
            objectFit="cover"
            src={product.thumbnail}
            alt={product.title}
          />
        </AspectRatio>
        <Flex justifyContent="space-between" flex="1" w="full">
          <VStack w="full" spacing="6" align="left">
            <VStack spacing="0" w="full" align="left">
              <Text fontFamily="body" fontSize="sm" fontWeight="semibold">
                {product.rating}
              </Text>
              <Text
                fontFamily="heading"
                fontSize="xl"
                fontWeight="semibold"
                textTransform="capitalize"
                lineHeight="normal"
              >
                {product.title}
                <Text
                  as="span"
                  fontWeight="medium"
                  fontSize="xl"
                  display="block"
                >
                  {convertToCurrency(product.price)}
                </Text>
              </Text>
              <Text fontFamily="heading" fontSize="md" fontWeight="normal">
                {product.stock < 1
                  ? "Out of Stock"
                  : `${product.stock} in stock`}
              </Text>
            </VStack>
            <Text fontFamily="body" fontSize="sm">
              {product.description}
            </Text>
            <Button
              variant="solid"
              bgColor="blackAlpha.800"
              color="white"
              fontFamily="body"
              fontWeight="normal"
              _hover={{ bgColor: "blackAlpha.600" }}
            >
              Add to cart
            </Button>
          </VStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ProductListItem;
