// @module JJ.salesRep.salesRep
define('JJ.salesRep.salesRep.View'
,	[
	'jj_salesrep_salesrep.tpl'
	
	,	'JJ.salesRep.salesRep.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_salesrep_salesrep_tpl
	
	,	salesRepSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.salesRep.salesRep.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_salesrep_salesrep_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new salesRepModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.salesRep.salesRep.View.Context
	,	getContext: function getContext()
		{
			//@class JJ.salesRep.salesRep.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
