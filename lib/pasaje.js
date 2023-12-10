import { axiosInstance } from "../src/services";

export const cobrarPasaje = async () => {
  const { data } = await axiosInstance.post("/trayectos/create", {
    chofer: "65753a6d2414e63c93c43a43",
    usuario: "6575274f426d93dfb90399cb",
    linea: "657539ef03c388dc5fa7f283",
  });

  return data;
};
