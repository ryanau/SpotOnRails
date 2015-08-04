
//= require jquery
//= require react
//= require eventemitter3
//= require_tree ./components
//= require_tree .
//= require_self

var App = React.createClass({
	getInitialState: function () {
		return {
			// showPinsContainer: false,
			// showAuthContainer: true,
			// currentUser: 0,
			// showLogOut: false,
		}
	},

	// componentWillMount: function () {
	// 	var url = "/check"
	// 	$.ajax({
	// 		url: url,
	// 		type: 'GET',
	// 		dataType: 'JSON',
	// 		error: function () {
	// 			console.log('error on registering user');
	// 		},
	// 		success: function (id) {
	// 			this.setState({
	// 				currentUser: id,
	// 			});
	// 			this.receiveSignal("authorized");
	// 			console.log('user already logged in as ' + id);
	// 		}.bind(this),
	// 	});
	// },

	// receiveSignal: function (signal) {
	// 	if (signal === "authorized") {
	// 		this.setState({
	// 			showPinsContainer: true,
	// 			showAuthContainer: false,
	// 			showLogOut: true,
	// 		})
	// 	} else if (signal === "unauthorized") {
	// 		console.log('unauthorized!')
	// 		this.setState({
	// 			showPinsContainer: false,
	// 			showAuthContainer: true,
	// 			currentUser: 0,
	// 			showLogOut: false,
	// 		})
	// 	};
	// },

	updateUser: function (id) {
		this.setState({
			currentUser: id,
		});
		console.log('currentuser: ' + id);

	},

	render: function() {
		return (
			<div>
				<Session />
			</div>
		);
	},
});

React.render(<App />, document.getElementById('app'));