
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.whishlist.whishlist.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.whishlist.whishlist.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}