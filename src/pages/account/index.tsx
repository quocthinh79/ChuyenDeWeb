import { LeftRightLayout } from "@compositions";

export function Account() {
  return (
    <LeftRightLayout
      leftChildren={<div>This is left content</div>}
      rightChildren={<div>This is right content</div>}
    />
  );
}

export default Account;
