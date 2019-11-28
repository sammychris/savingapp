const { user, details } = require('../controller')


module.exports = (app) => {
	app.post('/api/w', user.register);
	app.post('/api/s', user.login);
}