import { FormItem, InputText, SizeProps, Space } from "@components";
import { EDirectionType } from "@core";
import { memo } from "react";

export function AddressInformationFormItem() {
  return (
    <Space
      size={SizeProps.Middle}
      direction={EDirectionType.Vertical}
      widthFull
    >
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="city"
        label="Tỉnh/Thành phố"
      >
        <InputText placeholder="Nhập Tỉnh/Thành phố" />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="district"
        label="Quận/Huyện"
      >
        <InputText placeholder="Nhập Quận/Huyện" />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="ward"
        label="Phường/Xã"
      >
        <InputText placeholder="Nhập Phường/Xã" />
      </FormItem>
    </Space>
  );
}

export default memo(AddressInformationFormItem);
