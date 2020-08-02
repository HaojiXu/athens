goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__41173 = arguments.length;
switch (G__41173) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__41175 = arguments.length;
switch (G__41175) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__41178 = arguments.length;
switch (G__41178) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41176_SHARP_){
return (!((p1__41176_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41622 = arguments.length;
var i__4790__auto___41623 = (0);
while(true){
if((i__4790__auto___41623 < len__4789__auto___41622)){
args__4795__auto__.push((arguments[i__4790__auto___41623]));

var G__41624 = (i__4790__auto___41623 + (1));
i__4790__auto___41623 = G__41624;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__41183_41627 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41184_41628 = null;
var count__41185_41629 = (0);
var i__41186_41630 = (0);
while(true){
if((i__41186_41630 < count__41185_41629)){
var vec__41193_41631 = chunk__41184_41628.cljs$core$IIndexed$_nth$arity$2(null,i__41186_41630);
var k_41632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41631,(0),null);
var v_41633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41631,(1),null);
style.setProperty(dommy.utils.as_str(k_41632),v_41633);


var G__41634 = seq__41183_41627;
var G__41635 = chunk__41184_41628;
var G__41636 = count__41185_41629;
var G__41637 = (i__41186_41630 + (1));
seq__41183_41627 = G__41634;
chunk__41184_41628 = G__41635;
count__41185_41629 = G__41636;
i__41186_41630 = G__41637;
continue;
} else {
var temp__5735__auto___41638 = cljs.core.seq(seq__41183_41627);
if(temp__5735__auto___41638){
var seq__41183_41639__$1 = temp__5735__auto___41638;
if(cljs.core.chunked_seq_QMARK_(seq__41183_41639__$1)){
var c__4609__auto___41640 = cljs.core.chunk_first(seq__41183_41639__$1);
var G__41641 = cljs.core.chunk_rest(seq__41183_41639__$1);
var G__41642 = c__4609__auto___41640;
var G__41643 = cljs.core.count(c__4609__auto___41640);
var G__41644 = (0);
seq__41183_41627 = G__41641;
chunk__41184_41628 = G__41642;
count__41185_41629 = G__41643;
i__41186_41630 = G__41644;
continue;
} else {
var vec__41196_41645 = cljs.core.first(seq__41183_41639__$1);
var k_41646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41645,(0),null);
var v_41647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41645,(1),null);
style.setProperty(dommy.utils.as_str(k_41646),v_41647);


var G__41648 = cljs.core.next(seq__41183_41639__$1);
var G__41649 = null;
var G__41650 = (0);
var G__41651 = (0);
seq__41183_41627 = G__41648;
chunk__41184_41628 = G__41649;
count__41185_41629 = G__41650;
i__41186_41630 = G__41651;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41181){
var G__41182 = cljs.core.first(seq41181);
var seq41181__$1 = cljs.core.next(seq41181);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41182,seq41181__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41654 = arguments.length;
var i__4790__auto___41655 = (0);
while(true){
if((i__4790__auto___41655 < len__4789__auto___41654)){
args__4795__auto__.push((arguments[i__4790__auto___41655]));

var G__41656 = (i__4790__auto___41655 + (1));
i__4790__auto___41655 = G__41656;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__41201_41657 = cljs.core.seq(keywords);
var chunk__41202_41658 = null;
var count__41203_41659 = (0);
var i__41204_41660 = (0);
while(true){
if((i__41204_41660 < count__41203_41659)){
var kw_41661 = chunk__41202_41658.cljs$core$IIndexed$_nth$arity$2(null,i__41204_41660);
style.removeProperty(dommy.utils.as_str(kw_41661));


var G__41662 = seq__41201_41657;
var G__41663 = chunk__41202_41658;
var G__41664 = count__41203_41659;
var G__41665 = (i__41204_41660 + (1));
seq__41201_41657 = G__41662;
chunk__41202_41658 = G__41663;
count__41203_41659 = G__41664;
i__41204_41660 = G__41665;
continue;
} else {
var temp__5735__auto___41666 = cljs.core.seq(seq__41201_41657);
if(temp__5735__auto___41666){
var seq__41201_41667__$1 = temp__5735__auto___41666;
if(cljs.core.chunked_seq_QMARK_(seq__41201_41667__$1)){
var c__4609__auto___41668 = cljs.core.chunk_first(seq__41201_41667__$1);
var G__41669 = cljs.core.chunk_rest(seq__41201_41667__$1);
var G__41670 = c__4609__auto___41668;
var G__41671 = cljs.core.count(c__4609__auto___41668);
var G__41672 = (0);
seq__41201_41657 = G__41669;
chunk__41202_41658 = G__41670;
count__41203_41659 = G__41671;
i__41204_41660 = G__41672;
continue;
} else {
var kw_41673 = cljs.core.first(seq__41201_41667__$1);
style.removeProperty(dommy.utils.as_str(kw_41673));


var G__41674 = cljs.core.next(seq__41201_41667__$1);
var G__41675 = null;
var G__41676 = (0);
var G__41677 = (0);
seq__41201_41657 = G__41674;
chunk__41202_41658 = G__41675;
count__41203_41659 = G__41676;
i__41204_41660 = G__41677;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41199){
var G__41200 = cljs.core.first(seq41199);
var seq41199__$1 = cljs.core.next(seq41199);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41200,seq41199__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41678 = arguments.length;
var i__4790__auto___41679 = (0);
while(true){
if((i__4790__auto___41679 < len__4789__auto___41678)){
args__4795__auto__.push((arguments[i__4790__auto___41679]));

var G__41680 = (i__4790__auto___41679 + (1));
i__4790__auto___41679 = G__41680;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41208_41681 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41209_41682 = null;
var count__41210_41683 = (0);
var i__41211_41684 = (0);
while(true){
if((i__41211_41684 < count__41210_41683)){
var vec__41218_41685 = chunk__41209_41682.cljs$core$IIndexed$_nth$arity$2(null,i__41211_41684);
var k_41686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41685,(0),null);
var v_41687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41685,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41686,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41687),"px"].join('')], 0));


var G__41688 = seq__41208_41681;
var G__41689 = chunk__41209_41682;
var G__41690 = count__41210_41683;
var G__41691 = (i__41211_41684 + (1));
seq__41208_41681 = G__41688;
chunk__41209_41682 = G__41689;
count__41210_41683 = G__41690;
i__41211_41684 = G__41691;
continue;
} else {
var temp__5735__auto___41692 = cljs.core.seq(seq__41208_41681);
if(temp__5735__auto___41692){
var seq__41208_41693__$1 = temp__5735__auto___41692;
if(cljs.core.chunked_seq_QMARK_(seq__41208_41693__$1)){
var c__4609__auto___41694 = cljs.core.chunk_first(seq__41208_41693__$1);
var G__41695 = cljs.core.chunk_rest(seq__41208_41693__$1);
var G__41696 = c__4609__auto___41694;
var G__41697 = cljs.core.count(c__4609__auto___41694);
var G__41698 = (0);
seq__41208_41681 = G__41695;
chunk__41209_41682 = G__41696;
count__41210_41683 = G__41697;
i__41211_41684 = G__41698;
continue;
} else {
var vec__41221_41699 = cljs.core.first(seq__41208_41693__$1);
var k_41700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41699,(0),null);
var v_41701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41699,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41700,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41701),"px"].join('')], 0));


var G__41702 = cljs.core.next(seq__41208_41693__$1);
var G__41703 = null;
var G__41704 = (0);
var G__41705 = (0);
seq__41208_41681 = G__41702;
chunk__41209_41682 = G__41703;
count__41210_41683 = G__41704;
i__41211_41684 = G__41705;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41206){
var G__41207 = cljs.core.first(seq41206);
var seq41206__$1 = cljs.core.next(seq41206);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41207,seq41206__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__41229 = arguments.length;
switch (G__41229) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41707 = arguments.length;
var i__4790__auto___41708 = (0);
while(true){
if((i__4790__auto___41708 < len__4789__auto___41707)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41708]));

var G__41709 = (i__4790__auto___41708 + (1));
i__4790__auto___41708 = G__41709;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__41230 = elem;
(G__41230[k__$1] = v);

return G__41230;
} else {
var G__41231 = elem;
G__41231.setAttribute(k__$1,v);

return G__41231;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41232_41710 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41233_41711 = null;
var count__41234_41712 = (0);
var i__41235_41713 = (0);
while(true){
if((i__41235_41713 < count__41234_41712)){
var vec__41242_41714 = chunk__41233_41711.cljs$core$IIndexed$_nth$arity$2(null,i__41235_41713);
var k_41715__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41714,(0),null);
var v_41716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41714,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41715__$1,v_41716__$1);


var G__41717 = seq__41232_41710;
var G__41718 = chunk__41233_41711;
var G__41719 = count__41234_41712;
var G__41720 = (i__41235_41713 + (1));
seq__41232_41710 = G__41717;
chunk__41233_41711 = G__41718;
count__41234_41712 = G__41719;
i__41235_41713 = G__41720;
continue;
} else {
var temp__5735__auto___41721 = cljs.core.seq(seq__41232_41710);
if(temp__5735__auto___41721){
var seq__41232_41722__$1 = temp__5735__auto___41721;
if(cljs.core.chunked_seq_QMARK_(seq__41232_41722__$1)){
var c__4609__auto___41723 = cljs.core.chunk_first(seq__41232_41722__$1);
var G__41724 = cljs.core.chunk_rest(seq__41232_41722__$1);
var G__41725 = c__4609__auto___41723;
var G__41726 = cljs.core.count(c__4609__auto___41723);
var G__41727 = (0);
seq__41232_41710 = G__41724;
chunk__41233_41711 = G__41725;
count__41234_41712 = G__41726;
i__41235_41713 = G__41727;
continue;
} else {
var vec__41245_41728 = cljs.core.first(seq__41232_41722__$1);
var k_41729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41728,(0),null);
var v_41730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41728,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41729__$1,v_41730__$1);


var G__41731 = cljs.core.next(seq__41232_41722__$1);
var G__41732 = null;
var G__41733 = (0);
var G__41734 = (0);
seq__41232_41710 = G__41731;
chunk__41233_41711 = G__41732;
count__41234_41712 = G__41733;
i__41235_41713 = G__41734;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41225){
var G__41226 = cljs.core.first(seq41225);
var seq41225__$1 = cljs.core.next(seq41225);
var G__41227 = cljs.core.first(seq41225__$1);
var seq41225__$2 = cljs.core.next(seq41225__$1);
var G__41228 = cljs.core.first(seq41225__$2);
var seq41225__$3 = cljs.core.next(seq41225__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41226,G__41227,G__41228,seq41225__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41252 = arguments.length;
switch (G__41252) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41736 = arguments.length;
var i__4790__auto___41737 = (0);
while(true){
if((i__4790__auto___41737 < len__4789__auto___41736)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41737]));

var G__41738 = (i__4790__auto___41737 + (1));
i__4790__auto___41737 = G__41738;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_41739__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41253.cljs$core$IFn$_invoke$arity$1 ? fexpr__41253.cljs$core$IFn$_invoke$arity$1(k_41739__$1) : fexpr__41253.call(null,k_41739__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41739__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41254_41740 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41255_41741 = null;
var count__41256_41742 = (0);
var i__41257_41743 = (0);
while(true){
if((i__41257_41743 < count__41256_41742)){
var k_41744__$1 = chunk__41255_41741.cljs$core$IIndexed$_nth$arity$2(null,i__41257_41743);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41744__$1);


var G__41745 = seq__41254_41740;
var G__41746 = chunk__41255_41741;
var G__41747 = count__41256_41742;
var G__41748 = (i__41257_41743 + (1));
seq__41254_41740 = G__41745;
chunk__41255_41741 = G__41746;
count__41256_41742 = G__41747;
i__41257_41743 = G__41748;
continue;
} else {
var temp__5735__auto___41749 = cljs.core.seq(seq__41254_41740);
if(temp__5735__auto___41749){
var seq__41254_41750__$1 = temp__5735__auto___41749;
if(cljs.core.chunked_seq_QMARK_(seq__41254_41750__$1)){
var c__4609__auto___41751 = cljs.core.chunk_first(seq__41254_41750__$1);
var G__41752 = cljs.core.chunk_rest(seq__41254_41750__$1);
var G__41753 = c__4609__auto___41751;
var G__41754 = cljs.core.count(c__4609__auto___41751);
var G__41755 = (0);
seq__41254_41740 = G__41752;
chunk__41255_41741 = G__41753;
count__41256_41742 = G__41754;
i__41257_41743 = G__41755;
continue;
} else {
var k_41756__$1 = cljs.core.first(seq__41254_41750__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41756__$1);


var G__41757 = cljs.core.next(seq__41254_41750__$1);
var G__41758 = null;
var G__41759 = (0);
var G__41760 = (0);
seq__41254_41740 = G__41757;
chunk__41255_41741 = G__41758;
count__41256_41742 = G__41759;
i__41257_41743 = G__41760;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41249){
var G__41250 = cljs.core.first(seq41249);
var seq41249__$1 = cljs.core.next(seq41249);
var G__41251 = cljs.core.first(seq41249__$1);
var seq41249__$2 = cljs.core.next(seq41249__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41250,G__41251,seq41249__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__41264 = arguments.length;
switch (G__41264) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41765 = arguments.length;
var i__4790__auto___41766 = (0);
while(true){
if((i__4790__auto___41766 < len__4789__auto___41765)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41766]));

var G__41767 = (i__4790__auto___41766 + (1));
i__4790__auto___41766 = G__41767;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___41768 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41768)){
var class_list_41769 = temp__5733__auto___41768;
var seq__41265_41770 = cljs.core.seq(classes__$1);
var chunk__41266_41771 = null;
var count__41267_41772 = (0);
var i__41268_41773 = (0);
while(true){
if((i__41268_41773 < count__41267_41772)){
var c_41774 = chunk__41266_41771.cljs$core$IIndexed$_nth$arity$2(null,i__41268_41773);
class_list_41769.add(c_41774);


var G__41775 = seq__41265_41770;
var G__41776 = chunk__41266_41771;
var G__41777 = count__41267_41772;
var G__41778 = (i__41268_41773 + (1));
seq__41265_41770 = G__41775;
chunk__41266_41771 = G__41776;
count__41267_41772 = G__41777;
i__41268_41773 = G__41778;
continue;
} else {
var temp__5735__auto___41779 = cljs.core.seq(seq__41265_41770);
if(temp__5735__auto___41779){
var seq__41265_41781__$1 = temp__5735__auto___41779;
if(cljs.core.chunked_seq_QMARK_(seq__41265_41781__$1)){
var c__4609__auto___41782 = cljs.core.chunk_first(seq__41265_41781__$1);
var G__41783 = cljs.core.chunk_rest(seq__41265_41781__$1);
var G__41784 = c__4609__auto___41782;
var G__41785 = cljs.core.count(c__4609__auto___41782);
var G__41786 = (0);
seq__41265_41770 = G__41783;
chunk__41266_41771 = G__41784;
count__41267_41772 = G__41785;
i__41268_41773 = G__41786;
continue;
} else {
var c_41787 = cljs.core.first(seq__41265_41781__$1);
class_list_41769.add(c_41787);


var G__41788 = cljs.core.next(seq__41265_41781__$1);
var G__41789 = null;
var G__41790 = (0);
var G__41791 = (0);
seq__41265_41770 = G__41788;
chunk__41266_41771 = G__41789;
count__41267_41772 = G__41790;
i__41268_41773 = G__41791;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41269_41793 = cljs.core.seq(classes__$1);
var chunk__41270_41794 = null;
var count__41271_41795 = (0);
var i__41272_41797 = (0);
while(true){
if((i__41272_41797 < count__41271_41795)){
var c_41798 = chunk__41270_41794.cljs$core$IIndexed$_nth$arity$2(null,i__41272_41797);
var class_name_41800 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41800,c_41798))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41800 === ""))?c_41798:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41800)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41798)].join('')));
}


var G__41801 = seq__41269_41793;
var G__41802 = chunk__41270_41794;
var G__41803 = count__41271_41795;
var G__41804 = (i__41272_41797 + (1));
seq__41269_41793 = G__41801;
chunk__41270_41794 = G__41802;
count__41271_41795 = G__41803;
i__41272_41797 = G__41804;
continue;
} else {
var temp__5735__auto___41805 = cljs.core.seq(seq__41269_41793);
if(temp__5735__auto___41805){
var seq__41269_41806__$1 = temp__5735__auto___41805;
if(cljs.core.chunked_seq_QMARK_(seq__41269_41806__$1)){
var c__4609__auto___41807 = cljs.core.chunk_first(seq__41269_41806__$1);
var G__41808 = cljs.core.chunk_rest(seq__41269_41806__$1);
var G__41809 = c__4609__auto___41807;
var G__41810 = cljs.core.count(c__4609__auto___41807);
var G__41811 = (0);
seq__41269_41793 = G__41808;
chunk__41270_41794 = G__41809;
count__41271_41795 = G__41810;
i__41272_41797 = G__41811;
continue;
} else {
var c_41813 = cljs.core.first(seq__41269_41806__$1);
var class_name_41814 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41814,c_41813))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41814 === ""))?c_41813:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41814)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41813)].join('')));
}


var G__41819 = cljs.core.next(seq__41269_41806__$1);
var G__41820 = null;
var G__41821 = (0);
var G__41822 = (0);
seq__41269_41793 = G__41819;
chunk__41270_41794 = G__41820;
count__41271_41795 = G__41821;
i__41272_41797 = G__41822;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__41273_41823 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41274_41824 = null;
var count__41275_41825 = (0);
var i__41276_41826 = (0);
while(true){
if((i__41276_41826 < count__41275_41825)){
var c_41827 = chunk__41274_41824.cljs$core$IIndexed$_nth$arity$2(null,i__41276_41826);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41827);


var G__41828 = seq__41273_41823;
var G__41829 = chunk__41274_41824;
var G__41830 = count__41275_41825;
var G__41831 = (i__41276_41826 + (1));
seq__41273_41823 = G__41828;
chunk__41274_41824 = G__41829;
count__41275_41825 = G__41830;
i__41276_41826 = G__41831;
continue;
} else {
var temp__5735__auto___41833 = cljs.core.seq(seq__41273_41823);
if(temp__5735__auto___41833){
var seq__41273_41835__$1 = temp__5735__auto___41833;
if(cljs.core.chunked_seq_QMARK_(seq__41273_41835__$1)){
var c__4609__auto___41836 = cljs.core.chunk_first(seq__41273_41835__$1);
var G__41837 = cljs.core.chunk_rest(seq__41273_41835__$1);
var G__41838 = c__4609__auto___41836;
var G__41839 = cljs.core.count(c__4609__auto___41836);
var G__41840 = (0);
seq__41273_41823 = G__41837;
chunk__41274_41824 = G__41838;
count__41275_41825 = G__41839;
i__41276_41826 = G__41840;
continue;
} else {
var c_41841 = cljs.core.first(seq__41273_41835__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41841);


var G__41842 = cljs.core.next(seq__41273_41835__$1);
var G__41843 = null;
var G__41844 = (0);
var G__41845 = (0);
seq__41273_41823 = G__41842;
chunk__41274_41824 = G__41843;
count__41275_41825 = G__41844;
i__41276_41826 = G__41845;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41261){
var G__41262 = cljs.core.first(seq41261);
var seq41261__$1 = cljs.core.next(seq41261);
var G__41263 = cljs.core.first(seq41261__$1);
var seq41261__$2 = cljs.core.next(seq41261__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41262,G__41263,seq41261__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41281 = arguments.length;
switch (G__41281) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41851 = arguments.length;
var i__4790__auto___41852 = (0);
while(true){
if((i__4790__auto___41852 < len__4789__auto___41851)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41852]));

var G__41853 = (i__4790__auto___41852 + (1));
i__4790__auto___41852 = G__41853;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41859 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41859)){
var class_list_41860 = temp__5733__auto___41859;
class_list_41860.remove(c__$1);
} else {
var class_name_41861 = dommy.core.class$(elem);
var new_class_name_41862 = dommy.utils.remove_class_str(class_name_41861,c__$1);
if((class_name_41861 === new_class_name_41862)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41862);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41282 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41283 = null;
var count__41284 = (0);
var i__41285 = (0);
while(true){
if((i__41285 < count__41284)){
var c = chunk__41283.cljs$core$IIndexed$_nth$arity$2(null,i__41285);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41868 = seq__41282;
var G__41869 = chunk__41283;
var G__41870 = count__41284;
var G__41871 = (i__41285 + (1));
seq__41282 = G__41868;
chunk__41283 = G__41869;
count__41284 = G__41870;
i__41285 = G__41871;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41282);
if(temp__5735__auto__){
var seq__41282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41282__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41282__$1);
var G__41872 = cljs.core.chunk_rest(seq__41282__$1);
var G__41873 = c__4609__auto__;
var G__41874 = cljs.core.count(c__4609__auto__);
var G__41875 = (0);
seq__41282 = G__41872;
chunk__41283 = G__41873;
count__41284 = G__41874;
i__41285 = G__41875;
continue;
} else {
var c = cljs.core.first(seq__41282__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41876 = cljs.core.next(seq__41282__$1);
var G__41877 = null;
var G__41878 = (0);
var G__41879 = (0);
seq__41282 = G__41876;
chunk__41283 = G__41877;
count__41284 = G__41878;
i__41285 = G__41879;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41278){
var G__41279 = cljs.core.first(seq41278);
var seq41278__$1 = cljs.core.next(seq41278);
var G__41280 = cljs.core.first(seq41278__$1);
var seq41278__$2 = cljs.core.next(seq41278__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41279,G__41280,seq41278__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41287 = arguments.length;
switch (G__41287) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41881 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41881)){
var class_list_41882 = temp__5733__auto___41881;
class_list_41882.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__41290 = arguments.length;
switch (G__41290) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__41294 = arguments.length;
switch (G__41294) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__41299 = arguments.length;
switch (G__41299) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41886 = arguments.length;
var i__4790__auto___41887 = (0);
while(true){
if((i__4790__auto___41887 < len__4789__auto___41886)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41887]));

var G__41888 = (i__4790__auto___41887 + (1));
i__4790__auto___41887 = G__41888;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41300 = parent;
G__41300.appendChild(child);

return G__41300;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41301_41889 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41302_41890 = null;
var count__41303_41891 = (0);
var i__41304_41892 = (0);
while(true){
if((i__41304_41892 < count__41303_41891)){
var c_41893 = chunk__41302_41890.cljs$core$IIndexed$_nth$arity$2(null,i__41304_41892);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41893);


var G__41894 = seq__41301_41889;
var G__41895 = chunk__41302_41890;
var G__41896 = count__41303_41891;
var G__41897 = (i__41304_41892 + (1));
seq__41301_41889 = G__41894;
chunk__41302_41890 = G__41895;
count__41303_41891 = G__41896;
i__41304_41892 = G__41897;
continue;
} else {
var temp__5735__auto___41898 = cljs.core.seq(seq__41301_41889);
if(temp__5735__auto___41898){
var seq__41301_41899__$1 = temp__5735__auto___41898;
if(cljs.core.chunked_seq_QMARK_(seq__41301_41899__$1)){
var c__4609__auto___41900 = cljs.core.chunk_first(seq__41301_41899__$1);
var G__41901 = cljs.core.chunk_rest(seq__41301_41899__$1);
var G__41902 = c__4609__auto___41900;
var G__41903 = cljs.core.count(c__4609__auto___41900);
var G__41904 = (0);
seq__41301_41889 = G__41901;
chunk__41302_41890 = G__41902;
count__41303_41891 = G__41903;
i__41304_41892 = G__41904;
continue;
} else {
var c_41905 = cljs.core.first(seq__41301_41899__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41905);


var G__41906 = cljs.core.next(seq__41301_41899__$1);
var G__41907 = null;
var G__41908 = (0);
var G__41909 = (0);
seq__41301_41889 = G__41906;
chunk__41302_41890 = G__41907;
count__41303_41891 = G__41908;
i__41304_41892 = G__41909;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41296){
var G__41297 = cljs.core.first(seq41296);
var seq41296__$1 = cljs.core.next(seq41296);
var G__41298 = cljs.core.first(seq41296__$1);
var seq41296__$2 = cljs.core.next(seq41296__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41297,G__41298,seq41296__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41309 = arguments.length;
switch (G__41309) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41911 = arguments.length;
var i__4790__auto___41912 = (0);
while(true){
if((i__4790__auto___41912 < len__4789__auto___41911)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41912]));

var G__41913 = (i__4790__auto___41912 + (1));
i__4790__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41310 = parent;
G__41310.insertBefore(child,parent.firstChild);

return G__41310;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41311_41914 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41312_41915 = null;
var count__41313_41916 = (0);
var i__41314_41917 = (0);
while(true){
if((i__41314_41917 < count__41313_41916)){
var c_41918 = chunk__41312_41915.cljs$core$IIndexed$_nth$arity$2(null,i__41314_41917);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41918);


var G__41919 = seq__41311_41914;
var G__41920 = chunk__41312_41915;
var G__41921 = count__41313_41916;
var G__41922 = (i__41314_41917 + (1));
seq__41311_41914 = G__41919;
chunk__41312_41915 = G__41920;
count__41313_41916 = G__41921;
i__41314_41917 = G__41922;
continue;
} else {
var temp__5735__auto___41923 = cljs.core.seq(seq__41311_41914);
if(temp__5735__auto___41923){
var seq__41311_41924__$1 = temp__5735__auto___41923;
if(cljs.core.chunked_seq_QMARK_(seq__41311_41924__$1)){
var c__4609__auto___41925 = cljs.core.chunk_first(seq__41311_41924__$1);
var G__41926 = cljs.core.chunk_rest(seq__41311_41924__$1);
var G__41927 = c__4609__auto___41925;
var G__41928 = cljs.core.count(c__4609__auto___41925);
var G__41929 = (0);
seq__41311_41914 = G__41926;
chunk__41312_41915 = G__41927;
count__41313_41916 = G__41928;
i__41314_41917 = G__41929;
continue;
} else {
var c_41930 = cljs.core.first(seq__41311_41924__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41930);


var G__41931 = cljs.core.next(seq__41311_41924__$1);
var G__41932 = null;
var G__41933 = (0);
var G__41934 = (0);
seq__41311_41914 = G__41931;
chunk__41312_41915 = G__41932;
count__41313_41916 = G__41933;
i__41314_41917 = G__41934;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41306){
var G__41307 = cljs.core.first(seq41306);
var seq41306__$1 = cljs.core.next(seq41306);
var G__41308 = cljs.core.first(seq41306__$1);
var seq41306__$2 = cljs.core.next(seq41306__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41307,G__41308,seq41306__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___41935 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41935)){
var next_41936 = temp__5733__auto___41935;
dommy.core.insert_before_BANG_(elem,next_41936);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__41316 = arguments.length;
switch (G__41316) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__41317 = p;
G__41317.removeChild(elem);

return G__41317;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41318){
var vec__41319 = p__41318;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41938 = arguments.length;
var i__4790__auto___41939 = (0);
while(true){
if((i__4790__auto___41939 < len__4789__auto___41938)){
args__4795__auto__.push((arguments[i__4790__auto___41939]));

var G__41940 = (i__4790__auto___41939 + (1));
i__4790__auto___41939 = G__41940;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41322){
var G__41323 = cljs.core.first(seq41322);
var seq41322__$1 = cljs.core.next(seq41322);
var G__41324 = cljs.core.first(seq41322__$1);
var seq41322__$2 = cljs.core.next(seq41322__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41323,G__41324,seq41322__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41328 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41328.cljs$core$IFn$_invoke$arity$1 ? fexpr__41328.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41328.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41941 = arguments.length;
var i__4790__auto___41942 = (0);
while(true){
if((i__4790__auto___41942 < len__4789__auto___41941)){
args__4795__auto__.push((arguments[i__4790__auto___41942]));

var G__41943 = (i__4790__auto___41942 + (1));
i__4790__auto___41942 = G__41943;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41331_41944 = dommy.core.elem_and_selector(elem_sel);
var elem_41945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41331_41944,(0),null);
var selector_41946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41331_41944,(1),null);
var seq__41334_41947 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41341_41948 = null;
var count__41342_41949 = (0);
var i__41343_41950 = (0);
while(true){
if((i__41343_41950 < count__41342_41949)){
var vec__41399_41953 = chunk__41341_41948.cljs$core$IIndexed$_nth$arity$2(null,i__41343_41950);
var orig_type_41954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41399_41953,(0),null);
var f_41955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41399_41953,(1),null);
var seq__41344_41957 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41954,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41954,cljs.core.identity])));
var chunk__41346_41958 = null;
var count__41347_41959 = (0);
var i__41348_41960 = (0);
while(true){
if((i__41348_41960 < count__41347_41959)){
var vec__41412_41963 = chunk__41346_41958.cljs$core$IIndexed$_nth$arity$2(null,i__41348_41960);
var actual_type_41964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41412_41963,(0),null);
var factory_41965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41412_41963,(1),null);
var canonical_f_41967 = (function (){var G__41416 = (factory_41965.cljs$core$IFn$_invoke$arity$1 ? factory_41965.cljs$core$IFn$_invoke$arity$1(f_41955) : factory_41965.call(null,f_41955));
var fexpr__41415 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41415.cljs$core$IFn$_invoke$arity$1 ? fexpr__41415.cljs$core$IFn$_invoke$arity$1(G__41416) : fexpr__41415.call(null,G__41416));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_41964,f_41955], null),canonical_f_41967], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_41964),canonical_f_41967);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_41964),canonical_f_41967);
}


var G__41968 = seq__41344_41957;
var G__41969 = chunk__41346_41958;
var G__41970 = count__41347_41959;
var G__41971 = (i__41348_41960 + (1));
seq__41344_41957 = G__41968;
chunk__41346_41958 = G__41969;
count__41347_41959 = G__41970;
i__41348_41960 = G__41971;
continue;
} else {
var temp__5735__auto___41972 = cljs.core.seq(seq__41344_41957);
if(temp__5735__auto___41972){
var seq__41344_41973__$1 = temp__5735__auto___41972;
if(cljs.core.chunked_seq_QMARK_(seq__41344_41973__$1)){
var c__4609__auto___41974 = cljs.core.chunk_first(seq__41344_41973__$1);
var G__41975 = cljs.core.chunk_rest(seq__41344_41973__$1);
var G__41976 = c__4609__auto___41974;
var G__41977 = cljs.core.count(c__4609__auto___41974);
var G__41978 = (0);
seq__41344_41957 = G__41975;
chunk__41346_41958 = G__41976;
count__41347_41959 = G__41977;
i__41348_41960 = G__41978;
continue;
} else {
var vec__41417_41979 = cljs.core.first(seq__41344_41973__$1);
var actual_type_41980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41417_41979,(0),null);
var factory_41981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41417_41979,(1),null);
var canonical_f_41982 = (function (){var G__41421 = (factory_41981.cljs$core$IFn$_invoke$arity$1 ? factory_41981.cljs$core$IFn$_invoke$arity$1(f_41955) : factory_41981.call(null,f_41955));
var fexpr__41420 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41420.cljs$core$IFn$_invoke$arity$1 ? fexpr__41420.cljs$core$IFn$_invoke$arity$1(G__41421) : fexpr__41420.call(null,G__41421));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_41980,f_41955], null),canonical_f_41982], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_41980),canonical_f_41982);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_41980),canonical_f_41982);
}


var G__41987 = cljs.core.next(seq__41344_41973__$1);
var G__41988 = null;
var G__41989 = (0);
var G__41990 = (0);
seq__41344_41957 = G__41987;
chunk__41346_41958 = G__41988;
count__41347_41959 = G__41989;
i__41348_41960 = G__41990;
continue;
}
} else {
}
}
break;
}

var G__41991 = seq__41334_41947;
var G__41992 = chunk__41341_41948;
var G__41993 = count__41342_41949;
var G__41994 = (i__41343_41950 + (1));
seq__41334_41947 = G__41991;
chunk__41341_41948 = G__41992;
count__41342_41949 = G__41993;
i__41343_41950 = G__41994;
continue;
} else {
var temp__5735__auto___41995 = cljs.core.seq(seq__41334_41947);
if(temp__5735__auto___41995){
var seq__41334_41996__$1 = temp__5735__auto___41995;
if(cljs.core.chunked_seq_QMARK_(seq__41334_41996__$1)){
var c__4609__auto___41997 = cljs.core.chunk_first(seq__41334_41996__$1);
var G__42000 = cljs.core.chunk_rest(seq__41334_41996__$1);
var G__42001 = c__4609__auto___41997;
var G__42002 = cljs.core.count(c__4609__auto___41997);
var G__42003 = (0);
seq__41334_41947 = G__42000;
chunk__41341_41948 = G__42001;
count__41342_41949 = G__42002;
i__41343_41950 = G__42003;
continue;
} else {
var vec__41426_42005 = cljs.core.first(seq__41334_41996__$1);
var orig_type_42006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41426_42005,(0),null);
var f_42007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41426_42005,(1),null);
var seq__41335_42008 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42006,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42006,cljs.core.identity])));
var chunk__41337_42009 = null;
var count__41338_42010 = (0);
var i__41339_42011 = (0);
while(true){
if((i__41339_42011 < count__41338_42010)){
var vec__41442_42012 = chunk__41337_42009.cljs$core$IIndexed$_nth$arity$2(null,i__41339_42011);
var actual_type_42013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442_42012,(0),null);
var factory_42014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442_42012,(1),null);
var canonical_f_42015 = (function (){var G__41446 = (factory_42014.cljs$core$IFn$_invoke$arity$1 ? factory_42014.cljs$core$IFn$_invoke$arity$1(f_42007) : factory_42014.call(null,f_42007));
var fexpr__41445 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41445.cljs$core$IFn$_invoke$arity$1 ? fexpr__41445.cljs$core$IFn$_invoke$arity$1(G__41446) : fexpr__41445.call(null,G__41446));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_42013,f_42007], null),canonical_f_42015], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_42013),canonical_f_42015);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_42013),canonical_f_42015);
}


var G__42022 = seq__41335_42008;
var G__42023 = chunk__41337_42009;
var G__42024 = count__41338_42010;
var G__42025 = (i__41339_42011 + (1));
seq__41335_42008 = G__42022;
chunk__41337_42009 = G__42023;
count__41338_42010 = G__42024;
i__41339_42011 = G__42025;
continue;
} else {
var temp__5735__auto___42027__$1 = cljs.core.seq(seq__41335_42008);
if(temp__5735__auto___42027__$1){
var seq__41335_42028__$1 = temp__5735__auto___42027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41335_42028__$1)){
var c__4609__auto___42029 = cljs.core.chunk_first(seq__41335_42028__$1);
var G__42030 = cljs.core.chunk_rest(seq__41335_42028__$1);
var G__42031 = c__4609__auto___42029;
var G__42032 = cljs.core.count(c__4609__auto___42029);
var G__42033 = (0);
seq__41335_42008 = G__42030;
chunk__41337_42009 = G__42031;
count__41338_42010 = G__42032;
i__41339_42011 = G__42033;
continue;
} else {
var vec__41447_42034 = cljs.core.first(seq__41335_42028__$1);
var actual_type_42035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42034,(0),null);
var factory_42036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42034,(1),null);
var canonical_f_42039 = (function (){var G__41455 = (factory_42036.cljs$core$IFn$_invoke$arity$1 ? factory_42036.cljs$core$IFn$_invoke$arity$1(f_42007) : factory_42036.call(null,f_42007));
var fexpr__41454 = (cljs.core.truth_(selector_41946)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41945,selector_41946):cljs.core.identity);
return (fexpr__41454.cljs$core$IFn$_invoke$arity$1 ? fexpr__41454.cljs$core$IFn$_invoke$arity$1(G__41455) : fexpr__41454.call(null,G__41455));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41945,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41946,actual_type_42035,f_42007], null),canonical_f_42039], 0));

if(cljs.core.truth_(elem_41945.addEventListener)){
elem_41945.addEventListener(cljs.core.name(actual_type_42035),canonical_f_42039);
} else {
elem_41945.attachEvent(cljs.core.name(actual_type_42035),canonical_f_42039);
}


var G__42042 = cljs.core.next(seq__41335_42028__$1);
var G__42043 = null;
var G__42044 = (0);
var G__42045 = (0);
seq__41335_42008 = G__42042;
chunk__41337_42009 = G__42043;
count__41338_42010 = G__42044;
i__41339_42011 = G__42045;
continue;
}
} else {
}
}
break;
}

var G__42046 = cljs.core.next(seq__41334_41996__$1);
var G__42047 = null;
var G__42048 = (0);
var G__42049 = (0);
seq__41334_41947 = G__42046;
chunk__41341_41948 = G__42047;
count__41342_41949 = G__42048;
i__41343_41950 = G__42049;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41329){
var G__41330 = cljs.core.first(seq41329);
var seq41329__$1 = cljs.core.next(seq41329);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41330,seq41329__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42056 = arguments.length;
var i__4790__auto___42057 = (0);
while(true){
if((i__4790__auto___42057 < len__4789__auto___42056)){
args__4795__auto__.push((arguments[i__4790__auto___42057]));

var G__42059 = (i__4790__auto___42057 + (1));
i__4790__auto___42057 = G__42059;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41461_42062 = dommy.core.elem_and_selector(elem_sel);
var elem_42063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41461_42062,(0),null);
var selector_42064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41461_42062,(1),null);
var seq__41464_42067 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41471_42068 = null;
var count__41472_42069 = (0);
var i__41473_42070 = (0);
while(true){
if((i__41473_42070 < count__41472_42069)){
var vec__41564_42071 = chunk__41471_42068.cljs$core$IIndexed$_nth$arity$2(null,i__41473_42070);
var orig_type_42072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41564_42071,(0),null);
var f_42073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41564_42071,(1),null);
var seq__41474_42075 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42072,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42072,cljs.core.identity])));
var chunk__41476_42076 = null;
var count__41477_42077 = (0);
var i__41478_42078 = (0);
while(true){
if((i__41478_42078 < count__41477_42077)){
var vec__41574_42079 = chunk__41476_42076.cljs$core$IIndexed$_nth$arity$2(null,i__41478_42078);
var actual_type_42080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41574_42079,(0),null);
var __42081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41574_42079,(1),null);
var keys_42085 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42064,actual_type_42080,f_42073], null);
var canonical_f_42086 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42063),keys_42085);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42063,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42085], 0));

if(cljs.core.truth_(elem_42063.removeEventListener)){
elem_42063.removeEventListener(cljs.core.name(actual_type_42080),canonical_f_42086);
} else {
elem_42063.detachEvent(cljs.core.name(actual_type_42080),canonical_f_42086);
}


var G__42088 = seq__41474_42075;
var G__42089 = chunk__41476_42076;
var G__42090 = count__41477_42077;
var G__42091 = (i__41478_42078 + (1));
seq__41474_42075 = G__42088;
chunk__41476_42076 = G__42089;
count__41477_42077 = G__42090;
i__41478_42078 = G__42091;
continue;
} else {
var temp__5735__auto___42095 = cljs.core.seq(seq__41474_42075);
if(temp__5735__auto___42095){
var seq__41474_42096__$1 = temp__5735__auto___42095;
if(cljs.core.chunked_seq_QMARK_(seq__41474_42096__$1)){
var c__4609__auto___42098 = cljs.core.chunk_first(seq__41474_42096__$1);
var G__42100 = cljs.core.chunk_rest(seq__41474_42096__$1);
var G__42101 = c__4609__auto___42098;
var G__42102 = cljs.core.count(c__4609__auto___42098);
var G__42103 = (0);
seq__41474_42075 = G__42100;
chunk__41476_42076 = G__42101;
count__41477_42077 = G__42102;
i__41478_42078 = G__42103;
continue;
} else {
var vec__41578_42104 = cljs.core.first(seq__41474_42096__$1);
var actual_type_42105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578_42104,(0),null);
var __42106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578_42104,(1),null);
var keys_42107 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42064,actual_type_42105,f_42073], null);
var canonical_f_42108 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42063),keys_42107);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42063,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42107], 0));

if(cljs.core.truth_(elem_42063.removeEventListener)){
elem_42063.removeEventListener(cljs.core.name(actual_type_42105),canonical_f_42108);
} else {
elem_42063.detachEvent(cljs.core.name(actual_type_42105),canonical_f_42108);
}


var G__42112 = cljs.core.next(seq__41474_42096__$1);
var G__42113 = null;
var G__42114 = (0);
var G__42115 = (0);
seq__41474_42075 = G__42112;
chunk__41476_42076 = G__42113;
count__41477_42077 = G__42114;
i__41478_42078 = G__42115;
continue;
}
} else {
}
}
break;
}

var G__42116 = seq__41464_42067;
var G__42117 = chunk__41471_42068;
var G__42118 = count__41472_42069;
var G__42119 = (i__41473_42070 + (1));
seq__41464_42067 = G__42116;
chunk__41471_42068 = G__42117;
count__41472_42069 = G__42118;
i__41473_42070 = G__42119;
continue;
} else {
var temp__5735__auto___42122 = cljs.core.seq(seq__41464_42067);
if(temp__5735__auto___42122){
var seq__41464_42123__$1 = temp__5735__auto___42122;
if(cljs.core.chunked_seq_QMARK_(seq__41464_42123__$1)){
var c__4609__auto___42125 = cljs.core.chunk_first(seq__41464_42123__$1);
var G__42126 = cljs.core.chunk_rest(seq__41464_42123__$1);
var G__42127 = c__4609__auto___42125;
var G__42128 = cljs.core.count(c__4609__auto___42125);
var G__42129 = (0);
seq__41464_42067 = G__42126;
chunk__41471_42068 = G__42127;
count__41472_42069 = G__42128;
i__41473_42070 = G__42129;
continue;
} else {
var vec__41581_42130 = cljs.core.first(seq__41464_42123__$1);
var orig_type_42131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581_42130,(0),null);
var f_42132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581_42130,(1),null);
var seq__41465_42136 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42131,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42131,cljs.core.identity])));
var chunk__41467_42137 = null;
var count__41468_42138 = (0);
var i__41469_42139 = (0);
while(true){
if((i__41469_42139 < count__41468_42138)){
var vec__41590_42140 = chunk__41467_42137.cljs$core$IIndexed$_nth$arity$2(null,i__41469_42139);
var actual_type_42141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590_42140,(0),null);
var __42142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590_42140,(1),null);
var keys_42144 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42064,actual_type_42141,f_42132], null);
var canonical_f_42145 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42063),keys_42144);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42063,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42144], 0));

if(cljs.core.truth_(elem_42063.removeEventListener)){
elem_42063.removeEventListener(cljs.core.name(actual_type_42141),canonical_f_42145);
} else {
elem_42063.detachEvent(cljs.core.name(actual_type_42141),canonical_f_42145);
}


var G__42154 = seq__41465_42136;
var G__42155 = chunk__41467_42137;
var G__42156 = count__41468_42138;
var G__42157 = (i__41469_42139 + (1));
seq__41465_42136 = G__42154;
chunk__41467_42137 = G__42155;
count__41468_42138 = G__42156;
i__41469_42139 = G__42157;
continue;
} else {
var temp__5735__auto___42159__$1 = cljs.core.seq(seq__41465_42136);
if(temp__5735__auto___42159__$1){
var seq__41465_42161__$1 = temp__5735__auto___42159__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41465_42161__$1)){
var c__4609__auto___42163 = cljs.core.chunk_first(seq__41465_42161__$1);
var G__42164 = cljs.core.chunk_rest(seq__41465_42161__$1);
var G__42165 = c__4609__auto___42163;
var G__42166 = cljs.core.count(c__4609__auto___42163);
var G__42167 = (0);
seq__41465_42136 = G__42164;
chunk__41467_42137 = G__42165;
count__41468_42138 = G__42166;
i__41469_42139 = G__42167;
continue;
} else {
var vec__41593_42168 = cljs.core.first(seq__41465_42161__$1);
var actual_type_42169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41593_42168,(0),null);
var __42170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41593_42168,(1),null);
var keys_42173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42064,actual_type_42169,f_42132], null);
var canonical_f_42174 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42063),keys_42173);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42063,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42173], 0));

if(cljs.core.truth_(elem_42063.removeEventListener)){
elem_42063.removeEventListener(cljs.core.name(actual_type_42169),canonical_f_42174);
} else {
elem_42063.detachEvent(cljs.core.name(actual_type_42169),canonical_f_42174);
}


var G__42176 = cljs.core.next(seq__41465_42161__$1);
var G__42177 = null;
var G__42178 = (0);
var G__42179 = (0);
seq__41465_42136 = G__42176;
chunk__41467_42137 = G__42177;
count__41468_42138 = G__42178;
i__41469_42139 = G__42179;
continue;
}
} else {
}
}
break;
}

var G__42182 = cljs.core.next(seq__41464_42123__$1);
var G__42183 = null;
var G__42184 = (0);
var G__42185 = (0);
seq__41464_42067 = G__42182;
chunk__41471_42068 = G__42183;
count__41472_42069 = G__42184;
i__41473_42070 = G__42185;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41457){
var G__41459 = cljs.core.first(seq41457);
var seq41457__$1 = cljs.core.next(seq41457);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41459,seq41457__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42189 = arguments.length;
var i__4790__auto___42190 = (0);
while(true){
if((i__4790__auto___42190 < len__4789__auto___42189)){
args__4795__auto__.push((arguments[i__4790__auto___42190]));

var G__42192 = (i__4790__auto___42190 + (1));
i__4790__auto___42190 = G__42192;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41598_42196 = dommy.core.elem_and_selector(elem_sel);
var elem_42197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41598_42196,(0),null);
var selector_42198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41598_42196,(1),null);
var seq__41601_42199 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41602_42200 = null;
var count__41603_42201 = (0);
var i__41604_42202 = (0);
while(true){
if((i__41604_42202 < count__41603_42201)){
var vec__41611_42206 = chunk__41602_42200.cljs$core$IIndexed$_nth$arity$2(null,i__41604_42202);
var type_42207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41611_42206,(0),null);
var f_42208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41611_42206,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42207,((function (seq__41601_42199,chunk__41602_42200,count__41603_42201,i__41604_42202,vec__41611_42206,type_42207,f_42208,vec__41598_42196,elem_42197,selector_42198){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42207,dommy$core$this_fn], 0));

return (f_42208.cljs$core$IFn$_invoke$arity$1 ? f_42208.cljs$core$IFn$_invoke$arity$1(e) : f_42208.call(null,e));
});})(seq__41601_42199,chunk__41602_42200,count__41603_42201,i__41604_42202,vec__41611_42206,type_42207,f_42208,vec__41598_42196,elem_42197,selector_42198))
], 0));


var G__42212 = seq__41601_42199;
var G__42213 = chunk__41602_42200;
var G__42214 = count__41603_42201;
var G__42215 = (i__41604_42202 + (1));
seq__41601_42199 = G__42212;
chunk__41602_42200 = G__42213;
count__41603_42201 = G__42214;
i__41604_42202 = G__42215;
continue;
} else {
var temp__5735__auto___42216 = cljs.core.seq(seq__41601_42199);
if(temp__5735__auto___42216){
var seq__41601_42218__$1 = temp__5735__auto___42216;
if(cljs.core.chunked_seq_QMARK_(seq__41601_42218__$1)){
var c__4609__auto___42219 = cljs.core.chunk_first(seq__41601_42218__$1);
var G__42220 = cljs.core.chunk_rest(seq__41601_42218__$1);
var G__42221 = c__4609__auto___42219;
var G__42222 = cljs.core.count(c__4609__auto___42219);
var G__42223 = (0);
seq__41601_42199 = G__42220;
chunk__41602_42200 = G__42221;
count__41603_42201 = G__42222;
i__41604_42202 = G__42223;
continue;
} else {
var vec__41614_42225 = cljs.core.first(seq__41601_42218__$1);
var type_42226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41614_42225,(0),null);
var f_42227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41614_42225,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42226,((function (seq__41601_42199,chunk__41602_42200,count__41603_42201,i__41604_42202,vec__41614_42225,type_42226,f_42227,seq__41601_42218__$1,temp__5735__auto___42216,vec__41598_42196,elem_42197,selector_42198){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42226,dommy$core$this_fn], 0));

return (f_42227.cljs$core$IFn$_invoke$arity$1 ? f_42227.cljs$core$IFn$_invoke$arity$1(e) : f_42227.call(null,e));
});})(seq__41601_42199,chunk__41602_42200,count__41603_42201,i__41604_42202,vec__41614_42225,type_42226,f_42227,seq__41601_42218__$1,temp__5735__auto___42216,vec__41598_42196,elem_42197,selector_42198))
], 0));


var G__42249 = cljs.core.next(seq__41601_42218__$1);
var G__42250 = null;
var G__42251 = (0);
var G__42252 = (0);
seq__41601_42199 = G__42249;
chunk__41602_42200 = G__42250;
count__41603_42201 = G__42251;
i__41604_42202 = G__42252;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41596){
var G__41597 = cljs.core.first(seq41596);
var seq41596__$1 = cljs.core.next(seq41596);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41597,seq41596__$1);
}));


//# sourceMappingURL=dommy.core.js.map
