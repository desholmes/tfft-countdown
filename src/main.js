// import TfftCountdown from "./modules/tfftCountdown";
// import "./scss/main.scss";

const config = {
  containerId: "tfft-countdown",
  targetDate: { date: 30, month: 0, year: 2021 },
};

const init = () => {
  new TfftCountdown(config);
}

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

