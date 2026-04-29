define('jj_salesrep_salesrep.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<section class=\"salesrep-container\">\n    <div class=\"salesrep-card\">\n        <div class=\"salesrep-card-header\">\n            <h2 class=\"salesrep-card-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Your Representative",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":79}}}))
    + "</h2>\n        </div>\n        <div class=\"salesrep-card-body\">\n            <div class=\"salesrep-profile-section\">\n                <div class=\"salesrep-image-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"image") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":16,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"salesrep-info\">\n                    <h3 class=\"salesrep-name\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":19,"column":46},"end":{"line":19,"column":54}}}) : helper)))
    + "</h3>\n                    <p class=\"salesrep-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":20,"column":46},"end":{"line":20,"column":55}}}) : helper)))
    + "</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"bio") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":23,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n            \n            <div class=\"salesrep-contact-section\">\n                <div class=\"salesrep-contact-item\">\n                    <span class=\"salesrep-contact-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":57},"end":{"line":29,"column":79}}}))
    + "</span>\n                    <a href=\"mailto:"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":30,"column":36},"end":{"line":30,"column":45}}}) : helper)))
    + "\" class=\"salesrep-contact-link\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":30,"column":77},"end":{"line":30,"column":86}}}) : helper)))
    + "</a>\n                </div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"phone") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":37,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n\n            <div class=\"salesrep-action-section\">\n                <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"meetingLink") || (depth0 != null ? compilerNameLookup(depth0,"meetingLink") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"meetingLink","hash":{},"data":data,"loc":{"start":{"line":41,"column":25},"end":{"line":41,"column":40}}}) : helper)))
    + "\" target=\"_blank\" class=\"salesrep-button-primary\">\n                    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Schedule a Meeting",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":20},"end":{"line":42,"column":54}}}))
    + "\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"image") || (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":11,"column":34},"end":{"line":11,"column":43}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":50},"end":{"line":11,"column":58}}}) : helper)))
    + "\" class=\"salesrep-image\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"salesrep-image-placeholder\">\n                            <span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? compilerNameLookup(stack1,"0") : stack1), depth0))
    + "</span>\n                        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <p class=\"salesrep-bio\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"bio") || (depth0 != null ? compilerNameLookup(depth0,"bio") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bio","hash":{},"data":data,"loc":{"start":{"line":22,"column":48},"end":{"line":22,"column":55}}}) : helper)))
    + "</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                <div class=\"salesrep-contact-item\">\n                    <span class=\"salesrep-contact-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Phone:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":57},"end":{"line":34,"column":79}}}))
    + "</span>\n                    <a href=\"tel:"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":35,"column":33},"end":{"line":35,"column":42}}}) : helper)))
    + "\" class=\"salesrep-contact-link\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":35,"column":74},"end":{"line":35,"column":83}}}) : helper)))
    + "</a>\n                </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showError") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":4},"end":{"line":53,"column":11}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"salesrep-error\">\n            <p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your representative information is currently unavailable.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":15},"end":{"line":51,"column":88}}}))
    + "</p>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasSalesRep") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":54,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/JJ/salesrep/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jj_salesrep_salesrep'; return template;});