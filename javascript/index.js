setInterval(function () {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    londonDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
    londonTimeElement.innerHTML =
      moment().format("HH:mm:ss") + "<small>GMT</small>";

    let newyorkElement = document.querySelector("#new-york");
    if (newyorkElement) {
      let newyorkDateElement = newyorkElement.querySelector(".date");
      let newyorkTimeElement = newyorkElement.querySelector(".time");

      let newyorkTime = moment().tz("America/New_York");
      newyorkDateElement.innerHTML = newyorkTime.format("dddd, MMMM Do YYYY");
      newyorkTimeElement.innerHTML =
        newyorkTime.format("HH:mm:ss") + "<small>EST</small>";
    }
  }
}, 1000);

function updateCity(event) {
  const cityTimeZone = event.target.value;
  const cityName = cityTimeZone.replace("_", " ").split("/")[1];
  const cityTime = moment().tz(cityTimeZone);
  const citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = (
    <div class="city">
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
      <div class="time">
        ${cityTime.format("HH:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
  let cityElement = document.querySelector("#city");
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");

  let cityTimeZone = document.querySelector("#city").value;
  let cityTime = moment().tz(cityTimeZone);

  cityDateElement.innerText = cityTime.format("dddd, MMMM Do YYYY");
  cityTimeElement.innerHTML = `${cityTime.format("HH:mm:ss")}<small>${cityTime.format("A")}</small>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateTime);
