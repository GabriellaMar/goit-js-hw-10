const debounce = require('lodash.debounce');
import Notiflix from 'notiflix';
import './css/styles.css';
import API from "./fetchCountries.js";
import { createCountriesMarkupList, createCountryInfoList, getCountryLanguages } from "./createMarkup";

const DEBOUNCE_DELAY = 300;


const inputEl = document.getElementById('search-box');
console.log(inputEl)
const countryEl = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')
console.log(countryEl)



function onInput(e) {
  const inputValue = e.target.value.trim().toLowerCase();
  if (!inputValue) {
    updateCountryList('');
    updateCountryInfoList('');
    return;
  }
  let markup ='';
  let markupInfo = '';
  API.fetchCountries(inputValue)
    .then(countries => {
      console.log(countries)
      const filteredCountries = countries.filter((country) => {
        return country.name.common.toLowerCase().startsWith(inputValue);
      });

      if (filteredCountries.length === 0) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        return;
      }

      if (filteredCountries.length === 1) {
        markupInfo = filteredCountries.reduce(
          (acc, country) => acc + createCountryInfoList(country), ''
        );
        updateCountryList('');
        updateCountryInfoList(markupInfo);

      } else if (filteredCountries.length > 1 && filteredCountries.length < 10) {
        markup = filteredCountries.reduce(
          (acc, country) => acc + createCountriesMarkupList(country), ''
        );
        updateCountryList(markup);
        updateCountryInfoList('');
      } else {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      updateCountryList('');
      updateCountryInfoList('');
      console.log(error);
    });
}


const onDebounceinput = debounce(onInput, DEBOUNCE_DELAY)
inputEl.addEventListener('input', onDebounceinput);



function updateCountryList(markup) {
  countryEl.innerHTML = markup
}


function updateCountryInfoList(markupInfo) {
  countryInfo.innerHTML = markupInfo
}





