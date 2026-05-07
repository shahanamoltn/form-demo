define(
    'JJ.test.test',
    [
        'JJ.test.test.View',
        'JJ.test.test.Cart.View',
        'JJ.test.ProductDetailsFull.View',
        'underscore'
    ],
    function (
        TestView,
        TestCartView,
        ProductDetailsFullViewExt,
        _
    ) {
        'use strict';
        return {
            mountToApp: function mountToApp(container) {
                console.log('--- TEST EXTENSION LOADED ---');

                // Load the PDP Full View extension (template override and events)
                ProductDetailsFullViewExt.loadExtension();

                var pdp = container.getComponent('PDP');
                var cart = container.getComponent('Cart');

                if (cart) {
                    console.log('--- ATTACHING CART LISTENERS ---');

                    // Force the delivery note into the cart line before it's added
                    cart.on('beforeAddLine', function () {
                        var pdpComp = container.getComponent('PDP');
                        if (pdpComp) {
                            var itemInfo = pdpComp.getItemInfo();
                            var options = itemInfo.options || [];
                            var deliveryNote = _.find(options, { cartOptionId: 'custcol_jj_delivery_note' });

                            if (deliveryNote && deliveryNote.value) {
                                // Extract the raw string if it's wrapped in an object
                                var val = (typeof deliveryNote.value === 'object') ? (deliveryNote.value.internalid || deliveryNote.value.value || '') : deliveryNote.value;

                                console.log('--- Final Sync: Injecting Delivery Note ---', val);
                                pdpComp.setOption('custcol_jj_delivery_note', val);
                            }
                        }
                    });

                    // Child View registration
                    var CartLinesView;
                    try {
                        CartLinesView = require('Cart.Lines.View');
                    } catch (e) {
                        console.log('Cart.Lines.View module not found.');
                    }

                    if (CartLinesView) {
                        console.log('--- ATTACHING VIA PROTOTYPE ---');
                        CartLinesView.addChildViews({
                            'Item.Summary': {
                                'JJ.test.test.Cart.View.Summary': {
                                    childViewIndex: 10,
                                    childViewConstructor: function () {
                                        return new TestCartView({ model: this.model });
                                    }
                                }
                            },
                            'Item.Sku': {
                                'JJ.test.test.Cart.View.Sku': {
                                    childViewIndex: 11,
                                    childViewConstructor: function () {
                                        return new TestCartView({ model: this.model });
                                    }
                                }
                            }
                        });
                    } else {
                        console.log('--- ATTACHING VIA COMPONENT ---');
                        cart.addChildViews('Cart.Lines.View', {
                            'Item.Summary': {
                                'JJ.test.test.Cart.View.Summary': {
                                    childViewIndex: 10,
                                    childViewConstructor: function (model) {
                                        return new TestCartView({ model: model || (this && this.model) });
                                    }
                                }
                            },
                            'Item.Sku': {
                                'JJ.test.test.Cart.View.Sku': {
                                    childViewIndex: 11,
                                    childViewConstructor: function (model) {
                                        return new TestCartView({ model: model || (this && this.model) });
                                    }
                                }
                            }
                        });
                    }
                }
            }
        };
    }
);
