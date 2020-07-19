goog.provide('debux.common.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('cljs.analyzer.api');
goog.require('cljs.repl');
goog.require('re_frame.trace');
debux.common.util.sequential_zip = (function debux$common$util$sequential_zip(root){
return clojure.zip.zipper(cljs.core.sequential_QMARK_,cljs.core.identity,(function (x,children){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.vec(children);
} else {
return children;
}
}),root);
});
debux.common.util.right_or_next = (function debux$common$util$right_or_next(loc){
while(true){
var temp__5733__auto__ = clojure.zip.right(loc);
if(cljs.core.truth_(temp__5733__auto__)){
var right = temp__5733__auto__;
return right;
} else {
if(cljs.core.sequential_QMARK_(clojure.zip.node(loc))){
var rightmost = clojure.zip.rightmost(clojure.zip.down(loc));
if(cljs.core.sequential_QMARK_(clojure.zip.node(rightmost))){
var G__46315 = rightmost;
loc = G__46315;
continue;
} else {
return clojure.zip.next(rightmost);
}
} else {
return clojure.zip.next(loc);
}
}
break;
}
});
debux.common.util.auto_gensym_pattern = /(.*)__\d+__auto__/;
debux.common.util.anon_gensym_pattern = /G__\d+/;
debux.common.util.named_gensym_pattern = /(.*?)\d{4,}/;
debux.common.util.anon_param_pattern = /p(\d+)__\d+#/;
debux.common.util.form_tree_seq = (function debux$common$util$form_tree_seq(form){
return cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,form);
});
/**
 * Reverse gensym'd names to their original source form to make them easier to read.
 */
debux.common.util.with_gensyms_names = (function debux$common$util$with_gensyms_names(form,mapping){
var gen_name = (function (result,name){
if((!(cljs.core.contains_QMARK_(result,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join(''))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join('');
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46274_SHARP_){
return (!(cljs.core.contains_QMARK_(result,p1__46274_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46273_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46273_SHARP_),"#"].join('');
}),cljs.core.iterate(cljs.core.inc,(2)))));
}
});
var name_for = (function (result,sym_name){
var temp__5733__auto__ = cljs.core.re_matches(debux.common.util.auto_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__5733__auto__)){
var groups = temp__5733__auto__;
return gen_name(result,cljs.core.second(groups));
} else {
if(cljs.core.truth_(cljs.core.re_matches(debux.common.util.anon_gensym_pattern,sym_name))){
return gen_name(result,"gensym");
} else {
var temp__5733__auto____$1 = cljs.core.re_matches(debux.common.util.named_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var groups = temp__5733__auto____$1;
return gen_name(result,cljs.core.second(groups));
} else {
var temp__5733__auto____$2 = cljs.core.re_matches(debux.common.util.anon_param_pattern,sym_name);
if(cljs.core.truth_(temp__5733__auto____$2)){
var groups = temp__5733__auto____$2;
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(groups))].join('');
} else {
return null;
}
}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,sym_name){
if(cljs.core.contains_QMARK_(result,sym_name)){
return result;
} else {
var temp__5733__auto__ = name_for(result,sym_name);
if(cljs.core.truth_(temp__5733__auto__)){
var new_name = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,sym_name,new_name);
} else {
return result;
}
}
}),mapping,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46275_SHARP_){
return (((p1__46275_SHARP_ instanceof cljs.core.Symbol)) && ((cljs.core.namespace(p1__46275_SHARP_) == null)));
}),debux.common.util.form_tree_seq(form))));
});
/**
 * Tidy up fully qualified names that have aliases in the existing namespace.
 */
debux.common.util.with_symbols_names = (function debux$common$util$with_symbols_names(form,p__46278,mapping){
var map__46279 = p__46278;
var map__46279__$1 = (((((!((map__46279 == null))))?(((((map__46279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46279):map__46279);
var state = map__46279__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var refers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"refers","refers",158076809));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,sym){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.namespace(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),cljs.core.name(sym));
} else {
return result;
}
}),mapping,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46276_SHARP_){
if((p1__46276_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.namespace(p1__46276_SHARP_);
} else {
return false;
}
}),debux.common.util.form_tree_seq(form)));
});
/**
 * Takes a macroexpanded form and tidies it up to be more readable by
 *   unmapping gensyms and replacing fully qualified namespaces with aliases
 *   or nothing if the function is referred.
 */
debux.common.util.tidy_macroexpanded_form = (function debux$common$util$tidy_macroexpanded_form(form,state){
var mapping = debux.common.util.with_symbols_names(form,state,debux.common.util.with_gensyms_names(form,cljs.core.PersistentArrayMap.EMPTY));
var loc = debux.common.util.sequential_zip(form);
while(true){
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
if((clojure.zip.node(loc) instanceof cljs.core.Symbol)){
var G__46316 = clojure.zip.next(clojure.zip.edit(loc,((function (loc,mapping){
return (function (sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(mapping,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),sym));
});})(loc,mapping))
));
loc = G__46316;
continue;
} else {
var G__46319 = clojure.zip.next(loc);
loc = G__46319;
continue;
}
}
break;
}
});
debux.common.util.send_form_BANG_ = (function debux$common$util$send_form_BANG_(form){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__46196__auto___46320 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__46196__auto___46320);

return null;
} else {
return null;
}
});
debux.common.util.send_trace_BANG_ = (function debux$common$util$send_trace_BANG_(code_trace){
var code = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core.PersistentVector.EMPTY);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__46196__auto___46325 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),debux.common.util.tidy_macroexpanded_form(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),debux.common.util.tidy_macroexpanded_form(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__46196__auto___46325);

return null;
} else {
return null;
}
});
debux.common.util.indent_level_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
debux.common.util.reset_indent_level_BANG_ = (function debux$common$util$reset_indent_level_BANG_(){
return cljs.core.reset_BANG_(debux.common.util.indent_level_STAR_,(1));
});
debux.common.util.print_seq_length_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100));
debux.common.util.set_print_seq_length_BANG_ = (function debux$common$util$set_print_seq_length_BANG_(num){
return cljs.core.reset_BANG_(debux.common.util.print_seq_length_STAR_,num);
});
debux.common.util.cljs_env_QMARK_ = (function debux$common$util$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Transsub-forms a vector into an array-map with key/value pairs.
 *   (def a 10)
 *   (def b 20)
 *   (vec-map [a b :c [30 40]])
 *   => {:a 10 :b 20 ::c :c :[30 40] [30 40]}
 */
debux.common.util.vec__GT_map = (function debux$common$util$vec__GT_map(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (elm){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(elm)),null,(1),null)),(new cljs.core.List(null,elm,null,(1),null))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
debux.common.util.replace__AMPERSAND_ = (function debux$common$util$replace__AMPERSAND_(v){
return clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"&","&",-2144855648,null))], null),v);
});
debux.common.util.take_n_if_seq = (function debux$common$util$take_n_if_seq(n,result){
if(cljs.core.seq_QMARK_(result)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = n;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.deref(debux.common.util.print_seq_length_STAR_);
}
})(),result);
} else {
return result;
}
});
debux.common.util.truncate = (function debux$common$util$truncate(s){
if((cljs.core.count(s) > (70))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.substring((0),(70)))," ..."].join('');
} else {
return s;
}
});
debux.common.util.make_bars_ = (function debux$common$util$make_bars_(times){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(times,"|"));
});
debux.common.util.make_bars = cljs.core.memoize(debux.common.util.make_bars_);
debux.common.util.prepend_bars = (function debux$common$util$prepend_bars(line,indent_level){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((debux.common.util.make_bars.cljs$core$IFn$_invoke$arity$1 ? debux.common.util.make_bars.cljs$core$IFn$_invoke$arity$1(indent_level) : debux.common.util.make_bars.call(null,indent_level)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
debux.common.util.print_form_with_indent = (function debux$common$util$print_form_with_indent(form,indent_level){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([debux.common.util.prepend_bars(form,indent_level)], 0));

return cljs.core.flush();
});
debux.common.util.form_header = (function debux$common$util$form_header(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46326 = arguments.length;
var i__4790__auto___46327 = (0);
while(true){
if((i__4790__auto___46327 < len__4789__auto___46326)){
args__4795__auto__.push((arguments[i__4790__auto___46327]));

var G__46328 = (i__4790__auto___46327 + (1));
i__4790__auto___46327 = G__46328;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__46286){
var vec__46287 = p__46286;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46287,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(debux.common.util.truncate(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__4174__auto__ = msg;
if(cljs.core.truth_(and__4174__auto__)){
return ["   <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),">"].join('');
} else {
return and__4174__auto__;
}
})())," =>"].join('');
}));

(debux.common.util.form_header.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(debux.common.util.form_header.cljs$lang$applyTo = (function (seq46282){
var G__46283 = cljs.core.first(seq46282);
var seq46282__$1 = cljs.core.next(seq46282);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46283,seq46282__$1);
}));

debux.common.util.prepend_blanks = (function debux$common$util$prepend_blanks(lines){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46290_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46290_SHARP_)].join('');
}),lines);
});
debux.common.util.pprint_result_with_indent = (function debux$common$util$pprint_result_with_indent(result,indent_level){
var res = result;
var result__$1 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46292_46329 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46293_46330 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46294_46331 = true;
var _STAR_print_fn_STAR__temp_val__46295_46332 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46294_46331);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46295_46332);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(res);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46293_46330);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46292_46329);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
var pprint = clojure.string.trim(result__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46291_SHARP_){
return debux.common.util.prepend_bars(p1__46291_SHARP_,indent_level);
}),debux.common.util.prepend_blanks(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pprint,/\n/))))], 0));

return cljs.core.flush();
});
debux.common.util.insert_blank_line = (function debux$common$util$insert_blank_line(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));

return cljs.core.flush();
});
debux.common.util.parse_opts = (function debux$common$util$parse_opts(opts){
var opts__$1 = opts;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var f = cljs.core.first(opts__$1);
var s = cljs.core.second(opts__$1);
if(cljs.core.empty_QMARK_(opts__$1)){
return acc;
} else {
if(typeof f === 'number'){
var G__46333 = cljs.core.next(opts__$1);
var G__46334 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"n","n",562130025),f);
opts__$1 = G__46333;
acc = G__46334;
continue;
} else {
if(typeof f === 'string'){
var G__46335 = cljs.core.next(opts__$1);
var G__46336 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"msg","msg",-1386103444),f);
opts__$1 = G__46335;
acc = G__46336;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"if","if",-458814265))){
var G__46337 = cljs.core.nnext(opts__$1);
var G__46338 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"condition","condition",1668437652),s);
opts__$1 = G__46337;
acc = G__46338;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"js","js",1768080579))){
var G__46339 = cljs.core.next(opts__$1);
var G__46340 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"js","js",1768080579),true);
opts__$1 = G__46339;
acc = G__46340;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__46298 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"once","once",-262568523),null], null), null);
return (fexpr__46298.cljs$core$IFn$_invoke$arity$1 ? fexpr__46298.cljs$core$IFn$_invoke$arity$1(f) : fexpr__46298.call(null,f));
})())){
var G__46341 = cljs.core.next(opts__$1);
var G__46342 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"once","once",-262568523),true);
opts__$1 = G__46341;
acc = G__46342;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__46299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null), null);
return (fexpr__46299.cljs$core$IFn$_invoke$arity$1 ? fexpr__46299.cljs$core$IFn$_invoke$arity$1(f) : fexpr__46299.call(null,f));
})())){
var G__46343 = cljs.core.nnext(opts__$1);
var G__46344 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"style","style",-496642736),s);
opts__$1 = G__46343;
acc = G__46344;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"clog","clog",954273629))){
var G__46345 = cljs.core.next(opts__$1);
var G__46346 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"clog","clog",954273629),true);
opts__$1 = G__46345;
acc = G__46346;
continue;
} else {
return null;
}
}
}
}
}
}
}
}
break;
}
});
debux.common.util.quote_val = (function debux$common$util$quote_val(p__46300){
var vec__46301 = p__46300;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46301,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))))));
});
debux.common.util.quote_vals = (function debux$common$util$quote_vals(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(debux.common.util.quote_val,m));
});
debux.common.util.include_recur_QMARK_ = (function debux$common$util$include_recur_QMARK_(form){
var G__46306 = new cljs.core.Symbol(null,"recur","recur",1202958259,null);
var fexpr__46305 = (function (){var fexpr__46307 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.flatten);
return (fexpr__46307.cljs$core$IFn$_invoke$arity$1 ? fexpr__46307.cljs$core$IFn$_invoke$arity$1(form) : fexpr__46307.call(null,form));
})();
return (fexpr__46305.cljs$core$IFn$_invoke$arity$1 ? fexpr__46305.cljs$core$IFn$_invoke$arity$1(G__46306) : fexpr__46305.call(null,G__46306));
});
debux.common.util.o_skip_QMARK_ = (function debux$common$util$o_skip_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("debux.common.macro-specs","o-skip","debux.common.macro-specs/o-skip",-1957530336,null),sym);
});
debux.common.util.spy_first = (function debux$common$util$spy_first(result,quoted_form,indent){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var G__46309 = quoted_form;
var G__46310 = new cljs.core.Symbol(null,"dummy","dummy",-594669915,null);
return (debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__46309,G__46310) : debux.common.util.remove_d.call(null,G__46309,G__46310));
})(),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
});
debux.common.util.spy_last = (function debux$common$util$spy_last(quoted_form,indent,result){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var G__46311 = quoted_form;
var G__46312 = new cljs.core.Symbol(null,"dummy","dummy",-594669915,null);
return (debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__46311,G__46312) : debux.common.util.remove_d.call(null,G__46311,G__46312));
})(),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
});
debux.common.util.spy_comp = (function debux$common$util$spy_comp(quoted_form,indent,form){
return (function() { 
var G__46355__delegate = function (arg){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form,arg);
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var G__46313 = quoted_form;
var G__46314 = new cljs.core.Symbol(null,"dummy","dummy",-594669915,null);
return (debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__46313,G__46314) : debux.common.util.remove_d.call(null,G__46313,G__46314));
})(),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
};
var G__46355 = function (var_args){
var arg = null;
if (arguments.length > 0) {
var G__46357__i = 0, G__46357__a = new Array(arguments.length -  0);
while (G__46357__i < G__46357__a.length) {G__46357__a[G__46357__i] = arguments[G__46357__i + 0]; ++G__46357__i;}
  arg = new cljs.core.IndexedSeq(G__46357__a,0,null);
} 
return G__46355__delegate.call(this,arg);};
G__46355.cljs$lang$maxFixedArity = 0;
G__46355.cljs$lang$applyTo = (function (arglist__46358){
var arg = cljs.core.seq(arglist__46358);
return G__46355__delegate(arg);
});
G__46355.cljs$core$IFn$_invoke$arity$variadic = G__46355__delegate;
return G__46355;
})()
;
});
debux.common.util.debux_skip_symbol_QMARK_ = (function debux$common$util$debux_skip_symbol_QMARK_(sym){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("debux.common.macro-specs","o-skip","debux.common.macro-specs/o-skip",-1957530336,null),null,new cljs.core.Symbol("debux.common.macro-specs","skip","debux.common.macro-specs/skip",803221544,null),null,new cljs.core.Symbol("debux.common.macro-specs","skip-outer","debux.common.macro-specs/skip-outer",1273084814,null),null], null), null),sym);
});
debux.common.util.spy_first_QMARK_ = (function debux$common$util$spy_first_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("debux.common.util","spy-first","debux.common.util/spy-first",-2077157225,null),sym);
});
debux.common.util.third = (function debux$common$util$third(coll){
return cljs.core.first(cljs.core.next(cljs.core.next(coll)));
});
debux.common.util.remove_d = (function debux$common$util$remove_d(form,d_sym){
var loc = debux.common.util.sequential_zip(form);
while(true){
var node = clojure.zip.node(loc);
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
if(((cljs.core.seq_QMARK_(node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d_sym,cljs.core.first(node))) || (debux.common.util.debux_skip_symbol_QMARK_(cljs.core.first(node))) || (debux.common.util.spy_first_QMARK_(cljs.core.first(node))))))){
var G__46363 = clojure.zip.replace(loc,debux.common.util.third(node));
loc = G__46363;
continue;
} else {
if(((cljs.core.seq_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("debux.common.util","spy-last","debux.common.util/spy-last",321778494,null),cljs.core.first(node))))){
var G__46364 = clojure.zip.replace(loc,cljs.core.last(node));
loc = G__46364;
continue;
} else {
var G__46365 = clojure.zip.next(loc);
loc = G__46365;
continue;

}
}
}
break;
}
});

//# sourceMappingURL=debux.common.util.js.map
