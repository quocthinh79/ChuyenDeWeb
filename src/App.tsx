import { ThemeProvider } from "@emotion/react";
import { ConfigProvider } from "antd";
import { useMemo } from "react";
import "./App.css";
import { customToken } from "./core/theme";
import Router from "./router";
import theme from "antd/es/theme";

const { useToken } = theme;

function App() {
  const { token: uiFrameworkToken } = useToken();
  const token = useMemo(
    () => ({ ...uiFrameworkToken, ...customToken }),
    [uiFrameworkToken]
  );
  return (
    <ConfigProvider
      theme={
        {
          // algorithm: theme.darkAlgorithm,
          // token: {
          //   colorPrimary: "#000",
          // },
        }
      }
    >
      <ThemeProvider theme={token}>
        <Router />
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
