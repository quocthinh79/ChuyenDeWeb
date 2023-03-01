import "./App.css";
import { Content, Footer, Header, Layout } from "./components";

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div>This is header</div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div>This is Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>This is footer</Footer>
    </Layout>
  );
}

export default App;
