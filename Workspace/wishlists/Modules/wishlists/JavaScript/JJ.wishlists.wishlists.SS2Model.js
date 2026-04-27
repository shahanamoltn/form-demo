// Model.js
// -----------------------
// @module Case
define("JJ.wishlists.wishlists.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/wishlists/SuiteScript2/wishlists.Service.ss"
            ),
            true
        )
});
});
