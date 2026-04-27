// Model.js
// -----------------------
// @module Case
define("JJ.salesRep.salesRep.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/salesRep/SuiteScript2/salesRep.Service.ss"
            ),
            true
        )
});
});
