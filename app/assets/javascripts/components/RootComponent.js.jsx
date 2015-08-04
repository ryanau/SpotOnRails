RootComponent = React.createClass({
	getInitialState: function () {
		return {
			session: App.session.get(),
		};
	},

	setSession: function () {
		this.setState({
			session: App.session.get(),
		});
	},

	reloadSession: function () {
		App.session.reload()
	},

	componentDidMount: function () {
		App.auth.on('logged_in', this.reloadSession);
		App.session.on('session_loaded', this.setSession);
	},

	componentWillUnmount: function () {
		// App.auth.off('logged_in', this.reloadSession);
		// App.session.off('session_loaded', this.setSession);
	},

	render: function () {
		if (this.state.session === null) {
			return (
			<h4>Loading...</h4>
			);
		} else if (this.state.session.user_id) {
			return (
				<div>
					<Logout/>
					<PinsContainer/>
				</div>
			);
		} else {
			return  (
				<AuthContainer />
			)
		};
	},
});
