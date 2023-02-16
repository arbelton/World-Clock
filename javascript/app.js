function updateTime() {
  let atlantaElement = document.querySelector("#atlanta");
  let atlantaDateElement = atlantaElement.querySelector(".date");
  let atlantaTimeElement = atlantaElement.querySelector(".time");

  let atlantaTime = moment().tz("EST");

  atlantaDateElement.innerHTML = atlantaTime.format("MMMM Do YYYY");
  atlantaTimeElement.innerHTML = atlantaTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");

  let cairoTime = moment().tz("Africa/Cairo");

  cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
  cairoTimeElement.innerHTML = cairoTime.format("h:mm:ss [<small>]A[</small>]");

  let parisElement = document.querySelector("#paris");

  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
