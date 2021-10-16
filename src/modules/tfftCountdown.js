import "./tfffCountdown.scss";

class TfftCountdown {
  #id = "tfft-countdown";
  #dom = {};
  #containerEl;
  #targetDate;

  constructor(configProps = {}) {
    const { containerId = "tfft-countdown", targetDate } = configProps;

    const containerEl = document.getElementById(containerId);

    if (!containerEl) {
      throw Error(`Container #${containerId} does not exist!`);
    }

    this.#containerEl = containerEl;
    this.#targetDate = new Date(
      targetDate.year,
      targetDate.month,
      targetDate.date
    ).getTime();

    this.#setUp();
  }

  #setUp() {
    this.#createDom();
    this.#setTimer();
    this.#updateClock();
  }

  #createDom() {
    this.#dom = {
      days: this.#containerEl.querySelector(".days"),
      daysDigit: this.#containerEl.querySelector(".days .digit"),
      hours: this.#containerEl.querySelector(".hours"),
      hoursDigit: this.#containerEl.querySelector(".hours .digit"),
      minutes: this.#containerEl.querySelector(".minutes"),
      minutesDigit: this.#containerEl.querySelector(".minutes .digit"),
      seconds: this.#containerEl.querySelector(".seconds"),
      secondsDigit: this.#containerEl.querySelector(".seconds .digit"),
    };
  }

  #updateClock() {
    const today = new Date().getTime();
    const diff = this.#targetDate - today;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dayBg = `bg-${Math.floor((days / 30) * 100)}`;
    const hourBg = `bg-${Math.floor((hours / 24) * 100)}`;
    const minutesBg = `bg-${Math.floor((minutes / 60) * 100)}`;
    const secondsBg = `bg-${Math.floor((seconds / 60) * 100)}`;

    // Update days
    this.#dom.days.classList.remove(this.#dom.minutes.classList[2]);
    this.#dom.days.classList.add(dayBg);
    this.#dom.daysDigit.innerHTML = days;
    // Update hours
    this.#dom.hours.classList.remove(this.#dom.minutes.classList[2]);
    this.#dom.hours.classList.add(hourBg);
    this.#dom.hoursDigit.innerHTML = hours;
    // Update minutes
    this.#dom.minutes.classList.remove(this.#dom.minutes.classList[2]);
    this.#dom.minutes.classList.add(minutesBg);
    this.#dom.minutesDigit.innerHTML = minutes;
    // Update seconds
    this.#dom.seconds.classList.remove(this.#dom.seconds.classList[2]);
    this.#dom.seconds.classList.add(secondsBg);
    this.#dom.secondsDigit.innerHTML = seconds;
  }

  #setTimer() {
    const timer = setInterval(() => {
      this.#updateClock();
    }, 1000);
  }
}

if (window) {
  window.TfftCountdown = TfftCountdown;
}

export default TfftCountdown;
