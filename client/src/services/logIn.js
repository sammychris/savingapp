import logOut from './logOut';

const postRequestOptions = (data) => { // post Options
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  };
};


function validateJson(res) {
  if (!res.ok) {
    logOut();
    window.location.reload(true);
    return Promise.reject(res.statusText);
  }
  return res.json();
}


function logIn(url, data) { // Login A User
  return fetch(url, postRequestOptions(data))
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
