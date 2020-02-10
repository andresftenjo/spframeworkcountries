import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL + "/all";

export function getAllCountries(idMov) {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
