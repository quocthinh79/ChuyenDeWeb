export const formatCurrency = (input: number, currencyCode: string) => {
  return input.toLocaleString("it-IT", {
    style: "currency",
    currency: currencyCode,
  });
};
