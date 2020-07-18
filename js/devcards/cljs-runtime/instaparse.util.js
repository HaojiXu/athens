goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56330 = arguments.length;
var i__4790__auto___56331 = (0);
while(true){
if((i__4790__auto___56331 < len__4789__auto___56330)){
args__4795__auto__.push((arguments[i__4790__auto___56331]));

var G__56332 = (i__4790__auto___56331 + (1));
i__4790__auto___56331 = G__56332;
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
var len__4789__auto___56333 = arguments.length;
var i__4790__auto___56334 = (0);
while(true){
if((i__4790__auto___56334 < len__4789__auto___56333)){
args__4795__auto__.push((arguments[i__4790__auto___56334]));

var G__56335 = (i__4790__auto___56334 + (1));
i__4790__auto___56334 = G__56335;
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
