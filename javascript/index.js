function updateTime() {
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
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A",
    )}</small></div>
  </div>
  
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
