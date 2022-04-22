const TfftCountdown = (configProps = {}) => {
  const { containerId = "tfft-countdown", targetDate } = configProps;
  const containerEl = document.getElementById(containerId);
  let dom;

  if (!containerEl) {
    throw Error(`Container #${containerId} does not exist!`);
  }

  const targetDateTime = new Date(
    targetDate.year,
    targetDate.month,
    targetDate.date
  ).getTime();

  const createDom = () => {
    dom = {
      days: containerEl.querySelector(".days"),
      daysDigit: containerEl.querySelector(".days .digit"),
      hours: containerEl.querySelector(".hours"),
      hoursDigit: containerEl.querySelector(".hours .digit"),
      minutes: containerEl.querySelector(".minutes"),
      minutesDigit: containerEl.querySelector(".minutes .digit"),
      seconds: containerEl.querySelector(".seconds"),
      secondsDigit: containerEl.querySelector(".seconds .digit"),
    };
  };

  const updateClock = () => {
    const today = new Date().getTime();
    const diff = targetDateTime - today;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dayBg = `bg-${Math.floor((days / 30) * 100)}`;
    const hourBg = `bg-${Math.floor((hours / 24) * 100)}`;
    const minutesBg = `bg-${Math.floor((minutes / 60) * 100)}`;
    const secondsBg = `bg-${Math.floor((seconds / 60) * 100)}`;

    // Update days
    dom.days.classList.remove(dom.minutes.classList[2]);
    dom.days.classList.add(dayBg);
    dom.daysDigit.innerHTML = days;
    // Update hours
    dom.hours.classList.remove(dom.minutes.classList[2]);
    dom.hours.classList.add(hourBg);
    dom.hoursDigit.innerHTML = hours;
    // Update minutes
    dom.minutes.classList.remove(dom.minutes.classList[2]);
    dom.minutes.classList.add(minutesBg);
    dom.minutesDigit.innerHTML = minutes;
    // Update seconds
    dom.seconds.classList.remove(dom.seconds.classList[2]);
    dom.seconds.classList.add(secondsBg);
    dom.secondsDigit.innerHTML = seconds;
  };

  const setTimer = () => {
    setInterval(() => {
      updateClock();
    }, 1000);
  };

  const setUp = () => {
    createDom();
    setTimer();
    updateClock();
  };

  setUp();
};

if (window) {
  window.TfftCountdown = TfftCountdown;
}

export default TfftCountdown;
