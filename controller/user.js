const db = require('../models');

module.exports = {
	register(req, res){
		const { firstname, lastname, email, password, phone_no, address } = req.body;
		db('users').where({ email })
			.then(user => {
				// check if user already exits!
				if(user[0]) return res.json({ message: 'User already exists!' });

				// create new user
				db('users').insert([{ firstname, lastname, email, password, phone_no, address }])
					.then(() => res.json({ message: 'Registered successfully!' }));
			});
	},

	login(req, res){
		const { email, password } = req.body;
		db('users').where({ email }).select('password')
			.then(user => {
				// check if user does not exits!
				if(!user[0]) return res.json({ message: 'User does not exists!' });

				// check if input password is equal to existed user password!
				if(user[0].password !== password) return res.json({ message: '!wrong password!'});

				// loggedin successs and create a token
				return res.json({ message: 'creates a token and loggedin successfully!'})

			});
	},

	account(req, res){

	},

	users(req, res){
		db('users')
			.then(a => res.json(a));
	}

}
