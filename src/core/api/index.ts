import { API_SPRING_BOOT, PROVINCES_API_LINK } from "@constant";
import axios from "axios";
import { ILogin } from "../types";

export const apiProvinces = () =>
  axios.get(PROVINCES_API_LINK).then((res) => res.data);

const instanceAxios = axios.create({
  baseURL: API_SPRING_BOOT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});

export const apiLogin = ({ username, password }: ILogin) => {
  return instanceAxios
    .post("/auth/login", {
      username,
      password,
    })
    .then((res) => res.data);
};
