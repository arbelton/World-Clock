let atlantaElement = document.querySelector("#atlanta");
let atlantaDateElement = atlantaElement.querySelector(".date");
let atlantaTimeElement = atlantaElement.querySelector(".time");
let atlantaTime = moment().tz("America/New_York");

atlantaDateElement.innerHTML = atlantaTime.format("MMMM Do YYYY");
atlantaTimeElement.innerHTML = atlantaTime.format(
  "h:mm:ss[<small>]A[</small>]"
);
