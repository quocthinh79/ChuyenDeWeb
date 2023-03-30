import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { ContainerFixed, Content, Layout } from "@components";

function RouterAuthLayout() {
  const StyledContainerFixed = styled(ContainerFixed)`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  const StyledContent = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Layout>
      <StyledContainerFixed position="center">
        <StyledContent>
          <ContainerFixed>
            <Outlet />
          </ContainerFixed>
        </StyledContent>
      </StyledContainerFixed>
    </Layout>
  );
}

export default RouterAuthLayout;
