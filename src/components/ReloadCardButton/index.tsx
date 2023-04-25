// libs
import { ReloadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useRef } from "react";
// contexts
import { useFamilies } from "../../contexts/ProvideFamilies";
// others
import "./styles.scss";

const ReloadOutlinedMotion = motion(ReloadOutlined);

const ReloadCardButton = () => {
  const { setTriggerCrawl } = useFamilies();
  const ref = useRef<any>();

  return (
    <div ref={ref} className="reload-card-button-wrapper">
      <ReloadOutlinedMotion
        drag
        dragConstraints={ref}
        whileTap={{ rotate: 360, animationFillMode: "forwards" }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring" }}
        onClick={() => setTriggerCrawl(new Date().getTime())}
      />
    </div>
  );
};

export default ReloadCardButton;
