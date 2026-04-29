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
                    self.setOptions();
                });
                // Initial set options
                this.setOptions();
            }
        },
        events: {
            'click [data-action="show-warranty-info"]': 'showWarrantyInfo',
            'change [data-action="update-delivery-note"]': 'validateDeliveryNote',
            'blur [data-action="update-delivery-note"]': 'setOptions'
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

        setOptions: function () {
            if (this.isSettingOptions || !this.pdp) {
                return;
            }
            this.isSettingOptions = true;
            
            try {
                var deliveryNote = this.$('[data-action="update-delivery-note"]').val();
                var itemInfo = this.pdp.getItemInfo();
                var item = (itemInfo && itemInfo.item) ? itemInfo.item : {};

                var expectedDelivery = (item.get ? item.get('custitem_jj_custitemexpecteddelivery') : item.custitem_jj_custitemexpecteddelivery) || '3-5 Business Days';
                var specialNote = (item.get ? item.get('custitem_jj_custcolspecialnote') : item.custitem_jj_custcolspecialnote) || 'No special notes available.';

                this.pdp.setOption('custitem_jj_custitemexpecteddelivery', expectedDelivery);
                this.pdp.setOption('custitem_jj_custcolspecialnote', specialNote);
                
                if (deliveryNote) {
                    this.pdp.setOption('custcol_jj_delivery_note', deliveryNote);
                }
            } catch (e) {
                console.error('Error setting delivery options:', e);
            } finally {
                this.isSettingOptions = false;
            }
        },

        getContext: function () {
            
            var itemInfo = this.pdp ? this.pdp.getItemInfo() : {};
            var item = itemInfo.item || {};
            return {
                custitem_expected_delivery: (item.get ? item.get('custitem_jj_custitemexpecteddelivery') : item.custitem_jj_custitemexpecteddelivery) || '3-5 Business Days',
                custcol_special_note: (item.get ? item.get('custitem_jj_custcolspecialnote') : item.custitem_jj_custcolspecialnote) || 'No special notes available.',
                showWarrantyInfo: true,
                showDeliverySection: true
            };
		}
	});
});
