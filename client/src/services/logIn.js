import validateJson from './validateJson';
import requestOption from './requestOption';


function logIn(url, data) { // Login A User
  return fetch(url, requestOption('POST', data))
    .then(validateJson)
    .then((res) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userid', JSON.stringify(res.user.id));
      }
      return res;
    });
}

export default logIn;
