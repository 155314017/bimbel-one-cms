import { BaseUrl } from "./BaseUrl";
import axios from "axios";

const url = `${BaseUrl}/api-bimbelone/data-registration`;

export interface DataRegistrasi {
  id: string;
  teacher_id: string | null;
  full_name: string;
  email: string;
  type: string;
  status: string;
}

export const FetchDataRegistrasi = async (): Promise<DataRegistrasi[]> => {

  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    throw new Error("Access token not found");
  }

  try {
    const response = await axios.post(url, {
      access_token: accessToken,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
