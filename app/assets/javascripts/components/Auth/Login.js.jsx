var Login = React.createClass({
	handleSubmit: function(e) {
	  e.preventDefault();
	  var email = this.refs.email.getDOMNode().value;
	  var password = this.refs.password.getDOMNode().value;

	  var attributes = {
	  	email: email,
	  	password: password,
	  }
	  App.machine.login(attributes);
	},

	render: function () {
		return (
			<div className="col-sm-6 col-sm-offset-3">
			  <form onSubmit={this.handleSubmit}>
			  <h4>Login</h4>
			    <div className="form-group">
			      <input ref="email" type="email" className="form-control" placeholder="Email" required/>
			    </div>
			    <div className="form-group">
			      <input ref="password" type="password" className="form-control" placeholder="Password" required/>
			    </div>
			    <button type="submit" className="btn btn-primary">Login</button>
			  </form>
			</div>
		);
	},

});