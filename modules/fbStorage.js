"use strict";

var Firebase = require('firebase');

class fbStorage {
	constructor() {
		this.ref = new Firebase(process.env.FIREBASE_URL);
		this.ref.authWithCustomToken(process.env.FIREBASE_KEY);
	}
	_setAndPush(entity, value, type) {
		return new Promise(function(resolve, reject){
			var entityRef = this.ref.child(entity);
			entityRef[type](value);
			resolve();
		}.bind(this))
	}
	set (entity, value) {
		return this._setAndPush(entity, value, 'set');
	}
	push (entity, value) {
		return this._setAndPush(entity, value, 'push');
	}
	get (entity) {
		return new Promise(function(resolve, reject){
			var entityRef = this.ref.child(entity);
			entityRef.once('value', function(value){
				resolve(value.val());
			}, function(err){
				reject(err);
			});
		}.bind(this));
	}
	remove (entity) {
		return new Promise(function(resolve, reject){
			var entityRef = this.ref.child(entity);
			entityRef.remove();
			resolve();
		}.bind(this));
	}
}

module.exports = () => {
	return new fbStorage()
}
