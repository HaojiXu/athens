goog.provide('athens.components_util');
goog.require('cljs.core');
goog.require('athens.components.todo');
athens.components_util.default_component = (function athens$components_util$default_component(content,uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"component-default"], null),content], null)], null);
});
/**
 * Renders a component using its parse tree & its uid.
 */
athens.components_util.render_component = (function athens$components_util$render_component(content,uid){
var components = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(athens.components.todo.components);
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
