goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
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
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56330){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56330));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56336 = arguments.length;
var i__4790__auto___56337 = (0);
while(true){
if((i__4790__auto___56337 < len__4789__auto___56336)){
args__4795__auto__.push((arguments[i__4790__auto___56337]));

var G__56338 = (i__4790__auto___56337 + (1));
i__4790__auto___56337 = G__56338;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56331){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56331));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56332 = "";
var G__56332__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56332,"i"].join(''):G__56332);
var G__56332__$2 = (cljs.core.truth_(re.multiline)?[G__56332__$1,"m"].join(''):G__56332__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56332__$2,"u"].join('');
} else {
return G__56332__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
