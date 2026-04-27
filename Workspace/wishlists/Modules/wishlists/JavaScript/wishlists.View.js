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