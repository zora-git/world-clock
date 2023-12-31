function updateTime() {
  let pragueElement = document.querySelector("#prague");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueTime = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = moment()
    .tz("Europe/Prague")
    .format("MMM D, YYYY");
  pragueTimeElement.innerHTML = pragueTime.format(
    "h:mm:ss:SS [<small>]A[</small]"
  );
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = moment().tz("Asia/Seoul").format("MMM D, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format(
    "h:mm:ss:SS [<small>]A[</small]"
  );
}

updateTime();
setInterval(updateTime, 1);
