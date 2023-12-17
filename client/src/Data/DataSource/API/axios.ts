import axios from "axios";
//const BASE_URL:string = "http://localhost:5000/api_v1";
const BASE_URL: string = "http://localhost:3500/api_v1";
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
