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
var G__56265 = (line + (1));
var G__56266 = (1);
var G__56267 = (counter + (1));
line = G__56265;
col = G__56266;
counter = G__56267;
continue;
} else {
var G__56268 = line;
var G__56269 = (col + (1));
var G__56270 = (counter + (1));
line = G__56268;
col = G__56269;
counter = G__56270;
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
var G__56271 = cljs.core.next(chars);
var G__56272 = (n__$1 - (1));
chars = G__56271;
n__$1 = G__56272;
continue;
} else {
var G__56273 = cljs.core.next(chars);
var G__56274 = n__$1;
chars = G__56273;
n__$1 = G__56274;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56254){
var map__56255 = p__56254;
var map__56255__$1 = (((((!((map__56255 == null))))?(((((map__56255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56255):map__56255);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56257_56275 = cljs.core.seq(full_reasons);
var chunk__56258_56276 = null;
var count__56259_56277 = (0);
var i__56260_56278 = (0);
while(true){
if((i__56260_56278 < count__56259_56277)){
var r_56279 = chunk__56258_56276.cljs$core$IIndexed$_nth$arity$2(null,i__56260_56278);
instaparse.failure.print_reason(r_56279);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56280 = seq__56257_56275;
var G__56281 = chunk__56258_56276;
var G__56282 = count__56259_56277;
var G__56283 = (i__56260_56278 + (1));
seq__56257_56275 = G__56280;
chunk__56258_56276 = G__56281;
count__56259_56277 = G__56282;
i__56260_56278 = G__56283;
continue;
} else {
var temp__5735__auto___56284 = cljs.core.seq(seq__56257_56275);
if(temp__5735__auto___56284){
var seq__56257_56285__$1 = temp__5735__auto___56284;
if(cljs.core.chunked_seq_QMARK_(seq__56257_56285__$1)){
var c__4609__auto___56286 = cljs.core.chunk_first(seq__56257_56285__$1);
var G__56287 = cljs.core.chunk_rest(seq__56257_56285__$1);
var G__56288 = c__4609__auto___56286;
var G__56289 = cljs.core.count(c__4609__auto___56286);
var G__56290 = (0);
seq__56257_56275 = G__56287;
chunk__56258_56276 = G__56288;
count__56259_56277 = G__56289;
i__56260_56278 = G__56290;
continue;
} else {
var r_56291 = cljs.core.first(seq__56257_56285__$1);
instaparse.failure.print_reason(r_56291);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56292 = cljs.core.next(seq__56257_56285__$1);
var G__56293 = null;
var G__56294 = (0);
var G__56295 = (0);
seq__56257_56275 = G__56292;
chunk__56258_56276 = G__56293;
count__56259_56277 = G__56294;
i__56260_56278 = G__56295;
continue;
}
} else {
}
}
break;
}

var seq__56261 = cljs.core.seq(partial_reasons);
var chunk__56262 = null;
var count__56263 = (0);
var i__56264 = (0);
while(true){
if((i__56264 < count__56263)){
var r = chunk__56262.cljs$core$IIndexed$_nth$arity$2(null,i__56264);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56296 = seq__56261;
var G__56297 = chunk__56262;
var G__56298 = count__56263;
var G__56299 = (i__56264 + (1));
seq__56261 = G__56296;
chunk__56262 = G__56297;
count__56263 = G__56298;
i__56264 = G__56299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56261);
if(temp__5735__auto__){
var seq__56261__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56261__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56261__$1);
var G__56300 = cljs.core.chunk_rest(seq__56261__$1);
var G__56301 = c__4609__auto__;
var G__56302 = cljs.core.count(c__4609__auto__);
var G__56303 = (0);
seq__56261 = G__56300;
chunk__56262 = G__56301;
count__56263 = G__56302;
i__56264 = G__56303;
continue;
} else {
var r = cljs.core.first(seq__56261__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56304 = cljs.core.next(seq__56261__$1);
var G__56305 = null;
var G__56306 = (0);
var G__56307 = (0);
seq__56261 = G__56304;
chunk__56262 = G__56305;
count__56263 = G__56306;
i__56264 = G__56307;
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
