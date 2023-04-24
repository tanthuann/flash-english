// libs
import { ConfigProvider } from "antd";
// components
import Card from "./components/Card";
// contexts
import { ProvideFamilies } from "./contexts/ProvideFamilies";
// others
import "antd/dist/reset.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ConfigProvider prefixCls="flash">
        <ProvideFamilies>
          <main className="main">
            <Card />
          </main>
        </ProvideFamilies>
      </ConfigProvider>
    </div>
  );
};

export default App;
