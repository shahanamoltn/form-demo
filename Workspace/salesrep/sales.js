/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope Public
 */
define(['N/search', 'N/file', 'N/log'], function(search, file, log) {
    return {
        onRequest: function(ctx) {
            var responseData = { success: false };
            try {
                var salesRepId = ctx.request.parameters.repId;
               
                if (salesRepId) {
                    var employeeData = search.lookupFields({
                        type: search.Type.EMPLOYEE,
                        id: salesRepId,
                        columns: ['entityid', 'title', 'email', 'phone', 'image', 'comments', 'custentity_jj_custentity_meeting_link']
                    });
                    responseData.success = true;
                    responseData.name = employeeData.entityid || '';
                    responseData.title = employeeData.title || '';
                    responseData.email = employeeData.email || '';
                    responseData.phone = employeeData.phone || '';
                    responseData.bio = employeeData.comments || '';
                    responseData.meeting_link = employeeData.custentity_jj_custentity_meeting_link || '';
 
                    if (employeeData.image && employeeData.image.length > 0) {
                        var imageFile = file.load({ id: employeeData.image[0].value });
                        responseData.image = imageFile.url;
                    }
                }
            } catch (e) {
                log.error("Suitelet Error", e);
                responseData.error = e.message;
            }
 
            ctx.response.setHeader('Content-Type', 'application/json');
            ctx.response.write(JSON.stringify(responseData));
        }
    };
});
 
 