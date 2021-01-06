import TfftCountdown from "./modules/tfftCountdown";
import "./scss/main.scss";

const config = {
  containerId: "tfft-countdown",
  targetDate: "dark",
};

const terminal = new TfftCountdown(config);
