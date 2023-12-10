import { axiosInstance } from "../src/services";

export const getUser = async () => {
  const { data } = await axiosInstance.get(
    "/usuarios/get/6575274f426d93dfb90399cb"
  );

  return data;
};
