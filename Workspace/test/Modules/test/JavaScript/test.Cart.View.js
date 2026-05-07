define('JJ.test.test.Cart.View', [
    'jj_test_test.tpl',
    'Backbone',
    'underscore'
], function (
    jj_test_test_tpl,
    Backbone,
    _
) {
    'use strict';

    return Backbone.View.extend({
        template: jj_test_test_tpl,

        events: {
            'click [data-action="show-warranty-info"]': 'showWarrantyInfo'
        },

        showWarrantyInfo: function (e) {
            e.preventDefault();
            alert('Warranty Info: This item includes a 1-year manufacturer warranty.');
        },

        getContext: function () {
            var item = this.model.get('item') || {};
            var options = this.model.get('options') || [];
            
            console.log('--- Cart Line Options ---', options);
            
            // Helper to find option value by ID
            var getOptVal = function(id) {
                var opt = (options instanceof Backbone.Collection) ? 
                    options.findWhere({cartOptionId: id}) || options.findWhere({id: id}) : 
                    _.find(options, {cartOptionId: id}) || _.find(options, {id: id});
                
                if (!opt) return null;
                var val = opt.get ? opt.get('value') : opt.value;
                return (typeof val === 'object' && val !== null) ? (val.internalid || val.value || '') : val;
            };

            // Retrieve values using the correct internal IDs from your image
            var expectedDelivery = (item.get ? item.get('custitem_jj_custitemexpecteddelivery') : item.custitem_jj_custitemexpecteddelivery) || getOptVal('custitem_jj_custitemexpecteddelivery') || '3-5 Business Days';
            var specialNote = (item.get ? item.get('custitem_jj_custcolspecialnote') : item.custitem_jj_custcolspecialnote) || getOptVal('custitem_jj_custcolspecialnote') || 'No special notes available.';
            
            // Try IDs first, then fallback to Session Storage
            var deliveryNote = getOptVal('custcol_jj_delivery_note') || this.model.get('custcol_jj_delivery_note') || getOptVal('custcol_delivery_note') || this.model.get('custcol_delivery_note');
            
            if (!deliveryNote) {
                var itemId = item ? (item.get ? item.get('internalid') : item.internalid) : null;
                console.log('--- Item ID Check (Cart) ---', itemId);
                
                if (itemId) {
                    deliveryNote = sessionStorage.getItem('jj_note_' + itemId);
                    
                    // Also try Parent ID if available on the item model
                    if (!deliveryNote && item.get && item.get('parent')) {
                        var parentId = item.get('parent');
                        deliveryNote = sessionStorage.getItem('jj_note_' + parentId);
                    }
                    
                    if (deliveryNote) console.log('Recovered from Session Storage for item ' + itemId + ':', deliveryNote);
                }
            }
            deliveryNote = deliveryNote || '';

            return {
                custitem_expected_delivery: expectedDelivery,
                custcol_special_note: specialNote,
                custcol_delivery_note: deliveryNote,
                isReadOnly: true,
                showWarrantyInfo: true,
                showDeliverySection: true
            };
        }
    });
});