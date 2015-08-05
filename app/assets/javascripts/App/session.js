!function(){
	var data = null;

	var helper = App.helper = {};
	var session = App.session = {};

	helper.getRequest = function (url) {
		var request = $.ajax({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
		});
		request.done(function (data) {
			console.log('get request done', data)
		});
		request.fail(function (xhr) {
			console.log('get request failed')
		});
		return request;
	};

	helper.postRequest = function (url, params) {
		var request = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSON',
			data: params,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
		});
		request.done(function (data) {
			console.log('post request done', data)
		});
		request.fail(function (xhr) {
			console.log('post request failed')
		});
		return request;
	};

	helper.putRequest = function (url, params) {
		var request = $.ajax({
			url: url,
			type: 'PUT',
			dataType: 'JSON',
			data: params,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
		});
		request.done(function (data) {
			console.log('post request done', data)
		});
		request.fail(function (xhr) {
			console.log('post request failed')
		});
		return request;
	};

	helper.deleteRequest = function (url, params) {
		var request = $.ajax({
			url: url,
			type: 'DELETE',
			dataType: 'JSON',
			data: params,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
		});
		request.done(function (data) {
			console.log('delete request done', data)
		});
		request.fail(function (xhr) {
			console.log('delete request failed')
		});
		return request;
	};

	Object.assign(session, EventEmitter.prototype);

	session.get = function () {
		console.log('getting data')
		return data;
	};

	session.reload = function () {
		return $.getJSON('/session').then(function(responseData) {
			data = responseData;
			console.log('session loading in session')
			data
			App.session.emit('session_loaded', data)
		});

	};
	session.load = function () {
		return $.getJSON('/session').then(function(responseData) {
			data = responseData;
			console.log('session loading')
			session.emit('session_loaded', data)
			data
		});
	};

	session.load();
}();


