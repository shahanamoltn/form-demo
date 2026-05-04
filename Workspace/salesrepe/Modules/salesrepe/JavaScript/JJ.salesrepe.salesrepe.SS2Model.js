// Model.js
// -----------------------
// @module Case
define("JJ.salesrepe.salesrepe.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/salesrepe/SuiteScript2/salesrepe.Service.ss"
            ),
            true
        )
});
});
