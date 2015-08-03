var Signup = React.createClass({
	registerUser: function (attributes) {
		var url = "/users"
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'JSON',
			data: attributes,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			},
			error: function () {
				console.log('error on registering user');
			},
			success: function (data) {
				console.log('success in registering user');
				console.log(data);
				this.props.id(data.id);
				this.props.status("authorized");
			}.bind(this),
		});
	},

	handleSubmit: function(e) {
	  e.preventDefault();
	  var fn = this.refs.fn.getDOMNode().value;
	  var ln = this.refs.ln.getDOMNode().value;
	  var email = this.refs.email.getDOMNode().value;
	  var password = this.refs.password.getDOMNode().value;
	  var carmake = this.refs.carmake.getDOMNode().value;
	  var carcolor = this.refs.carcolor.getDOMNode().value;

	  var attributes = {
	  	fn: fn,
	  	ln: ln,
	  	email: email,
	  	password: password,
	  	carmake: carmake,
	  	carcolor: carcolor,
	  }

	  this.registerUser(attributes)
	},

	render: function () {
		return (
			<div className="col-sm-6 col-sm-offset-3">
			  <form onSubmit={this.handleSubmit}>
			  <h4>Sign Up</h4>
			  	<div className="form-group">
			  	  <input ref="fn" type="text" className="form-control" placeholder="First Name" required/>
			  	</div>
			    <div className="form-group">
			      <input ref="ln" className="form-control" type="text" placeholder="Last Name" required/>
			    </div>
			    <div className="form-group">
			      <input ref="email" type="email" className="form-control" placeholder="Email" required/>
			    </div>
			    <div className="form-group">
			      <input ref="password" type="password" className="form-control" placeholder="Password" required/>
			    </div>
			    <div className="form-group">
			      <input ref="carmake" type="text" className="form-control" placeholder="Car Make" required/>
			    </div>
			    <div className="form-group">
			      <input ref="carcolor" type="text" className="form-control" placeholder="Car Color" required/>
			    </div>
			    <button type="submit" className="btn btn-primary">Sign Up</button>
			  </form>
			  <br />
			  <br />
			</div>
		);
	},

});