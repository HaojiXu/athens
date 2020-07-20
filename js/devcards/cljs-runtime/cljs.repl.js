goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45370){
var map__45371 = p__45370;
var map__45371__$1 = (((((!((map__45371 == null))))?(((((map__45371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45371):map__45371);
var m = map__45371__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45371__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45371__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45373_45578 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45374_45579 = null;
var count__45375_45580 = (0);
var i__45376_45581 = (0);
while(true){
if((i__45376_45581 < count__45375_45580)){
var f_45582 = chunk__45374_45579.cljs$core$IIndexed$_nth$arity$2(null,i__45376_45581);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45582], 0));


var G__45583 = seq__45373_45578;
var G__45584 = chunk__45374_45579;
var G__45585 = count__45375_45580;
var G__45586 = (i__45376_45581 + (1));
seq__45373_45578 = G__45583;
chunk__45374_45579 = G__45584;
count__45375_45580 = G__45585;
i__45376_45581 = G__45586;
continue;
} else {
var temp__5735__auto___45588 = cljs.core.seq(seq__45373_45578);
if(temp__5735__auto___45588){
var seq__45373_45589__$1 = temp__5735__auto___45588;
if(cljs.core.chunked_seq_QMARK_(seq__45373_45589__$1)){
var c__4609__auto___45590 = cljs.core.chunk_first(seq__45373_45589__$1);
var G__45591 = cljs.core.chunk_rest(seq__45373_45589__$1);
var G__45592 = c__4609__auto___45590;
var G__45593 = cljs.core.count(c__4609__auto___45590);
var G__45594 = (0);
seq__45373_45578 = G__45591;
chunk__45374_45579 = G__45592;
count__45375_45580 = G__45593;
i__45376_45581 = G__45594;
continue;
} else {
var f_45595 = cljs.core.first(seq__45373_45589__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45595], 0));


var G__45596 = cljs.core.next(seq__45373_45589__$1);
var G__45597 = null;
var G__45598 = (0);
var G__45599 = (0);
seq__45373_45578 = G__45596;
chunk__45374_45579 = G__45597;
count__45375_45580 = G__45598;
i__45376_45581 = G__45599;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45600 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45600], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45600)))?cljs.core.second(arglists_45600):arglists_45600)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45378_45602 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45379_45603 = null;
var count__45380_45604 = (0);
var i__45381_45605 = (0);
while(true){
if((i__45381_45605 < count__45380_45604)){
var vec__45392_45606 = chunk__45379_45603.cljs$core$IIndexed$_nth$arity$2(null,i__45381_45605);
var name_45607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45392_45606,(0),null);
var map__45395_45608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45392_45606,(1),null);
var map__45395_45609__$1 = (((((!((map__45395_45608 == null))))?(((((map__45395_45608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45395_45608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45395_45608):map__45395_45608);
var doc_45610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45395_45609__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45395_45609__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45607], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45611], 0));

if(cljs.core.truth_(doc_45610)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45610], 0));
} else {
}


var G__45613 = seq__45378_45602;
var G__45614 = chunk__45379_45603;
var G__45615 = count__45380_45604;
var G__45616 = (i__45381_45605 + (1));
seq__45378_45602 = G__45613;
chunk__45379_45603 = G__45614;
count__45380_45604 = G__45615;
i__45381_45605 = G__45616;
continue;
} else {
var temp__5735__auto___45617 = cljs.core.seq(seq__45378_45602);
if(temp__5735__auto___45617){
var seq__45378_45618__$1 = temp__5735__auto___45617;
if(cljs.core.chunked_seq_QMARK_(seq__45378_45618__$1)){
var c__4609__auto___45619 = cljs.core.chunk_first(seq__45378_45618__$1);
var G__45620 = cljs.core.chunk_rest(seq__45378_45618__$1);
var G__45621 = c__4609__auto___45619;
var G__45622 = cljs.core.count(c__4609__auto___45619);
var G__45623 = (0);
seq__45378_45602 = G__45620;
chunk__45379_45603 = G__45621;
count__45380_45604 = G__45622;
i__45381_45605 = G__45623;
continue;
} else {
var vec__45401_45624 = cljs.core.first(seq__45378_45618__$1);
var name_45625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45401_45624,(0),null);
var map__45404_45626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45401_45624,(1),null);
var map__45404_45627__$1 = (((((!((map__45404_45626 == null))))?(((((map__45404_45626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45404_45626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45404_45626):map__45404_45626);
var doc_45628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45404_45627__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45404_45627__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45625], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45629], 0));

if(cljs.core.truth_(doc_45628)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45628], 0));
} else {
}


var G__45630 = cljs.core.next(seq__45378_45618__$1);
var G__45631 = null;
var G__45632 = (0);
var G__45633 = (0);
seq__45378_45602 = G__45630;
chunk__45379_45603 = G__45631;
count__45380_45604 = G__45632;
i__45381_45605 = G__45633;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45407 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45408 = null;
var count__45409 = (0);
var i__45410 = (0);
while(true){
if((i__45410 < count__45409)){
var role = chunk__45408.cljs$core$IIndexed$_nth$arity$2(null,i__45410);
var temp__5735__auto___45634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45634__$1)){
var spec_45635 = temp__5735__auto___45634__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45635)], 0));
} else {
}


var G__45636 = seq__45407;
var G__45637 = chunk__45408;
var G__45638 = count__45409;
var G__45639 = (i__45410 + (1));
seq__45407 = G__45636;
chunk__45408 = G__45637;
count__45409 = G__45638;
i__45410 = G__45639;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45407);
if(temp__5735__auto____$1){
var seq__45407__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45407__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45407__$1);
var G__45640 = cljs.core.chunk_rest(seq__45407__$1);
var G__45641 = c__4609__auto__;
var G__45642 = cljs.core.count(c__4609__auto__);
var G__45643 = (0);
seq__45407 = G__45640;
chunk__45408 = G__45641;
count__45409 = G__45642;
i__45410 = G__45643;
continue;
} else {
var role = cljs.core.first(seq__45407__$1);
var temp__5735__auto___45644__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45644__$2)){
var spec_45645 = temp__5735__auto___45644__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45645)], 0));
} else {
}


var G__45646 = cljs.core.next(seq__45407__$1);
var G__45647 = null;
var G__45648 = (0);
var G__45649 = (0);
seq__45407 = G__45646;
chunk__45408 = G__45647;
count__45409 = G__45648;
i__45410 = G__45649;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45651 = cljs.core.ex_cause(t);
via = G__45650;
t = G__45651;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45437 = datafied_throwable;
var map__45437__$1 = (((((!((map__45437 == null))))?(((((map__45437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45437):map__45437);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45437__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45437__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45437__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45438 = cljs.core.last(via);
var map__45438__$1 = (((((!((map__45438 == null))))?(((((map__45438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45438):map__45438);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45438__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45438__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45438__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45439 = data;
var map__45439__$1 = (((((!((map__45439 == null))))?(((((map__45439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45439):map__45439);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45439__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45439__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45439__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45440 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45440__$1 = (((((!((map__45440 == null))))?(((((map__45440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45440):map__45440);
var top_data = map__45440__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45440__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45459 = phase;
var G__45459__$1 = (((G__45459 instanceof cljs.core.Keyword))?G__45459.fqn:null);
switch (G__45459__$1) {
case "read-source":
var map__45460 = data;
var map__45460__$1 = (((((!((map__45460 == null))))?(((((map__45460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45460):map__45460);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45460__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45460__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45466 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45466__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45466,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45466);
var G__45466__$2 = (cljs.core.truth_((function (){var fexpr__45472 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45472.cljs$core$IFn$_invoke$arity$1 ? fexpr__45472.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45472.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45466__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45466__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45466__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45466__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45479 = top_data;
var G__45479__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45479,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45479);
var G__45479__$2 = (cljs.core.truth_((function (){var fexpr__45489 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45489.cljs$core$IFn$_invoke$arity$1 ? fexpr__45489.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45489.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45479__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45479__$1);
var G__45479__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45479__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45479__$2);
var G__45479__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45479__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45479__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45479__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45479__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45490 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(3),null);
var G__45493 = top_data;
var G__45493__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45493,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45493);
var G__45493__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45493__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45493__$1);
var G__45493__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45493__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45493__$2);
var G__45493__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45493__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45493__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45493__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45493__$4;
}

break;
case "execution":
var vec__45498 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45498,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45498,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45498,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45498,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45429_SHARP_){
var or__4185__auto__ = (p1__45429_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45505.cljs$core$IFn$_invoke$arity$1 ? fexpr__45505.cljs$core$IFn$_invoke$arity$1(p1__45429_SHARP_) : fexpr__45505.call(null,p1__45429_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45506 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45506__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45506,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45506);
var G__45506__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45506__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45506__$1);
var G__45506__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45506__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45506__$2);
var G__45506__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45506__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45506__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45506__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45506__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45459__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45531){
var map__45532 = p__45531;
var map__45532__$1 = (((((!((map__45532 == null))))?(((((map__45532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45532):map__45532);
var triage_data = map__45532__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45538 = phase;
var G__45538__$1 = (((G__45538 instanceof cljs.core.Keyword))?G__45538.fqn:null);
switch (G__45538__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45539 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45541 = loc;
var G__45542 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45543_45663 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45544_45664 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45545_45665 = true;
var _STAR_print_fn_STAR__temp_val__45546_45666 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45545_45665);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45546_45666);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45521_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45521_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45544_45664);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45543_45663);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45539,G__45540,G__45541,G__45542) : format.call(null,G__45539,G__45540,G__45541,G__45542));

break;
case "macroexpansion":
var G__45548 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45549 = cause_type;
var G__45550 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45551 = loc;
var G__45552 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45548,G__45549,G__45550,G__45551,G__45552) : format.call(null,G__45548,G__45549,G__45550,G__45551,G__45552));

break;
case "compile-syntax-check":
var G__45553 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45554 = cause_type;
var G__45555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45556 = loc;
var G__45557 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45553,G__45554,G__45555,G__45556,G__45557) : format.call(null,G__45553,G__45554,G__45555,G__45556,G__45557));

break;
case "compilation":
var G__45559 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45560 = cause_type;
var G__45561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45562 = loc;
var G__45563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45559,G__45560,G__45561,G__45562,G__45563) : format.call(null,G__45559,G__45560,G__45561,G__45562,G__45563));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45564 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45565 = symbol;
var G__45566 = loc;
var G__45567 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45568_45667 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45569_45668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45570_45669 = true;
var _STAR_print_fn_STAR__temp_val__45571_45670 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45570_45669);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45571_45670);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45526_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45526_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45569_45668);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45568_45667);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45564,G__45565,G__45566,G__45567) : format.call(null,G__45564,G__45565,G__45566,G__45567));
} else {
var G__45572 = "Execution error%s at %s(%s).\n%s\n";
var G__45573 = cause_type;
var G__45574 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45575 = loc;
var G__45576 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45572,G__45573,G__45574,G__45575,G__45576) : format.call(null,G__45572,G__45573,G__45574,G__45575,G__45576));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45538__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
