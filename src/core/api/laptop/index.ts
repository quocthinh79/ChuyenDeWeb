import { ILaptop } from "src/core/types";
import instanceAxios from "../instance-axios";
import { IPagination } from "src/core/types/interfaces/IPagination";

export const apiGetLaptopByID = (id: number) => {
  return instanceAxios.get(`/laptop/${id}`).then((res) => res.data);
};

export const apiGetImagesLaptop = (id: number) => {
  return instanceAxios.get(`/laptop/images/${id}`).then((res) => res.data);
};

export const apiGetMultipleLaptop = ({
  start = 1,
  limit = 10,
  brands,
  chipCpus,
  types,
}: IPagination) => {
  // const formData = new FormData();

  // formData.append("start", start.toString());
  // formData.append("limit", limit.toString());
  // brands?.map((item) => formData.append("brands", item));
  // types?.map((item) => formData.append("types", item));
  // formData.append("chipCpus", chipCpus);
  // formData.append("types", types);

  return instanceAxios
    .get(`/laptop`, {
      params: {
        start,
        limit,
        brands,
        chipCpus,
        types,
      },
      // paramsSerializer: (params) => {
      //   return JSON.stringify(params);
      // },
    })
    .then((res) => res.data);
};

export const apiAddLaptop = ({
  battery,
  brand,
  chipCpu,
  color,
  cpu,
  display,
  facilityId = 1,
  graphics,
  laptopState,
  price,
  productName,
  quantity,
  ram,
  storage,
  type,
  weight,
  avatarFile,
  imageFiles,
}: ILaptop) => {
  console.log(imageFiles);
  const list = imageFiles.map((file: any) =>
    file.originFileObj ? file.originFileObj : file
  );

  const passProps = {
    battery,
    brand,
    chipCpu,
    color,
    cpu,
    display,
    facilityId,
    graphics,
    laptopState,
    price,
    productName,
    quantity,
    ram,
    storage,
    type,
    weight,
  };

  const formData = new FormData();

  formData.append(
    "laptopDTO",
    JSON.stringify({
      ...passProps,
    })
  );

  formData.append("avatarFile", avatarFile[0]);

  imageFiles.forEach((file: any) => {
    console.log(file);
    formData.append("imageFiles", file);
  });

  console.log(formData);

  return instanceAxios
    .post("/laptop", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};
