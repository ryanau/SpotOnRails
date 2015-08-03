var Logout = React.createClass({
	logOut: function () {
		console.log('clicked logout')
		var url = "/logout"
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
			success: function (data) {
				this.props.status("unauthorized");
				console.log(data)
			}.bind(this),
			error: function (data) {
				console.log('error on logging user out');
			},
		});
	},

	render: function () {
		return (
			<div>
				<button onClick={this.logOut}>Logout</button>
			</div>
		);
	},

});