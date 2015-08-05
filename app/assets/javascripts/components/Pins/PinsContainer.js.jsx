var PinsContainer = React.createClass({
	getInitialState: function () {
		return {
			session: App.session.get(),
			accepted_pin: App.pins.userAcceptedPinStatus(),
			dropped_pin: App.pins.userDroppedPinStatus(),
			dropped_pin_accepted: App.pins.userDroppedPinAcceptedStatus(),
		}
	},

	setSession: function () {
		this.setState({
			session: App.session.get(),
		});
	},

	reloadAcceptedPin: function () {
		App.pins.userAcceptedPinStatus().done(function(accepted_pin){
			this.setState({accepted_pin: accepted_pin});
		}.bind(this));
	},

	reloadDroppedPin: function () {
		App.pins.userDroppedPinStatus().done(function(dropped_pin){
			this.setState({dropped_pin: dropped_pin});
		}.bind(this));
	},

	reloadDroppedPinAccepted: function () {
		App.pins.userDroppedPinAcceptedStatus().done(function(dropped_pin_accepted){
			this.setState({dropped_pin_accepted: dropped_pin_accepted});
		}.bind(this));
	},

	componentDidMount: function () {
		App.pins.on('dropped_pin_accepted_changed', this.reloadDroppedPinAccepted);
		App.pins.on('dropped_pin_changed', this.reloadDroppedPin);
		App.pins.on('accepted_pin_changed', this.reloadAcceptedPin);
		App.auth.on('logged_in', this.reloadSession);
		App.session.on('session_loaded', this.setSession);
		App.pins.load()
		this.interval = setInterval(function() {
			App.pins.load();
		}.bind(this), 1000)
	},

	componentWillUnmount: function () {
		App.pins.off('dropped_pin_accepted_changed', this.reloadDroppedPinAccepted);
		App.pins.off('accepted_pin_changed', this.reloadAcceptedPin);
		App.pins.off('accepted_pin_changed', this.reloadAcceptedPin);
		App.auth.off('logged_in', this.reloadSession);
		App.session.off('session_loaded', this.setSession);
		clearInterval(this.interval);
	},

	render: function () {
		return (
			<div className="PinsContainer">{this.renderContent()}</div>
		)
	},

	renderContent: function(){
		if (this.state.dropped_pin ===  false && this.state.accepted_pin === false && this.state.dropped_pin_accepted === false) {
			return (
				<div>
					<AddPin/>
					<ShowActivePins/>
				</div>
			);
		}
		if (this.state.dropped_pin_accepted === true) {
			return (
					<ShowYourDroppedAcceptedPin />
			);		
		}
		if (this.state.dropped_pin === true) {
			return (
					<ShowYourPin/>
			);
		}
		if (this.state.accepted_pin === true) {
			return (
					<ShowYourRequestedPin/>
			);
		}
		return (
			<h4>Loading...</h4>
		);
	},

});
