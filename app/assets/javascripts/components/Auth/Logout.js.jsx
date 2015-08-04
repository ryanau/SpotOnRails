var Logout = React.createClass({
	handleClick: function () {
		App.machine.logout();
	},

	render: function () {
		return (
			<button onClick={this.handleClick}>Logout</button>
		);
	},

});