goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__21021){
var vec__21022 = p__21021;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__21032 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__21046 = arguments.length;
switch (G__21046) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = cljs.core.count(a);
var y__4274__auto__ = cljs.core.count(b);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4488__auto__.call(null,x));
} else {
var m__4485__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4485__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4488__auto__.call(null,a,b));
} else {
var m__4485__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4485__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__21064_21150 = clojure.data.equality_partition;
var G__21065_21151 = "null";
var G__21066_21152 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21064_21150,G__21065_21151,G__21066_21152);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__21068_21153 = clojure.data.equality_partition;
var G__21069_21154 = "string";
var G__21070_21155 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21068_21153,G__21069_21154,G__21070_21155);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__21073_21157 = clojure.data.equality_partition;
var G__21074_21158 = "number";
var G__21075_21159 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21073_21157,G__21074_21158,G__21075_21159);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__21078_21160 = clojure.data.equality_partition;
var G__21079_21161 = "array";
var G__21080_21162 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__21078_21160,G__21079_21161,G__21080_21162);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__21082_21163 = clojure.data.equality_partition;
var G__21083_21164 = "function";
var G__21084_21165 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21082_21163,G__21083_21164,G__21084_21165);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__21087_21166 = clojure.data.equality_partition;
var G__21088_21167 = "boolean";
var G__21089_21168 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21087_21166,G__21088_21167,G__21089_21168);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__21090_21169 = clojure.data.equality_partition;
var G__21091_21170 = "_";
var G__21092_21171 = (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});
goog.object.set(G__21090_21169,G__21091_21170,G__21092_21171);
goog.object.set(clojure.data.Diff,"null",true);

var G__21099_21176 = clojure.data.diff_similar;
var G__21100_21177 = "null";
var G__21101_21178 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21099_21176,G__21100_21177,G__21101_21178);

goog.object.set(clojure.data.Diff,"string",true);

var G__21102_21183 = clojure.data.diff_similar;
var G__21103_21184 = "string";
var G__21104_21185 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21102_21183,G__21103_21184,G__21104_21185);

goog.object.set(clojure.data.Diff,"number",true);

var G__21107_21186 = clojure.data.diff_similar;
var G__21108_21187 = "number";
var G__21109_21188 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21107_21186,G__21108_21187,G__21109_21188);

goog.object.set(clojure.data.Diff,"array",true);

var G__21112_21193 = clojure.data.diff_similar;
var G__21113_21194 = "array";
var G__21114_21195 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__21112_21193,G__21113_21194,G__21114_21195);

goog.object.set(clojure.data.Diff,"function",true);

var G__21116_21196 = clojure.data.diff_similar;
var G__21117_21197 = "function";
var G__21118_21198 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21116_21196,G__21117_21197,G__21118_21198);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__21120_21199 = clojure.data.diff_similar;
var G__21121_21200 = "boolean";
var G__21122_21201 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21120_21199,G__21121_21200,G__21122_21201);

goog.object.set(clojure.data.Diff,"_",true);

var G__21124_21202 = clojure.data.diff_similar;
var G__21125_21203 = "_";
var G__21126_21204 = (function (a,b){
var fexpr__21131 = (function (){var G__21132 = clojure.data.equality_partition(a);
var G__21132__$1 = (((G__21132 instanceof cljs.core.Keyword))?G__21132.fqn:null);
switch (G__21132__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21132__$1)].join('')));

}
})();
return (fexpr__21131.cljs$core$IFn$_invoke$arity$2 ? fexpr__21131.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__21131.call(null,a,b));
});
goog.object.set(G__21124_21202,G__21125_21203,G__21126_21204);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
