goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__56285 = (line + (1));
var G__56286 = (1);
var G__56287 = (counter + (1));
line = G__56285;
col = G__56286;
counter = G__56287;
continue;
} else {
var G__56288 = line;
var G__56289 = (col + (1));
var G__56290 = (counter + (1));
line = G__56288;
col = G__56289;
counter = G__56290;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__56291 = cljs.core.next(chars);
var G__56292 = (n__$1 - (1));
chars = G__56291;
n__$1 = G__56292;
continue;
} else {
var G__56293 = cljs.core.next(chars);
var G__56294 = n__$1;
chars = G__56293;
n__$1 = G__56294;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56273){
var map__56274 = p__56273;
var map__56274__$1 = (((((!((map__56274 == null))))?(((((map__56274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56274):map__56274);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__56276_56295 = cljs.core.seq(full_reasons);
var chunk__56277_56296 = null;
var count__56278_56297 = (0);
var i__56279_56298 = (0);
while(true){
if((i__56279_56298 < count__56278_56297)){
var r_56299 = chunk__56277_56296.cljs$core$IIndexed$_nth$arity$2(null,i__56279_56298);
instaparse.failure.print_reason(r_56299);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56300 = seq__56276_56295;
var G__56301 = chunk__56277_56296;
var G__56302 = count__56278_56297;
var G__56303 = (i__56279_56298 + (1));
seq__56276_56295 = G__56300;
chunk__56277_56296 = G__56301;
count__56278_56297 = G__56302;
i__56279_56298 = G__56303;
continue;
} else {
var temp__5735__auto___56304 = cljs.core.seq(seq__56276_56295);
if(temp__5735__auto___56304){
var seq__56276_56305__$1 = temp__5735__auto___56304;
if(cljs.core.chunked_seq_QMARK_(seq__56276_56305__$1)){
var c__4609__auto___56306 = cljs.core.chunk_first(seq__56276_56305__$1);
var G__56307 = cljs.core.chunk_rest(seq__56276_56305__$1);
var G__56308 = c__4609__auto___56306;
var G__56309 = cljs.core.count(c__4609__auto___56306);
var G__56310 = (0);
seq__56276_56295 = G__56307;
chunk__56277_56296 = G__56308;
count__56278_56297 = G__56309;
i__56279_56298 = G__56310;
continue;
} else {
var r_56311 = cljs.core.first(seq__56276_56305__$1);
instaparse.failure.print_reason(r_56311);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56312 = cljs.core.next(seq__56276_56305__$1);
var G__56313 = null;
var G__56314 = (0);
var G__56315 = (0);
seq__56276_56295 = G__56312;
chunk__56277_56296 = G__56313;
count__56278_56297 = G__56314;
i__56279_56298 = G__56315;
continue;
}
} else {
}
}
break;
}

var seq__56280 = cljs.core.seq(partial_reasons);
var chunk__56281 = null;
var count__56282 = (0);
var i__56283 = (0);
while(true){
if((i__56283 < count__56282)){
var r = chunk__56281.cljs$core$IIndexed$_nth$arity$2(null,i__56283);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56316 = seq__56280;
var G__56317 = chunk__56281;
var G__56318 = count__56282;
var G__56319 = (i__56283 + (1));
seq__56280 = G__56316;
chunk__56281 = G__56317;
count__56282 = G__56318;
i__56283 = G__56319;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56280);
if(temp__5735__auto__){
var seq__56280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56280__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56280__$1);
var G__56320 = cljs.core.chunk_rest(seq__56280__$1);
var G__56321 = c__4609__auto__;
var G__56322 = cljs.core.count(c__4609__auto__);
var G__56323 = (0);
seq__56280 = G__56320;
chunk__56281 = G__56321;
count__56282 = G__56322;
i__56283 = G__56323;
continue;
} else {
var r = cljs.core.first(seq__56280__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56324 = cljs.core.next(seq__56280__$1);
var G__56325 = null;
var G__56326 = (0);
var G__56327 = (0);
seq__56280 = G__56324;
chunk__56281 = G__56325;
count__56282 = G__56326;
i__56283 = G__56327;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
