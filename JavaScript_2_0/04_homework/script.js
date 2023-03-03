// task 1 --------------------
window.addEventListener("DOMContentLoaded", () => {
  getForecast();
});

async function getForecast() {
  try {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=498817&appid=11c0d3dc6093f7442898ee49d2430d20"
    );
    let resp = await response.json();
    renderForecast(resp);
  } catch (error) {}
}

function renderForecast({ name, main: { temp, humidity }, weather }) {
  document.querySelector("#cityName").textContent = name;
  document.querySelector("#temperatureValue").textContent = (
    temp - 273.1
  ).toFixed(2);
  document.querySelector("#humidityValue").textContent = humidity;
  document.querySelector(
    ".boxImg"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png">`;
}
