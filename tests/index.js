
describe('Application', function(){
	var app;

	before(function(done){
		require('index.js', function(){
			app = module.exports;
			done();
		});
	});

	it('should initiate without errors', function(){
		assert.doesNotThrow(app.init);
	});
});