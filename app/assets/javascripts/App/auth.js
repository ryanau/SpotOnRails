!function(){
	var data = null;
	var auth = App.auth = {};

	Object.assign(auth, EventEmitter.prototype);

	auth.login = function (attributes) {
		App.helper.postRequest('/login', attributes).then(function(responseData) {
			console.log('logged+in')
			App.session.reload()
		});
	};

	auth.signup = function (attributes) {
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
				App.session.reload()
			}.bind(this),
		});
	};

	auth.logout = function () {
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
				App.session.reload()
			}.bind(this),
			error: function (data) {
				console.log('error on logging user out');
			},
		});
	};

}();