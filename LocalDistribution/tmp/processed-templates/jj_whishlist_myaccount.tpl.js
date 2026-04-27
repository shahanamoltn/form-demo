define('jj_whishlist_myaccount.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <table class=\"whishlist-myaccount-table\">\n                <thead>\n                    <tr>\n                        <th>Item ID</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":24,"column":25}}})) != null ? stack1 : "")
    + "                </tbody>\n            </table>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <tr>\n                        <td>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"item") || (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":36}}}) : helper)))
    + "</td>\n                        <td>\n                            <button class=\"whishlist-btn-add-cart\" data-action=\"add-to-cart\" data-item=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"item") || (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data,"loc":{"start":{"line":20,"column":104},"end":{"line":20,"column":112}}}) : helper)))
    + "\">Add to Cart</button>\n                            <button class=\"whishlist-btn-remove\" data-action=\"remove-item\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":21,"column":100},"end":{"line":21,"column":114}}}) : helper)))
    + "\">Remove</button>\n                        </td>\n                    </tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"whishlist-myaccount-empty\">\n                <p>Your wishlist is empty. Start adding items from the store!</p>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"whishlist-myaccount-container\">\n    <header class=\"whishlist-myaccount-header\">\n        <h2>My Wishlist</h2>\n    </header>\n\n    <div class=\"whishlist-myaccount-results\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":31,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n</section>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/JJ/whishlist/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jj_whishlist_myaccount'; return template;});