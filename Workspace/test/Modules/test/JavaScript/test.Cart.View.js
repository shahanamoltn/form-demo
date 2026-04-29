define('JJ.test.test.Cart.View', [
    'jj_test_test_cart.tpl',
    'Backbone',
    'underscore'
], function (
    jj_test_test_cart_tpl,
    Backbone,
    _
) {
    'use strict';

    return Backbone.View.extend({
        template: jj_test_test_cart_tpl,

        events: {
            'click [data-action="show-warranty-info"]': 'showWarrantyInfo',
            'change [data-action="update-delivery-note-cart"]': 'updateLineNote'
        },

        showWarrantyInfo: function (e) {
            e.preventDefault();
            alert('Warranty Info: This item includes a 1-year manufacturer warranty.');
        },

        updateLineNote: function (e) {
            var newNote = this.$(e.currentTarget).val();
            
            // Validation: at least 5 characters
            if (newNote && newNote.length < 5) {
                alert('Please enter a more detailed delivery note (at least 5 characters).');
                return;
            }

            this.model.set('custcol_jj_delivery_note', newNote);
            console.log('Delivery note updated in cart view model:', newNote);
        },

        getContext: function () {
            var item = this.model.get('item') || {};
            var options = this.model.get('options') || [];
            
            // Helper to find option value by ID
            var getOptVal = function(id) {
                var colId = id.replace('custitem_', 'custcol_').replace('_jj_custitem', '_jj_');
                var opt = (options instanceof Backbone.Collection) ? 
                    options.findWhere({cartOptionId: id}) || options.findWhere({id: id}) || options.findWhere({cartOptionId: colId}) || options.findWhere({id: colId}) : 
                    _.find(options, {cartOptionId: id}) || _.find(options, {id: id}) || _.find(options, {cartOptionId: colId}) || _.find(options, {id: colId});
                return opt ? (opt.get ? opt.get('value') : opt.value) : null;
            };

            // 1. Get Expected Delivery (Check item, then options, then default)
            var expectedDelivery = (item.get ? item.get('custitem_jj_custitemexpecteddelivery') : item.custitem_jj_custitemexpecteddelivery) || getOptVal('custitem_jj_custitemexpecteddelivery') || '3-5 Business Days';

            // 2. Get Special Note (Check item, then options, then default)
            var specialNote = (item.get ? item.get('custitem_jj_custcolspecialnote') : item.custitem_jj_custcolspecialnote) || getOptVal('custitem_jj_custcolspecialnote') || 'No special notes available.';

            // 3. Get Delivery Note (From options or line field)
            var deliveryNote = getOptVal('custcol_jj_delivery_note') || getOptVal('custitem_jj_delivery_note') || this.model.get('custcol_jj_delivery_note') || '';

            return {
                expectedDelivery: expectedDelivery,
                specialNote: specialNote,
                deliveryNote: deliveryNote,
                showDeliveryDetails: true
            };
        }
    });
});
