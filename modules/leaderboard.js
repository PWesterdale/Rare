"use strict";

class Leaderboard {
	constructor(storage) {
		this.storage = storage;
	}
	set (data) {
		return new Promise((resolve, reject) => {
			this.storage.push('leaderboard', data).then(() => {
				resolve(this);
			}, (e) => {
				reject(e);
			});
		});
	}
	get (entity) {
		return new Promise((resolve, reject) => {
			this.storage.get('leaderboard').then((data) => {
				resolve(data);
			});
		});
	}
}

module.exports = (storage) => {
	return new Leaderboard(storage)
}