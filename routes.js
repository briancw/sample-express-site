module.exports = function(app, passport) {

	app.get('/', home.index );
	app.get('/sample', is_logged_in, home.sample );

	// Login
	app.get('/login', account.login );
	app.post('/login', account.login_post );

	// Signup
	app.get('/signup', account.signup );
	app.post('/signup', account.signup_post );

};

function is_logged_in(req, res, next) {
	if (req.isAuthenticated()){
		return next();
	}

	res.redirect('/');
}