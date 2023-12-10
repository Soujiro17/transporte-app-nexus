import axios from "axios";

const baseURL = "https://hackatonnexus-2023.onrender.com";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
