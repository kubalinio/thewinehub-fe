import axiosClient from "@/api/axios";
import { AxiosInstance } from "axios";

export const bikeQueries = {
  getAllBikes: () => async () => {
    // return (await client.get<GetMeQueryResponse>('/me')).data;
    return (await axiosClient.get("/bikes")).data;
  },
};
