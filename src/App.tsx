import { ConfigProvider, theme } from "antd";
import "./App.css";
import Router from "./router";

function App() {
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
      <Router />
    </ConfigProvider>
  );
}

export default App;
