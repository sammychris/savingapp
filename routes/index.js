const { user, details } = require('../controller');
const { validators } = require('../middlewares');


module.exports = (app) => {
	app.post('/api/user/register', validators.register, user.register);
	app.post('/api/user/login', validators.login, user.login);
	app.get('/api/users', user.users) // For Admin
	app.get('/api/user/:id', user.account);
}