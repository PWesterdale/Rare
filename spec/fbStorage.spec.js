var env = require('node-env-file');
env('.env');

var fbStorage = require('../modules/fbStorage')();

describe("Firebase Storage", function() {

  it("should instantiate a firebase object", function(done) {
  	expect(fbStorage.ref).toBeDefined();
  	done();
  });

  it("should set data", function(done) {
  	fbStorage.set('test', {testing : 'test'});
  	done();
  });

  it("should retrieve data", function(done){
  	fbStorage.get('test').then(function(data){
  		expect(data).toEqual({testing : 'test'});
  		done();
  	});
  });

});