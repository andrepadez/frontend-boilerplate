
describe('Application', function(){
	before(function(done){
		require(['app', 'test'], done);
	});

	after(require.unregister);

	it('should initiate without errors', function(){
		assert.equal(test, 'TESTE');
		assert.doesNotThrow(app.init);
	});
});