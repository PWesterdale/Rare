var storage = require('../modules/mockStorage')();
var leaderboard = require('../modules/leaderboard')(storage);

describe("Leaderboard Tests", function() {

  it("should save player and score", function(done) {

    leaderboard.set({playerId : 12, score: 500}).then((leaderboard) => {

      leaderboard.get().then((data) => {

        expect(data).toEqual([{
          playerId : 12,
          score: 500
        }]);

        done();

      });

    });

  });

});