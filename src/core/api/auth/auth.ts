import { ILogin, IRegister } from "src/core/types";
import instanceAxios from "../instance-axios";

export const apiLogin = ({ username, password }: ILogin) => {
  return instanceAxios
    .post("/auth/login", {
      username,
      password,
    })
    .then((res) => res.data);
};

export const apiRegister = ({ username, password, email }: IRegister) =>
  instanceAxios
    .post("/auth/register", {
      username,
      password,
      email,
    })
    .then((res) => res.data);
