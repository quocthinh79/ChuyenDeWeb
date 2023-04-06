import { PROVINCES_API_LINK } from "@constant";

export const apiProvinces = () =>
  fetch(PROVINCES_API_LINK).then((res) => res.json());
