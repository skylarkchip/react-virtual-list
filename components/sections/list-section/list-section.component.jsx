import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Container, Flex } from "@chakra-ui/react";

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

  return (
    <Container h="100vh">
      <Flex w="full" h="full" mt="6" mb="0" justifyContent="center">
        {products.length > 0 && <ProductList products={products} />}
      </Flex>
    </Container>
  );
};

export default ListSection;
