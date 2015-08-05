
var ShowActivePins = React.createClass({
	getInitialState: function () {
		return {
			activePins: [],
		};
	},

	componentDidMount: function () {
		this.interval = setInterval(function() {
			this.getActivePins();
		}.bind(this), 1000)
	},

	componentWillUnmount: function() {
		clearInterval(this.interval);
	},

	getActivePins: function () {
		var url = "/pins";
		var params = {query: "all_active_pins"};
		$.ajax ({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			data: params,
			error: function() {
				console.log('error on getting active pins');
			},
			success: function (data) {
				if (this.isMounted()) {
					this.setState({
						activePins: data
					});
				}
			}.bind(this)
		});
	},

	handleRequestPin: function (id) {
		App.pins.requestPin(id);
	},

	render: function() {
		var styles = {
		  uList: {
		    paddingLeft: 0,
		    listStyleType: "none"
		  },
		  listGroup: {
		    margin: '5px 0',
		    borderRadius: 5
		  },
		  removeItem: {
		    fontSize: 20,
		    float: "left",
		    position: "absolute",
		    top: 12,
		    left: 6,
		    cursor: "pointer",
		    color: "rgb(222, 79, 79)"
		  },
		  item: {
		    paddingLeft: 20,
		    fontSize: 17
		  }
		};

		var pins = this.state.activePins.map(function (pin, index) {
			return (
				<li key={pin.id} className="list-group-item" style={styles.listGroup}>
					<span style={styles.item}>
					ID: {pin.id} | Active: {pin.active} | 
					<button onClick={this.handleRequestPin.bind(this, pin.id)}>Request Pin</button>
					</span>
				</li>
			)
		}.bind(this));
		return(
			<div>
				<h1>Active Pins</h1>
				<ul style={styles.uList}>
					{pins}
				</ul>
			</div>
		);
	},
});








