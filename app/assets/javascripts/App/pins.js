!function(){

	var engaged = null;
	var pins = App.pins = {};

	Object.assign(pins, EventEmitter.prototype);

	pins.on('user_action', function(){
		pins.emit('engaged_changed');
		pins.emit('accepted_changed');
	});

	pins.userAcceptedStatus = function () {
		console.log('getting accepted')
		return App.helper.getRequest('/accepted');
	};	

	pins.userEngagedStatus = function () {
		return App.helper.getRequest('/engaged');
	};

	pins.addPin = function (id) {
		App.helper.postRequest('/pins', {id: id}).then(
		pins.emit('user_action'));
	};

	pins.removePin = function (id) {
		App.helper.deleteRequest('/pins/' + id, {id: id}).then(
		pins.emit('user_action'));
	};

	pins.requestPin = function (id) {
		App.helper.putRequest('/pins/' + id, {query: "accept", pin_id: id}).then(
		pins.emit('user_action'));
		debugger
		console.log('pin requested');
	};

	pins.load = function () {
		pins.emit('engaged_changed');
		pins.emit('accepted_changed');
	};
}();