goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45384){
var map__45394 = p__45384;
var map__45394__$1 = (((((!((map__45394 == null))))?(((((map__45394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45394):map__45394);
var m = map__45394__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45394__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45396_45589 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45397_45590 = null;
var count__45398_45591 = (0);
var i__45399_45592 = (0);
while(true){
if((i__45399_45592 < count__45398_45591)){
var f_45593 = chunk__45397_45590.cljs$core$IIndexed$_nth$arity$2(null,i__45399_45592);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45593], 0));


var G__45594 = seq__45396_45589;
var G__45595 = chunk__45397_45590;
var G__45596 = count__45398_45591;
var G__45597 = (i__45399_45592 + (1));
seq__45396_45589 = G__45594;
chunk__45397_45590 = G__45595;
count__45398_45591 = G__45596;
i__45399_45592 = G__45597;
continue;
} else {
var temp__5735__auto___45598 = cljs.core.seq(seq__45396_45589);
if(temp__5735__auto___45598){
var seq__45396_45599__$1 = temp__5735__auto___45598;
if(cljs.core.chunked_seq_QMARK_(seq__45396_45599__$1)){
var c__4609__auto___45600 = cljs.core.chunk_first(seq__45396_45599__$1);
var G__45601 = cljs.core.chunk_rest(seq__45396_45599__$1);
var G__45602 = c__4609__auto___45600;
var G__45603 = cljs.core.count(c__4609__auto___45600);
var G__45604 = (0);
seq__45396_45589 = G__45601;
chunk__45397_45590 = G__45602;
count__45398_45591 = G__45603;
i__45399_45592 = G__45604;
continue;
} else {
var f_45605 = cljs.core.first(seq__45396_45599__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45605], 0));


var G__45606 = cljs.core.next(seq__45396_45599__$1);
var G__45607 = null;
var G__45608 = (0);
var G__45609 = (0);
seq__45396_45589 = G__45606;
chunk__45397_45590 = G__45607;
count__45398_45591 = G__45608;
i__45399_45592 = G__45609;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45610 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45610], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45610)))?cljs.core.second(arglists_45610):arglists_45610)], 0));
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
var seq__45421_45611 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45422_45612 = null;
var count__45423_45613 = (0);
var i__45424_45614 = (0);
while(true){
if((i__45424_45614 < count__45423_45613)){
var vec__45459_45615 = chunk__45422_45612.cljs$core$IIndexed$_nth$arity$2(null,i__45424_45614);
var name_45616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45459_45615,(0),null);
var map__45462_45617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45459_45615,(1),null);
var map__45462_45618__$1 = (((((!((map__45462_45617 == null))))?(((((map__45462_45617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45462_45617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45462_45617):map__45462_45617);
var doc_45619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45462_45618__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45462_45618__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45616], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45620], 0));

if(cljs.core.truth_(doc_45619)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45619], 0));
} else {
}


var G__45621 = seq__45421_45611;
var G__45622 = chunk__45422_45612;
var G__45623 = count__45423_45613;
var G__45624 = (i__45424_45614 + (1));
seq__45421_45611 = G__45621;
chunk__45422_45612 = G__45622;
count__45423_45613 = G__45623;
i__45424_45614 = G__45624;
continue;
} else {
var temp__5735__auto___45625 = cljs.core.seq(seq__45421_45611);
if(temp__5735__auto___45625){
var seq__45421_45626__$1 = temp__5735__auto___45625;
if(cljs.core.chunked_seq_QMARK_(seq__45421_45626__$1)){
var c__4609__auto___45627 = cljs.core.chunk_first(seq__45421_45626__$1);
var G__45628 = cljs.core.chunk_rest(seq__45421_45626__$1);
var G__45629 = c__4609__auto___45627;
var G__45630 = cljs.core.count(c__4609__auto___45627);
var G__45631 = (0);
seq__45421_45611 = G__45628;
chunk__45422_45612 = G__45629;
count__45423_45613 = G__45630;
i__45424_45614 = G__45631;
continue;
} else {
var vec__45471_45632 = cljs.core.first(seq__45421_45626__$1);
var name_45633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45471_45632,(0),null);
var map__45474_45634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45471_45632,(1),null);
var map__45474_45635__$1 = (((((!((map__45474_45634 == null))))?(((((map__45474_45634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45474_45634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45474_45634):map__45474_45634);
var doc_45636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45474_45635__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45474_45635__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45633], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45637], 0));

if(cljs.core.truth_(doc_45636)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45636], 0));
} else {
}


var G__45638 = cljs.core.next(seq__45421_45626__$1);
var G__45639 = null;
var G__45640 = (0);
var G__45641 = (0);
seq__45421_45611 = G__45638;
chunk__45422_45612 = G__45639;
count__45423_45613 = G__45640;
i__45424_45614 = G__45641;
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

var seq__45490 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45491 = null;
var count__45492 = (0);
var i__45493 = (0);
while(true){
if((i__45493 < count__45492)){
var role = chunk__45491.cljs$core$IIndexed$_nth$arity$2(null,i__45493);
var temp__5735__auto___45642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45642__$1)){
var spec_45643 = temp__5735__auto___45642__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45643)], 0));
} else {
}


var G__45644 = seq__45490;
var G__45645 = chunk__45491;
var G__45646 = count__45492;
var G__45647 = (i__45493 + (1));
seq__45490 = G__45644;
chunk__45491 = G__45645;
count__45492 = G__45646;
i__45493 = G__45647;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45490);
if(temp__5735__auto____$1){
var seq__45490__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45490__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45490__$1);
var G__45649 = cljs.core.chunk_rest(seq__45490__$1);
var G__45650 = c__4609__auto__;
var G__45651 = cljs.core.count(c__4609__auto__);
var G__45652 = (0);
seq__45490 = G__45649;
chunk__45491 = G__45650;
count__45492 = G__45651;
i__45493 = G__45652;
continue;
} else {
var role = cljs.core.first(seq__45490__$1);
var temp__5735__auto___45653__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45653__$2)){
var spec_45654 = temp__5735__auto___45653__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45654)], 0));
} else {
}


var G__45655 = cljs.core.next(seq__45490__$1);
var G__45656 = null;
var G__45657 = (0);
var G__45658 = (0);
seq__45490 = G__45655;
chunk__45491 = G__45656;
count__45492 = G__45657;
i__45493 = G__45658;
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
var G__45659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45660 = cljs.core.ex_cause(t);
via = G__45659;
t = G__45660;
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
var map__45510 = datafied_throwable;
var map__45510__$1 = (((((!((map__45510 == null))))?(((((map__45510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45510):map__45510);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45510__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45510__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45510__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45511 = cljs.core.last(via);
var map__45511__$1 = (((((!((map__45511 == null))))?(((((map__45511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45511):map__45511);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45511__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45511__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45511__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45512 = data;
var map__45512__$1 = (((((!((map__45512 == null))))?(((((map__45512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45512):map__45512);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45513 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45513__$1 = (((((!((map__45513 == null))))?(((((map__45513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45513):map__45513);
var top_data = map__45513__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45513__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45520 = phase;
var G__45520__$1 = (((G__45520 instanceof cljs.core.Keyword))?G__45520.fqn:null);
switch (G__45520__$1) {
case "read-source":
var map__45521 = data;
var map__45521__$1 = (((((!((map__45521 == null))))?(((((map__45521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45521):map__45521);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45521__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45521__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45523 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45523__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45523,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45523);
var G__45523__$2 = (cljs.core.truth_((function (){var fexpr__45525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45525.cljs$core$IFn$_invoke$arity$1 ? fexpr__45525.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45525.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45523__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45523__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45523__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45526 = top_data;
var G__45526__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45526,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45526);
var G__45526__$2 = (cljs.core.truth_((function (){var fexpr__45527 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45527.cljs$core$IFn$_invoke$arity$1 ? fexpr__45527.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45527.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45526__$1);
var G__45526__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45526__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45526__$2);
var G__45526__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45526__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45526__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45526__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45526__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45528 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528,(3),null);
var G__45531 = top_data;
var G__45531__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45531,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45531);
var G__45531__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45531__$1);
var G__45531__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45531__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45531__$2);
var G__45531__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45531__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45531__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45531__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45531__$4;
}

break;
case "execution":
var vec__45532 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45509_SHARP_){
var or__4185__auto__ = (p1__45509_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45537 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45537.cljs$core$IFn$_invoke$arity$1 ? fexpr__45537.cljs$core$IFn$_invoke$arity$1(p1__45509_SHARP_) : fexpr__45537.call(null,p1__45509_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45538 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45538__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45538,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45538);
var G__45538__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45538__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45538__$1);
var G__45538__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45538__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45538__$2);
var G__45538__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45538__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45538__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45538__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45538__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45520__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45541){
var map__45542 = p__45541;
var map__45542__$1 = (((((!((map__45542 == null))))?(((((map__45542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45542):map__45542);
var triage_data = map__45542__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45542__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45544 = phase;
var G__45544__$1 = (((G__45544 instanceof cljs.core.Keyword))?G__45544.fqn:null);
switch (G__45544__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45545 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45547 = loc;
var G__45548 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45549_45665 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45550_45666 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45551_45667 = true;
var _STAR_print_fn_STAR__temp_val__45552_45668 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45551_45667);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45552_45668);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45539_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45539_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45550_45666);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45549_45665);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45545,G__45546,G__45547,G__45548) : format.call(null,G__45545,G__45546,G__45547,G__45548));

break;
case "macroexpansion":
var G__45553 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45554 = cause_type;
var G__45555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45556 = loc;
var G__45557 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45553,G__45554,G__45555,G__45556,G__45557) : format.call(null,G__45553,G__45554,G__45555,G__45556,G__45557));

break;
case "compile-syntax-check":
var G__45558 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45559 = cause_type;
var G__45560 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45561 = loc;
var G__45562 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45558,G__45559,G__45560,G__45561,G__45562) : format.call(null,G__45558,G__45559,G__45560,G__45561,G__45562));

break;
case "compilation":
var G__45563 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45564 = cause_type;
var G__45565 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45566 = loc;
var G__45567 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45563,G__45564,G__45565,G__45566,G__45567) : format.call(null,G__45563,G__45564,G__45565,G__45566,G__45567));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45570 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45571 = symbol;
var G__45572 = loc;
var G__45573 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45576_45673 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45577_45674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45578_45675 = true;
var _STAR_print_fn_STAR__temp_val__45579_45676 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45578_45675);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45579_45676);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45540_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45540_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45577_45674);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45576_45673);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45570,G__45571,G__45572,G__45573) : format.call(null,G__45570,G__45571,G__45572,G__45573));
} else {
var G__45580 = "Execution error%s at %s(%s).\n%s\n";
var G__45581 = cause_type;
var G__45582 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45583 = loc;
var G__45584 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45580,G__45581,G__45582,G__45583,G__45584) : format.call(null,G__45580,G__45581,G__45582,G__45583,G__45584));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45544__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
