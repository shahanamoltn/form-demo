define(
    'JJ.test.test',
    [
        'JJ.test.test.View',
        'JJ.test.test.Cart.View'
    ],
    function (
        TestView,
        TestCartView
    ) {
        'use strict';
        return {
            mountToApp: function mountToApp(container) {
                console.log('--- TEST EXTENSION LOADED ---');
                
                var pdp = container.getComponent('PDP');
                if (pdp) {
                    pdp.addChildViews(pdp.PDP_FULL_VIEW, {
                        'Product.Price': {
                            'JJ.test.test.View': {
                                childViewIndex: 10,
                                childViewConstructor: function () {
                                    return new TestView({ pdpComponent: pdp });
                                }
                            }
                        }
                    });
                }

                // Try to get CartLinesView safely
                var CartLinesView;
                try {
                    CartLinesView = require('Cart.Lines.View');
                } catch (e) {
                    console.log('Cart.Lines.View module not found, using Component API instead.');
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
                    var cart = container.getComponent('Cart');
                    if (cart) {
                        console.log('--- ATTACHING VIA COMPONENT ---');
                        cart.addChildViews('Cart.Lines.View', {
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
                    }
                }
            }
        };
    }
);
