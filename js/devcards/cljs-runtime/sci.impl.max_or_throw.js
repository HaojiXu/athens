goog.provide('sci.impl.max_or_throw');
goog.require('cljs.core');

/**
 * @interface
 */
sci.impl.max_or_throw.MaxOrThrow = function(){};

sci.impl.max_or_throw.max_or_throw = (function sci$impl$max_or_throw$max_or_throw(this$,ctx,n){
if((((!((this$ == null)))) && ((!((this$.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 == null)))))){
return this$.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3(this$,ctx,n);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (sci.impl.max_or_throw.max_or_throw[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,ctx,n) : m__4488__auto__.call(null,this$,ctx,n));
} else {
var m__4485__auto__ = (sci.impl.max_or_throw.max_or_throw["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,ctx,n) : m__4485__auto__.call(null,this$,ctx,n));
} else {
throw cljs.core.missing_protocol("MaxOrThrow.max-or-throw",this$);
}
}
}
});

sci.impl.max_or_throw.bottom = (function sci$impl$max_or_throw$bottom(n,data){
return (new cljs.core.LazySeq(null,(function (){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Maximum number of elements realized: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),data);
}),null,null));
});
sci.impl.max_or_throw.take_STAR_ = (function sci$impl$max_or_throw$take_STAR_(n,coll,err_val){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var s = temp__5735__auto__;
return cljs.core.cons(cljs.core.first(s),(function (){var G__58706 = (n - (1));
var G__58707 = cljs.core.rest(s);
var G__58708 = err_val;
return (sci.impl.max_or_throw.take_STAR_.cljs$core$IFn$_invoke$arity$3 ? sci.impl.max_or_throw.take_STAR_.cljs$core$IFn$_invoke$arity$3(G__58706,G__58707,G__58708) : sci.impl.max_or_throw.take_STAR_.call(null,G__58706,G__58707,G__58708));
})());
} else {
return null;
}
} else {
return err_val;
}
}),null,null));
});
sci.impl.max_or_throw.take_or_throw = (function sci$impl$max_or_throw$take_or_throw(coll,ctx,n){
return sci.impl.max_or_throw.take_STAR_(n,coll,sci.impl.max_or_throw.bottom(n,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"column","column",2078222095),(new cljs.core.Delay((function (){
return coll;
}),null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543),n,new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(ctx)], null)], 0))));
});
goog.object.set(sci.impl.max_or_throw.MaxOrThrow,"null",true);

var G__58716_58744 = sci.impl.max_or_throw.max_or_throw;
var G__58717_58745 = "null";
var G__58718_58746 = (function (this$,ctx,n){
return this$;
});
goog.object.set(G__58716_58744,G__58717_58745,G__58718_58746);

goog.object.set(sci.impl.max_or_throw.MaxOrThrow,"_",true);

var G__58723_58747 = sci.impl.max_or_throw.max_or_throw;
var G__58724_58748 = "_";
var G__58725_58749 = (function (this$,ctx,n){
return this$;
});
goog.object.set(G__58723_58747,G__58724_58748,G__58725_58749);

(cljs.core.LazySeq.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Cons.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Range.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Range.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Iterate.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Iterate.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

(cljs.core.Repeat.prototype.sci$impl$max_or_throw$MaxOrThrow$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Repeat.prototype.sci$impl$max_or_throw$MaxOrThrow$max_or_throw$arity$3 = (function (this$,ctx,n){
var this$__$1 = this;
return sci.impl.max_or_throw.take_or_throw(this$__$1,ctx,n);
}));

//# sourceMappingURL=sci.impl.max_or_throw.js.map
