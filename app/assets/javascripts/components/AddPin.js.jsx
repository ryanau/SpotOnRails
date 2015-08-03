var AddPin = React.createClass({
	addPins: function () {
		var url = "/pins"
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSON',
			error: function () {
				console.log('error on adding pins');
			},
			success: function (data) {
				console.log('success in adding pins')
				console.log(data)
				this.props.status("pinAdded");
			}.bind(this),
		});
	},

	handleSubmit: function (e) {
		e.preventDefault();
		this.addPins();
	},

	render: function () {
		return (
			<div>
				<h3>Add Pin</h3>
				<button
					onClick={this.handleSubmit}>
					Add Pin
				</button>
			</div>
		);
	},

});