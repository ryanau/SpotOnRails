var ShowYourAcceptedPin = React.createClass({
	getInitialState: function () {
		return {
			yourPins: [],
		};
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