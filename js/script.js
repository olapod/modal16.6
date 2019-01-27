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
   
    resp.forEach(function(item){
        var data = {
            name: item.name,
            capital: item.capital,
            area: item.area,
            population: item.population,
            timezone: item.timezones
        }
      
  
    var templateCountryData = document.getElementById('template-country-data').innerHTML;
    var tablePlace = document.getElementById('countries');

    Mustache.parse(templateCountryData);
	
    var generatedData = Mustache.render(templateCountryData, data);
    
    tablePlace.insertAdjacentHTML('beforeend', generatedData);    
    

    })
}

        
    
