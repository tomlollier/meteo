getFullWeather = (city, isInit) => {
  document.getElementById("nameCitySelect").innerHTML = city.nm;
  getWeather(city);
  getForecast(city, isInit);
}

getCities = () => fetch('citiesfr.json', { headers: { "Content-Type": "application/json; charset=utf-8" } })
  .then(res => res.json());

getDegree = (temp) => temp - 273.15;

getWeather = (city) => {
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + city.id + '&APPID=78300a224b67b61e3ed80533aa056594')
    .then(res => res.json())
    .then(res => {
      document.getElementById("temperature").innerHTML = Math.round(getDegree(res.main.temp)) + "°";
      var weatherIcon = res.weather["0"].id;
      document.getElementById("logoWeather").className = "wi wi-icon-" + weatherIcon;
      console.log(res);
    });
}

getForecast = (city, isInit) => {
  fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + city.id + '&APPID=78300a224b67b61e3ed80533aa056594')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (isInit) {
        const dayWeek = new Date(res.list["0"].dt * 1000 - 3600000).getDay();
        generateDays(dayWeek);
      }

      var numbertoday = new Date(res.list["0"].dt * 1000 - 3600000).getHours();
      var zeroHour = 8;

      for (var i = numbertoday; i > 0; i = i - 3) {
        zeroHour--;
      }

      var jour1 = [
        res.list[zeroHour + 0].main.temp,
        res.list[zeroHour + 1].main.temp,
        res.list[zeroHour + 2].main.temp,
        res.list[zeroHour + 3].main.temp,
        res.list[zeroHour + 4].main.temp,
        res.list[zeroHour + 5].main.temp,
        res.list[zeroHour + 6].main.temp,
        res.list[zeroHour + 7].main.temp
      ];

      var jour2 = [
        res.list[zeroHour + 8].main.temp,
        res.list[zeroHour + 9].main.temp,
        res.list[zeroHour + 10].main.temp,
        res.list[zeroHour + 11].main.temp,
        res.list[zeroHour + 12].main.temp,
        res.list[zeroHour + 13].main.temp,
        res.list[zeroHour + 14].main.temp,
        res.list[zeroHour + 15].main.temp
      ];

      var jour3 = [
        res.list[zeroHour + 16].main.temp,
        res.list[zeroHour + 17].main.temp,
        res.list[zeroHour + 18].main.temp,
        res.list[zeroHour + 19].main.temp,
        res.list[zeroHour + 20].main.temp,
        res.list[zeroHour + 21].main.temp,
        res.list[zeroHour + 22].main.temp,
        res.list[zeroHour + 23].main.temp
      ];

      var j1max = Math.max(...jour1);
      var j1min = Math.min(...jour1);
      var j2max = Math.max(...jour2);
      var j2min = Math.min(...jour2);
      var j3max = Math.max(...jour3);
      var j3min = Math.min(...jour3);

      document.getElementById("temperatureMaxDay1").innerHTML = Math.round(getDegree(j1max)) + "°";
      document.getElementById("temperatureMinDay1").innerHTML = Math.round(getDegree(j1min)) + "°";
      document.getElementById("temperatureMaxDay2").innerHTML = Math.round(getDegree(j2max)) + "°";
      document.getElementById("temperatureMinDay2").innerHTML = Math.round(getDegree(j2min)) + "°";
      document.getElementById("temperatureMaxDay3").innerHTML = Math.round(getDegree(j3max)) + "°";
      document.getElementById("temperatureMinDay3").innerHTML = Math.round(getDegree(j3min)) + "°";

      var weatherIconDay1 = res.list[zeroHour + 6].weather["0"].id;
      var weatherIconDay2 = res.list[zeroHour + 14].weather["0"].id;
      var weatherIconDay3 = res.list[zeroHour + 22].weather["0"].id;
      document.getElementById("logoFuturWeatherDay1").className = "wi wi-icon-" + weatherIconDay1;
      document.getElementById("logoFuturWeatherDay2").className = "wi wi-icon-" + weatherIconDay2;
      document.getElementById("logoFuturWeatherDay3").className = "wi wi-icon-" + weatherIconDay3;
    });
}

generateDays = (dayWeek) => {
  if (dayWeek == 1) {
    document.getElementById("headerTempDay1").innerHTML = "Mardi";
    document.getElementById("headerTempDay2").innerHTML = "Mercredi";
    document.getElementById("headerTempDay3").innerHTML = "Jeudi";
  }

  if (dayWeek == 2) {
    document.getElementById("headerTempDay1").innerHTML = "Mercredi";
    document.getElementById("headerTempDay2").innerHTML = "Jeudi";
    document.getElementById("headerTempDay3").innerHTML = "Vendredi";
  }

  if (dayWeek == 3) {
    document.getElementById("headerTempDay1").innerHTML = "Jeudi";
    document.getElementById("headerTempDay2").innerHTML = "Vendredi";
    document.getElementById("headerTempDay3").innerHTML = "Samedi";
  }

  if (dayWeek == 4) {
    document.getElementById("headerTempDay1").innerHTML = "Vendredi";
    document.getElementById("headerTempDay2").innerHTML = "Samedi";
    document.getElementById("headerTempDay3").innerHTML = "Dimanche";
  }

  if (dayWeek == 5) {
    document.getElementById("headerTempDay1").innerHTML = "Samedi";
    document.getElementById("headerTempDay2").innerHTML = "Dimanche";
    document.getElementById("headerTempDay3").innerHTML = "Lundi";
  }

  if (dayWeek == 6) {
    document.getElementById("headerTempDay1").innerHTML = "Dimanche";
    document.getElementById("headerTempDay2").innerHTML = "Lundi";
    document.getElementById("headerTempDay3").innerHTML = "Mardi";
  }

  if (dayWeek == 7) {
    document.getElementById("headerTempDay1").innerHTML = "Lundi";
    document.getElementById("headerTempDay2").innerHTML = "Mardi";
    document.getElementById("headerTempDay3").innerHTML = "Mercredi";
  }
}