!function(){
	var data = null;
	var session = App.session = {};

	Object.assign(session, EventEmitter.prototype);

	session.get = function () {
		return data;
	};

	session.load = function () {
		return $.getJSON('/session').then(function(responseData) {
			data = responseData;
			session.emit('session_loaded', data)
			data
		});
	};

	session.load();
}();
