import TfftCountdown from "./modules/tfftCountdown";
import "./scss/main.scss";

const config = {
  containerId: "tfft-countdown",
  targetDate: { date: 30, month: 0, year: 2021 },
};

const terminal = new TfftCountdown(config);
