Gist = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      gist: Gists.findOne(new Mongo.ObjectID(this.props.id))
    };
  },

  render: function() {
    if (this.data.gist) {
      return <h1>{this.data.gist.title}</h1>
    }

    return (
      <div>Loading Indicator</div>
    )
  }
});
