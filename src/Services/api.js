import axios from "axios";
import { token } from "./services";

const instance = axios.create({
      baseURL: "https://data.argaam.com",
      headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
});

instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
);

instance.interceptors.response.use(
      (res) => {
            console.log(res.data)
            return res.data;
      },
      async (err) => {
            if (err.response.status === 401) {
                  await token().then(window.location.reload());
            }
      }
);

export default instance;