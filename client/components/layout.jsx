Layout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  handleLogout: function() {
    Meteor.logout();
    FlowRouter.go('/login');
  },

  render: function() {
    var userNav;
    let {
      currentUser
    } = this.data;

    if (currentUser) {
      userNav = (
        <ul className='nav navbar-nav pull-right'>
          <li className='nav-item'>
            <a className="nav-link" onClick={this.handleLogout}>Logout</a>
          </li>
        </ul>
      )
    } else {
      userNav = (
        <ul className='nav navbar-nav pull-right'>
          <li className='nav-item'>
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" href="/login">Login</a>
          </li>
        </ul>
      )
    }

    return (
      <section>
        <nav className="navbar navbar-light bg-faded">
          <div className="container">
            <a className="navbar-brand" href="/">Badger</a>
            {userNav}
          </div>
        </nav>

        <div className='container'>
          {this.props.content}
        </div>
      </section>
    )
  }
});
