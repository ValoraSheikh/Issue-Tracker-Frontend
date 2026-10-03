import axios from "axios";
import { cache } from "react";

export const GetSession = cache(async () => {
  const data = await axios.get(`http://localhost:3000/user`, {
    withCredentials: true,
    validateStatus: (status) => status < 500,
    timeout: 3000,
  });

  return data.data;
});
