goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45485){
var map__45486 = p__45485;
var map__45486__$1 = (((((!((map__45486 == null))))?(((((map__45486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45486):map__45486);
var m = map__45486__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45486__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45488_45600 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45489_45601 = null;
var count__45490_45602 = (0);
var i__45491_45603 = (0);
while(true){
if((i__45491_45603 < count__45490_45602)){
var f_45604 = chunk__45489_45601.cljs$core$IIndexed$_nth$arity$2(null,i__45491_45603);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45604], 0));


var G__45605 = seq__45488_45600;
var G__45606 = chunk__45489_45601;
var G__45607 = count__45490_45602;
var G__45608 = (i__45491_45603 + (1));
seq__45488_45600 = G__45605;
chunk__45489_45601 = G__45606;
count__45490_45602 = G__45607;
i__45491_45603 = G__45608;
continue;
} else {
var temp__5735__auto___45609 = cljs.core.seq(seq__45488_45600);
if(temp__5735__auto___45609){
var seq__45488_45610__$1 = temp__5735__auto___45609;
if(cljs.core.chunked_seq_QMARK_(seq__45488_45610__$1)){
var c__4609__auto___45611 = cljs.core.chunk_first(seq__45488_45610__$1);
var G__45612 = cljs.core.chunk_rest(seq__45488_45610__$1);
var G__45613 = c__4609__auto___45611;
var G__45614 = cljs.core.count(c__4609__auto___45611);
var G__45615 = (0);
seq__45488_45600 = G__45612;
chunk__45489_45601 = G__45613;
count__45490_45602 = G__45614;
i__45491_45603 = G__45615;
continue;
} else {
var f_45616 = cljs.core.first(seq__45488_45610__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45616], 0));


var G__45617 = cljs.core.next(seq__45488_45610__$1);
var G__45618 = null;
var G__45619 = (0);
var G__45620 = (0);
seq__45488_45600 = G__45617;
chunk__45489_45601 = G__45618;
count__45490_45602 = G__45619;
i__45491_45603 = G__45620;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45621 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45621], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45621)))?cljs.core.second(arglists_45621):arglists_45621)], 0));
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
var seq__45492_45624 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45493_45625 = null;
var count__45494_45626 = (0);
var i__45495_45627 = (0);
while(true){
if((i__45495_45627 < count__45494_45626)){
var vec__45510_45630 = chunk__45493_45625.cljs$core$IIndexed$_nth$arity$2(null,i__45495_45627);
var name_45631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45510_45630,(0),null);
var map__45513_45632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45510_45630,(1),null);
var map__45513_45633__$1 = (((((!((map__45513_45632 == null))))?(((((map__45513_45632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45513_45632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45513_45632):map__45513_45632);
var doc_45634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45513_45633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45513_45633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45631], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45635], 0));

if(cljs.core.truth_(doc_45634)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45634], 0));
} else {
}


var G__45636 = seq__45492_45624;
var G__45637 = chunk__45493_45625;
var G__45638 = count__45494_45626;
var G__45639 = (i__45495_45627 + (1));
seq__45492_45624 = G__45636;
chunk__45493_45625 = G__45637;
count__45494_45626 = G__45638;
i__45495_45627 = G__45639;
continue;
} else {
var temp__5735__auto___45640 = cljs.core.seq(seq__45492_45624);
if(temp__5735__auto___45640){
var seq__45492_45641__$1 = temp__5735__auto___45640;
if(cljs.core.chunked_seq_QMARK_(seq__45492_45641__$1)){
var c__4609__auto___45642 = cljs.core.chunk_first(seq__45492_45641__$1);
var G__45643 = cljs.core.chunk_rest(seq__45492_45641__$1);
var G__45644 = c__4609__auto___45642;
var G__45645 = cljs.core.count(c__4609__auto___45642);
var G__45646 = (0);
seq__45492_45624 = G__45643;
chunk__45493_45625 = G__45644;
count__45494_45626 = G__45645;
i__45495_45627 = G__45646;
continue;
} else {
var vec__45519_45647 = cljs.core.first(seq__45492_45641__$1);
var name_45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45519_45647,(0),null);
var map__45522_45649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45519_45647,(1),null);
var map__45522_45650__$1 = (((((!((map__45522_45649 == null))))?(((((map__45522_45649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45522_45649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45522_45649):map__45522_45649);
var doc_45651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45522_45650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45522_45650__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45648], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45652], 0));

if(cljs.core.truth_(doc_45651)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45651], 0));
} else {
}


var G__45653 = cljs.core.next(seq__45492_45641__$1);
var G__45654 = null;
var G__45655 = (0);
var G__45656 = (0);
seq__45492_45624 = G__45653;
chunk__45493_45625 = G__45654;
count__45494_45626 = G__45655;
i__45495_45627 = G__45656;
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

var seq__45524 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45525 = null;
var count__45526 = (0);
var i__45527 = (0);
while(true){
if((i__45527 < count__45526)){
var role = chunk__45525.cljs$core$IIndexed$_nth$arity$2(null,i__45527);
var temp__5735__auto___45657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45657__$1)){
var spec_45658 = temp__5735__auto___45657__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45658)], 0));
} else {
}


var G__45659 = seq__45524;
var G__45660 = chunk__45525;
var G__45661 = count__45526;
var G__45662 = (i__45527 + (1));
seq__45524 = G__45659;
chunk__45525 = G__45660;
count__45526 = G__45661;
i__45527 = G__45662;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45524);
if(temp__5735__auto____$1){
var seq__45524__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45524__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45524__$1);
var G__45663 = cljs.core.chunk_rest(seq__45524__$1);
var G__45664 = c__4609__auto__;
var G__45665 = cljs.core.count(c__4609__auto__);
var G__45666 = (0);
seq__45524 = G__45663;
chunk__45525 = G__45664;
count__45526 = G__45665;
i__45527 = G__45666;
continue;
} else {
var role = cljs.core.first(seq__45524__$1);
var temp__5735__auto___45667__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45667__$2)){
var spec_45668 = temp__5735__auto___45667__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45668)], 0));
} else {
}


var G__45669 = cljs.core.next(seq__45524__$1);
var G__45670 = null;
var G__45671 = (0);
var G__45672 = (0);
seq__45524 = G__45669;
chunk__45525 = G__45670;
count__45526 = G__45671;
i__45527 = G__45672;
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
var G__45674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45675 = cljs.core.ex_cause(t);
via = G__45674;
t = G__45675;
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
var map__45531 = datafied_throwable;
var map__45531__$1 = (((((!((map__45531 == null))))?(((((map__45531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45531):map__45531);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45531__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45532 = cljs.core.last(via);
var map__45532__$1 = (((((!((map__45532 == null))))?(((((map__45532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45532):map__45532);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45533 = data;
var map__45533__$1 = (((((!((map__45533 == null))))?(((((map__45533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45533):map__45533);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45533__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45533__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45533__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45534 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45534__$1 = (((((!((map__45534 == null))))?(((((map__45534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45534):map__45534);
var top_data = map__45534__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45539 = phase;
var G__45539__$1 = (((G__45539 instanceof cljs.core.Keyword))?G__45539.fqn:null);
switch (G__45539__$1) {
case "read-source":
var map__45540 = data;
var map__45540__$1 = (((((!((map__45540 == null))))?(((((map__45540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45540):map__45540);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45540__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45540__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45542 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45542__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45542);
var G__45542__$2 = (cljs.core.truth_((function (){var fexpr__45543 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45543.cljs$core$IFn$_invoke$arity$1 ? fexpr__45543.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45543.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45542__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45542__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45542__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45544 = top_data;
var G__45544__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45544,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45544);
var G__45544__$2 = (cljs.core.truth_((function (){var fexpr__45545 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45545.cljs$core$IFn$_invoke$arity$1 ? fexpr__45545.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45545.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45544__$1);
var G__45544__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45544__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45544__$2);
var G__45544__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45544__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45544__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45544__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45544__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45546 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45546,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45546,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45546,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45546,(3),null);
var G__45549 = top_data;
var G__45549__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45549,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45549);
var G__45549__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45549__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45549__$1);
var G__45549__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45549__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45549__$2);
var G__45549__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45549__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45549__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45549__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45549__$4;
}

break;
case "execution":
var vec__45550 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45529_SHARP_){
var or__4185__auto__ = (p1__45529_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45554 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45554.cljs$core$IFn$_invoke$arity$1 ? fexpr__45554.cljs$core$IFn$_invoke$arity$1(p1__45529_SHARP_) : fexpr__45554.call(null,p1__45529_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45556 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45556__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45556,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45556);
var G__45556__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45556__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45556__$1);
var G__45556__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45556__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45556__$2);
var G__45556__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45556__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45556__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45556__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45556__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45539__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45559){
var map__45560 = p__45559;
var map__45560__$1 = (((((!((map__45560 == null))))?(((((map__45560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45560):map__45560);
var triage_data = map__45560__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45560__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45562 = phase;
var G__45562__$1 = (((G__45562 instanceof cljs.core.Keyword))?G__45562.fqn:null);
switch (G__45562__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45563 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45564 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45565 = loc;
var G__45566 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45567_45688 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45568_45689 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45569_45690 = true;
var _STAR_print_fn_STAR__temp_val__45570_45691 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45569_45690);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45570_45691);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45557_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45557_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45568_45689);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45567_45688);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45563,G__45564,G__45565,G__45566) : format.call(null,G__45563,G__45564,G__45565,G__45566));

break;
case "macroexpansion":
var G__45571 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45572 = cause_type;
var G__45573 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45574 = loc;
var G__45575 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45571,G__45572,G__45573,G__45574,G__45575) : format.call(null,G__45571,G__45572,G__45573,G__45574,G__45575));

break;
case "compile-syntax-check":
var G__45576 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45577 = cause_type;
var G__45578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45579 = loc;
var G__45580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45576,G__45577,G__45578,G__45579,G__45580) : format.call(null,G__45576,G__45577,G__45578,G__45579,G__45580));

break;
case "compilation":
var G__45581 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45582 = cause_type;
var G__45583 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45584 = loc;
var G__45585 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45581,G__45582,G__45583,G__45584,G__45585) : format.call(null,G__45581,G__45582,G__45583,G__45584,G__45585));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45586 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45587 = symbol;
var G__45588 = loc;
var G__45589 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45590_45692 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45591_45693 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45592_45694 = true;
var _STAR_print_fn_STAR__temp_val__45593_45695 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45592_45694);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45593_45695);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45558_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45558_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45591_45693);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45590_45692);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45586,G__45587,G__45588,G__45589) : format.call(null,G__45586,G__45587,G__45588,G__45589));
} else {
var G__45594 = "Execution error%s at %s(%s).\n%s\n";
var G__45595 = cause_type;
var G__45596 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45597 = loc;
var G__45598 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45594,G__45595,G__45596,G__45597,G__45598) : format.call(null,G__45594,G__45595,G__45596,G__45597,G__45598));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45562__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
