
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.wishlists.wishlists.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.wishlists.wishlists.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}