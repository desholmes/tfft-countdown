
class TfftCountdown {
  #id = "tfft-countdown";
  #containerEl;
  #targetDate;
  
  constructor(configProps = {}) {
    const {
      containerId = "tfft-countdown",
      targetDate = {},
    } = configProps;

    const containerEl = document.getElementById(containerId);

    if (!containerEl) {
      throw Error(`Container #${containerId} does not exist!`);
    }

    this.#containerEl = containerEl;
    this.#targetDate = targetDate;
    this.#setUp();
  }

  #setUp() {
    console.info("Setup!");
    // create dom refs
    // set timer
    // get % height:
    // dayTop = Math.round(30-seconds)
    // hourTop = Math.round(24-seconds)
    // secMindTop = Math.round(60-seconds)
    // update classes
  }

}

if (window) {
  window.TfftCountdown = TfftCountdown;
}

export default TfftCountdown;
