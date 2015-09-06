GistList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      gists: Gists.find({
        userId: Meteor.user()._id
      }).fetch()
    };
  },

  render: function() {
    return (
      <section className='gists row'>
        {this.data.gists.map(function(g) {
          return (
            <div className='col-sm-4' key={g._id}>
              <div className='gist card'>
                <div className="card-header">
                  <a href={`${g._id}`}>{g.title}</a>
                </div>
                <div className='card-block'>
                  <p className='card-text'>{g.content}</p>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
});
