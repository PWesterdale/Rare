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

  it("should retrieve set data", function(done){
  	fbStorage.get('test').then(function(data){
  		expect(data).toEqual({testing : 'test'});
  		done();
  	});
  });

  it("should push data", function(done) {
  	fbStorage.push('testArray', {testing : 'test'}).then((data) => {
  		done();
  	});
  });

  it("should remove data", function(done) {
  	fbStorage.remove('testArray').then(() => {
  		done();
  	});
  });

});