<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Weather App</title>
        
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/weathericons.css" />  

    <?php
      var browser = '';
      var browserVersion = 0;

      if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
          browser = 'Opera';
      } else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
          browser = 'MSIE';
      } else if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
          browser = 'Netscape';
      } else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
          browser = 'Chrome';
      } else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
          browser = 'Safari';
          /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
          browserVersion = new Number(RegExp.$1);
      } else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
          browser = 'Firefox';
      }
      if (browser == 'Chrome') {
        echo '<link rel='stylesheet' type='text/css' href='indexChrome.css'>';
      }
      else if (browser == 'Firefox') {
        echo '<link rel='stylesheet' type='text/css' href='indexFirefox.css'>';
      }
    ?> 
  </head>

  <body>
    <div class="container">
      <p id="mySelectHeader">Sélectionner une ville</p>
      <input id="searchBar">
      <div id="backgroundNameCitySelect">
        <p id="nameCitySelect"></p>
      </div>
      <div id="logoWeather" class=""></div>
      <div id="temperature"></div>
      <div id="tempFuturDay">
        <div id="headerTempFuturDay">
          <div id="headerTempDay1"><h2>Tue</h2></div>
          <div id="headerTempDay2"><h2>Wed</h2></div>
          <div id="headerTempDay3"><h2>Thu</h2></div>
        </div>
        <div id="tempDay">
          <div id="tempDay1">
            <div id="logoFuturWeatherDay1" class=""></div>
            <div id="temperatureMaxDay1" class="temp"></div>
            <div id="temperatureMinDay1" class="temp"></div>
          </div>
          <div id="tempDay2">
            <div id="logoFuturWeatherDay2" class=""></div>
            <div id="temperatureMaxDay2" class="temp"></div>
            <div id="temperatureMinDay2" class="temp"></div>
          </div>
          <div id="tempDay3">
            <div id="logoFuturWeatherDay3" class=""></div>
            <div id="temperatureMaxDay3" class="temp"></div>
            <div id="temperatureMinDay3" class="temp"></div>
          </div>
        </div>
      </div>
    </div>
  
  </body>
  <script src="service.js"></script>
  <script src="index.js"></script>
</html>

