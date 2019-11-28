function validMail(email) {
	return /^\w+@{1}\w+\.com$/gi.test(email);
}

module.exports = {
	register(req, res, next){
		const register = (obj) => ({ 
			firstname: obj.firstname,
			lastname: obj.lastname,
			email: obj.email,
			password: obj.password
		})

		for(let i in data) {
			if(data[i] === undefined)	return res.json({ message:  i+ ' is not defined!' });
			if(!data[i].trim()) return res.json({ message: i+ ' should not be empty!' });
			if(!validMail(data['email'])) return res.json({ messages: 'Email is invalid!'})
			if(data['password'].length < 8 ) return res.json({ message: 'Password should not be less than 8!'});
		}
		next();
	},

	login(req, res, next){
		const login = (obj) => ({ email: obj.email, password: obj.password });
		const data = login(req.body);
		for(let i in data) {
			if(data[i] === undefined)	return res.json({ message:  i+ ' is not defined!' });
			if(!data[i].trim()) return res.json({ message: i+ ' should not be empty!' });
			if(!validMail(data['email'])) return res.json({ messages: 'Email is invalid!'})
			if(data['password'].length < 8 ) return res.json({ message: 'password should not be less than 8'});
		}
		next();
	}

}
