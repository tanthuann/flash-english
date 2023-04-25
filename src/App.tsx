// libs
import { ConfigProvider } from "antd";
// components
import Card from "./components/Card";
import ReloadCardButton from "./components/ReloadCardButton";
// contexts
import { ProvideFamilies } from "./contexts/ProvideFamilies";
// others
import "antd/dist/reset.css";
import "./App.css";

const App = () => {
  return (
    <ConfigProvider prefixCls="flash">
      <ProvideFamilies>
        <div className="App">
          <main className="main">
            <Card />
          </main>
          <ReloadCardButton />
        </div>
      </ProvideFamilies>
    </ConfigProvider>
  );
};

export default App;
