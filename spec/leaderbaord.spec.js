var request = require('request');

it("should save player and score to memory", function(done) {

	var options = {
		uri: 'http://localhost:8000/',
		method: 'POST',
		json: {
			'playerId' : 12, 'score' : 500
		}
	};

  request(options, function(error, response, body){
    expect(body).toEqual('Saved');
    done();
  });

});

it("should retrieve player and score to memory", function(done) {

  request('http://localhost:8000', function(error, response, body){
    expect(JSON.parse(body)).toEqual([{
    	"playerId" : 12,
    	"score" : 500
    }]);
    done();
  });

});