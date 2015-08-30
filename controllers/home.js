module.exports = {

	index: function(req, res){
		res.render('home.ejs', {
			sample_var: 'bar'
		});
	},

	foo: function(req, res){
		res.render('home.ejs');
	},

	sample: function(req, res){
		res.render('home.ejs', {
			sample_var: secret_private_function()
		});
	}


};

function secret_private_function(){
	return 'secretz';
}