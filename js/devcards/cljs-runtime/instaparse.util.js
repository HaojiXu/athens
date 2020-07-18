goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56331 = arguments.length;
var i__4790__auto___56332 = (0);
while(true){
if((i__4790__auto___56332 < len__4789__auto___56331)){
args__4795__auto__.push((arguments[i__4790__auto___56332]));

var G__56333 = (i__4790__auto___56332 + (1));
i__4790__auto___56332 = G__56333;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56327){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56327));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56334 = arguments.length;
var i__4790__auto___56335 = (0);
while(true){
if((i__4790__auto___56335 < len__4789__auto___56334)){
args__4795__auto__.push((arguments[i__4790__auto___56335]));

var G__56336 = (i__4790__auto___56335 + (1));
i__4790__auto___56335 = G__56336;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56328){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56328));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56329 = "";
var G__56329__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56329,"i"].join(''):G__56329);
var G__56329__$2 = (cljs.core.truth_(re.multiline)?[G__56329__$1,"m"].join(''):G__56329__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56329__$2,"u"].join('');
} else {
return G__56329__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
