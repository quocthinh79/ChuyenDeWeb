import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useIncrease } from "../../../hooks";
import Button from "../../button";
import Space from "../../space";
import SpaceCompact from "../../space/compact";
import InputNumber from "../input-number";

export function IncreaseInput() {
  const { decrease, increase, inputRef, value } = useIncrease();

  return (
    <Space>
      <SpaceCompact>
        <Button onClick={decrease} icon={<MinusOutlined />}></Button>
        <InputNumber value={value} ref={inputRef} />
        <Button onClick={increase} icon={<PlusOutlined />}></Button>
      </SpaceCompact>
    </Space>
  );
}

export default IncreaseInput;
