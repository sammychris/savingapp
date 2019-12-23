import validateJson from './validateJson';
import requestOption from './requestOption';

export default function getUsers(url) { // Get All Users
  return fetch(url, requestOption('GET')).then(validateJson);
}
