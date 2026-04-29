

// @module JJ.SalesPerson.SalesPerson
define('JJ.salesrep.salesrep.View'
	, [
			'jj_salesrep_salesrep.tpl'
		, 'JJ.salesrep.salesrep.SS2Model'
		, 'Backbone'
	]
	, function (
		jj_salesrep_salesrep_tpl
		, salesrepSS2Model
		, Backbone
	) {
		'use strict';

		return Backbone.View.extend({
			template: jj_salesrep_salesrep_tpl

			, initialize: function (options) {
				this.model = new salesrepSS2Model();
				var self = this;
				this.isLoading = true;

				this.model.fetch().done(function () {
					self.isLoading = false;
					self.render();
				}).fail(function (e) {
					self.isLoading = false;
					console.error("SalesPerson fetch failed", e);
					self.render();
				});
			}
			, getContext: function getContext() {
				return {
					isLoading: this.isLoading,
					showRepresentative: this.model.get('assigned') && !this.isLoading,
					
					name: this.model.get('name'),
					title: this.model.get('title'),
					comments: this.model.get('comments'),
					email: this.model.get('email'),
					phone: this.model.get('phone'),
					image: this.model.get('image'),
					meetingLink: this.model.get('meeting_link')
				};
			}
		});
	});
