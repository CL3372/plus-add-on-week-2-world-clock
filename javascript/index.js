setInterval(function () {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
  londonTimeElement.innerHTML =
    moment().format("HH:mm:ss") + "<small>GMT</small>";

  let newyorkElement = document.querySelector("#new-york");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");

  let newyorkTime = moment().tz("America/New_York");
  newyorkDateElement.innerHTML = newyorkTime.format("dddd, MMMM Do YYYY");
  newyorkTimeElement.innerHTML =
    newyorkTime.format("HH:mm:ss") + "<small>EST</small>";
}, 1000);
