var ShowYourDroppedAcceptedPin = React.createClass({
	getInitialState: function () {
		return {
			yourPins: [],
		};
	},

	componentDidMount: function () {
		this.interval = setInterval(function() {
			this.getYourPin();
		}.bind(this), 1000)
	},

	componentWillUnmount: function() {
		clearInterval(this.interval);
	},

	getYourPin: function () {
		var url = "/pins";
		var params = {query: 'your_dropped_pin'};
		$.ajax ({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			data: params,
			error: function() {
				console.log('error on getting your pins');
			},
			success: function (data) {
				if (this.isMounted()) {
					this.setState({
						yourPins: [data],
					});
				}
			}.bind(this)
		});
	},

	handleRemovePin: function (pin_id) {
		App.pins.removePin(pin_id);
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
		var pins = this.state.yourPins.map(function (pin, index) {
			return (
				<li key={pin.id} className="list-group-item" style={styles.listGroup}>
					<span style={styles.item}>
					ID: {pin.id} | Accepted by: {pin.accepted_user_id} |
					<button onClick={this.handleRemovePin.bind(this, pin.id)}>Remove Pin</button>
					</span>
				</li>
			)
		}.bind(this));
		return(
			<div>
				<h1>Pin You Dropped</h1>
				<ul style={styles.uList}>
					{pins}
				</ul>
			</div>
		);
	},

});