module.exports = function(){
	
	var config = {
		base: '.',
		index: 'index.html',
    	sourcejs: ['./src/**/*.js'],
    	testfixturejs: ['./tests/**/*.js'],
		tests: [],
		dist: './dist/'
	};
	
	return config;	
};
