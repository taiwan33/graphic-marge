import axios from "axios";

const url = "https://prasant7878.pythonanywhere.com/";
// const url = "http://192.168.1.140:8000/";

const api = axios.create({
  baseURL: url,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      config.headers["Authorization"] = "Bearer " + token.access;
      //   config.headers["Access-Control-Allow-Origin"] = "*";
      //   config.headers["Access-Control-Allow-Credentials"] = "true";
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["accept"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const refreshToken = JSON.parse(localStorage.getItem("user"));
    const originalRequest = error.config;
    if (error.response) {
      if (
        refreshToken?.refresh &&
        error.response.status === 401 &&
        error.response.data.detail === "Token has expired" &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        try {
          const response = await api.post("/refresh", {
            refresh_token: refreshToken.refresh,
          });
          const access_token = response.data.access_token;
          localStorage.setItem("token", access_token);
          return api(originalRequest);
        } catch (_error) {
          return Promise.reject(_error);
        }
      } else {
      }
    }
    return Promise.reject(error);
  }
);

export default api;
