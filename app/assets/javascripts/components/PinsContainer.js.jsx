var PinsContainer = React.createClass({
	getInitialState: function () {
		return {
			showAddPin: true,
			showActivePins: true,
			showYourPin: false,
			showYourAcceptedPin: false,
		}
	},

	receiveSignal: function (signal) {
		if (signal === "pinAdded") {
			this.setState({
				showAddPin: false,
				showActivePins: false,
				showYourPin: true,
			})
		} else if (signal === "pinRequested") {
			this.setState({
				showAddPin: false,
				showActivePins: false,
				showYourPin: false,
				showYourAcceptedPin: true,
			})
		};
	},

	render: function() {
		return (
			<div>
				{this.renderAddPin()}
				{this.renderShowActivePins()}
				{this.renderShowYourPin()}
				{this.renderShowYourAcceptedPin()}
			</div>
		);
	},
	renderAddPin: function(){
		if (!this.state.showAddPin) return;
		return <AddPin status={this.receiveSignal} user={this.props.user} /> 
	},
	renderShowActivePins: function(){
		if (!this.state.showActivePins) return;
		return <ShowActivePins status={this.receiveSignal} user={this.props.user} />
	},
	renderShowYourPin: function(){
		if (!this.state.showYourPin) return; 
		return <ShowYourPin status={this.receiveSignal} user={this.props.user} />
	},
	renderShowYourAcceptedPin: function(){
		if (!this.state.showYourAcceptedPin) return; 
		return <ShowYourAcceptedPin status={this.receiveSignal} user={this.props.user} />
	},
});
