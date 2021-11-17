async function fetchAndDisplay() {
  let f = await fetch("data.json");
  let t = await f.json();
  document.getElementById("test").textContent = t.date;
  let fc = document.getElementById("forecast");
  for (let forecast of t.forecast) {
    let dt = document.createElement("dt");
    dt.textContent = forecast.time;
    let dd = document.createElement("dd");
    dd.textContent = forecast.weather;
    fc.append(dt, dd);
  }
  console.log(t);
  alert(JSON.stringify(t));
  setTimeout(function () {
    alert("hello");
  }, 10000);
}

document.getElementById("async").addEventListener("click", fetchAndDisplay);

document.getElementById("colour_button").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.getElementById("new_colour").value;
  let ol = document.getElementById("actions");
  let li = createLI(
    "Changed colour to " + document.getElementById("new_colour").value
  );
  ol.appendChild(li);
});

function createLI(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
