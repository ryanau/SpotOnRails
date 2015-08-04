
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

	componentDidMount: function () {
		App.session.on('session_loaded', this.setSession);
	},

	componentWillUnmount: function () {
		App.session.off('session_loaded', this.setSession);
	},

	render: function () {
		if (this.state.session === null) {
			return (
				<div>
					<h4>Loading...</h4>
				</div>
			);
		} else if (this.state.session.user_id) {
			return <div> welcome back user {this.state.session.user_id} </div>
		} else {
			return <div> please log in </div>
		};
	},
});
