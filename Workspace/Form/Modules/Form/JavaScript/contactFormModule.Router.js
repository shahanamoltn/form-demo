define('contactFormModule.Router', [
  'Backbone',
  'JJ.Form.Form.View'
], function (
  Backbone,
FormView
) {
  'use strict';

  return Backbone.Router.extend({

    routes: {
      'contact': 'showContactForm'
    },
    initialize: function (options) {
      this.application = options.application;
    },

    showContactForm: function () {

      var view = new FormView({
        application: this.application
      });

      view.showContent();
    }
  });
});