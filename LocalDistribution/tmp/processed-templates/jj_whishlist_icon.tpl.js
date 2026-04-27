define('jj_whishlist_icon.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "Remove from Wishlist";
},"3":function(container,depth0,helpers,partials,data) {
    return "Add to Wishlist";
},"5":function(container,depth0,helpers,partials,data) {
    return "whishlist-icon-heart-filled";
},"7":function(container,depth0,helpers,partials,data) {
    return "whishlist-icon-heart-empty";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"whishlist-icon-container\">\n    <button class=\"whishlist-icon-button\" data-action=\"toggle-wishlist\" title=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInWishlist") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":79},"end":{"line":2,"column":149}}})) != null ? stack1 : "")
    + "\">\n        <i class=\"whishlist-icon-heart "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInWishlist") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":3,"column":39},"end":{"line":3,"column":127}}})) != null ? stack1 : "")
    + "\"></i>\n    </button>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/JJ/whishlist/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.2.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jj_whishlist_icon'; return template;});