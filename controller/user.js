const db = require('../models');

module.exports = {
	register(req, res){
		// db('test').insert(
		// 	[{
		// 		'firstname': 'samuel',
		// 		'lastname': 'John',
		// 		'email': 'ebusameric@gmail.com',
		// 		'password': 'sammychris12'
		// 	}]
		// ).then(a => console.log('inserted successfully!'))
		res.json({ message: 'This is the most amazing of all time!' });
	},

	login(req, res){

	}
}