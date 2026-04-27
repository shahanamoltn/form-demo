define(
    'JJ.test.test',
    [
        'JJ.test.test.View'
    ],
    function (
        TestView
    ) {
        'use strict';

        return {
            mountToApp: function mountToApp(container) {
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
            }
        };
    }
);

