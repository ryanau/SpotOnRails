// var Session = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			session: null,
// 		};
// 	},

// 	setSession: function () {
// 		this.setState({
// 			session: session.get(),
// 		});
// 	},

// 	componentDidMount: function () {
// 		session.on('session_loaded', this.setSession);
// 	},

// 	componentWillUnmount: function () {
// 		session.off('session_loaded', this.setSession);
// 	},

// 	render: function () {
// 		if (this.state.session === null) {
// 			return (
// 				<div>
// 					<h4>Loading...</h4>
// 				</div>
// 			);
// 		} else if (this.state.session.currentUserId) {
// 			return <App />
// 		} else {
// 			return <AuthContainer />
// 		};
// 	},
// });