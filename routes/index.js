const passport          = require('passport');
const { user, details } = require('../controller');
const { validators }    = require('../middlewares');


// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//       return next();
//   }
//   res.redirect('/');
// };

module.exports = (app) => {
	app.post('/api/user/register', validators.register, user.register);
	app.post('/api/user/login', validators.login, user.login);
	app.get('/api/users', passport.authenticate('jwt', { session: false }), user.users) // For Admin
	app.get('/api/user/:id', user.account);

	app.get('/auth/facebook', passport.authenticate('facebook'));

	app.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { failureRedirect: '/login' }),
		  function(req, res) {
		  	console.log('welcome sir')
		    // Successful authentication, redirect home.
		    res.redirect('/');
		  });
}
