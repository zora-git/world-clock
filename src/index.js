function updateTime() {
  let pragueElement = document.querySelector("#prague");
  if (pragueElement) {
    let pragueDateElement = pragueElement.querySelector(".date");
    let pragueTimeElement = pragueElement.querySelector(".time");
    let pragueTime = moment().tz("Europe/Prague");

    pragueDateElement.innerHTML = moment()
      .tz("Europe/Prague")
      .format("MMM D, YYYY");
    pragueTimeElement.innerHTML = pragueTime.format(
      "h:mm:ss:SS [<small>]A[</small]"
    );
  }
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = moment()
      .tz("Asia/Seoul")
      .format("MMM D, YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss:SS [<small>]A[</small]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM D YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss:SS"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
