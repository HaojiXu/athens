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
var G__41172 = arguments.length;
switch (G__41172) {
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
var G__41174 = arguments.length;
switch (G__41174) {
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
var G__41177 = arguments.length;
switch (G__41177) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41175_SHARP_){
return (!((p1__41175_SHARP_ === base)));
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
var len__4789__auto___41592 = arguments.length;
var i__4790__auto___41593 = (0);
while(true){
if((i__4790__auto___41593 < len__4789__auto___41592)){
args__4795__auto__.push((arguments[i__4790__auto___41593]));

var G__41594 = (i__4790__auto___41593 + (1));
i__4790__auto___41593 = G__41594;
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
var seq__41182_41595 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41183_41596 = null;
var count__41184_41597 = (0);
var i__41185_41598 = (0);
while(true){
if((i__41185_41598 < count__41184_41597)){
var vec__41192_41599 = chunk__41183_41596.cljs$core$IIndexed$_nth$arity$2(null,i__41185_41598);
var k_41600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41599,(0),null);
var v_41601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41599,(1),null);
style.setProperty(dommy.utils.as_str(k_41600),v_41601);


var G__41602 = seq__41182_41595;
var G__41603 = chunk__41183_41596;
var G__41604 = count__41184_41597;
var G__41605 = (i__41185_41598 + (1));
seq__41182_41595 = G__41602;
chunk__41183_41596 = G__41603;
count__41184_41597 = G__41604;
i__41185_41598 = G__41605;
continue;
} else {
var temp__5735__auto___41606 = cljs.core.seq(seq__41182_41595);
if(temp__5735__auto___41606){
var seq__41182_41607__$1 = temp__5735__auto___41606;
if(cljs.core.chunked_seq_QMARK_(seq__41182_41607__$1)){
var c__4609__auto___41608 = cljs.core.chunk_first(seq__41182_41607__$1);
var G__41609 = cljs.core.chunk_rest(seq__41182_41607__$1);
var G__41610 = c__4609__auto___41608;
var G__41611 = cljs.core.count(c__4609__auto___41608);
var G__41612 = (0);
seq__41182_41595 = G__41609;
chunk__41183_41596 = G__41610;
count__41184_41597 = G__41611;
i__41185_41598 = G__41612;
continue;
} else {
var vec__41195_41613 = cljs.core.first(seq__41182_41607__$1);
var k_41614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41195_41613,(0),null);
var v_41615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41195_41613,(1),null);
style.setProperty(dommy.utils.as_str(k_41614),v_41615);


var G__41616 = cljs.core.next(seq__41182_41607__$1);
var G__41617 = null;
var G__41618 = (0);
var G__41619 = (0);
seq__41182_41595 = G__41616;
chunk__41183_41596 = G__41617;
count__41184_41597 = G__41618;
i__41185_41598 = G__41619;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41180){
var G__41181 = cljs.core.first(seq41180);
var seq41180__$1 = cljs.core.next(seq41180);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41181,seq41180__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41625 = arguments.length;
var i__4790__auto___41627 = (0);
while(true){
if((i__4790__auto___41627 < len__4789__auto___41625)){
args__4795__auto__.push((arguments[i__4790__auto___41627]));

var G__41628 = (i__4790__auto___41627 + (1));
i__4790__auto___41627 = G__41628;
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
var seq__41201_41634 = cljs.core.seq(keywords);
var chunk__41202_41635 = null;
var count__41203_41636 = (0);
var i__41204_41637 = (0);
while(true){
if((i__41204_41637 < count__41203_41636)){
var kw_41640 = chunk__41202_41635.cljs$core$IIndexed$_nth$arity$2(null,i__41204_41637);
style.removeProperty(dommy.utils.as_str(kw_41640));


var G__41645 = seq__41201_41634;
var G__41646 = chunk__41202_41635;
var G__41647 = count__41203_41636;
var G__41648 = (i__41204_41637 + (1));
seq__41201_41634 = G__41645;
chunk__41202_41635 = G__41646;
count__41203_41636 = G__41647;
i__41204_41637 = G__41648;
continue;
} else {
var temp__5735__auto___41650 = cljs.core.seq(seq__41201_41634);
if(temp__5735__auto___41650){
var seq__41201_41651__$1 = temp__5735__auto___41650;
if(cljs.core.chunked_seq_QMARK_(seq__41201_41651__$1)){
var c__4609__auto___41652 = cljs.core.chunk_first(seq__41201_41651__$1);
var G__41653 = cljs.core.chunk_rest(seq__41201_41651__$1);
var G__41654 = c__4609__auto___41652;
var G__41655 = cljs.core.count(c__4609__auto___41652);
var G__41656 = (0);
seq__41201_41634 = G__41653;
chunk__41202_41635 = G__41654;
count__41203_41636 = G__41655;
i__41204_41637 = G__41656;
continue;
} else {
var kw_41661 = cljs.core.first(seq__41201_41651__$1);
style.removeProperty(dommy.utils.as_str(kw_41661));


var G__41662 = cljs.core.next(seq__41201_41651__$1);
var G__41663 = null;
var G__41664 = (0);
var G__41665 = (0);
seq__41201_41634 = G__41662;
chunk__41202_41635 = G__41663;
count__41203_41636 = G__41664;
i__41204_41637 = G__41665;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41198){
var G__41199 = cljs.core.first(seq41198);
var seq41198__$1 = cljs.core.next(seq41198);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41199,seq41198__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41666 = arguments.length;
var i__4790__auto___41667 = (0);
while(true){
if((i__4790__auto___41667 < len__4789__auto___41666)){
args__4795__auto__.push((arguments[i__4790__auto___41667]));

var G__41668 = (i__4790__auto___41667 + (1));
i__4790__auto___41667 = G__41668;
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

var seq__41207_41669 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41208_41670 = null;
var count__41209_41671 = (0);
var i__41210_41672 = (0);
while(true){
if((i__41210_41672 < count__41209_41671)){
var vec__41217_41673 = chunk__41208_41670.cljs$core$IIndexed$_nth$arity$2(null,i__41210_41672);
var k_41674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41673,(0),null);
var v_41675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41673,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41674,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41675),"px"].join('')], 0));


var G__41676 = seq__41207_41669;
var G__41677 = chunk__41208_41670;
var G__41678 = count__41209_41671;
var G__41679 = (i__41210_41672 + (1));
seq__41207_41669 = G__41676;
chunk__41208_41670 = G__41677;
count__41209_41671 = G__41678;
i__41210_41672 = G__41679;
continue;
} else {
var temp__5735__auto___41680 = cljs.core.seq(seq__41207_41669);
if(temp__5735__auto___41680){
var seq__41207_41681__$1 = temp__5735__auto___41680;
if(cljs.core.chunked_seq_QMARK_(seq__41207_41681__$1)){
var c__4609__auto___41683 = cljs.core.chunk_first(seq__41207_41681__$1);
var G__41684 = cljs.core.chunk_rest(seq__41207_41681__$1);
var G__41685 = c__4609__auto___41683;
var G__41686 = cljs.core.count(c__4609__auto___41683);
var G__41687 = (0);
seq__41207_41669 = G__41684;
chunk__41208_41670 = G__41685;
count__41209_41671 = G__41686;
i__41210_41672 = G__41687;
continue;
} else {
var vec__41220_41690 = cljs.core.first(seq__41207_41681__$1);
var k_41691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41220_41690,(0),null);
var v_41692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41220_41690,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41691,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41692),"px"].join('')], 0));


var G__41693 = cljs.core.next(seq__41207_41681__$1);
var G__41694 = null;
var G__41695 = (0);
var G__41696 = (0);
seq__41207_41669 = G__41693;
chunk__41208_41670 = G__41694;
count__41209_41671 = G__41695;
i__41210_41672 = G__41696;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41205){
var G__41206 = cljs.core.first(seq41205);
var seq41205__$1 = cljs.core.next(seq41205);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41206,seq41205__$1);
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
var G__41228 = arguments.length;
switch (G__41228) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41698 = arguments.length;
var i__4790__auto___41699 = (0);
while(true){
if((i__4790__auto___41699 < len__4789__auto___41698)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41699]));

var G__41700 = (i__4790__auto___41699 + (1));
i__4790__auto___41699 = G__41700;
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
var G__41229 = elem;
(G__41229[k__$1] = v);

return G__41229;
} else {
var G__41230 = elem;
G__41230.setAttribute(k__$1,v);

return G__41230;
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

var seq__41231_41702 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41232_41703 = null;
var count__41233_41704 = (0);
var i__41234_41705 = (0);
while(true){
if((i__41234_41705 < count__41233_41704)){
var vec__41241_41706 = chunk__41232_41703.cljs$core$IIndexed$_nth$arity$2(null,i__41234_41705);
var k_41707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41241_41706,(0),null);
var v_41708__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41241_41706,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41707__$1,v_41708__$1);


var G__41709 = seq__41231_41702;
var G__41710 = chunk__41232_41703;
var G__41711 = count__41233_41704;
var G__41712 = (i__41234_41705 + (1));
seq__41231_41702 = G__41709;
chunk__41232_41703 = G__41710;
count__41233_41704 = G__41711;
i__41234_41705 = G__41712;
continue;
} else {
var temp__5735__auto___41713 = cljs.core.seq(seq__41231_41702);
if(temp__5735__auto___41713){
var seq__41231_41715__$1 = temp__5735__auto___41713;
if(cljs.core.chunked_seq_QMARK_(seq__41231_41715__$1)){
var c__4609__auto___41716 = cljs.core.chunk_first(seq__41231_41715__$1);
var G__41717 = cljs.core.chunk_rest(seq__41231_41715__$1);
var G__41718 = c__4609__auto___41716;
var G__41719 = cljs.core.count(c__4609__auto___41716);
var G__41720 = (0);
seq__41231_41702 = G__41717;
chunk__41232_41703 = G__41718;
count__41233_41704 = G__41719;
i__41234_41705 = G__41720;
continue;
} else {
var vec__41244_41721 = cljs.core.first(seq__41231_41715__$1);
var k_41722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41244_41721,(0),null);
var v_41723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41244_41721,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41722__$1,v_41723__$1);


var G__41724 = cljs.core.next(seq__41231_41715__$1);
var G__41725 = null;
var G__41726 = (0);
var G__41727 = (0);
seq__41231_41702 = G__41724;
chunk__41232_41703 = G__41725;
count__41233_41704 = G__41726;
i__41234_41705 = G__41727;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41224){
var G__41225 = cljs.core.first(seq41224);
var seq41224__$1 = cljs.core.next(seq41224);
var G__41226 = cljs.core.first(seq41224__$1);
var seq41224__$2 = cljs.core.next(seq41224__$1);
var G__41227 = cljs.core.first(seq41224__$2);
var seq41224__$3 = cljs.core.next(seq41224__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41225,G__41226,G__41227,seq41224__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41251 = arguments.length;
switch (G__41251) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41729 = arguments.length;
var i__4790__auto___41730 = (0);
while(true){
if((i__4790__auto___41730 < len__4789__auto___41729)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41730]));

var G__41731 = (i__4790__auto___41730 + (1));
i__4790__auto___41730 = G__41731;
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
var k_41732__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41252.cljs$core$IFn$_invoke$arity$1 ? fexpr__41252.cljs$core$IFn$_invoke$arity$1(k_41732__$1) : fexpr__41252.call(null,k_41732__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41732__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41253_41733 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41254_41734 = null;
var count__41255_41735 = (0);
var i__41256_41736 = (0);
while(true){
if((i__41256_41736 < count__41255_41735)){
var k_41737__$1 = chunk__41254_41734.cljs$core$IIndexed$_nth$arity$2(null,i__41256_41736);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41737__$1);


var G__41738 = seq__41253_41733;
var G__41739 = chunk__41254_41734;
var G__41740 = count__41255_41735;
var G__41741 = (i__41256_41736 + (1));
seq__41253_41733 = G__41738;
chunk__41254_41734 = G__41739;
count__41255_41735 = G__41740;
i__41256_41736 = G__41741;
continue;
} else {
var temp__5735__auto___41742 = cljs.core.seq(seq__41253_41733);
if(temp__5735__auto___41742){
var seq__41253_41743__$1 = temp__5735__auto___41742;
if(cljs.core.chunked_seq_QMARK_(seq__41253_41743__$1)){
var c__4609__auto___41744 = cljs.core.chunk_first(seq__41253_41743__$1);
var G__41745 = cljs.core.chunk_rest(seq__41253_41743__$1);
var G__41746 = c__4609__auto___41744;
var G__41747 = cljs.core.count(c__4609__auto___41744);
var G__41748 = (0);
seq__41253_41733 = G__41745;
chunk__41254_41734 = G__41746;
count__41255_41735 = G__41747;
i__41256_41736 = G__41748;
continue;
} else {
var k_41749__$1 = cljs.core.first(seq__41253_41743__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41749__$1);


var G__41750 = cljs.core.next(seq__41253_41743__$1);
var G__41751 = null;
var G__41752 = (0);
var G__41753 = (0);
seq__41253_41733 = G__41750;
chunk__41254_41734 = G__41751;
count__41255_41735 = G__41752;
i__41256_41736 = G__41753;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41248){
var G__41249 = cljs.core.first(seq41248);
var seq41248__$1 = cljs.core.next(seq41248);
var G__41250 = cljs.core.first(seq41248__$1);
var seq41248__$2 = cljs.core.next(seq41248__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41249,G__41250,seq41248__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41258 = arguments.length;
switch (G__41258) {
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
var G__41263 = arguments.length;
switch (G__41263) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41756 = arguments.length;
var i__4790__auto___41757 = (0);
while(true){
if((i__4790__auto___41757 < len__4789__auto___41756)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41757]));

var G__41758 = (i__4790__auto___41757 + (1));
i__4790__auto___41757 = G__41758;
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
var temp__5733__auto___41759 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41759)){
var class_list_41760 = temp__5733__auto___41759;
var seq__41264_41761 = cljs.core.seq(classes__$1);
var chunk__41265_41762 = null;
var count__41266_41763 = (0);
var i__41267_41764 = (0);
while(true){
if((i__41267_41764 < count__41266_41763)){
var c_41765 = chunk__41265_41762.cljs$core$IIndexed$_nth$arity$2(null,i__41267_41764);
class_list_41760.add(c_41765);


var G__41766 = seq__41264_41761;
var G__41767 = chunk__41265_41762;
var G__41768 = count__41266_41763;
var G__41769 = (i__41267_41764 + (1));
seq__41264_41761 = G__41766;
chunk__41265_41762 = G__41767;
count__41266_41763 = G__41768;
i__41267_41764 = G__41769;
continue;
} else {
var temp__5735__auto___41770 = cljs.core.seq(seq__41264_41761);
if(temp__5735__auto___41770){
var seq__41264_41771__$1 = temp__5735__auto___41770;
if(cljs.core.chunked_seq_QMARK_(seq__41264_41771__$1)){
var c__4609__auto___41772 = cljs.core.chunk_first(seq__41264_41771__$1);
var G__41773 = cljs.core.chunk_rest(seq__41264_41771__$1);
var G__41774 = c__4609__auto___41772;
var G__41775 = cljs.core.count(c__4609__auto___41772);
var G__41776 = (0);
seq__41264_41761 = G__41773;
chunk__41265_41762 = G__41774;
count__41266_41763 = G__41775;
i__41267_41764 = G__41776;
continue;
} else {
var c_41777 = cljs.core.first(seq__41264_41771__$1);
class_list_41760.add(c_41777);


var G__41778 = cljs.core.next(seq__41264_41771__$1);
var G__41779 = null;
var G__41780 = (0);
var G__41781 = (0);
seq__41264_41761 = G__41778;
chunk__41265_41762 = G__41779;
count__41266_41763 = G__41780;
i__41267_41764 = G__41781;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41268_41782 = cljs.core.seq(classes__$1);
var chunk__41269_41783 = null;
var count__41270_41784 = (0);
var i__41271_41785 = (0);
while(true){
if((i__41271_41785 < count__41270_41784)){
var c_41786 = chunk__41269_41783.cljs$core$IIndexed$_nth$arity$2(null,i__41271_41785);
var class_name_41787 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41787,c_41786))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41787 === ""))?c_41786:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41787)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41786)].join('')));
}


var G__41788 = seq__41268_41782;
var G__41789 = chunk__41269_41783;
var G__41790 = count__41270_41784;
var G__41791 = (i__41271_41785 + (1));
seq__41268_41782 = G__41788;
chunk__41269_41783 = G__41789;
count__41270_41784 = G__41790;
i__41271_41785 = G__41791;
continue;
} else {
var temp__5735__auto___41792 = cljs.core.seq(seq__41268_41782);
if(temp__5735__auto___41792){
var seq__41268_41793__$1 = temp__5735__auto___41792;
if(cljs.core.chunked_seq_QMARK_(seq__41268_41793__$1)){
var c__4609__auto___41794 = cljs.core.chunk_first(seq__41268_41793__$1);
var G__41795 = cljs.core.chunk_rest(seq__41268_41793__$1);
var G__41796 = c__4609__auto___41794;
var G__41797 = cljs.core.count(c__4609__auto___41794);
var G__41798 = (0);
seq__41268_41782 = G__41795;
chunk__41269_41783 = G__41796;
count__41270_41784 = G__41797;
i__41271_41785 = G__41798;
continue;
} else {
var c_41799 = cljs.core.first(seq__41268_41793__$1);
var class_name_41800 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41800,c_41799))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41800 === ""))?c_41799:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41800)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41799)].join('')));
}


var G__41801 = cljs.core.next(seq__41268_41793__$1);
var G__41802 = null;
var G__41803 = (0);
var G__41804 = (0);
seq__41268_41782 = G__41801;
chunk__41269_41783 = G__41802;
count__41270_41784 = G__41803;
i__41271_41785 = G__41804;
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
var seq__41272_41805 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41273_41806 = null;
var count__41274_41807 = (0);
var i__41275_41808 = (0);
while(true){
if((i__41275_41808 < count__41274_41807)){
var c_41809 = chunk__41273_41806.cljs$core$IIndexed$_nth$arity$2(null,i__41275_41808);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41809);


var G__41810 = seq__41272_41805;
var G__41811 = chunk__41273_41806;
var G__41812 = count__41274_41807;
var G__41813 = (i__41275_41808 + (1));
seq__41272_41805 = G__41810;
chunk__41273_41806 = G__41811;
count__41274_41807 = G__41812;
i__41275_41808 = G__41813;
continue;
} else {
var temp__5735__auto___41814 = cljs.core.seq(seq__41272_41805);
if(temp__5735__auto___41814){
var seq__41272_41815__$1 = temp__5735__auto___41814;
if(cljs.core.chunked_seq_QMARK_(seq__41272_41815__$1)){
var c__4609__auto___41816 = cljs.core.chunk_first(seq__41272_41815__$1);
var G__41817 = cljs.core.chunk_rest(seq__41272_41815__$1);
var G__41818 = c__4609__auto___41816;
var G__41819 = cljs.core.count(c__4609__auto___41816);
var G__41820 = (0);
seq__41272_41805 = G__41817;
chunk__41273_41806 = G__41818;
count__41274_41807 = G__41819;
i__41275_41808 = G__41820;
continue;
} else {
var c_41821 = cljs.core.first(seq__41272_41815__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41821);


var G__41822 = cljs.core.next(seq__41272_41815__$1);
var G__41823 = null;
var G__41824 = (0);
var G__41825 = (0);
seq__41272_41805 = G__41822;
chunk__41273_41806 = G__41823;
count__41274_41807 = G__41824;
i__41275_41808 = G__41825;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41260){
var G__41261 = cljs.core.first(seq41260);
var seq41260__$1 = cljs.core.next(seq41260);
var G__41262 = cljs.core.first(seq41260__$1);
var seq41260__$2 = cljs.core.next(seq41260__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41261,G__41262,seq41260__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41280 = arguments.length;
switch (G__41280) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41827 = arguments.length;
var i__4790__auto___41828 = (0);
while(true){
if((i__4790__auto___41828 < len__4789__auto___41827)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41828]));

var G__41829 = (i__4790__auto___41828 + (1));
i__4790__auto___41828 = G__41829;
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
var temp__5733__auto___41830 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41830)){
var class_list_41831 = temp__5733__auto___41830;
class_list_41831.remove(c__$1);
} else {
var class_name_41832 = dommy.core.class$(elem);
var new_class_name_41833 = dommy.utils.remove_class_str(class_name_41832,c__$1);
if((class_name_41832 === new_class_name_41833)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41833);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41281 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41282 = null;
var count__41283 = (0);
var i__41284 = (0);
while(true){
if((i__41284 < count__41283)){
var c = chunk__41282.cljs$core$IIndexed$_nth$arity$2(null,i__41284);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41834 = seq__41281;
var G__41835 = chunk__41282;
var G__41836 = count__41283;
var G__41837 = (i__41284 + (1));
seq__41281 = G__41834;
chunk__41282 = G__41835;
count__41283 = G__41836;
i__41284 = G__41837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41281);
if(temp__5735__auto__){
var seq__41281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41281__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41281__$1);
var G__41838 = cljs.core.chunk_rest(seq__41281__$1);
var G__41839 = c__4609__auto__;
var G__41840 = cljs.core.count(c__4609__auto__);
var G__41841 = (0);
seq__41281 = G__41838;
chunk__41282 = G__41839;
count__41283 = G__41840;
i__41284 = G__41841;
continue;
} else {
var c = cljs.core.first(seq__41281__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41842 = cljs.core.next(seq__41281__$1);
var G__41843 = null;
var G__41844 = (0);
var G__41845 = (0);
seq__41281 = G__41842;
chunk__41282 = G__41843;
count__41283 = G__41844;
i__41284 = G__41845;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41277){
var G__41278 = cljs.core.first(seq41277);
var seq41277__$1 = cljs.core.next(seq41277);
var G__41279 = cljs.core.first(seq41277__$1);
var seq41277__$2 = cljs.core.next(seq41277__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41278,G__41279,seq41277__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41286 = arguments.length;
switch (G__41286) {
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
var temp__5733__auto___41847 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41847)){
var class_list_41848 = temp__5733__auto___41847;
class_list_41848.toggle(c__$1);
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
var G__41288 = arguments.length;
switch (G__41288) {
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
var G__41290 = arguments.length;
switch (G__41290) {
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
var G__41295 = arguments.length;
switch (G__41295) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41852 = arguments.length;
var i__4790__auto___41853 = (0);
while(true){
if((i__4790__auto___41853 < len__4789__auto___41852)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41853]));

var G__41855 = (i__4790__auto___41853 + (1));
i__4790__auto___41853 = G__41855;
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
var G__41296 = parent;
G__41296.appendChild(child);

return G__41296;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41297_41857 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41298_41858 = null;
var count__41299_41859 = (0);
var i__41300_41860 = (0);
while(true){
if((i__41300_41860 < count__41299_41859)){
var c_41861 = chunk__41298_41858.cljs$core$IIndexed$_nth$arity$2(null,i__41300_41860);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41861);


var G__41862 = seq__41297_41857;
var G__41863 = chunk__41298_41858;
var G__41864 = count__41299_41859;
var G__41865 = (i__41300_41860 + (1));
seq__41297_41857 = G__41862;
chunk__41298_41858 = G__41863;
count__41299_41859 = G__41864;
i__41300_41860 = G__41865;
continue;
} else {
var temp__5735__auto___41866 = cljs.core.seq(seq__41297_41857);
if(temp__5735__auto___41866){
var seq__41297_41867__$1 = temp__5735__auto___41866;
if(cljs.core.chunked_seq_QMARK_(seq__41297_41867__$1)){
var c__4609__auto___41868 = cljs.core.chunk_first(seq__41297_41867__$1);
var G__41869 = cljs.core.chunk_rest(seq__41297_41867__$1);
var G__41870 = c__4609__auto___41868;
var G__41871 = cljs.core.count(c__4609__auto___41868);
var G__41872 = (0);
seq__41297_41857 = G__41869;
chunk__41298_41858 = G__41870;
count__41299_41859 = G__41871;
i__41300_41860 = G__41872;
continue;
} else {
var c_41873 = cljs.core.first(seq__41297_41867__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41873);


var G__41874 = cljs.core.next(seq__41297_41867__$1);
var G__41875 = null;
var G__41876 = (0);
var G__41877 = (0);
seq__41297_41857 = G__41874;
chunk__41298_41858 = G__41875;
count__41299_41859 = G__41876;
i__41300_41860 = G__41877;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41292){
var G__41293 = cljs.core.first(seq41292);
var seq41292__$1 = cljs.core.next(seq41292);
var G__41294 = cljs.core.first(seq41292__$1);
var seq41292__$2 = cljs.core.next(seq41292__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41293,G__41294,seq41292__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41306 = arguments.length;
switch (G__41306) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41879 = arguments.length;
var i__4790__auto___41880 = (0);
while(true){
if((i__4790__auto___41880 < len__4789__auto___41879)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41880]));

var G__41881 = (i__4790__auto___41880 + (1));
i__4790__auto___41880 = G__41881;
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
var G__41309 = parent;
G__41309.insertBefore(child,parent.firstChild);

return G__41309;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41310_41882 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41311_41883 = null;
var count__41312_41884 = (0);
var i__41313_41885 = (0);
while(true){
if((i__41313_41885 < count__41312_41884)){
var c_41886 = chunk__41311_41883.cljs$core$IIndexed$_nth$arity$2(null,i__41313_41885);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41886);


var G__41887 = seq__41310_41882;
var G__41888 = chunk__41311_41883;
var G__41889 = count__41312_41884;
var G__41890 = (i__41313_41885 + (1));
seq__41310_41882 = G__41887;
chunk__41311_41883 = G__41888;
count__41312_41884 = G__41889;
i__41313_41885 = G__41890;
continue;
} else {
var temp__5735__auto___41891 = cljs.core.seq(seq__41310_41882);
if(temp__5735__auto___41891){
var seq__41310_41892__$1 = temp__5735__auto___41891;
if(cljs.core.chunked_seq_QMARK_(seq__41310_41892__$1)){
var c__4609__auto___41893 = cljs.core.chunk_first(seq__41310_41892__$1);
var G__41894 = cljs.core.chunk_rest(seq__41310_41892__$1);
var G__41895 = c__4609__auto___41893;
var G__41896 = cljs.core.count(c__4609__auto___41893);
var G__41897 = (0);
seq__41310_41882 = G__41894;
chunk__41311_41883 = G__41895;
count__41312_41884 = G__41896;
i__41313_41885 = G__41897;
continue;
} else {
var c_41898 = cljs.core.first(seq__41310_41892__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41898);


var G__41899 = cljs.core.next(seq__41310_41892__$1);
var G__41900 = null;
var G__41901 = (0);
var G__41902 = (0);
seq__41310_41882 = G__41899;
chunk__41311_41883 = G__41900;
count__41312_41884 = G__41901;
i__41313_41885 = G__41902;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41303){
var G__41304 = cljs.core.first(seq41303);
var seq41303__$1 = cljs.core.next(seq41303);
var G__41305 = cljs.core.first(seq41303__$1);
var seq41303__$2 = cljs.core.next(seq41303__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41304,G__41305,seq41303__$2);
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
var temp__5733__auto___41905 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41905)){
var next_41906 = temp__5733__auto___41905;
dommy.core.insert_before_BANG_(elem,next_41906);
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
var G__41315 = arguments.length;
switch (G__41315) {
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
var G__41316 = p;
G__41316.removeChild(elem);

return G__41316;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41317){
var vec__41318 = p__41317;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41318,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41318,(1),null);
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
var len__4789__auto___41910 = arguments.length;
var i__4790__auto___41911 = (0);
while(true){
if((i__4790__auto___41911 < len__4789__auto___41910)){
args__4795__auto__.push((arguments[i__4790__auto___41911]));

var G__41912 = (i__4790__auto___41911 + (1));
i__4790__auto___41911 = G__41912;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41321){
var G__41322 = cljs.core.first(seq41321);
var seq41321__$1 = cljs.core.next(seq41321);
var G__41323 = cljs.core.first(seq41321__$1);
var seq41321__$2 = cljs.core.next(seq41321__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41322,G__41323,seq41321__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41324 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41324.cljs$core$IFn$_invoke$arity$1 ? fexpr__41324.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41324.call(null,elem_sel));
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
var len__4789__auto___41913 = arguments.length;
var i__4790__auto___41914 = (0);
while(true){
if((i__4790__auto___41914 < len__4789__auto___41913)){
args__4795__auto__.push((arguments[i__4790__auto___41914]));

var G__41915 = (i__4790__auto___41914 + (1));
i__4790__auto___41914 = G__41915;
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

var vec__41327_41916 = dommy.core.elem_and_selector(elem_sel);
var elem_41917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327_41916,(0),null);
var selector_41918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327_41916,(1),null);
var seq__41330_41919 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41337_41920 = null;
var count__41338_41921 = (0);
var i__41339_41922 = (0);
while(true){
if((i__41339_41922 < count__41338_41921)){
var vec__41395_41923 = chunk__41337_41920.cljs$core$IIndexed$_nth$arity$2(null,i__41339_41922);
var orig_type_41924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41395_41923,(0),null);
var f_41925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41395_41923,(1),null);
var seq__41340_41926 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41924,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41924,cljs.core.identity])));
var chunk__41342_41927 = null;
var count__41343_41928 = (0);
var i__41344_41929 = (0);
while(true){
if((i__41344_41929 < count__41343_41928)){
var vec__41408_41930 = chunk__41342_41927.cljs$core$IIndexed$_nth$arity$2(null,i__41344_41929);
var actual_type_41931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41408_41930,(0),null);
var factory_41932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41408_41930,(1),null);
var canonical_f_41933 = (function (){var G__41412 = (factory_41932.cljs$core$IFn$_invoke$arity$1 ? factory_41932.cljs$core$IFn$_invoke$arity$1(f_41925) : factory_41932.call(null,f_41925));
var fexpr__41411 = (cljs.core.truth_(selector_41918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41917,selector_41918):cljs.core.identity);
return (fexpr__41411.cljs$core$IFn$_invoke$arity$1 ? fexpr__41411.cljs$core$IFn$_invoke$arity$1(G__41412) : fexpr__41411.call(null,G__41412));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41918,actual_type_41931,f_41925], null),canonical_f_41933], 0));

if(cljs.core.truth_(elem_41917.addEventListener)){
elem_41917.addEventListener(cljs.core.name(actual_type_41931),canonical_f_41933);
} else {
elem_41917.attachEvent(cljs.core.name(actual_type_41931),canonical_f_41933);
}


var G__41934 = seq__41340_41926;
var G__41935 = chunk__41342_41927;
var G__41936 = count__41343_41928;
var G__41937 = (i__41344_41929 + (1));
seq__41340_41926 = G__41934;
chunk__41342_41927 = G__41935;
count__41343_41928 = G__41936;
i__41344_41929 = G__41937;
continue;
} else {
var temp__5735__auto___41938 = cljs.core.seq(seq__41340_41926);
if(temp__5735__auto___41938){
var seq__41340_41939__$1 = temp__5735__auto___41938;
if(cljs.core.chunked_seq_QMARK_(seq__41340_41939__$1)){
var c__4609__auto___41940 = cljs.core.chunk_first(seq__41340_41939__$1);
var G__41941 = cljs.core.chunk_rest(seq__41340_41939__$1);
var G__41942 = c__4609__auto___41940;
var G__41943 = cljs.core.count(c__4609__auto___41940);
var G__41944 = (0);
seq__41340_41926 = G__41941;
chunk__41342_41927 = G__41942;
count__41343_41928 = G__41943;
i__41344_41929 = G__41944;
continue;
} else {
var vec__41413_41945 = cljs.core.first(seq__41340_41939__$1);
var actual_type_41946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41413_41945,(0),null);
var factory_41947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41413_41945,(1),null);
var canonical_f_41948 = (function (){var G__41417 = (factory_41947.cljs$core$IFn$_invoke$arity$1 ? factory_41947.cljs$core$IFn$_invoke$arity$1(f_41925) : factory_41947.call(null,f_41925));
var fexpr__41416 = (cljs.core.truth_(selector_41918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41917,selector_41918):cljs.core.identity);
return (fexpr__41416.cljs$core$IFn$_invoke$arity$1 ? fexpr__41416.cljs$core$IFn$_invoke$arity$1(G__41417) : fexpr__41416.call(null,G__41417));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41918,actual_type_41946,f_41925], null),canonical_f_41948], 0));

if(cljs.core.truth_(elem_41917.addEventListener)){
elem_41917.addEventListener(cljs.core.name(actual_type_41946),canonical_f_41948);
} else {
elem_41917.attachEvent(cljs.core.name(actual_type_41946),canonical_f_41948);
}


var G__41949 = cljs.core.next(seq__41340_41939__$1);
var G__41950 = null;
var G__41951 = (0);
var G__41952 = (0);
seq__41340_41926 = G__41949;
chunk__41342_41927 = G__41950;
count__41343_41928 = G__41951;
i__41344_41929 = G__41952;
continue;
}
} else {
}
}
break;
}

var G__41953 = seq__41330_41919;
var G__41954 = chunk__41337_41920;
var G__41955 = count__41338_41921;
var G__41956 = (i__41339_41922 + (1));
seq__41330_41919 = G__41953;
chunk__41337_41920 = G__41954;
count__41338_41921 = G__41955;
i__41339_41922 = G__41956;
continue;
} else {
var temp__5735__auto___41957 = cljs.core.seq(seq__41330_41919);
if(temp__5735__auto___41957){
var seq__41330_41958__$1 = temp__5735__auto___41957;
if(cljs.core.chunked_seq_QMARK_(seq__41330_41958__$1)){
var c__4609__auto___41959 = cljs.core.chunk_first(seq__41330_41958__$1);
var G__41960 = cljs.core.chunk_rest(seq__41330_41958__$1);
var G__41961 = c__4609__auto___41959;
var G__41962 = cljs.core.count(c__4609__auto___41959);
var G__41963 = (0);
seq__41330_41919 = G__41960;
chunk__41337_41920 = G__41961;
count__41338_41921 = G__41962;
i__41339_41922 = G__41963;
continue;
} else {
var vec__41418_41964 = cljs.core.first(seq__41330_41958__$1);
var orig_type_41965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41964,(0),null);
var f_41966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41964,(1),null);
var seq__41331_41967 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41965,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41965,cljs.core.identity])));
var chunk__41333_41968 = null;
var count__41334_41969 = (0);
var i__41335_41970 = (0);
while(true){
if((i__41335_41970 < count__41334_41969)){
var vec__41431_41971 = chunk__41333_41968.cljs$core$IIndexed$_nth$arity$2(null,i__41335_41970);
var actual_type_41972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41431_41971,(0),null);
var factory_41973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41431_41971,(1),null);
var canonical_f_41974 = (function (){var G__41435 = (factory_41973.cljs$core$IFn$_invoke$arity$1 ? factory_41973.cljs$core$IFn$_invoke$arity$1(f_41966) : factory_41973.call(null,f_41966));
var fexpr__41434 = (cljs.core.truth_(selector_41918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41917,selector_41918):cljs.core.identity);
return (fexpr__41434.cljs$core$IFn$_invoke$arity$1 ? fexpr__41434.cljs$core$IFn$_invoke$arity$1(G__41435) : fexpr__41434.call(null,G__41435));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41918,actual_type_41972,f_41966], null),canonical_f_41974], 0));

if(cljs.core.truth_(elem_41917.addEventListener)){
elem_41917.addEventListener(cljs.core.name(actual_type_41972),canonical_f_41974);
} else {
elem_41917.attachEvent(cljs.core.name(actual_type_41972),canonical_f_41974);
}


var G__41975 = seq__41331_41967;
var G__41976 = chunk__41333_41968;
var G__41977 = count__41334_41969;
var G__41978 = (i__41335_41970 + (1));
seq__41331_41967 = G__41975;
chunk__41333_41968 = G__41976;
count__41334_41969 = G__41977;
i__41335_41970 = G__41978;
continue;
} else {
var temp__5735__auto___41979__$1 = cljs.core.seq(seq__41331_41967);
if(temp__5735__auto___41979__$1){
var seq__41331_41980__$1 = temp__5735__auto___41979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41331_41980__$1)){
var c__4609__auto___41981 = cljs.core.chunk_first(seq__41331_41980__$1);
var G__41982 = cljs.core.chunk_rest(seq__41331_41980__$1);
var G__41983 = c__4609__auto___41981;
var G__41984 = cljs.core.count(c__4609__auto___41981);
var G__41985 = (0);
seq__41331_41967 = G__41982;
chunk__41333_41968 = G__41983;
count__41334_41969 = G__41984;
i__41335_41970 = G__41985;
continue;
} else {
var vec__41439_41986 = cljs.core.first(seq__41331_41980__$1);
var actual_type_41987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439_41986,(0),null);
var factory_41988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439_41986,(1),null);
var canonical_f_41989 = (function (){var G__41443 = (factory_41988.cljs$core$IFn$_invoke$arity$1 ? factory_41988.cljs$core$IFn$_invoke$arity$1(f_41966) : factory_41988.call(null,f_41966));
var fexpr__41442 = (cljs.core.truth_(selector_41918)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41917,selector_41918):cljs.core.identity);
return (fexpr__41442.cljs$core$IFn$_invoke$arity$1 ? fexpr__41442.cljs$core$IFn$_invoke$arity$1(G__41443) : fexpr__41442.call(null,G__41443));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41917,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41918,actual_type_41987,f_41966], null),canonical_f_41989], 0));

if(cljs.core.truth_(elem_41917.addEventListener)){
elem_41917.addEventListener(cljs.core.name(actual_type_41987),canonical_f_41989);
} else {
elem_41917.attachEvent(cljs.core.name(actual_type_41987),canonical_f_41989);
}


var G__41990 = cljs.core.next(seq__41331_41980__$1);
var G__41991 = null;
var G__41992 = (0);
var G__41993 = (0);
seq__41331_41967 = G__41990;
chunk__41333_41968 = G__41991;
count__41334_41969 = G__41992;
i__41335_41970 = G__41993;
continue;
}
} else {
}
}
break;
}

var G__41994 = cljs.core.next(seq__41330_41958__$1);
var G__41995 = null;
var G__41996 = (0);
var G__41997 = (0);
seq__41330_41919 = G__41994;
chunk__41337_41920 = G__41995;
count__41338_41921 = G__41996;
i__41339_41922 = G__41997;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41325){
var G__41326 = cljs.core.first(seq41325);
var seq41325__$1 = cljs.core.next(seq41325);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41326,seq41325__$1);
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
var len__4789__auto___41998 = arguments.length;
var i__4790__auto___41999 = (0);
while(true){
if((i__4790__auto___41999 < len__4789__auto___41998)){
args__4795__auto__.push((arguments[i__4790__auto___41999]));

var G__42000 = (i__4790__auto___41999 + (1));
i__4790__auto___41999 = G__42000;
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

var vec__41446_42001 = dommy.core.elem_and_selector(elem_sel);
var elem_42002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446_42001,(0),null);
var selector_42003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446_42001,(1),null);
var seq__41449_42004 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41456_42005 = null;
var count__41457_42006 = (0);
var i__41458_42007 = (0);
while(true){
if((i__41458_42007 < count__41457_42006)){
var vec__41499_42008 = chunk__41456_42005.cljs$core$IIndexed$_nth$arity$2(null,i__41458_42007);
var orig_type_42009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41499_42008,(0),null);
var f_42010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41499_42008,(1),null);
var seq__41459_42011 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42009,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42009,cljs.core.identity])));
var chunk__41461_42012 = null;
var count__41462_42013 = (0);
var i__41463_42014 = (0);
while(true){
if((i__41463_42014 < count__41462_42013)){
var vec__41511_42015 = chunk__41461_42012.cljs$core$IIndexed$_nth$arity$2(null,i__41463_42014);
var actual_type_42016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41511_42015,(0),null);
var __42017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41511_42015,(1),null);
var keys_42018 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42003,actual_type_42016,f_42010], null);
var canonical_f_42019 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42002),keys_42018);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42018], 0));

if(cljs.core.truth_(elem_42002.removeEventListener)){
elem_42002.removeEventListener(cljs.core.name(actual_type_42016),canonical_f_42019);
} else {
elem_42002.detachEvent(cljs.core.name(actual_type_42016),canonical_f_42019);
}


var G__42020 = seq__41459_42011;
var G__42021 = chunk__41461_42012;
var G__42022 = count__41462_42013;
var G__42023 = (i__41463_42014 + (1));
seq__41459_42011 = G__42020;
chunk__41461_42012 = G__42021;
count__41462_42013 = G__42022;
i__41463_42014 = G__42023;
continue;
} else {
var temp__5735__auto___42024 = cljs.core.seq(seq__41459_42011);
if(temp__5735__auto___42024){
var seq__41459_42025__$1 = temp__5735__auto___42024;
if(cljs.core.chunked_seq_QMARK_(seq__41459_42025__$1)){
var c__4609__auto___42026 = cljs.core.chunk_first(seq__41459_42025__$1);
var G__42027 = cljs.core.chunk_rest(seq__41459_42025__$1);
var G__42028 = c__4609__auto___42026;
var G__42029 = cljs.core.count(c__4609__auto___42026);
var G__42030 = (0);
seq__41459_42011 = G__42027;
chunk__41461_42012 = G__42028;
count__41462_42013 = G__42029;
i__41463_42014 = G__42030;
continue;
} else {
var vec__41518_42032 = cljs.core.first(seq__41459_42025__$1);
var actual_type_42033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41518_42032,(0),null);
var __42034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41518_42032,(1),null);
var keys_42035 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42003,actual_type_42033,f_42010], null);
var canonical_f_42036 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42002),keys_42035);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42035], 0));

if(cljs.core.truth_(elem_42002.removeEventListener)){
elem_42002.removeEventListener(cljs.core.name(actual_type_42033),canonical_f_42036);
} else {
elem_42002.detachEvent(cljs.core.name(actual_type_42033),canonical_f_42036);
}


var G__42038 = cljs.core.next(seq__41459_42025__$1);
var G__42039 = null;
var G__42040 = (0);
var G__42041 = (0);
seq__41459_42011 = G__42038;
chunk__41461_42012 = G__42039;
count__41462_42013 = G__42040;
i__41463_42014 = G__42041;
continue;
}
} else {
}
}
break;
}

var G__42042 = seq__41449_42004;
var G__42043 = chunk__41456_42005;
var G__42044 = count__41457_42006;
var G__42045 = (i__41458_42007 + (1));
seq__41449_42004 = G__42042;
chunk__41456_42005 = G__42043;
count__41457_42006 = G__42044;
i__41458_42007 = G__42045;
continue;
} else {
var temp__5735__auto___42046 = cljs.core.seq(seq__41449_42004);
if(temp__5735__auto___42046){
var seq__41449_42047__$1 = temp__5735__auto___42046;
if(cljs.core.chunked_seq_QMARK_(seq__41449_42047__$1)){
var c__4609__auto___42048 = cljs.core.chunk_first(seq__41449_42047__$1);
var G__42049 = cljs.core.chunk_rest(seq__41449_42047__$1);
var G__42050 = c__4609__auto___42048;
var G__42051 = cljs.core.count(c__4609__auto___42048);
var G__42052 = (0);
seq__41449_42004 = G__42049;
chunk__41456_42005 = G__42050;
count__41457_42006 = G__42051;
i__41458_42007 = G__42052;
continue;
} else {
var vec__41521_42053 = cljs.core.first(seq__41449_42047__$1);
var orig_type_42054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41521_42053,(0),null);
var f_42055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41521_42053,(1),null);
var seq__41450_42056 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42054,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42054,cljs.core.identity])));
var chunk__41452_42057 = null;
var count__41453_42058 = (0);
var i__41454_42059 = (0);
while(true){
if((i__41454_42059 < count__41453_42058)){
var vec__41530_42060 = chunk__41452_42057.cljs$core$IIndexed$_nth$arity$2(null,i__41454_42059);
var actual_type_42061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530_42060,(0),null);
var __42062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41530_42060,(1),null);
var keys_42063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42003,actual_type_42061,f_42055], null);
var canonical_f_42064 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42002),keys_42063);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42063], 0));

if(cljs.core.truth_(elem_42002.removeEventListener)){
elem_42002.removeEventListener(cljs.core.name(actual_type_42061),canonical_f_42064);
} else {
elem_42002.detachEvent(cljs.core.name(actual_type_42061),canonical_f_42064);
}


var G__42066 = seq__41450_42056;
var G__42067 = chunk__41452_42057;
var G__42068 = count__41453_42058;
var G__42069 = (i__41454_42059 + (1));
seq__41450_42056 = G__42066;
chunk__41452_42057 = G__42067;
count__41453_42058 = G__42068;
i__41454_42059 = G__42069;
continue;
} else {
var temp__5735__auto___42070__$1 = cljs.core.seq(seq__41450_42056);
if(temp__5735__auto___42070__$1){
var seq__41450_42071__$1 = temp__5735__auto___42070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41450_42071__$1)){
var c__4609__auto___42072 = cljs.core.chunk_first(seq__41450_42071__$1);
var G__42073 = cljs.core.chunk_rest(seq__41450_42071__$1);
var G__42074 = c__4609__auto___42072;
var G__42075 = cljs.core.count(c__4609__auto___42072);
var G__42076 = (0);
seq__41450_42056 = G__42073;
chunk__41452_42057 = G__42074;
count__41453_42058 = G__42075;
i__41454_42059 = G__42076;
continue;
} else {
var vec__41533_42078 = cljs.core.first(seq__41450_42071__$1);
var actual_type_42079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533_42078,(0),null);
var __42080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533_42078,(1),null);
var keys_42082 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42003,actual_type_42079,f_42055], null);
var canonical_f_42083 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42002),keys_42082);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42002,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42082], 0));

if(cljs.core.truth_(elem_42002.removeEventListener)){
elem_42002.removeEventListener(cljs.core.name(actual_type_42079),canonical_f_42083);
} else {
elem_42002.detachEvent(cljs.core.name(actual_type_42079),canonical_f_42083);
}


var G__42085 = cljs.core.next(seq__41450_42071__$1);
var G__42086 = null;
var G__42087 = (0);
var G__42088 = (0);
seq__41450_42056 = G__42085;
chunk__41452_42057 = G__42086;
count__41453_42058 = G__42087;
i__41454_42059 = G__42088;
continue;
}
} else {
}
}
break;
}

var G__42089 = cljs.core.next(seq__41449_42047__$1);
var G__42090 = null;
var G__42091 = (0);
var G__42092 = (0);
seq__41449_42004 = G__42089;
chunk__41456_42005 = G__42090;
count__41457_42006 = G__42091;
i__41458_42007 = G__42092;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41444){
var G__41445 = cljs.core.first(seq41444);
var seq41444__$1 = cljs.core.next(seq41444);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41445,seq41444__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42093 = arguments.length;
var i__4790__auto___42095 = (0);
while(true){
if((i__4790__auto___42095 < len__4789__auto___42093)){
args__4795__auto__.push((arguments[i__4790__auto___42095]));

var G__42096 = (i__4790__auto___42095 + (1));
i__4790__auto___42095 = G__42096;
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

var vec__41540_42101 = dommy.core.elem_and_selector(elem_sel);
var elem_42102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540_42101,(0),null);
var selector_42103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540_42101,(1),null);
var seq__41544_42104 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41545_42105 = null;
var count__41546_42106 = (0);
var i__41547_42107 = (0);
while(true){
if((i__41547_42107 < count__41546_42106)){
var vec__41554_42108 = chunk__41545_42105.cljs$core$IIndexed$_nth$arity$2(null,i__41547_42107);
var type_42109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41554_42108,(0),null);
var f_42110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41554_42108,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42109,((function (seq__41544_42104,chunk__41545_42105,count__41546_42106,i__41547_42107,vec__41554_42108,type_42109,f_42110,vec__41540_42101,elem_42102,selector_42103){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42109,dommy$core$this_fn], 0));

return (f_42110.cljs$core$IFn$_invoke$arity$1 ? f_42110.cljs$core$IFn$_invoke$arity$1(e) : f_42110.call(null,e));
});})(seq__41544_42104,chunk__41545_42105,count__41546_42106,i__41547_42107,vec__41554_42108,type_42109,f_42110,vec__41540_42101,elem_42102,selector_42103))
], 0));


var G__42113 = seq__41544_42104;
var G__42114 = chunk__41545_42105;
var G__42115 = count__41546_42106;
var G__42116 = (i__41547_42107 + (1));
seq__41544_42104 = G__42113;
chunk__41545_42105 = G__42114;
count__41546_42106 = G__42115;
i__41547_42107 = G__42116;
continue;
} else {
var temp__5735__auto___42117 = cljs.core.seq(seq__41544_42104);
if(temp__5735__auto___42117){
var seq__41544_42118__$1 = temp__5735__auto___42117;
if(cljs.core.chunked_seq_QMARK_(seq__41544_42118__$1)){
var c__4609__auto___42119 = cljs.core.chunk_first(seq__41544_42118__$1);
var G__42120 = cljs.core.chunk_rest(seq__41544_42118__$1);
var G__42121 = c__4609__auto___42119;
var G__42122 = cljs.core.count(c__4609__auto___42119);
var G__42123 = (0);
seq__41544_42104 = G__42120;
chunk__41545_42105 = G__42121;
count__41546_42106 = G__42122;
i__41547_42107 = G__42123;
continue;
} else {
var vec__41559_42124 = cljs.core.first(seq__41544_42118__$1);
var type_42125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559_42124,(0),null);
var f_42126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559_42124,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42125,((function (seq__41544_42104,chunk__41545_42105,count__41546_42106,i__41547_42107,vec__41559_42124,type_42125,f_42126,seq__41544_42118__$1,temp__5735__auto___42117,vec__41540_42101,elem_42102,selector_42103){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42125,dommy$core$this_fn], 0));

return (f_42126.cljs$core$IFn$_invoke$arity$1 ? f_42126.cljs$core$IFn$_invoke$arity$1(e) : f_42126.call(null,e));
});})(seq__41544_42104,chunk__41545_42105,count__41546_42106,i__41547_42107,vec__41559_42124,type_42125,f_42126,seq__41544_42118__$1,temp__5735__auto___42117,vec__41540_42101,elem_42102,selector_42103))
], 0));


var G__42130 = cljs.core.next(seq__41544_42118__$1);
var G__42131 = null;
var G__42132 = (0);
var G__42133 = (0);
seq__41544_42104 = G__42130;
chunk__41545_42105 = G__42131;
count__41546_42106 = G__42132;
i__41547_42107 = G__42133;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41536){
var G__41537 = cljs.core.first(seq41536);
var seq41536__$1 = cljs.core.next(seq41536);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41537,seq41536__$1);
}));


//# sourceMappingURL=dommy.core.js.map
