import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Container, Flex, Spinner } from "@chakra-ui/react";

// Components
const ProductList = dynamic(() =>
  import("@/components/ui/list/product-list.component")
);

const ListSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");

      const rs = await response.json();

      setProducts(rs.products);
    };

    fetchProducts();
  }, []);

  if (products.length < 1) {
    return (
      <Flex minH="80vh" my="6" justifyContent="center" alignItems="flex-start">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.300"
          color="black"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <Container h="100vh">
      <Flex w="full" h="full" mt="6" mb="0" justifyContent="center">
        {products.length > 0 && <ProductList products={products} />}
      </Flex>
    </Container>
  );
};

export default ListSection;
