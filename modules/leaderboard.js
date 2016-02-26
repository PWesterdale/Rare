module.exports = function(storage){

	return (new leaderboard(storage));

	function leaderboard(storage) {
		this.save = (data) => {
			return new Promise((resolve, reject) => {
				storage.save('leaderboard', data).then(() => {
					resolve();
				});
			});
		}
		this.get = () => {
			return new Promise((resolve, reject) => {
				storage.get('leaderboard').then((data) => {
					resolve(data);
				});
			});
		}
	}
}