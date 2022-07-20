var apiKey='1dab0dfc45879cdd035cf9d4ede5dc50'
var cityEl=$('h2#city')
var dateEl=$('h3#date')
var weatherIconEl=$('img#weather-icon')
var temperatureEl=$('span#temperature')
var humidityEl=$('span#temperature')
var windEl=$('span#wind')
var uvIndexEl=$('span#uv-index')
var cityListEl=$('div.cityList')
var cityInput=$('#city-input')

$(document).ready(function() {
    var pastCities = []

    function compare(a,b) {
        var cityA = a.city.toUpperCase
        var cityB = b.city.toUpperCase

        var comparison = 0;
        if (cityA > cityB) {
            comparison = 1
        } else if (cityA < cityB) {
            comparison =-1
        }
        return comparison
    }

    function loadCities() {
        var storedCities = JSON.parse(localStorage.getItem('pastCities'))
        if (storedCities) {
            pastCities = storedCities
        }
    }
    function storeCities() {
        localStorage.setItem('pastCities', JSON.stringify(pastCities))
    }
    function buildLinkFromInput(city) {
        if (city) {
            return 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={apiKey}'
        }
    }
    function buildLinkFromID(id) {
        if (id) {
            return 'https://api.openweathermap.org/data/2.5/weather?id=S{id}&appid={apiKey}'
        }
    }
    function displayCities(pastCities) {
        cityListEl.empty()
        pastCities.splice(5)
        var sortedCities = [...pastCities]
        sortedCities.sort(compare)
        sortedCities.forEach(function (location) {
            var cityDiv = $('<div>').addClass('col-12 city')
            var cityBtn = $('<button>').addClass('btn btn-light city-btn').text(location.city)
            cityDiv.append(cityBtn)
            cityListEl.append(cityDiv)
        })
    }
    function setUVIndexColor(uvi) {
        if (uvi < 3) {
            return 'green'
        } else if (uvi >= 3 && uvi < 6) {
            return 'yellow'
        } else if (uvi <= 6 && uvi < 8) {
            return 'orange'
        } else if (uvi >= 8 && uvi < 11) {
            return 'red'
        } else return 'purple'
    }
    
})