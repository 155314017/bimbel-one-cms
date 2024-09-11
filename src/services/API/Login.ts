import { BaseUrl } from "./BaseUrl";
import axios, { AxiosResponse } from "axios";

const url = `${BaseUrl}/api-bimbelone/login`;
// const headers = {
//   "Content-Type": "application/json",
// };

interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: string;
  teacher_id: string | null;
  full_name: string;
  email: string;
  access_token: string;
  type: string;
  status: string;
}

interface LoginResponse {
  result: string;
  code: string;
  data: {
    user: User[];
  };
}

export const LoginUser = async (loginData: LoginData): Promise<User[]> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      url,
      loginData
    );

    const users = response.data.data.user;

    if (users.length > 0) {
      localStorage.setItem("access_token", users[0].access_token);
    }
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
