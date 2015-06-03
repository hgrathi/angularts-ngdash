module.exports = function(){
	
	var config = {
		base: '.',
		index: 'index.html',
    	sourcejs: ['./src/**/*.js'],
    	testfixturejs: ['./testfixture/**/*.js'],
		tests: ['./tests/**/*.spec.js'],
		dist: './dist/'
	};
	
	return config;	
};
