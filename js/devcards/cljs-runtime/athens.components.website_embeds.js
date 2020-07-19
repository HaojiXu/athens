goog.provide('athens.components.website_embeds');
goog.require('cljs.core');
athens.components.website_embeds.component_youtube_embed = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[youtube\]\]\:.*/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,uid){
var fexpr__56195_56197 = cljs.core.constantly(null);
(fexpr__56195_56197.cljs$core$IFn$_invoke$arity$1 ? fexpr__56195_56197.cljs$core$IFn$_invoke$arity$1(uid) : fexpr__56195_56197.call(null,uid));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/.*v=([a-zA-Z0-9_\-]+)/,content),(1)))].join(''),new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"], null)], null);
})], null);
athens.components.website_embeds.find_weblink = (function athens$components$website_embeds$find_weblink(content){
return cljs.core.re_find(/http.*/,content);
});
athens.components.website_embeds.component_generic_embed = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/iframe\:.*/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,uid){
var fexpr__56196_56198 = cljs.core.constantly(null);
(fexpr__56196_56198.cljs$core$IFn$_invoke$arity$1 ? fexpr__56196_56198.cljs$core$IFn$_invoke$arity$1(uid) : fexpr__56196_56198.call(null,uid));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"src","src",-1651076051),athens.components.website_embeds.find_weblink(content)], null)], null);
})], null);
athens.components.website_embeds.components = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.website_embeds.component_youtube_embed,athens.components.website_embeds.component_generic_embed], null);

//# sourceMappingURL=athens.components.website_embeds.js.map
