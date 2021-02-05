const url = 'https://restcountries.eu/rest/v2/name';

export default function fetchCountries (searchQuery) {
  return fetch(`${url}/${searchQuery}`);
}
