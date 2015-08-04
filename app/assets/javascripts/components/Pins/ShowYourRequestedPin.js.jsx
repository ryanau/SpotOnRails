var ShowYourRequestedPin = React.createClass({
	getInitialState: function () {
		return {
			yourRequestedPin: [],
		};
	},

	componentDidMount: function () {
		this.interval = setInterval(function() {
			this.getYourRequestedPin();
		}.bind(this), 1000)
	},

	componentWillUnmount: function() {
		clearInterval(this.interval);
	},

	getYourRequestedPin: function () {
		var url = "/pins";
		var params = {query: "your_requested_pin"};
		$.ajax ({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			data: params,
			error: function() {
				console.log('error on getting your accepted pins');
			},
			success: function (data) {
				if (this.isMounted()) {
					this.setState({
						yourRequestedPin: [data]
					});
				}
			}.bind(this)
		});
	},

	handleCancelRequest: function (id) {
		App.pins.cancelRequest(id);
	},

	render: function () {
		var styles = {
		  uList: {
		    paddingLeft: 0,
		    listStyleType: "none"
		  },
		  listGroup: {
		    margin: '5px 0',
		    borderRadius: 5
		  },
		  item: {
		    paddingLeft: 20,
		    fontSize: 17
		  }
		};
		var pins = this.state.yourRequestedPin.map(function (pin, index) {
			return (
				<li key={pin.id} className="list-group-item" style={styles.listGroup}>
					<span style={styles.item}>
					ID: {pin.id} | Created By: {pin.user_id} |
					<button onClick={this.handleCancelRequest.bind(this, pin.id)}>Cancel Request</button>
					</span>
				</li>
			)
		}.bind(this));
		return(
			<div>
				<h1>Pin You Requested</h1>
				<ul style={styles.uList}>
					{pins}
				</ul>
			</div>
		);
	},

});