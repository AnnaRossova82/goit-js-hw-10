import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let countdownInterval;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  enableMinutes: true, // Дозволяє вибирати хвилини
  enableHours: true,   // Дозволяє вибирати години
  dateFormat: "Y-m-d H:i", 
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
   
    const currentTime = new Date();

    if (userSelectedDate <= currentTime) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
      });
      toggleButtonState(false);
    } else {
      startButton.disabled = false;
      startCountdown();
    }
  },
};



flatpickr("#datetime-picker", options);

document.querySelector("[data-start]").addEventListener("click", startCountdown);

function startCountdown() {
  if (countdownInterval) {
    location.reload();
    return;
  }

  const countdownTimer = document.querySelector(".timer");
  const countdownDate = userSelectedDate.getTime();

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const remainingTime = countdownDate - currentTime;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      countdownTimer.textContent = "00:00:00:00";
      startButton.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    countdownTimer.querySelector("[data-days]").textContent = addLeadingZero(days);
    countdownTimer.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    countdownTimer.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
    countdownTimer.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
  }, 1000);

  startButton.disabled = true;
  startButton.removeEventListener("click", startCountdown);
}

const datetimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");

startButton.disabled = true;

if (datetimePicker) {
  datetimePicker.addEventListener("input", function() {
    if (datetimePicker.value.trim() !== "") {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
    }
  });
}



function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
 
  const hours = Math.floor((ms % day) / hour);
 
  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

