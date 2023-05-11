

// function fetchCountries(name) {
//     return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages`)
//     .then(
//         (response) => {
//          if (!response.ok) {
//          throw new Error(response.status);
//         }
//     return response.json();
//         })
//   }
    
//   export default { fetchCountries }


  function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages&per_page=5&page=1`)
    .then(
        (response) => {
            // console.log(response)
         if (!response.ok) {
         throw new Error(response.status);
        }
    return response.json();
        })
  }
    
  export default { fetchCountries }


  
// function onInput(e) {
//   const inputValue = e.target.value.trim().toLowerCase();
//   if (!inputValue) {
//     updateCountryList('');
//     updateCountryInfoList('');
//     return;
//   }
//   let markup = '';
//   API.fetchCountries(inputValue)
//     .then(countries => {
//       console.log(countries)
//       const filteredCountries = countries.filter((country) => {
//         return country.name.common.toLowerCase().startsWith(inputValue);
//       });

//       if (filteredCountries.length === 0) {
//         Notiflix.Notify.failure('Oops, there is no country with that name');
//         return;
//       }

//       if (filteredCountries.length === 1) {
//         markup = filteredCountries.reduce(
//           (acc, country) => acc + createCountryInfoList(country), ''
//         );

//       } else if (filteredCountries.length < 10) {
//         markup = filteredCountries.reduce(
//           (acc, country) => acc + createCountriesMarkupList(country),''
//         );
//       } else {
//         Notiflix.Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       return 
//     }
//       updateCountryList,
//       updateCountryInfoList
//     })
//     .catch(error => {
//       Notiflix.Notify.failure('Oops, something went wrong!');
//       console.log(error);
//     });
// }
