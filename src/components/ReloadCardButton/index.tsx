// libs
import { ReloadOutlined } from "@ant-design/icons";
// contexts
import { useFamilies } from "../../contexts/ProvideFamilies";
// others
import "./styles.scss";

const ReloadCardButton = () => {
  const { setTriggerCrawl } = useFamilies();

  return (
    <div className="reload-card-button-wrapper">
      <ReloadOutlined onClick={() => setTriggerCrawl(new Date().getTime())} />
    </div>
  );
};

export default ReloadCardButton;
