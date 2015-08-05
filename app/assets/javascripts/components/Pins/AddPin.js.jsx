var AddPin = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		App.pins.addPin(App.session.get().user_id);
	},

	render: function () {
		return (
			<div>
				<h3>Add Pin</h3>
				<button
					onClick={this.handleSubmit}>
					Add Pin
				</button>
			</div>
		);
	},

});