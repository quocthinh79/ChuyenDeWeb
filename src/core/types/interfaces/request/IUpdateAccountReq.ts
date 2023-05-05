import { IGetOnlyAccountRes } from "../response";

export interface IUpdateAccountReq extends IGetOnlyAccountRes {
  token: string;
}
