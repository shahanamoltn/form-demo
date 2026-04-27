var extensions = {};

extensions['JJ.Form.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/Form/1.0.0/' + asset;
}

// @module JJ.Form.Form
define('JJ.Form.Form.View'
,	[
	'jj_form_form.tpl'
	
	,	'JJ.Form.Form.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_form_form_tpl
	
	,	FormSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.Form.Form.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_form_form_tpl

	,	initialize: function () {
      this.formErrors = {};
      this.successMessage = false;
      this.model = new FormSS2Model();
    },

    events: {
      "click [data-action='submit-form']": "submitForm",
      "click [data-action='cancel-form']": "clearForm",
    },

    // 🔹 Submit Form
    submitForm: function (e) {
 
      var self = this;
      e.preventDefault();
 
      var data = {
        firstname: this.$('[name="firstname"]').val(),
        lastname: this.$('[name="lastname"]').val(),
        phone: this.$('[name="phone"]').val(),
        email: this.$('[name="email"]').val(),
      };
 
      var errors = this.validateForm(data);
 
      if (Object.keys(errors).length > 0) {
        this.formErrors = errors;
        this.successMessage = false;
        this.render();
        return;
      }
 
 
        this.model.save(data)
        .done(function (response) {
          console.log('reponse from creating new request',response)
          if (response.success) {
            alert("Contact created successfully");
            self.clearForm();
 
          }
        })
        .fail(function (error) {
         
 
          var message = "Something went wrong";
 
          if (error.responseText) {
            try {
              var res = JSON.parse(error.responseText);
              message = res.message || message;
            //   customer=res.customerid
            } catch (e) {}
          }
 
          alert(message);
        });
    },
 
 
    // 🔹 Validation
    validateForm: function (data) {
      var errors = {};
 
      if (!data.firstname) {
        errors.firstname = "First name is required";
      } else if (!/^[A-Za-z\s]+$/.test(data.firstname)) {
        errors.firstname = "Only letters allowed";
      }
 
      if (!data.lastname) {
        errors.lastname = "Last name is required";
      }
 
      if (!data.email) {
        errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.email = "Invalid email format";
      }
 
      if (!data.phone) {
        errors.phone = "Phone number is required";
      } else if (!/^[0-9]{10}$/.test(data.phone)) {
        errors.phone = "Enter valid 10 digit number";
      }
 
      return errors;
    },
 
    // 🔹 Cancel Button
    clearForm: function () {
      this.$("input").val("");
      this.formErrors = {};
      this.successMessage = false;
      this.render();
    },
 
    getContext: function () {
      return {
        pageHeader: "Contact Form",
        errors: this.formErrors,
        successMessage: this.successMessage,
      };
    },
  });
});
 
 

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

// Model.js
// -----------------------
// @module Case
define("JJ.Form.Form.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/Form.Service.ss"
            )
        )
});
});


// Model.js
// -----------------------
// @module Case
define("JJ.Form.Form.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";
    // @class Case.Fields.Model @extends Backbone.Model
    console.log('in the model page')
    return Backbone.Model.extend({
        //@property {String} urlRoot
        
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Form/SuiteScript2/Form.Service.ss"
            ),
            true
        )
});

});



define(
	'JJ.Form.Form'
,   [
		'contactFormModule.Router',
  'MyAccountMenu',
  'Utils'
	]
,   function  (ContactFormRouter, MyAccountMenu,Utils) 
{
	'use strict';

	return  {
		 mountToApp: function (container) {
      var myAccountMenu = container.getComponent("MyAccountMenu");
      var contactGroup = {
        id: "contact_group",
        name: "Contact",
        index: 10,
      };
      if (myAccountMenu) {
        myAccountMenu.addGroup(contactGroup);

        var contactEntry = {
          id: "contact_form",
          groupid: "contact_group",
          name: "Contact Form",
          url: "contact",
          index: 1,
        };

        myAccountMenu.addGroupEntry(contactEntry);
      }
      console.log(Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Form/SuiteScript2/Form.Service.ss"
            ),
            true
        ))
      // 🔹 Initialize Router
      return new ContactFormRouter({
        application: container,
      });
    },
  };
});


};

extensions['JJ.test.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/test/1.0.0/' + asset;
}

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


// Model.js
// -----------------------
// @module Case
define("JJ.test.test.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/test.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("JJ.test.test.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/test/SuiteScript2/test.Service.ss"
            ),
            true
        )
});
});


define('JJ.test.ProductDetailsFull.View', [
    'ProductDetails.Full.View',
    'jj_product_details_full.tpl',
    'underscore',
    'jQuery'
], function (
    ProductDetailsFullView,
    product_details_full_tpl,
    _,
    $
) {
    'use strict';

    return {
        loadExtension: function () {

            ProductDetailsFullView.prototype.template = product_details_full_tpl;

            ProductDetailsFullView.prototype.events = _.extend({}, ProductDetailsFullView.prototype.events, {
                'click [data-action="show-warranty-info"]': 'showWarrantyInfo',
                'change [data-action="update-delivery-note"]': 'validateDeliveryNote',
                'blur [data-action="update-delivery-note"]': 'blurDeliveryNote'
            });


            _.extend(ProductDetailsFullView.prototype, {
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
                }
            });


            ProductDetailsFullView.prototype.getContext = _.wrap(ProductDetailsFullView.prototype.getContext, function (originalGetContext) {

                var context = originalGetContext.apply(this, _.toArray(arguments).slice(1));

                var item = this.model.get('item');

                context.custitem_expected_delivery = (item && item.get('custitem_jj_custitemexpecteddelivery')) || '3-5 Business Days';
                context.custcol_special_note = (item && item.get('custitem_jj_custcolspecialnote')) || 'No special notes available.';

                context.showWarrantyInfo = true;
                context.showDeliverySection = true;

                return context;
            });
        }
    };
});


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



};

extensions['JJ.wishlists.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/wishlists/1.0.0/' + asset;
}

// define('JJ.wishlists.wishlists.View', [
// 	'jj_wishlists_wishlists.tpl',
// 	'ProductDetails.AddToProductList.View',
// 	'ProductList.Model',
//     'ProductList.Item.Model',
// 	'Backbone',
// 	'Product.Model',
// 	'Item.Model',
// 	'jQuery'
// ], function (
// 	jj_wishlists_wishlists_tpl,
// 	ProductDetailsAddToProductListView,
// 	ProductListModel,
//     ProductListItemModel,
// 	Backbone,
// 	ProductModel,
// 	ItemModel,
// 	jQuery
// ) {
// 	'use strict';

// 	return Backbone.View.extend({
// 		template: jj_wishlists_wishlists_tpl,

// 		events: {
// 			'click [data-action="toggle-wishlist"]': 'toggleWishlist'
// 		},

// 		initialize: function (options) {
// 			this.model = (options && (options.model || options.Model)) || this.model;
// 			this.application = (options && (options.application || options.container)) || this.application;
// 			this.inWishlist = false;

// 			var self = this;
// 			var internalid = this.model ? this.model.get('internalid') : null;

// 			if (!internalid) {
// 				console.warn('Wishlist View: No internalid found, skipping.');
// 				return;
// 			}

// 			// Build productModel synchronously from existing data
// 			this.productModel = new ProductModel({
// 				item: this.model.toJSON ? this.model.toJSON() : this.model.attributes,
// 				internalid: internalid,
// 				quantity: 1
// 			});
// 			this.productModel.set('internalid', internalid);

// 			if (this.application) {
// 				var productListComponent = this.application.getComponent('ProductList');
// 				if (productListComponent) {

// 					var checkIfWishlisted = function () {
// 						var pl_coll = productListComponent.getCollection && productListComponent.getCollection();
// 						if (pl_coll && pl_coll.length) {
// 							pl_coll.each(function (productList) {
// 								var items = productList.get('items');
                                
//                                 if (items && items.length) {
//                                     items.each(function(item) {
//                                         // Using the logic derived from ProductList.Item.Model
//                                         // to verify if the item matches the current product ID
//                                         var wishlistItemId = item.get('item').internalid || item.get('item').id;
                                        
//                                         if (String(wishlistItemId) === String(internalid)) {
//                                             self.inWishlist = true;
//                                             self.render();
//                                         }
//                                     });
//                                 }
// 							});
// 						}
// 					};

// 					// Check on load
// 					productListComponent.getList && productListComponent.getList().done(function () {
// 						checkIfWishlisted();
// 					});

// 					// Sync on add
// 					productListComponent.on('afterAddLine', function () {
// 						self.inWishlist = true;
// 						self.render();
// 					});
// 				}
// 			}
// 		},

// 		childViews: {
// 			'ProductListControl': function () {
// 				if (!this.productModel) return null;
// 				return new ProductDetailsAddToProductListView({
// 					model: this.productModel,
// 					application: this.application
// 				});
// 			}
// 		},

// 		toggleWishlist: function (e) {
// 			e.preventDefault();
// 			this.inWishlist = !this.inWishlist;
// 			this.render();

// 			if (this.inWishlist) {
// 				var self = this;
// 				setTimeout(function () {
// 					var $nativeButton = self.$('.product-list-control-button-wishlist');
// 					if ($nativeButton.length > 0) {
// 						$nativeButton.click();
// 					}
// 				}, 400);
// 			}
// 		},

// 		getContext: function () {
// 			return {
// 				inWishlist: this.inWishlist
// 			};
// 		}
// 	});
// });




define('JJ.wishlists.wishlists.View', [
    'jj_wishlists_wishlists.tpl',
    'ProductDetails.AddToProductList.View',
    'Backbone',
    'Product.Model',
    'Item.Model',
    'jQuery'
], function (
    	jj_wishlists_wishlists_tpl,
    ProductDetailsAddToProductListView,
    Backbone,
    ProductModel,
    ItemModel,
    jQuery
) {
    'use strict';

    return Backbone.View.extend({

        template: 	jj_wishlists_wishlists_tpl,

        events: {
            'click [data-action="toggle-wishlist"]': 'toggleWishlist'
        },

        initialize: function (options) {

            this.model = options.model || options.Model;
            this.application = options.application || options.container;

            this.inWishlist = false;
            this.showMenu = false;

            var self = this;

            var internalid = this.model.get('internalid') || this.model.id;

            if (!internalid) return;

        
            this.itemModel = new ItemModel({
                internalid: internalid,
                quantity: 1
            });

            this.productModel = new ProductModel({
                item: this.itemModel.attributes
            });

              this.itemModel.set('options', this.model.get('options'));

        
            this.productModel = new ProductModel({
                item: this.itemModel.attributes
            });
            this.productModel.set('options', this.itemModel.get('options'));

            if (this.productModel.get('item')) {
                this.productModel.get('item').set('options', this.itemModel.get('options'));
            }

            try {
                if (this.productModel.get('options') && this.productModel.get('options').length > 1) {
                    this.productModel.get('options').filter(function (option) {
                        var values = option.get('values');
                        if (values && values.length) {
                            var optionValue = values[values.length - 1];
                            option.set('value', optionValue);
                        }
                        return option;
                    });
                }
            } catch (error) {
                
            }

            this.productModel.set('quantity', 1);
            this.productModel.set('_maximumQuantity', 3);
            this.productModel.set('_minimumQuantity', 1);

        
            var productListModule = this.application.ProductListModule;

            if (productListModule && productListModule.Utils) {

                productListModule.Utils.getProductListsPromise().done(function (lists) {

                    var isFound = false;

                    lists.each(function (list) {

                        var items = list.get('items');

                        if (items && items.length) {

                            items.each(function (item) {

                                var wishlistId = String(
                                    item.get('item').internalid || item.get('item').id
                                );

                                if (wishlistId === String(internalid)) {
                                    isFound = true;

                                }
                            });
                    
                            items.on('add', function (addedItem) {
                                var addedId = String(
                                    addedItem.get('item').internalid || addedItem.get('item').id
                                );

                                if (addedId === String(internalid)) {

                                    self.inWishlist = true;
                                    self.showMenu = false;
                                    self.render();

                                    self.showToast('Added to Wishlist!');
                                }
                            });
                        }
                    });

                    self.inWishlist = isFound;
                    self.render();
                });
            }
        },


        childViews: {
            ProductListControl: function () {
                return new ProductDetailsAddToProductListView({
                    model: this.productModel,
                    application: this.application
                });
            }
        },

    
        toggleWishlist: function (e) {

            e.preventDefault();
            e.stopPropagation();
              if (this.inWishlist) {
        this.removeFromWishlist();
        return;
    }
           this.isWishlistCreated = !this.inWishlist;
            this.showMenu = !this.showMenu;
            this.render();

            if (this.showMenu) {

                var self = this;

                setTimeout(function () {

                    var $btn = self.$('.product-list-control-button-wishlist');
              
                    if ($btn.length) {
                        $btn.click(); 
                    }

                }, 200);
            }
        },
        removeFromWishlist: function () {

    var self = this;

    var productListModule = this.application.ProductListModule;

    if (!productListModule || !productListModule.Utils) return;

    productListModule.Utils.getProductListsPromise().done(function (lists) {

        lists.each(function (list) {

            var items = list.get('items');

            if (items && items.length) {

                var itemToRemove = null;

                items.each(function (item) {

                    var wishlistId = String(
                        item.get('item').internalid || item.get('item').id
                    );

                    var currentId = String(self.model.get('internalid') || self.model.id);

                    if (wishlistId === currentId) {
                        itemToRemove = item;
                    }
                });

                if (itemToRemove) {

                    // ⭐ REMOVE ITEM
                    itemToRemove.destroy().done(function () {

                        self.inWishlist = false;
                        self.render();

                        self.showToast('Removed from Wishlist');
                    });
                }
            }
        });
    });
},


        showToast: function (message) {

            jQuery('.wishlist-toast').remove();

            var $toast = jQuery(
                '<div class="wishlist-toast" style="position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%); background: rgba(39,174,96,0.9); color:#fff; padding:10px 20px; border-radius:20px; z-index:10000;">'
                + message +
                '</div>'
            );

            jQuery('body').append($toast);

            setTimeout(function () {
                $toast.fadeOut(function () {
                    jQuery(this).remove();
                });
            }, 2000);
        },

        getContext: function () {
            return {
                inWishlist: this.inWishlist,
                showMenu: this.showMenu
            };
        }

    });
});

// Model.js
// -----------------------
// @module Case
define("JJ.wishlists.wishlists.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/wishlists.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("JJ.wishlists.wishlists.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/wishlists/SuiteScript2/wishlists.Service.ss"
            ),
            true
        )
});
});


define('JJ.wishlists.wishlists', [
	'Facets.ItemCell.View',
	'JJ.wishlists.wishlists.View',
	'underscore'
], function (
	FacetsItemCellView,
	WishlistsView,
	_
) {
	'use strict';

	return {
		mountToApp: function (container) {
			if (FacetsItemCellView) {
				FacetsItemCellView.addChildViews({
					'ItemDetails.Options': {
						'Wishlist.Icon': {
							childViewIndex: 10,
							childViewConstructor: function () {
                                // Fix: Restored mandatory lowercase keys to prevent 'undefined' crashes.
                                // The View constructor expects 'model' and 'application'.
								return new WishlistsView({
									application: container,
									model: this.model
								});
							}
						}
					}
				});
			} else {
				console.log("FacetsBrowseView component is not available.");
			}
		}
	};
});

};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["JJ.Form.Form.View","contactFormModule.Router","JJ.Form.Form.Model","JJ.Form.Form.SS2Model","JJ.test.test.View","JJ.test.test.Model","JJ.test.test.SS2Model","JJ.test.ProductDetailsFull.View","JJ.wishlists.wishlists.View","JJ.wishlists.wishlists.Model","JJ.wishlists.wishlists.SS2Model"];
try{
	extensions['JJ.Form.1.0.0']();
	SC.addExtensionModule('JJ.Form.Form');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['JJ.test.1.0.0']();
	SC.addExtensionModule('JJ.test.test');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['JJ.wishlists.1.0.0']();
	SC.addExtensionModule('JJ.wishlists.wishlists');
}
catch(error)
{
	console.error(error);
}

