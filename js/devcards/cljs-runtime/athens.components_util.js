goog.provide('athens.components_util');
goog.require('cljs.core');
goog.require('athens.components.todo');
/**
 * Renders a component using its parse tree & its uid.
 */
athens.components_util.render_component = (function athens$components_util$render_component(content,uid){
var components = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(athens.components.todo.components);
return cljs.core.some((function (comp){
if(cljs.core.truth_(cljs.core.re_matches(cljs.core.get.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"match","match",1220059550)),content))){
var fexpr__56198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"render","render",-1408033454));
return (fexpr__56198.cljs$core$IFn$_invoke$arity$2 ? fexpr__56198.cljs$core$IFn$_invoke$arity$2(content,uid) : fexpr__56198.call(null,content,uid));
} else {
return null;
}
}),components);
});

//# sourceMappingURL=athens.components_util.js.map
