searchBarOnChange = (cities) => {
  var contentSearchBar = document.getElementById("searchBar").value;
  if (contentSearchBar == contentSearchBar.toLowerCase()) {
    let firstLetterContentSearchBar = contentSearchBar.charAt(0).toUpperCase();
    contentSearchBar = firstLetterContentSearchBar + contentSearchBar.slice(1);
  }
  const city = cities.find(city => city.nm == contentSearchBar);
  getFullWeather(city, false);
}

window.onload = async () => {
  const cities = await getCities();
  const searchBar = document.getElementById("searchBar");
  searchBar.onchange = searchBarOnChange.bind(this, cities);
  getFullWeather(cities[0], true);
}