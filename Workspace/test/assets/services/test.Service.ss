
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.test.test.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.test.test.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}