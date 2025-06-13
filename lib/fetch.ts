const fetchInstance = async (path: string, config?: RequestInit) => {
  if (!process.env.NEXT_APP_BASE_URL) {
    throw new Error("Base url not found");
  }
  return fetch(`${process.env.NEXT_APP_BASE_URL}/${path}`, config);
};

export default fetchInstance;
