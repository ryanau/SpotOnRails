var Logout = React.createClass({
	handleClick: function () {
		App.auth.logout();
	},

	render: function () {
		return (
			<button onClick={this.handleClick}>Logout</button>
		);
	},

});