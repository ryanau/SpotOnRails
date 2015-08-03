var PinsContainer = React.createClass({
	getInitialState: function () {
		return {
			showAddPin: true,
			showActivePins: true,
			showYourPin: false,
		}
	},

	receiveSignal: function (signal) {
		if (signal === "pinAdded") {
			this.setState({
				showAddPin: false,
				showActivePins: false,
				showYourPin: true,
			})
		} else {

		};
	},

	render: function() {
		return (
			<div>
			{ this.state.showAddPin ? <AddPin status={this.receiveSignal}/> : null }
			{ this.state.showActivePins ? <ShowActivePins status={this.receiveSignal}/> : null }
			{ this.state.showYourPin ? <ShowYourPin status={this.receiveSignal}/> : null }
			</div>
		);
	},
});
