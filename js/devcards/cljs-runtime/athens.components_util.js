goog.provide('athens.components_util');
goog.require('cljs.core');
goog.require('athens.components.todo');
goog.require('athens.components.website_embeds');
athens.components_util.default_component = (function athens$components_util$default_component(content,uid){
var fexpr__56199_56200 = cljs.core.constantly(null);
(fexpr__56199_56200.cljs$core$IFn$_invoke$arity$1 ? fexpr__56199_56200.cljs$core$IFn$_invoke$arity$1(uid) : fexpr__56199_56200.call(null,uid));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),content], null)], null);
});
/**
 * Renders a component using its parse tree & its uid.
 */
athens.components_util.render_component = (function athens$components_util$render_component(content,uid){
var components = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(athens.components.todo.components,athens.components.website_embeds.components);
var rendered = cljs.core.some((function (comp){
if(cljs.core.truth_(cljs.core.re_matches(cljs.core.get.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"match","match",1220059550)),content))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"render","render",-1408033454));
} else {
return null;
}
}),components);
if(cljs.core.truth_(rendered)){
return (rendered.cljs$core$IFn$_invoke$arity$2 ? rendered.cljs$core$IFn$_invoke$arity$2(content,uid) : rendered.call(null,content,uid));
} else {
return athens.components_util.default_component(content,uid);
}
});

//# sourceMappingURL=athens.components_util.js.map
