var AuthContainer = React.createClass({
	receiveSignal: function (signal) {
		if (signal === "authorized") {
			console.log('auth authorized')
				this.props.status("authorized");

		} else {

		};
	},

	updateUser: function (id) {
		this.props.id(id)
	},

	render: function () {
		return (
			<div>
				<Signup status={this.receiveSignal} id={this.updateUser}/>
				<Login status={this.receiveSignal} id={this.updateUser}/>
			</div>
		);
	},

});