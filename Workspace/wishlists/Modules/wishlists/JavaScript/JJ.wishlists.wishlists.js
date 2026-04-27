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