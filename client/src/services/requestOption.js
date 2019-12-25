import { authHeader } from '../helpers';

export default (method, data) => { // post Options
	console.log(authHeader(), 'Token is store');
	let body = null;
	if (data){
		body = JSON.stringify(data);
	}
  return {
    method,
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body,
  };
};

