"use strict";

class MockStorage {
	constructor() {
		this.dataStore = {};
	}
	push (entity, value) {
		return this.set(entity, value);
	}
	set (entity, value) {
		return new Promise(function(resolve, reject){
			if(!this.dataStore[entity]){
				this.dataStore[entity] = [];
			}
			this.dataStore[entity].push(value);
			resolve();
		}.bind(this));
	}
	get (entity) {
		return new Promise(function(resolve, reject){
			resolve(this.dataStore[entity]);
		}.bind(this))
	}
	remove (entity, value) {
		return new Promise(function(resolve, reject){
			delete this.dataStore[entity];
		});
	}
}

module.exports = () => {
	return new MockStorage()
}
