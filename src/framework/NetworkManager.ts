import axios from "axios";

export interface ApiErrorResponse {
  status: number;
  error_custom_code: number;
  message: string;
}

export default class NetworkManager {
  static isInitiate = false;

  static init() {
    if (NetworkManager.isInitiate) return;

    NetworkManager.isInitiate = true;
    const token = localStorage.getItem("token");

    //TODO: set base url
    axios.defaults.baseURL =
      "REPLACE_URL";

    //set header token
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        // This function is part of a promise chain.
        // It needs to return a value or another promise so the caller knows when it
        // has completed.

        // Pass all non 401s back to the caller.
        if (error.response.status !== 401) {
          return Promise.reject(error);
        }
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          //TODO: handle with router
        }
      }
    );
  }
}