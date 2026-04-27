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
