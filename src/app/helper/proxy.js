export const proxy = () => {
  const { NODE_ENV } = process.env;

  switch (NODE_ENV) {
    case "development":
      return "http://localhost:8080";
    default:
      return "https://api.mickeyfitness.com";
  }
};
