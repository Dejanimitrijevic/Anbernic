import ApolloService from 'ember-apollo-client/services/apollo';

export default ApolloService.extend({
  init() {
    this._super(...arguments);
    this.get('client').networkInterface.use([{
      applyMiddleware: (req, next) => this._runAuthorize(req, next)
    }]);
  },

  _runAuthorize(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the headers object if needed.
    }
    req.options.headers['X-Shopify-Storefront-Access-Token']= 'dd4d4dc146542ba7763305d71d1b3d38';
    next();
  }
});
