import TfftCountdown from "./modules/tfftCountdown";

const config = {
  containerId: "tfft-countdown",
  targetDate: { date: 23, month: 11, year: 2021 },
};

const init = () => {
  // eslint-disable-next-line no-new
  new TfftCountdown(config);
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
