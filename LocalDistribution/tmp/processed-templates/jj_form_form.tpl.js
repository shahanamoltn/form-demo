define('jj_form_form.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"alert alert-success\">\n\n      Contact form submitted successfully!\n</div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<small class=\"text-danger\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"firstname") : stack1), depth0))
    + "</small>\n\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<small class=\"text-danger\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"lastname") : stack1), depth0))
    + "</small>\n\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<small class=\"text-danger\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "</small>\n\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<small class=\"text-danger\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "</small>\n\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "<div class=\"alert alert-success\">\n\n    Your contact created successfully.\n</div>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"contact-form-container\">\n \n  <h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":20}}}) : helper)))
    + "</h2>\n \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"successMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + " \n  <form class=\"contact-form\">\n \n    <!-- First Name -->\n<div class=\"form-group\">\n<input type=\"text\" name=\"firstname\" placeholder='First Name ' class=\"form-control\" />\n \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"firstname") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "</div>\n \n    <!-- Last Name -->\n<div class=\"form-group\">\n<input type=\"text\" name=\"lastname\" placeholder='Last Name' class=\"form-control\" />\n \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"lastname") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "</div>\n \n    <!-- Phone -->\n<div class=\"form-group\">\n \n      <input type=\"text\" name=\"phone\" placeholder='Phone Number' class=\"form-control\" />\n \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"phone") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":43,"column":13}}})) != null ? stack1 : "")
    + "</div>\n \n    <!-- Email -->\n<div class=\"form-group\">\n<input type=\"email\" name=\"email\" placeholder='Email'class=\"form-control\" />\n \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errors") : depth0)) != null ? compilerNameLookup(stack1,"email") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":6},"end":{"line":53,"column":13}}})) != null ? stack1 : "")
    + "</div>\n \n    <!-- Buttons -->\n<div class=\"form-actions\">\n \n  <button type=\"button\" class=\"button button-secondary\" data-action=\"cancel-form\">\n\n    Cancel\n</button>\n \n  <button type=\"submit\" class=\"button button-primary\" data-action='submit-form'>\n\n    Submit\n</button>\n \n</div>\n \n  </form>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"successMessage") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":2},"end":{"line":79,"column":7}}})) != null ? stack1 : "")
    + " \n</div>\n ";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/JJ/Form/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jj_form_form'; return template;});