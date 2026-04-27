// @module JJ.test.test
define('JJ.test.test.View'
,	[
	'jj_test_test.tpl'
	
	,	'JJ.test.test.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_test_test_tpl
	
	,	testSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.test.test.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_test_test_tpl

	,	 initialize: function (options) {
            this.pdp = options.pdpComponent;

            var self = this;
            if (this.pdp) {
                this.pdp.on('afterOptionSelection', function() {
                    self.render();
                });
            }
        },

        events: {
            'click [data-action="show-warranty-info"]': 'showWarrantyInfo',
            'change [data-action="update-delivery-note"]': 'validateDeliveryNote',
            'blur [data-action="update-delivery-note"]': 'blurDeliveryNote'
        },

        showWarrantyInfo: function (e) {
            e.preventDefault();
            alert('Warranty Info: This item includes a 1-year manufacturer warranty.');
        },

        validateDeliveryNote: function (e) {
            var val = $(e.currentTarget).val();
            if (val && val.length < 5) {
                alert('Please enter a more detailed delivery note (at least 5 characters).');
            }
        },

        blurDeliveryNote: function (e) {
            console.log('Delivery note input blurred.', $(e.currentTarget).val());
        },

        getContext: function () {
            
            var itemInfo = this.pdp ? this.pdp.getItemInfo() : {};
            var item = itemInfo.item || {};

            return {
                custitem_expected_delivery: item.custitem_jj_custitemexpecteddelivery || '3-5 Business Days',
                custcol_special_note: item.custitem_jj_custcolspecialnote || 'No special notes available.',
                showWarrantyInfo: true,
                showDeliverySection: true
            };
		}
	});
});
