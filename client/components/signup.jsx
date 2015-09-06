SignUp = React.createClass({
  getInitialState: function() {
    return {}
  },

  handleSignUp: function(event) {
    event.preventDefault();

    Accounts.createUser({
      email: event.target.email.value,
      password: event.target.password.value
    }, (err) => {
      if (err) {
        this.setState({
          errors: err.reason
        });

        return;
      } else {
        FlowRouter.go('/');
      }
    });
  },

  render: function() {
    return (
      <section>
          <Errors errors={this.state.errors} />

          <form onSubmit={this.handleSignUp}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' className='form-control' />
            </div>

            <input type='submit' value='Sign Up' className='btn btn-primary' />
          </form>
        </section>
    )
  }
});
