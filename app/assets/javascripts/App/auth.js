!function(){
	var data = null;
	var machine = App.machine = {};

	Object.assign(machine, EventEmitter.prototype);

	machine.login = function (attributes) {
		var url = "/login"
		return $.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSON',
			data: attributes,
			headers: {'X-CSRF-Token': '<%= form_authenticity_token.to_s %>'},
			error: function () {
				console.log('error on logging in user');
			},
			success: function (data) {
				console.log('success in logging in user');
				console.log(data);
				machine.emit('logged_in', data)
			}.bind(this),
		});
	};

	machine.signup = function (attributes) {
		var url = "/users"
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSON',
			data: attributes,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
			error: function () {
				console.log('error on registering user');
			},
			success: function (data) {
				console.log('success in registering user');
				console.log(data);
				machine.emit('logged_in', data)
			}.bind(this),
		});
	};

	machine.logout = function () {
		var url = "/logout"
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
			success: function (data) {
				console.log('logged out');
				machine.emit('logged_in', data);
			}.bind(this),
			error: function (data) {
				console.log('error on logging user out');
			},
		});
	};

}();