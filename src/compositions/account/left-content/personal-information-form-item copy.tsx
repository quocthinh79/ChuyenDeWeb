import {
  DatePicker,
  FormItem,
  InputText,
  Radio,
  RadioGroup,
} from "@components";
import { FORMAT_DATE_DEFAULT } from "@constant";
import { memo } from "react";

export function PersonalInformationFormItem() {
  return (
    <>
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="name"
        label="Họ tên"
      >
        <InputText placeholder="Nhập họ và tên" />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="phone"
        label="Số điện thoại"
      >
        <InputText placeholder="Nhập số điện thoại" />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="email"
        label="Email"
      >
        <InputText placeholder="Nhập email của bạn" />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="birthday"
        label="Ngày sinh"
      >
        <DatePicker block format={FORMAT_DATE_DEFAULT} />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: "Không được để trống",
          },
        ]}
        name="sex"
        label="Giới tính"
      >
        <RadioGroup name="sex">
          <Radio value="Nam">Nam</Radio>
          <Radio value="Nữ">Nữ</Radio>
        </RadioGroup>
      </FormItem>
    </>
  );
}

export default memo(PersonalInformationFormItem);
