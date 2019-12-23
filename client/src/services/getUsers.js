import logOut from './logOut';
import { authHeader } from '../helpers';


function validateJson(res) {
  console.log(res);
  if (!res.ok) {
    logOut();
    window.location.reload(true);
    return Promise.reject(res.statusText);
  }
  return res.json();
}

export default function getUsers(url) { // Get All Requests
  //const { id } = JSON.parse(localStorage.getItem('userid'));
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader() },
  };

  return fetch(url, requestOptions).then(validateJson);
}
