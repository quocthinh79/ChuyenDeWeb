import { IGetOnlyAccountReq, IUpdateAccountReq } from "@core";
import instanceAxios from "../instance-axios";

export const apiGetOnlyAccount = ({ token }: IGetOnlyAccountReq) => {
  return instanceAxios
    .get("/account/detail", {
      params: {
        token,
      },
    })
    .then((res) => res.data);
};

export const apiUpdateAccount = ({
  address,
  addressDetail,
  email,
  fullName,
  id,
  password,
  phone,
  resetToken,
  sex,
  state,
  token,
  userName,
  dob,
}: IUpdateAccountReq) => {
  const accountDTO = {
    address,
    addressDetail,
    email,
    fullName,
    id,
    password,
    phone,
    resetToken,
    sex,
    state,
    userName,
    dob,
  };

  return instanceAxios
    .put(
      "/account/update",
      { ...accountDTO },
      {
        params: {
          token,
        },
      }
    )
    .then((res) => res.data);
};
