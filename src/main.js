// import TfftCountdown from "./modules/tfftCountdown";
// import "./scss/main.scss";

const config = {
  containerId: "tfft-countdown",
  targetDate: { date: 23, month: 11, year: 2021 },
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

