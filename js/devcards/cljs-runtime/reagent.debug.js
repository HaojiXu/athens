goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31595__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31600__i = 0, G__31600__a = new Array(arguments.length -  0);
while (G__31600__i < G__31600__a.length) {G__31600__a[G__31600__i] = arguments[G__31600__i + 0]; ++G__31600__i;}
  args = new cljs.core.IndexedSeq(G__31600__a,0,null);
} 
return G__31595__delegate.call(this,args);};
G__31595.cljs$lang$maxFixedArity = 0;
G__31595.cljs$lang$applyTo = (function (arglist__31601){
var args = cljs.core.seq(arglist__31601);
return G__31595__delegate(args);
});
G__31595.cljs$core$IFn$_invoke$arity$variadic = G__31595__delegate;
return G__31595;
})()
);

(o.error = (function() { 
var G__31602__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31607__i = 0, G__31607__a = new Array(arguments.length -  0);
while (G__31607__i < G__31607__a.length) {G__31607__a[G__31607__i] = arguments[G__31607__i + 0]; ++G__31607__i;}
  args = new cljs.core.IndexedSeq(G__31607__a,0,null);
} 
return G__31602__delegate.call(this,args);};
G__31602.cljs$lang$maxFixedArity = 0;
G__31602.cljs$lang$applyTo = (function (arglist__31608){
var args = cljs.core.seq(arglist__31608);
return G__31602__delegate(args);
});
G__31602.cljs$core$IFn$_invoke$arity$variadic = G__31602__delegate;
return G__31602;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
