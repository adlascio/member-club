import { apiConfig } from "./api-config";

export const getClient = async ({ id }) => {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`);
    console.log("Response", response);
    const client = await response.json();
    return client;
  } catch (error) {
    console.error("Error fetching client", error);
  }
};
