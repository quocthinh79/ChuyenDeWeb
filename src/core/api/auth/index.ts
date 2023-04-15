import { ILogin } from "src/core/types";
import instanceAxios from "../instance-axios";

export const apiLogin = ({ username, password }: ILogin) => {
  return instanceAxios
    .post("/auth/login", {
      username,
      password,
    })
    .then((res) => res.data);
};
