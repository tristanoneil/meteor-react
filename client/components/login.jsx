Login = React.createClass({
  getInitialState() {
      return {}
    },

    handleLogin: function(event) {
      event.preventDefault();

      Meteor.loginWithPassword(event.target.email.value, event.target.password.value, (err) => {
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
      if (this.state.errors) {
        var errorAlert = (
          <div className='alert alert-danger'>
            {this.state.errors}
          </div>
        )
      }

      return (
        <section>
          <Errors errors={this.state.errors} />

          <form onSubmit={this.handleLogin}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' className='form-control' />
            </div>

            <input type='submit' value='Login' className='btn btn-primary' />
          </form>
        </section>
      )
    }
});
