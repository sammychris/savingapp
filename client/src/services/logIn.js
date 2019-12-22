
const postRequestOptions = (data) => { // post Options
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify(data),
  };
};


function validateJson(res) {
  console.log(res);
  // if (!res.ok) {
  //   logOut();
  //   location.reload(true);
  //   return Promise.reject(res.statusText);
  // }
  return res.json();
}


function logIn(url, data) { // Login A User
  return fetch(url, postRequestOptions(data))
    .then(validateJson)
    .then((res) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
      }
      return res;
    });
}

export default logIn;
