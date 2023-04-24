import Card from "./components/Card";
import "./App.css";
import { ProvideFamilies } from "./contexts/ProvideFamilies";

const App = () => {
  return (
    <div className="App">
      <ProvideFamilies>
        <main className="main">
          <Card />
        </main>
      </ProvideFamilies>
    </div>
  );
};

export default App;
