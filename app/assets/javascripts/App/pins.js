!function(){

	var pins = App.pins = {};

	Object.assign(pins, EventEmitter.prototype);

	pins.on('user_action', function(){
		pins.emit('dropped_pin_changed');
		pins.emit('accepted_pin_changed');
	});

	pins.userAcceptedPinStatus = function () {
		return App.helper.getRequest('/accepted_pin');
	};	

	pins.userDroppedPinStatus = function () {
		return App.helper.getRequest('/dropped_pin');
	};	

	pins.userDroppedPinAcceptedStatus = function () {
		return App.helper.getRequest('/dropped_pin_accepted');
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
		App.helper.putRequest('/pins/' + id, {query: "request", pin_id: id}).then(
		pins.emit('user_action'));
	};

	pins.cancelRequest = function (id) {
		alert('canceling')
		App.helper.putRequest('/pins/' + id, {query: "cancel_request", pin_id: id}).then(
		pins.emit('user_action'));
	}

	pins.load = function () {
		pins.emit('dropped_pin_changed');
		pins.emit('accepted_pin_changed');
		pins.emit('dropped_pin_accepted_changed');
	};
}();