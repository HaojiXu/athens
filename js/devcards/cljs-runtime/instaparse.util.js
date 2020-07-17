goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56329 = arguments.length;
var i__4790__auto___56330 = (0);
while(true){
if((i__4790__auto___56330 < len__4789__auto___56329)){
args__4795__auto__.push((arguments[i__4790__auto___56330]));

var G__56331 = (i__4790__auto___56330 + (1));
i__4790__auto___56330 = G__56331;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56319){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56319));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56332 = arguments.length;
var i__4790__auto___56333 = (0);
while(true){
if((i__4790__auto___56333 < len__4789__auto___56332)){
args__4795__auto__.push((arguments[i__4790__auto___56333]));

var G__56334 = (i__4790__auto___56333 + (1));
i__4790__auto___56333 = G__56334;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56320){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56320));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56324 = "";
var G__56324__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56324,"i"].join(''):G__56324);
var G__56324__$2 = (cljs.core.truth_(re.multiline)?[G__56324__$1,"m"].join(''):G__56324__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56324__$2,"u"].join('');
} else {
return G__56324__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
