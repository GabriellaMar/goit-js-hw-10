
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


