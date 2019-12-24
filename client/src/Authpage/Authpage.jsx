import React from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';



function Authpage (props) {
	const query = new URLSearchParams(useLocation().search);
	const token = query.get('token');
	const user  = JSON.parse(query.get('user'));
	console.log(token, 'This is the token');
	console.log(user, 'This is the users');
	localStorage.setItem('token', token);
	localStorage.setItem('userid', user.id);
	return (
		<div>
			<h1>Authenticated successfully...</h1>
			<Redirect to="/dashboard" />
		</div>
	);
}

export default Authpage;
