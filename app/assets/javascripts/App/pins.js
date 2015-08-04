!function(){
	var engaged = null;
	var pins = App.pins = {};

	Object.assign(pins, EventEmitter.prototype);

	pins.userAcceptedStatus = function () {
		return $.getJSON('/accepted').then(function(responseData) {
			responseData;
		});
	};	

	pins.userEngagedStatus = function () {
		console.log('engaging')
		var url = "/engaged"
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
			error: function () {
				console.log('error getting user engaged');
			},
			success: function (data) {
				console.log('success')
				return data;
			}.bind(this),
		});
	};

	pins.addPin = function (id) {
		var url = "/pins"
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSON',
			data: {id: id},
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
			error: function () {
				console.log('error on adding pins');
			},
			success: function (data) {
				console.log('user added pin')
				pins.emit('user_added_pin')
			}.bind(this),
		});
	};

	pins.removePin = function (id) {
		var url = "/pins/" + id
		$.ajax({
			url: url,
			type: 'DELETE',
			dataType: 'JSON',
			data: {id: id},
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
			error: function () {
				console.log('error on deleting pin');
			},
			success: function (data) {
				console.log('pin deleted')
				pins.emit('user_deleted_pin')
			}.bind(this),
		});
	};
}();