import axios from "axios";
import { token } from "./services";

class ApiService {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://data.argaam.com",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    this.instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      async (err) => {
        if (err.response.status === 401) {
          await token().then(window.location.reload());
        }
      }
    );
  }
}

export default new ApiService().instance;
