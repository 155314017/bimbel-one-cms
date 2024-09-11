import { BaseUrl } from "./BaseUrl";
import axios from "axios";

const url = `${BaseUrl}/api-bimbelone/data-registration`;

export const FetchDataRegistrasi = async (accessToken: string) => {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
