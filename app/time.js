let selectedTimeZone;

const timeElement = document.getElementById("time");

function setTime() {
  const currentDate = new Date();

  const label = currentDate.toLocaleTimeString("en-us", {
    timeZone: selectedTimeZone,
    hour12: true,
  });
  const datetimeAttribute = currentDate.toLocaleTimeString("en-us", {
    timeZone: selectedTimeZone,
    hour12: false,
  });

  timeElement.textContent = label;
  timeElement.setAttribute("datetime", datetimeAttribute);
}

function setTimezone(timeZone) {
  selectedTimeZone = timeZone;

  setTime();
}
