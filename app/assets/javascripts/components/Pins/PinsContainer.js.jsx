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

	setAccepted: function () {
		this.setState({
			accepted: true,
		})
	},

	reloadEngaged: function () {
		console.log('engage reload')
		this.setState({
			engaged: App.pins.userEngagedStatus(),
		});
	},

	componentDidMount: function () {
		console.log('remounting')
		console.log(this.state.engaged)
		this.reloadEngaged
		App.pins.on('user_added_pin', this.reloadEngaged);
		App.pins.on('user_deleted_pin', this.reloadEngaged);
		App.machine.on('logged_in', this.reloadSession);
		App.session.on('session_loaded', this.setSession);
	},

	componentWillUnmount: function () {
		App.session.off('session_loaded', this.setSession);
	},

	render: function () {
		console.log('********')
		console.log(this.state.engaged)
		if (this.state.engaged === null) {
			return (
				<h4>Loading</h4>
			);
		} else if (this.state.engaged) {
			return (
				<div>
					<ShowYourPin/>
				</div>
			);
		} else if (!this.state.accepted) {
			return (
				<div>
					<AddPin/>
					<ShowActivePins/>
				</div>
			);
		} else if (!this.state.engaged) {
			return (
				<div>
					<AddPin/>
					<ShowActivePins/>
				</div>
			);
		};
	},

});
