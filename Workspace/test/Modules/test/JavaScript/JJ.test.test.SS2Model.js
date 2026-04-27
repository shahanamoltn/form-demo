// Model.js
// -----------------------
// @module Case
define("JJ.test.test.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/test/SuiteScript2/test.Service.ss"
            ),
            true
        )
});
});
