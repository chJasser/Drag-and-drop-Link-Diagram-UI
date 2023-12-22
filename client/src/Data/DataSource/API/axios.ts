import axios from "axios";
//const BASE_URL:string = "http://localhost:5000/api_v1";
export const BASE_URL: string = "http://localhost:3500";

export const axiosPrivate = axios.create({
  baseURL: BASE_URL + "/api_v1",
  headers: { "Content-Type": "application/json" },
});
