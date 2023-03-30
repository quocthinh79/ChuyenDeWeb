import React, { useState } from "react";
import CheckBox from "../check-box";

export function RememberMe() {
  const [checked, setChecked] = useState(true);

  return (
    <CheckBox onChange={() => setChecked(!checked)} checked={checked}>
      Remember me
    </CheckBox>
  );
}

export default RememberMe;
