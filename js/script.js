'use strict'

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'usa';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    var countryData = [];
    
    resp.forEach(function(item){
        var data = {
            name: item.name,
            capital: item.capital,
            area: item.area,
            population: item.population,
            timezone: item.timezones
        }
       
    console.log(countryData);
    countryData.push (data) 
    
    for (var i = 0; i < countryData.length; i++) {
      
  
        for (var key of ['name', 'capital', 'area', 'population', 'timezone']) {
            var liEl = document.createElement('li');
        liEl.innerText = countryData[i][key];
        
        countriesList.appendChild(liEl);
        }
    }

    })
}

        
    
