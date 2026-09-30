import { axiosClient } from "../lib/axois/axios-client";

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: string;
}

export const userApi = {
  getUser: async (): Promise<UserProps> => {
    const { data } = await axiosClient.get("/user");
    return data.data;
  },

  createUser: async (payload: UserProps) => {
    const { data } = await axiosClient.post("/user", payload);
    return data.date;
  },

  updateUser: async (payload: UserProps) => {
    const { data } = await axiosClient.post("/user", payload);
    return data.data;
  },

  deleteUser: async (payload: UserProps) => {
    const { data } = await axiosClient.delete("/user", payload);
    return data.data;
  },
};
