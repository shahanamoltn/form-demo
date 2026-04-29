// Model.js
// -----------------------
// @module JJ.salesrep.salesrep
define("JJ.salesrep.salesrep.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";
    // @class JJ.salesrep.salesrep.SS2Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/salesrep/SuiteScript2/salesrep.Service.ss"
            ),
            true
        )
    });
});

