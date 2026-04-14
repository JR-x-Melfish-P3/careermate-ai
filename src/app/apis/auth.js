import axios from "axios";

const auth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API,
  withCredentials: true,
});

// auth.interceptors.response.use((response) => {
//   const authorization = response.headers.get("authorization");

//   if (authorization) {
//     sessionStorage.setItem("token", authorization);
//   }

//   return response;
// });

// auth.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");

//   if (token) {
//     config.headers["Authorization"] = token;
//   }

//   return config;
// });

export default auth;
