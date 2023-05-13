export const convertToCurrency = (value) => {
  const convertedValue = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);

  return convertedValue;
};
