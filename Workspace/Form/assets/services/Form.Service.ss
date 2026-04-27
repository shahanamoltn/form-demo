
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.Form.Form.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.Form.Form.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}