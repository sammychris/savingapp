import logOut from './logOut';

export default (res) => {
  if (!res.ok) {
    logOut();
    window.location.reload(true);
    return Promise.reject(res.statusText);
  }
  return res.json();
}
