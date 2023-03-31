import { noop } from "@constant";
import { DayjsType, EDatePicker } from "@core";
import styled from "@emotion/styled";
import { default as DatePickerCustom } from "./date-picker";

export interface DatePickerProps {
  defaultPickerValue?: DayjsType;
  defaultValue?: DayjsType;
  onChange?: (date: DayjsType | null, dateString: string) => void;
  picker: EDatePicker;
}

const StyledDatePicker = styled(DatePickerCustom)``;

function DatePicker({
  defaultPickerValue,
  defaultValue,
  onChange = noop,
  picker = EDatePicker.Date,
}: DatePickerProps) {
  const passProps = { defaultPickerValue, defaultValue, onChange, picker };
  return <StyledDatePicker {...passProps} />;
}

export default DatePicker;
