module.exports = function(passport){

	var real_exports = {
		login: function(req, res){
			res.render('login.ejs', {
				message: req.flash('loginMessage')
			});
		},

		login_post: function(req, res){
			passport.authenticate('local-login', {
			    successRedirect : '/sample',
			    failureRedirect : '/login',
			    failureFlash : true
			})(req, res);
		},

		signup: function(req, res){
			res.render('signup.ejs', {
				message: req.flash('signupMessage')
			});
		},

		signup_post: function(req, res){
			passport.authenticate('local-signup', {
				successRedirect : '/sample',
				failureRedirect : '/signup',
				failureFlash : true
			})(req, res);
		}
	};

	return real_exports;

};