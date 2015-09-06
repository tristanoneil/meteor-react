FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(Layout, {
      content: <GistList />
    });
  }
});

FlowRouter.route('/login', {
  action: function(params, queryParams) {
    ReactLayout.render(Layout, {
      content: <Login />
    });
  }
});

FlowRouter.route('/signup', {
  action: function(params, queryParams) {
    ReactLayout.render(Layout, {
      content: <SignUp />
    });
  }
});

FlowRouter.route('/:id', {
  action: function(params, queryParams) {
    ReactLayout.render(Layout, {
      content: <Gist id={params.id} />
    });
  }
});
