var PinsContainer = React.createClass({
	getInitialState: function () {
		return {
			session: App.session.get(),
			accepted: App.pins.userAcceptedStatus(),
			engaged: App.pins.userEngagedStatus(),
		}
	},

	setSession: function () {
		this.setState({
			session: App.session.get(),
		});
	},

	reloadAccepted: function () {
		console.log('reloading accepted')
		App.pins.userAcceptedStatus().done(function(accepted){
			console.log('setting state accepted')
			this.setState({accepted: accepted});
		}.bind(this));
	},

	reloadEngaged: function () {
		App.pins.userEngagedStatus().done(function(engaged){
			this.setState({engaged: engaged});
		}.bind(this));
	},

	componentDidMount: function () {
		App.pins.on('engaged_changed', this.reloadEngaged);
		App.pins.on('accepted_changed', this.reloadAccepted);
		App.auth.on('logged_in', this.reloadSession);
		App.session.on('session_loaded', this.setSession);
		App.pins.load()
	},

	componentWillUnmount: function () {
		App.pins.off('engaged_changed', this.reloadEngaged);
		App.pins.off('accepted_changed', this.reloadAccepted);
		App.auth.off('logged_in', this.reloadSession);
		App.session.off('session_loaded', this.setSession);
	},

	render: function () {
		return (
			<div className="PinsContainer">{this.renderContent()}</div>
		)
	},

	renderContent: function(){
		if (this.state.engaged ===  false) {
			return (
				<div>
					<AddPin/>
					<ShowActivePins/>
				</div>
			);
		}
		if (this.state.engaged === true) {
			return (
					<ShowYourPin/>
			);
		}
		if (this.state.accepted === true) {
			return (
					<ShowYourAcceptedPin/>
			);
		}
		return (
			<h4>Loading...</h4>
		);
	},

});
