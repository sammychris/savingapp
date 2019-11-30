function validMail(email) {
	return /^\w+@{1}\w+\.com$/gi.test(email);
}

function validNum(num) {
	return /^[0-9]{11}$/g.test(num);
}

module.exports = {
	register(req, res, next){
		const data = ((obj) => ({ // using an anonymous function...
			firstname: obj.firstname,
			lastname: obj.lastname,
			email: obj.email,
			password: obj.password,
			phone_no: obj.phone_no,
			address: obj.address
		}))(req.body)

		for(let i in data) { 
			if(data[i] === undefined)	return res.json({ message:  i+ ' is not defined!' });
			if(!data[i].trim()) return res.json({ message: i+ ' should not be empty!' });
			if(data[i].length < 3) return res.json({ message: i+ ' length should not be less than 3!' });
			if(!validMail(data['email'])) return res.json({ messages: 'Email is invalid!'})
			if(data['password'].length < 8 ) return res.json({ message: 'Password should not be less than 8!'});
			if(!validNum(data['phone_no'])) return res.json({ message: 'Number is invalid!'});
		}
		next();
	},

	login(req, res, next){
		// using an anonymous function...
		const data = ((obj) => ({ email: obj.email, password: obj.password }))(req.body);
		for(let i in data) {
			if(data[i] === undefined)	return res.json({ message:  i+ ' is not defined!' });
			if(!data[i].trim()) return res.json({ message: i+ ' should not be empty!' });
			if(data[i].length < 3) return res.json({ message: i+ ' length should not be less than 3!' });
			if(!validMail(data['email'])) return res.json({ messages: 'Email is invalid!'})
			if(data['password'].length < 8 ) return res.json({ message: 'password should not be less than 8'});
		}
		next();
	}

}
