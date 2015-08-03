//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require_tree ./components
//= require_tree .
//= require_self

var App = React.createClass({
	getInitialState: function () {
		return {
			showPinsContainer: false,
			showAuthContainer: true,
			currentUser: 0,
		}
	},

	componentWillMount: function () {
		var url = "/check"
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			error: function () {
				console.log('error on registering user');
			},
			success: function (id) {
				this.setState({
					currentUser: id,
				});
				this.receiveSignal("authorized");
				console.log('user already logged in as ' + id);
			}.bind(this),
		});
	},

	receiveSignal: function (signal) {
		if (signal === "authorized") {
			this.setState({
				showPinsContainer: true,
				showAuthContainer: false,
			})
		} else if (signal === "unauthorized") {
			this.setState({
				showPinsContainer: false,
				showAuthContainer: true,
				currentUser: 0,
			})
		};
	},

	updateUser: function (id) {
		this.setState({
			currentUser: id,
		});
		console.log('currentuser: ' + id);

	},

	render: function() {
		return (
			<div>
				{ this.state.showAuthContainer ? <AuthContainer status={this.receiveSignal} id={this.updateUser}/> : null }
				{ this.state.showPinsContainer ? <PinsContainer status={this.receiveSignal}/> : null }
			</div>
		);
	},
});


React.render(<App />, document.getElementById('app'));