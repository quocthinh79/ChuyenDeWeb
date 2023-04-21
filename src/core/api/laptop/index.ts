import { ILaptop } from "src/core/types";
import instanceAxios from "../instance-axios";
import { IPagination } from "src/core/types/interfaces/IPagination";
import qs from "qs";

export const apiGetLaptop = ({
  limit = 10,
  start = 1,
  brands = [],
  chipCpus = [],
  types = [],
}: IPagination) => {
  return instanceAxios
    .get(`/laptop`, {
      params: {
        start,
        limit,
        brands,
        chipCpus,
        types,
      },
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
  avatarFile,
  imageFiles,
}: ILaptop) => {
  const list = imageFiles.fileList.map((file: any) =>
    file.originFileObj ? file.originFileObj : file
  );

  const passProps = {
    battery,
    brand,
    chipCpu,
    color,
    cpu,
    display,
    facilityId: 1,
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

  // formData.append("battery", battery);
  // formData.append("brand", brand);
  // formData.append("chipCpu", chipCpu);
  // formData.append("color", color);
  // formData.append("cpu", cpu);
  // formData.append("display", display);
  // formData.append("facilityId", facilityId);
  // formData.append("graphics", graphics);
  // formData.append("laptopState", laptopState);
  // formData.append("price", price);
  // formData.append("productName", productName);
  // formData.append("quantity", quantity);
  // formData.append("ram", ram);
  // formData.append("storage", storage);
  // formData.append("type", type);
  // formData.append("weight", weight);

  formData.append(
    "laptopDTO",
    JSON.stringify({
      ...passProps,
    })
  );

  formData.append("avatarFile", avatarFile.file?.originFileObj);

  list.forEach((file: any) => {
    formData.append("imageFiles", file);
  });

  console.log(formData);

  return instanceAxios
    .post("/laptop", formData, {
      // params: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

// export const apiAddLaptop = ({ images }: any) => {
//   const list = images.fileList.map((file: any) =>
//     file.originFileObj ? file.originFileObj : file
//   );

//   const formData = new FormData();

//   formData.append("images", images.file);

//   list.forEach((file: any) => {
//     formData.append("imagesList", file);
//   });

//   return instanceAxios
//     .post("/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((res) => res.data);
// };
