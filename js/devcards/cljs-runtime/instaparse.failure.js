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
var G__56286 = (line + (1));
var G__56287 = (1);
var G__56288 = (counter + (1));
line = G__56286;
col = G__56287;
counter = G__56288;
continue;
} else {
var G__56289 = line;
var G__56290 = (col + (1));
var G__56291 = (counter + (1));
line = G__56289;
col = G__56290;
counter = G__56291;
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
var G__56292 = cljs.core.next(chars);
var G__56293 = (n__$1 - (1));
chars = G__56292;
n__$1 = G__56293;
continue;
} else {
var G__56294 = cljs.core.next(chars);
var G__56295 = n__$1;
chars = G__56294;
n__$1 = G__56295;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56268){
var map__56269 = p__56268;
var map__56269__$1 = (((((!((map__56269 == null))))?(((((map__56269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56269):map__56269);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56269__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56271_56296 = cljs.core.seq(full_reasons);
var chunk__56272_56297 = null;
var count__56273_56298 = (0);
var i__56274_56299 = (0);
while(true){
if((i__56274_56299 < count__56273_56298)){
var r_56300 = chunk__56272_56297.cljs$core$IIndexed$_nth$arity$2(null,i__56274_56299);
instaparse.failure.print_reason(r_56300);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56301 = seq__56271_56296;
var G__56302 = chunk__56272_56297;
var G__56303 = count__56273_56298;
var G__56304 = (i__56274_56299 + (1));
seq__56271_56296 = G__56301;
chunk__56272_56297 = G__56302;
count__56273_56298 = G__56303;
i__56274_56299 = G__56304;
continue;
} else {
var temp__5735__auto___56305 = cljs.core.seq(seq__56271_56296);
if(temp__5735__auto___56305){
var seq__56271_56306__$1 = temp__5735__auto___56305;
if(cljs.core.chunked_seq_QMARK_(seq__56271_56306__$1)){
var c__4609__auto___56307 = cljs.core.chunk_first(seq__56271_56306__$1);
var G__56308 = cljs.core.chunk_rest(seq__56271_56306__$1);
var G__56309 = c__4609__auto___56307;
var G__56310 = cljs.core.count(c__4609__auto___56307);
var G__56311 = (0);
seq__56271_56296 = G__56308;
chunk__56272_56297 = G__56309;
count__56273_56298 = G__56310;
i__56274_56299 = G__56311;
continue;
} else {
var r_56312 = cljs.core.first(seq__56271_56306__$1);
instaparse.failure.print_reason(r_56312);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56313 = cljs.core.next(seq__56271_56306__$1);
var G__56314 = null;
var G__56315 = (0);
var G__56316 = (0);
seq__56271_56296 = G__56313;
chunk__56272_56297 = G__56314;
count__56273_56298 = G__56315;
i__56274_56299 = G__56316;
continue;
}
} else {
}
}
break;
}

var seq__56278 = cljs.core.seq(partial_reasons);
var chunk__56279 = null;
var count__56280 = (0);
var i__56281 = (0);
while(true){
if((i__56281 < count__56280)){
var r = chunk__56279.cljs$core$IIndexed$_nth$arity$2(null,i__56281);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56317 = seq__56278;
var G__56318 = chunk__56279;
var G__56319 = count__56280;
var G__56320 = (i__56281 + (1));
seq__56278 = G__56317;
chunk__56279 = G__56318;
count__56280 = G__56319;
i__56281 = G__56320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56278);
if(temp__5735__auto__){
var seq__56278__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56278__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56278__$1);
var G__56322 = cljs.core.chunk_rest(seq__56278__$1);
var G__56323 = c__4609__auto__;
var G__56324 = cljs.core.count(c__4609__auto__);
var G__56325 = (0);
seq__56278 = G__56322;
chunk__56279 = G__56323;
count__56280 = G__56324;
i__56281 = G__56325;
continue;
} else {
var r = cljs.core.first(seq__56278__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56326 = cljs.core.next(seq__56278__$1);
var G__56327 = null;
var G__56328 = (0);
var G__56329 = (0);
seq__56278 = G__56326;
chunk__56279 = G__56327;
count__56280 = G__56328;
i__56281 = G__56329;
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
