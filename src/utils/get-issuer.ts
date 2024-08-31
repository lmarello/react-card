export const getIssuer = (number: string) => {
  if (number.startsWith("4")) {
    return "visa";
  }
  if (number.startsWith("5")) {
    return "mastercard";
  }

  return "unknown";
};
