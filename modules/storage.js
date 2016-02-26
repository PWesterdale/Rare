module.exports = function(){

	return (new storage);

	function storage(){
		this.dataStore = {};
		this.save = (entity, value) => {
			return new Promise(function(resolve, reject){
				if(!this.dataStore[entity]){
					this.dataStore[entity] = [];
				}
				this.dataStore[entity].push(value);
				resolve();
			}.bind(this));
		}
		this.get = (entity) => {
			return new Promise(function(resolve, reject){
				resolve(this.dataStore[entity]);
			}.bind(this))
		}
	}

}