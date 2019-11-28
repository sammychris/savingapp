const { user, details } = require('../controller');
const { validators } = require('../middlewares');

console.log(validators)
module.exports = (app) => {
	app.post('/api/user/register', validators.register, user.register);
	app.post('/api/user/login', validators.login, user.login);
}