
function toFarenheit(celsius) {
    return (9/5) * (celsius+32);
  }
  document.getElementById("demo").innerHTML = toCelsius(window);

window.addEventListener("load", (event) => {
    const el = document.getElementById("user_button");
    el.addEventListener("click", temperature, false);
    alert("Farenheit = ", temperature);
});

