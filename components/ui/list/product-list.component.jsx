import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FixedSizeList as FixedProductList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box } from "@chakra-ui/react";

// Components
const ProductListItem = dynamic(() =>
  import("../product-list-item/product-list-item.component")
);

const ProductList = ({ products }) => {
  const [listItemSize, setListItemSize] = useState(300);

  useEffect(() => {
    if (window.screen.width <= 480) {
      setListItemSize(650);
    }
  }, []);

  return (
    <Box w="full" h="full">
      <AutoSizer>
        {({ height, width }) => (
          <FixedProductList
            height={height}
            width={width}
            itemCount={products.length}
            itemSize={listItemSize}
          >
            {({ index, style }) => (
              <ProductListItem
                style={style}
                index={index}
                products={products}
              />
            )}
          </FixedProductList>
        )}
      </AutoSizer>
    </Box>
  );
};

export default ProductList;
