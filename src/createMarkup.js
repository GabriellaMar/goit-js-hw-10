 export function createCountriesMarkupList({ flags, name }) {
    return `<li class="country-item">
                 <img class="country-flag" src="${flags.svg}" width ='50' alt="Flag of ${name.common}">
                 <h2 class="country-name">${name.common}</h2>
            </li>`
  }


 export function createCountryInfoList({ flags, name, capital, population, languages }) {
    const languageList = getCountryLanguages({ languages });
    return `
    <div class="country-title-item">
          <li class="country-item">
            <img class="country-flag" src="${flags.svg}" width ='50' alt="Flag of ${name.common}">
            <h2 class="country-name">${name.common}</h2>
       </li>
    </div>
    <p>Capital: ${capital}</p>
    <p>Population:  ${population}</p>
    <p> Languages:  ${languageList}</p>
  `
  }


 export function getCountryLanguages(country) {
    const languages = Object.values(country.languages);
    console.log(languages)
    return languages.join(', ');
  }