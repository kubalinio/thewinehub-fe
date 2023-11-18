import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
// import { getAccessToken } from '@/utils/auth';
// import { API_URL } from '@/config';

export const BASE_URL = "http://localhost:5000";

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: BASE_URL,
});

export default axiosClient;
