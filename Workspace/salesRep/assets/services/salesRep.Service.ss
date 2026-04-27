
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.salesRep.salesRep.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.salesRep.salesRep.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}