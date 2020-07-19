goog.provide('athens.components.components_util');
goog.require('cljs.core');
goog.require('athens.components.default_components');
athens.components.components_util.empty_component = (function athens$components$components_util$empty_component(content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),content], null);
});
/**
 * Renders a component using its parse tree & its uid.
 */
athens.components.components_util.render_component = (function athens$components$components_util$render_component(content,uid){
var render = cljs.core.some((function (comp){
if(cljs.core.truth_(cljs.core.re_matches(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(comp),content))){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(comp);
} else {
return null;
}
}),athens.components.default_components.components);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return e.stopPropagation();
})], null),(cljs.core.truth_(render)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,content,uid], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.components_util.empty_component,content,uid], null))], null);
});

//# sourceMappingURL=athens.components.components_util.js.map
