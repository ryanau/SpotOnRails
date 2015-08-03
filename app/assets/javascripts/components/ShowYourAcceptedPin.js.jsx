var ShowYourAcceptedPin = React.createClass({
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
		var params = {query: 'your_accepted_pin', user_id: this.props.user};
		$.ajax ({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			data: params,
			error: function() {
				console.log('error on getting your accepted pin');
			},
			success: function (data) {
				console.log('getting your accepted pin')
				if (this.isMounted()) {
					console.log(data)
					this.setState({
						yourPins: [data],
					});
				}
			}.bind(this)
		});
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
					ID: {pin.id} | Created By: {pin.user_id} |
					<button>Cancel Request</button>
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