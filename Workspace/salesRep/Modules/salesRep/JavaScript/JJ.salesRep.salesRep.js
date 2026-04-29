

define(
	'JJ.salesrep.salesrep'
,   [
		'JJ.salesrep.salesrep.View'
	]
,   function (
		salesrepView
	)
{
	'use strict';
	return  {
		mountToApp: function mountToApp (container)
		{
			console.log('SalesPerson Extension Loading...');
			
			// Using Layout component as it is available across all application contexts
			var layout = container.getComponent('Layout');
			
			if (layout)
			{
				console.log('Layout Component found. Mounting views...');

				// Mount to Account Overview Banner
				layout.addChildView('Overview.Banner', function() { 
					return new salesrepView({ container: container });
				});

				// Mount to Recent Purchases (Order History) page Banner
				layout.addChildView('OrderHistory.List.Banner', function() { 
					return new salesrepView({ container: container });
				});
			}
			else {
				console.error('SalesPerson Error: Layout component not found.');
			}
		}
	};
});


