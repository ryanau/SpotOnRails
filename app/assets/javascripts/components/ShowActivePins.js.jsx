
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
		var params = {active: true};
		$.ajax ({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			data: params,
			error: function() {
				console.log('error on getting active pins');
			},
			success: function (data) {
				console.log('fetch')
				if (this.isMounted()) {
					this.setState({
						activePins: data
					});
				}
			}.bind(this)
		});
	},

	// handleRemovePin: function (id) {
	// 	var url = '/pins/' + id;
	// 	var params = {id: id};
	// 	$.ajax ({
	// 		url: url,
	// 		type: 'DELETE',
	// 		dataType: 'JSON',
	// 		data: params,
	// 		error: function() {
	// 			console.log('error on deleing active pins');
	// 		},
	// 		success: function (data) {
	// 			console.log('success in deleting active pin')
	// 		}.bind(this)
	// 	});
	// },

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
		  todoItem: {
		    paddingLeft: 20,
		    fontSize: 17
		  }
		};

		var pins = this.state.activePins.map(function (pin, index) {
			return (
				<li key={pin.id} className="list-group-item" style={styles.listGroup}>
					<span style={styles.todoItem}>
					ID: {pin.id} | Active: {pin.active}
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








