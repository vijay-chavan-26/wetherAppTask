var animation = document.getElementsByClassName("animation");
window.onscroll = function () {
  for (let i = 0; i < animation.length; i++) {
    var topElm = animation[i].offsetTop;
    var btmElm = animation[i].offsetTop + animation[i].clientHeight;
    var top_screen = window.pageYOffset;
    var bottom_screen = window.pageYOffset + window.innerHeight;
    if (bottom_screen > topElm && top_screen < btmElm) {
      animation[i].classList.add("animation-opacity");
    } else {
      animation[i].classList.remove("animation-opacity");
    }
  }
};

const apiKey = "2d6a98532f671d4d40994a2655eb8506"; // Replace with your own API key
const city = "Pune";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("cloudy-temp").textContent =
      Math.round(data.clouds.all) + "%";
    document.getElementById("humidity-temp").textContent =
      Math.round(data.main.humidity) + "%";
    document.getElementById("wind-temp").textContent =
      Math.round(data.wind.speed) + "km/h";
    document.getElementById("city").textContent = data.name;
    document.getElementById("degree").textContent =
      Math.round(data.main.temp - 273.15) + "°C";
    date = new Date();
    document.getElementById("date").textContent = date.toLocaleTimeString();
    document.getElementById(
      "temp-img"
    ).src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  })
  .catch((error) => {
    console.log(error);
  });

const showTempData = (cityName, tempCity) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.textContent}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      tempCity.textContent = Math.round(data.main.temp - 273.15) + "°C";
      dd = new Date();
      console.log(cityName.nextElementSibling)
      cityName.nextElementSibling.textContent = dd.toLocaleDateString()

    })
    .catch((error) => {
      console.log(error);
    });
};

showTempData(document.getElementById('cityName1'), document.getElementById('city1-temp-deg')) 
showTempData(document.getElementById('cityName2'), document.getElementById('city2-temp-deg')) 
showTempData(document.getElementById('cityName3'), document.getElementById('city3-temp-deg')) 
