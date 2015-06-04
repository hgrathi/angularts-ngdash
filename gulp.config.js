module.exports = function(){

	var config = {
		base: '.',
		index: 'index.html',
		srcbase: './src/',
    	sourcejs: ['./src/**/*.js'],
    	testfixturejs: ['./testfixture/**/*.js'],
		tests: ['./tests/**/*.spec.js'],
		dist: './dist/'
	};

	return config;
};
