import axiosClient from "@/api/axios";
import { AxiosInstance } from "axios";
import { BikeDetails } from "./bike.validators";

export const bikeQueries = {
  getAllBikes: async () => {
    // return (await client.get<GetMeQueryResponse>('/me')).data;
    return (await axiosClient.get<BikeDetails[]>("/api/v1/bikes")).data;
  },
};
