
function logOut() {
  // remove user from local storage to log user out
  localStorage.removeItem('userid');
  localStorage.removeItem('token');
}

export default logOut;
