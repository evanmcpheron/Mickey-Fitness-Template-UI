export const proxy = () => {
  const { NODE_ENV } = process.env;

  switch (NODE_ENV) {
    case "development":
      return "http://localhost:8080";
    default:
      return "https://api.mickeyfitness.com";
  }
};

export const s3Proxy = () => {
  return "https://mickey-fitness.s3.us-west-1.amazonaws.com/";
};
