goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50493){
var map__50494 = p__50493;
var map__50494__$1 = (((((!((map__50494 == null))))?(((((map__50494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50494):map__50494);
var m = map__50494__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50494__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50496_50625 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50497_50626 = null;
var count__50498_50627 = (0);
var i__50499_50628 = (0);
while(true){
if((i__50499_50628 < count__50498_50627)){
var f_50629 = chunk__50497_50626.cljs$core$IIndexed$_nth$arity$2(null,i__50499_50628);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50629], 0));


var G__50630 = seq__50496_50625;
var G__50631 = chunk__50497_50626;
var G__50632 = count__50498_50627;
var G__50633 = (i__50499_50628 + (1));
seq__50496_50625 = G__50630;
chunk__50497_50626 = G__50631;
count__50498_50627 = G__50632;
i__50499_50628 = G__50633;
continue;
} else {
var temp__5735__auto___50634 = cljs.core.seq(seq__50496_50625);
if(temp__5735__auto___50634){
var seq__50496_50635__$1 = temp__5735__auto___50634;
if(cljs.core.chunked_seq_QMARK_(seq__50496_50635__$1)){
var c__4609__auto___50636 = cljs.core.chunk_first(seq__50496_50635__$1);
var G__50637 = cljs.core.chunk_rest(seq__50496_50635__$1);
var G__50638 = c__4609__auto___50636;
var G__50639 = cljs.core.count(c__4609__auto___50636);
var G__50640 = (0);
seq__50496_50625 = G__50637;
chunk__50497_50626 = G__50638;
count__50498_50627 = G__50639;
i__50499_50628 = G__50640;
continue;
} else {
var f_50641 = cljs.core.first(seq__50496_50635__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50641], 0));


var G__50642 = cljs.core.next(seq__50496_50635__$1);
var G__50643 = null;
var G__50644 = (0);
var G__50645 = (0);
seq__50496_50625 = G__50642;
chunk__50497_50626 = G__50643;
count__50498_50627 = G__50644;
i__50499_50628 = G__50645;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50646 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50646], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50646)))?cljs.core.second(arglists_50646):arglists_50646)], 0));
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
var seq__50505_50647 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50506_50648 = null;
var count__50507_50649 = (0);
var i__50508_50650 = (0);
while(true){
if((i__50508_50650 < count__50507_50649)){
var vec__50528_50651 = chunk__50506_50648.cljs$core$IIndexed$_nth$arity$2(null,i__50508_50650);
var name_50652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528_50651,(0),null);
var map__50531_50653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528_50651,(1),null);
var map__50531_50654__$1 = (((((!((map__50531_50653 == null))))?(((((map__50531_50653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50531_50653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50531_50653):map__50531_50653);
var doc_50655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50531_50654__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50531_50654__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50652], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50656], 0));

if(cljs.core.truth_(doc_50655)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50655], 0));
} else {
}


var G__50657 = seq__50505_50647;
var G__50658 = chunk__50506_50648;
var G__50659 = count__50507_50649;
var G__50660 = (i__50508_50650 + (1));
seq__50505_50647 = G__50657;
chunk__50506_50648 = G__50658;
count__50507_50649 = G__50659;
i__50508_50650 = G__50660;
continue;
} else {
var temp__5735__auto___50661 = cljs.core.seq(seq__50505_50647);
if(temp__5735__auto___50661){
var seq__50505_50662__$1 = temp__5735__auto___50661;
if(cljs.core.chunked_seq_QMARK_(seq__50505_50662__$1)){
var c__4609__auto___50663 = cljs.core.chunk_first(seq__50505_50662__$1);
var G__50664 = cljs.core.chunk_rest(seq__50505_50662__$1);
var G__50665 = c__4609__auto___50663;
var G__50666 = cljs.core.count(c__4609__auto___50663);
var G__50667 = (0);
seq__50505_50647 = G__50664;
chunk__50506_50648 = G__50665;
count__50507_50649 = G__50666;
i__50508_50650 = G__50667;
continue;
} else {
var vec__50534_50668 = cljs.core.first(seq__50505_50662__$1);
var name_50669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50534_50668,(0),null);
var map__50537_50670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50534_50668,(1),null);
var map__50537_50671__$1 = (((((!((map__50537_50670 == null))))?(((((map__50537_50670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50537_50670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50537_50670):map__50537_50670);
var doc_50672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537_50671__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537_50671__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50669], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50673], 0));

if(cljs.core.truth_(doc_50672)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50672], 0));
} else {
}


var G__50674 = cljs.core.next(seq__50505_50662__$1);
var G__50675 = null;
var G__50676 = (0);
var G__50677 = (0);
seq__50505_50647 = G__50674;
chunk__50506_50648 = G__50675;
count__50507_50649 = G__50676;
i__50508_50650 = G__50677;
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

var seq__50539 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50540 = null;
var count__50541 = (0);
var i__50542 = (0);
while(true){
if((i__50542 < count__50541)){
var role = chunk__50540.cljs$core$IIndexed$_nth$arity$2(null,i__50542);
var temp__5735__auto___50678__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50678__$1)){
var spec_50679 = temp__5735__auto___50678__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50679)], 0));
} else {
}


var G__50680 = seq__50539;
var G__50681 = chunk__50540;
var G__50682 = count__50541;
var G__50683 = (i__50542 + (1));
seq__50539 = G__50680;
chunk__50540 = G__50681;
count__50541 = G__50682;
i__50542 = G__50683;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50539);
if(temp__5735__auto____$1){
var seq__50539__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50539__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50539__$1);
var G__50684 = cljs.core.chunk_rest(seq__50539__$1);
var G__50685 = c__4609__auto__;
var G__50686 = cljs.core.count(c__4609__auto__);
var G__50687 = (0);
seq__50539 = G__50684;
chunk__50540 = G__50685;
count__50541 = G__50686;
i__50542 = G__50687;
continue;
} else {
var role = cljs.core.first(seq__50539__$1);
var temp__5735__auto___50688__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50688__$2)){
var spec_50689 = temp__5735__auto___50688__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50689)], 0));
} else {
}


var G__50690 = cljs.core.next(seq__50539__$1);
var G__50691 = null;
var G__50692 = (0);
var G__50693 = (0);
seq__50539 = G__50690;
chunk__50540 = G__50691;
count__50541 = G__50692;
i__50542 = G__50693;
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
var G__50695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50696 = cljs.core.ex_cause(t);
via = G__50695;
t = G__50696;
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
var map__50548 = datafied_throwable;
var map__50548__$1 = (((((!((map__50548 == null))))?(((((map__50548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50548):map__50548);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50548__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50549 = cljs.core.last(via);
var map__50549__$1 = (((((!((map__50549 == null))))?(((((map__50549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50549):map__50549);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50549__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50549__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50549__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50550 = data;
var map__50550__$1 = (((((!((map__50550 == null))))?(((((map__50550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50550):map__50550);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50550__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50550__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50550__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50551 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50551__$1 = (((((!((map__50551 == null))))?(((((map__50551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50551):map__50551);
var top_data = map__50551__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50556 = phase;
var G__50556__$1 = (((G__50556 instanceof cljs.core.Keyword))?G__50556.fqn:null);
switch (G__50556__$1) {
case "read-source":
var map__50557 = data;
var map__50557__$1 = (((((!((map__50557 == null))))?(((((map__50557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50557):map__50557);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50557__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50557__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50559 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50559__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50559);
var G__50559__$2 = (cljs.core.truth_((function (){var fexpr__50560 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50560.cljs$core$IFn$_invoke$arity$1 ? fexpr__50560.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50560.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50559__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50559__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50561 = top_data;
var G__50561__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50561,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50561);
var G__50561__$2 = (cljs.core.truth_((function (){var fexpr__50562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50562.cljs$core$IFn$_invoke$arity$1 ? fexpr__50562.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50562.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50561__$1);
var G__50561__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50561__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50561__$2);
var G__50561__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50561__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50561__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50561__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50561__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50563 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50563,(3),null);
var G__50566 = top_data;
var G__50566__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50566,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50566);
var G__50566__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50566__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50566__$1);
var G__50566__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50566__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50566__$2);
var G__50566__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50566__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50566__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50566__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50566__$4;
}

break;
case "execution":
var vec__50567 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50547_SHARP_){
var or__4185__auto__ = (p1__50547_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50572 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50572.cljs$core$IFn$_invoke$arity$1 ? fexpr__50572.cljs$core$IFn$_invoke$arity$1(p1__50547_SHARP_) : fexpr__50572.call(null,p1__50547_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50576 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50576__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50576,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50576);
var G__50576__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50576__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50576__$1);
var G__50576__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50576__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50576__$2);
var G__50576__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50576__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50576__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50576__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50576__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50556__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50580){
var map__50581 = p__50580;
var map__50581__$1 = (((((!((map__50581 == null))))?(((((map__50581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50581):map__50581);
var triage_data = map__50581__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50581__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__50583 = phase;
var G__50583__$1 = (((G__50583 instanceof cljs.core.Keyword))?G__50583.fqn:null);
switch (G__50583__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50584 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50585 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50586 = loc;
var G__50587 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50588_50709 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50589_50710 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50590_50711 = true;
var _STAR_print_fn_STAR__temp_val__50591_50712 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50590_50711);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50591_50712);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50577_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50577_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50589_50710);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50588_50709);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50584,G__50585,G__50586,G__50587) : format.call(null,G__50584,G__50585,G__50586,G__50587));

break;
case "macroexpansion":
var G__50596 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50597 = cause_type;
var G__50598 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50599 = loc;
var G__50600 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50596,G__50597,G__50598,G__50599,G__50600) : format.call(null,G__50596,G__50597,G__50598,G__50599,G__50600));

break;
case "compile-syntax-check":
var G__50601 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50602 = cause_type;
var G__50603 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50604 = loc;
var G__50605 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50601,G__50602,G__50603,G__50604,G__50605) : format.call(null,G__50601,G__50602,G__50603,G__50604,G__50605));

break;
case "compilation":
var G__50606 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50607 = cause_type;
var G__50608 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50609 = loc;
var G__50610 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50606,G__50607,G__50608,G__50609,G__50610) : format.call(null,G__50606,G__50607,G__50608,G__50609,G__50610));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50611 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50612 = symbol;
var G__50613 = loc;
var G__50614 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50615_50729 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50616_50730 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50617_50731 = true;
var _STAR_print_fn_STAR__temp_val__50618_50732 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50617_50731);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50618_50732);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50578_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50578_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50616_50730);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50615_50729);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50611,G__50612,G__50613,G__50614) : format.call(null,G__50611,G__50612,G__50613,G__50614));
} else {
var G__50620 = "Execution error%s at %s(%s).\n%s\n";
var G__50621 = cause_type;
var G__50622 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50623 = loc;
var G__50624 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50620,G__50621,G__50622,G__50623,G__50624) : format.call(null,G__50620,G__50621,G__50622,G__50623,G__50624));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50583__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
