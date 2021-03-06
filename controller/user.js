const jwt    = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db     = require('../models');


module.exports = {
	register(req, res){
		const { firstname, lastname, email, password, phone_no, address } = req.body;
		db('users').where({ email })
			.then(user => {
				// check if user already exits!
				if(user[0]) return res.json({ message: 'User already exists!' });

				bcrypt.hash(password, 12).then(hash => {

				  // create new user
					db('users').insert([{ firstname, lastname, email, password: hash, phone_no, address }])
						.then(() => res.json({ message: 'Registered successfully!' }));

				}).catch(err => console.error(err));

			});
	},

	login(req, res){
		const { email, password } = req.body;
		db('users').where({ email })
			.then(users => {
				const user = users[0];
				const pay_load = {};

				// check if user does not exits!
				if(!user) return res.json({ message: 'User does not exists!' });

				// compare password
    		bcrypt.compare(password, user.password).then(passed => {
				  // passed is equal to false...
				  if(!passed) return res.json({ message: '!Wrong Password!'});

				  pay_load.id 				= user.id;
			    pay_load.firstname 	= user.firstname;
			    pay_load.lastname 	= user.lastname;
			    pay_load.email 			= user.email;
			    pay_load.password 	= user.password;

					// loggedin successs and create a token
					const token = 'Bearer '+jwt.sign(pay_load, process.env.JWT_SECRET);

				  return res.json({ user, token });

				}).catch(err => console.error(err));

			});
	},

	fbLogin(req, res){
		const { firstname, lastname, email, password, id } = req.user;
		const pay_load = {};
		pay_load.id 				= id;
		pay_load.firstname 	= firstname;
		pay_load.lastname 	= lastname;
    pay_load.email 			= email;
    pay_load.password 	= password;

		const token = 'Bearer '+jwt.sign(pay_load, process.env.JWT_SECRET);

		res.redirect('http://localhost:3000/authenticated?token='+token+'&'+'user='+JSON.stringify(req.user));
	},

	account(req, res){

	},

	users(req, res){
		db('users')
			.then(a => res.json(a));
	}

}
