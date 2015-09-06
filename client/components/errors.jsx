Errors = React.createClass({
  render: function() {
    if (this.props.errors) {
      return (
        <div className='alert alert-danger'>
          {this.props.errors}
        </div>
      )
    } else {
      return <span></span>
    }
  }
});
