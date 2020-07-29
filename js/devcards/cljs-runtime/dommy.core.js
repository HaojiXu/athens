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
var len__4789__auto___41618 = arguments.length;
var i__4790__auto___41619 = (0);
while(true){
if((i__4790__auto___41619 < len__4789__auto___41618)){
args__4795__auto__.push((arguments[i__4790__auto___41619]));

var G__41620 = (i__4790__auto___41619 + (1));
i__4790__auto___41619 = G__41620;
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
var seq__41182_41621 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41183_41622 = null;
var count__41184_41623 = (0);
var i__41185_41624 = (0);
while(true){
if((i__41185_41624 < count__41184_41623)){
var vec__41192_41626 = chunk__41183_41622.cljs$core$IIndexed$_nth$arity$2(null,i__41185_41624);
var k_41627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41626,(0),null);
var v_41628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41626,(1),null);
style.setProperty(dommy.utils.as_str(k_41627),v_41628);


var G__41629 = seq__41182_41621;
var G__41630 = chunk__41183_41622;
var G__41631 = count__41184_41623;
var G__41632 = (i__41185_41624 + (1));
seq__41182_41621 = G__41629;
chunk__41183_41622 = G__41630;
count__41184_41623 = G__41631;
i__41185_41624 = G__41632;
continue;
} else {
var temp__5735__auto___41633 = cljs.core.seq(seq__41182_41621);
if(temp__5735__auto___41633){
var seq__41182_41634__$1 = temp__5735__auto___41633;
if(cljs.core.chunked_seq_QMARK_(seq__41182_41634__$1)){
var c__4609__auto___41635 = cljs.core.chunk_first(seq__41182_41634__$1);
var G__41636 = cljs.core.chunk_rest(seq__41182_41634__$1);
var G__41637 = c__4609__auto___41635;
var G__41638 = cljs.core.count(c__4609__auto___41635);
var G__41639 = (0);
seq__41182_41621 = G__41636;
chunk__41183_41622 = G__41637;
count__41184_41623 = G__41638;
i__41185_41624 = G__41639;
continue;
} else {
var vec__41195_41640 = cljs.core.first(seq__41182_41634__$1);
var k_41641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41195_41640,(0),null);
var v_41642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41195_41640,(1),null);
style.setProperty(dommy.utils.as_str(k_41641),v_41642);


var G__41643 = cljs.core.next(seq__41182_41634__$1);
var G__41644 = null;
var G__41645 = (0);
var G__41646 = (0);
seq__41182_41621 = G__41643;
chunk__41183_41622 = G__41644;
count__41184_41623 = G__41645;
i__41185_41624 = G__41646;
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
var len__4789__auto___41647 = arguments.length;
var i__4790__auto___41648 = (0);
while(true){
if((i__4790__auto___41648 < len__4789__auto___41647)){
args__4795__auto__.push((arguments[i__4790__auto___41648]));

var G__41649 = (i__4790__auto___41648 + (1));
i__4790__auto___41648 = G__41649;
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
var seq__41201_41650 = cljs.core.seq(keywords);
var chunk__41202_41651 = null;
var count__41203_41652 = (0);
var i__41204_41653 = (0);
while(true){
if((i__41204_41653 < count__41203_41652)){
var kw_41654 = chunk__41202_41651.cljs$core$IIndexed$_nth$arity$2(null,i__41204_41653);
style.removeProperty(dommy.utils.as_str(kw_41654));


var G__41655 = seq__41201_41650;
var G__41656 = chunk__41202_41651;
var G__41657 = count__41203_41652;
var G__41658 = (i__41204_41653 + (1));
seq__41201_41650 = G__41655;
chunk__41202_41651 = G__41656;
count__41203_41652 = G__41657;
i__41204_41653 = G__41658;
continue;
} else {
var temp__5735__auto___41659 = cljs.core.seq(seq__41201_41650);
if(temp__5735__auto___41659){
var seq__41201_41660__$1 = temp__5735__auto___41659;
if(cljs.core.chunked_seq_QMARK_(seq__41201_41660__$1)){
var c__4609__auto___41661 = cljs.core.chunk_first(seq__41201_41660__$1);
var G__41662 = cljs.core.chunk_rest(seq__41201_41660__$1);
var G__41663 = c__4609__auto___41661;
var G__41664 = cljs.core.count(c__4609__auto___41661);
var G__41665 = (0);
seq__41201_41650 = G__41662;
chunk__41202_41651 = G__41663;
count__41203_41652 = G__41664;
i__41204_41653 = G__41665;
continue;
} else {
var kw_41666 = cljs.core.first(seq__41201_41660__$1);
style.removeProperty(dommy.utils.as_str(kw_41666));


var G__41667 = cljs.core.next(seq__41201_41660__$1);
var G__41668 = null;
var G__41669 = (0);
var G__41670 = (0);
seq__41201_41650 = G__41667;
chunk__41202_41651 = G__41668;
count__41203_41652 = G__41669;
i__41204_41653 = G__41670;
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
var len__4789__auto___41671 = arguments.length;
var i__4790__auto___41672 = (0);
while(true){
if((i__4790__auto___41672 < len__4789__auto___41671)){
args__4795__auto__.push((arguments[i__4790__auto___41672]));

var G__41673 = (i__4790__auto___41672 + (1));
i__4790__auto___41672 = G__41673;
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

var seq__41207_41674 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41208_41675 = null;
var count__41209_41676 = (0);
var i__41210_41677 = (0);
while(true){
if((i__41210_41677 < count__41209_41676)){
var vec__41217_41678 = chunk__41208_41675.cljs$core$IIndexed$_nth$arity$2(null,i__41210_41677);
var k_41679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41678,(0),null);
var v_41680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41678,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41679,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41680),"px"].join('')], 0));


var G__41681 = seq__41207_41674;
var G__41682 = chunk__41208_41675;
var G__41683 = count__41209_41676;
var G__41684 = (i__41210_41677 + (1));
seq__41207_41674 = G__41681;
chunk__41208_41675 = G__41682;
count__41209_41676 = G__41683;
i__41210_41677 = G__41684;
continue;
} else {
var temp__5735__auto___41685 = cljs.core.seq(seq__41207_41674);
if(temp__5735__auto___41685){
var seq__41207_41686__$1 = temp__5735__auto___41685;
if(cljs.core.chunked_seq_QMARK_(seq__41207_41686__$1)){
var c__4609__auto___41687 = cljs.core.chunk_first(seq__41207_41686__$1);
var G__41688 = cljs.core.chunk_rest(seq__41207_41686__$1);
var G__41689 = c__4609__auto___41687;
var G__41690 = cljs.core.count(c__4609__auto___41687);
var G__41691 = (0);
seq__41207_41674 = G__41688;
chunk__41208_41675 = G__41689;
count__41209_41676 = G__41690;
i__41210_41677 = G__41691;
continue;
} else {
var vec__41220_41692 = cljs.core.first(seq__41207_41686__$1);
var k_41693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41220_41692,(0),null);
var v_41694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41220_41692,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41693,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41694),"px"].join('')], 0));


var G__41695 = cljs.core.next(seq__41207_41686__$1);
var G__41696 = null;
var G__41697 = (0);
var G__41698 = (0);
seq__41207_41674 = G__41695;
chunk__41208_41675 = G__41696;
count__41209_41676 = G__41697;
i__41210_41677 = G__41698;
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
var len__4789__auto___41700 = arguments.length;
var i__4790__auto___41701 = (0);
while(true){
if((i__4790__auto___41701 < len__4789__auto___41700)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41701]));

var G__41702 = (i__4790__auto___41701 + (1));
i__4790__auto___41701 = G__41702;
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

var seq__41231_41703 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41232_41704 = null;
var count__41233_41705 = (0);
var i__41234_41706 = (0);
while(true){
if((i__41234_41706 < count__41233_41705)){
var vec__41241_41707 = chunk__41232_41704.cljs$core$IIndexed$_nth$arity$2(null,i__41234_41706);
var k_41708__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41241_41707,(0),null);
var v_41709__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41241_41707,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41708__$1,v_41709__$1);


var G__41710 = seq__41231_41703;
var G__41711 = chunk__41232_41704;
var G__41712 = count__41233_41705;
var G__41713 = (i__41234_41706 + (1));
seq__41231_41703 = G__41710;
chunk__41232_41704 = G__41711;
count__41233_41705 = G__41712;
i__41234_41706 = G__41713;
continue;
} else {
var temp__5735__auto___41714 = cljs.core.seq(seq__41231_41703);
if(temp__5735__auto___41714){
var seq__41231_41715__$1 = temp__5735__auto___41714;
if(cljs.core.chunked_seq_QMARK_(seq__41231_41715__$1)){
var c__4609__auto___41716 = cljs.core.chunk_first(seq__41231_41715__$1);
var G__41717 = cljs.core.chunk_rest(seq__41231_41715__$1);
var G__41718 = c__4609__auto___41716;
var G__41719 = cljs.core.count(c__4609__auto___41716);
var G__41720 = (0);
seq__41231_41703 = G__41717;
chunk__41232_41704 = G__41718;
count__41233_41705 = G__41719;
i__41234_41706 = G__41720;
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
seq__41231_41703 = G__41724;
chunk__41232_41704 = G__41725;
count__41233_41705 = G__41726;
i__41234_41706 = G__41727;
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
var c__4609__auto___41773 = cljs.core.chunk_first(seq__41264_41771__$1);
var G__41774 = cljs.core.chunk_rest(seq__41264_41771__$1);
var G__41775 = c__4609__auto___41773;
var G__41776 = cljs.core.count(c__4609__auto___41773);
var G__41777 = (0);
seq__41264_41761 = G__41774;
chunk__41265_41762 = G__41775;
count__41266_41763 = G__41776;
i__41267_41764 = G__41777;
continue;
} else {
var c_41779 = cljs.core.first(seq__41264_41771__$1);
class_list_41760.add(c_41779);


var G__41780 = cljs.core.next(seq__41264_41771__$1);
var G__41781 = null;
var G__41782 = (0);
var G__41783 = (0);
seq__41264_41761 = G__41780;
chunk__41265_41762 = G__41781;
count__41266_41763 = G__41782;
i__41267_41764 = G__41783;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41268_41784 = cljs.core.seq(classes__$1);
var chunk__41269_41785 = null;
var count__41270_41786 = (0);
var i__41271_41787 = (0);
while(true){
if((i__41271_41787 < count__41270_41786)){
var c_41788 = chunk__41269_41785.cljs$core$IIndexed$_nth$arity$2(null,i__41271_41787);
var class_name_41789 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41789,c_41788))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41789 === ""))?c_41788:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41789)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41788)].join('')));
}


var G__41790 = seq__41268_41784;
var G__41791 = chunk__41269_41785;
var G__41792 = count__41270_41786;
var G__41793 = (i__41271_41787 + (1));
seq__41268_41784 = G__41790;
chunk__41269_41785 = G__41791;
count__41270_41786 = G__41792;
i__41271_41787 = G__41793;
continue;
} else {
var temp__5735__auto___41794 = cljs.core.seq(seq__41268_41784);
if(temp__5735__auto___41794){
var seq__41268_41795__$1 = temp__5735__auto___41794;
if(cljs.core.chunked_seq_QMARK_(seq__41268_41795__$1)){
var c__4609__auto___41796 = cljs.core.chunk_first(seq__41268_41795__$1);
var G__41797 = cljs.core.chunk_rest(seq__41268_41795__$1);
var G__41798 = c__4609__auto___41796;
var G__41799 = cljs.core.count(c__4609__auto___41796);
var G__41800 = (0);
seq__41268_41784 = G__41797;
chunk__41269_41785 = G__41798;
count__41270_41786 = G__41799;
i__41271_41787 = G__41800;
continue;
} else {
var c_41801 = cljs.core.first(seq__41268_41795__$1);
var class_name_41802 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41802,c_41801))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41802 === ""))?c_41801:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41802)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41801)].join('')));
}


var G__41803 = cljs.core.next(seq__41268_41795__$1);
var G__41804 = null;
var G__41805 = (0);
var G__41806 = (0);
seq__41268_41784 = G__41803;
chunk__41269_41785 = G__41804;
count__41270_41786 = G__41805;
i__41271_41787 = G__41806;
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
var seq__41272_41807 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41273_41808 = null;
var count__41274_41809 = (0);
var i__41275_41810 = (0);
while(true){
if((i__41275_41810 < count__41274_41809)){
var c_41811 = chunk__41273_41808.cljs$core$IIndexed$_nth$arity$2(null,i__41275_41810);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41811);


var G__41812 = seq__41272_41807;
var G__41813 = chunk__41273_41808;
var G__41814 = count__41274_41809;
var G__41815 = (i__41275_41810 + (1));
seq__41272_41807 = G__41812;
chunk__41273_41808 = G__41813;
count__41274_41809 = G__41814;
i__41275_41810 = G__41815;
continue;
} else {
var temp__5735__auto___41816 = cljs.core.seq(seq__41272_41807);
if(temp__5735__auto___41816){
var seq__41272_41817__$1 = temp__5735__auto___41816;
if(cljs.core.chunked_seq_QMARK_(seq__41272_41817__$1)){
var c__4609__auto___41818 = cljs.core.chunk_first(seq__41272_41817__$1);
var G__41819 = cljs.core.chunk_rest(seq__41272_41817__$1);
var G__41820 = c__4609__auto___41818;
var G__41821 = cljs.core.count(c__4609__auto___41818);
var G__41822 = (0);
seq__41272_41807 = G__41819;
chunk__41273_41808 = G__41820;
count__41274_41809 = G__41821;
i__41275_41810 = G__41822;
continue;
} else {
var c_41823 = cljs.core.first(seq__41272_41817__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41823);


var G__41824 = cljs.core.next(seq__41272_41817__$1);
var G__41825 = null;
var G__41826 = (0);
var G__41827 = (0);
seq__41272_41807 = G__41824;
chunk__41273_41808 = G__41825;
count__41274_41809 = G__41826;
i__41275_41810 = G__41827;
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
var len__4789__auto___41831 = arguments.length;
var i__4790__auto___41832 = (0);
while(true){
if((i__4790__auto___41832 < len__4789__auto___41831)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41832]));

var G__41833 = (i__4790__auto___41832 + (1));
i__4790__auto___41832 = G__41833;
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
var temp__5733__auto___41834 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41834)){
var class_list_41835 = temp__5733__auto___41834;
class_list_41835.remove(c__$1);
} else {
var class_name_41836 = dommy.core.class$(elem);
var new_class_name_41837 = dommy.utils.remove_class_str(class_name_41836,c__$1);
if((class_name_41836 === new_class_name_41837)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41837);
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


var G__41840 = seq__41281;
var G__41841 = chunk__41282;
var G__41842 = count__41283;
var G__41843 = (i__41284 + (1));
seq__41281 = G__41840;
chunk__41282 = G__41841;
count__41283 = G__41842;
i__41284 = G__41843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41281);
if(temp__5735__auto__){
var seq__41281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41281__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41281__$1);
var G__41844 = cljs.core.chunk_rest(seq__41281__$1);
var G__41845 = c__4609__auto__;
var G__41846 = cljs.core.count(c__4609__auto__);
var G__41847 = (0);
seq__41281 = G__41844;
chunk__41282 = G__41845;
count__41283 = G__41846;
i__41284 = G__41847;
continue;
} else {
var c = cljs.core.first(seq__41281__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41848 = cljs.core.next(seq__41281__$1);
var G__41849 = null;
var G__41850 = (0);
var G__41851 = (0);
seq__41281 = G__41848;
chunk__41282 = G__41849;
count__41283 = G__41850;
i__41284 = G__41851;
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
var temp__5733__auto___41853 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41853)){
var class_list_41854 = temp__5733__auto___41853;
class_list_41854.toggle(c__$1);
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
var G__41293 = arguments.length;
switch (G__41293) {
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
var G__41298 = arguments.length;
switch (G__41298) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41858 = arguments.length;
var i__4790__auto___41859 = (0);
while(true){
if((i__4790__auto___41859 < len__4789__auto___41858)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41859]));

var G__41860 = (i__4790__auto___41859 + (1));
i__4790__auto___41859 = G__41860;
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
var G__41299 = parent;
G__41299.appendChild(child);

return G__41299;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41300_41861 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41301_41862 = null;
var count__41302_41863 = (0);
var i__41303_41864 = (0);
while(true){
if((i__41303_41864 < count__41302_41863)){
var c_41865 = chunk__41301_41862.cljs$core$IIndexed$_nth$arity$2(null,i__41303_41864);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41865);


var G__41866 = seq__41300_41861;
var G__41867 = chunk__41301_41862;
var G__41868 = count__41302_41863;
var G__41869 = (i__41303_41864 + (1));
seq__41300_41861 = G__41866;
chunk__41301_41862 = G__41867;
count__41302_41863 = G__41868;
i__41303_41864 = G__41869;
continue;
} else {
var temp__5735__auto___41870 = cljs.core.seq(seq__41300_41861);
if(temp__5735__auto___41870){
var seq__41300_41871__$1 = temp__5735__auto___41870;
if(cljs.core.chunked_seq_QMARK_(seq__41300_41871__$1)){
var c__4609__auto___41872 = cljs.core.chunk_first(seq__41300_41871__$1);
var G__41873 = cljs.core.chunk_rest(seq__41300_41871__$1);
var G__41874 = c__4609__auto___41872;
var G__41875 = cljs.core.count(c__4609__auto___41872);
var G__41876 = (0);
seq__41300_41861 = G__41873;
chunk__41301_41862 = G__41874;
count__41302_41863 = G__41875;
i__41303_41864 = G__41876;
continue;
} else {
var c_41877 = cljs.core.first(seq__41300_41871__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41877);


var G__41878 = cljs.core.next(seq__41300_41871__$1);
var G__41879 = null;
var G__41880 = (0);
var G__41881 = (0);
seq__41300_41861 = G__41878;
chunk__41301_41862 = G__41879;
count__41302_41863 = G__41880;
i__41303_41864 = G__41881;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41295){
var G__41296 = cljs.core.first(seq41295);
var seq41295__$1 = cljs.core.next(seq41295);
var G__41297 = cljs.core.first(seq41295__$1);
var seq41295__$2 = cljs.core.next(seq41295__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41296,G__41297,seq41295__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41308 = arguments.length;
switch (G__41308) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41883 = arguments.length;
var i__4790__auto___41884 = (0);
while(true){
if((i__4790__auto___41884 < len__4789__auto___41883)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41884]));

var G__41885 = (i__4790__auto___41884 + (1));
i__4790__auto___41884 = G__41885;
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
var seq__41310_41886 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41311_41887 = null;
var count__41312_41888 = (0);
var i__41313_41889 = (0);
while(true){
if((i__41313_41889 < count__41312_41888)){
var c_41890 = chunk__41311_41887.cljs$core$IIndexed$_nth$arity$2(null,i__41313_41889);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41890);


var G__41891 = seq__41310_41886;
var G__41892 = chunk__41311_41887;
var G__41893 = count__41312_41888;
var G__41894 = (i__41313_41889 + (1));
seq__41310_41886 = G__41891;
chunk__41311_41887 = G__41892;
count__41312_41888 = G__41893;
i__41313_41889 = G__41894;
continue;
} else {
var temp__5735__auto___41895 = cljs.core.seq(seq__41310_41886);
if(temp__5735__auto___41895){
var seq__41310_41896__$1 = temp__5735__auto___41895;
if(cljs.core.chunked_seq_QMARK_(seq__41310_41896__$1)){
var c__4609__auto___41897 = cljs.core.chunk_first(seq__41310_41896__$1);
var G__41898 = cljs.core.chunk_rest(seq__41310_41896__$1);
var G__41899 = c__4609__auto___41897;
var G__41900 = cljs.core.count(c__4609__auto___41897);
var G__41901 = (0);
seq__41310_41886 = G__41898;
chunk__41311_41887 = G__41899;
count__41312_41888 = G__41900;
i__41313_41889 = G__41901;
continue;
} else {
var c_41902 = cljs.core.first(seq__41310_41896__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41902);


var G__41903 = cljs.core.next(seq__41310_41896__$1);
var G__41904 = null;
var G__41905 = (0);
var G__41906 = (0);
seq__41310_41886 = G__41903;
chunk__41311_41887 = G__41904;
count__41312_41888 = G__41905;
i__41313_41889 = G__41906;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41305){
var G__41306 = cljs.core.first(seq41305);
var seq41305__$1 = cljs.core.next(seq41305);
var G__41307 = cljs.core.first(seq41305__$1);
var seq41305__$2 = cljs.core.next(seq41305__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41306,G__41307,seq41305__$2);
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
var temp__5733__auto___41907 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41907)){
var next_41908 = temp__5733__auto___41907;
dommy.core.insert_before_BANG_(elem,next_41908);
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
var len__4789__auto___41912 = arguments.length;
var i__4790__auto___41913 = (0);
while(true){
if((i__4790__auto___41913 < len__4789__auto___41912)){
args__4795__auto__.push((arguments[i__4790__auto___41913]));

var G__41914 = (i__4790__auto___41913 + (1));
i__4790__auto___41913 = G__41914;
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
var len__4789__auto___41918 = arguments.length;
var i__4790__auto___41920 = (0);
while(true){
if((i__4790__auto___41920 < len__4789__auto___41918)){
args__4795__auto__.push((arguments[i__4790__auto___41920]));

var G__41921 = (i__4790__auto___41920 + (1));
i__4790__auto___41920 = G__41921;
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

var vec__41327_41922 = dommy.core.elem_and_selector(elem_sel);
var elem_41923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327_41922,(0),null);
var selector_41924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327_41922,(1),null);
var seq__41330_41925 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41337_41926 = null;
var count__41338_41927 = (0);
var i__41339_41928 = (0);
while(true){
if((i__41339_41928 < count__41338_41927)){
var vec__41395_41934 = chunk__41337_41926.cljs$core$IIndexed$_nth$arity$2(null,i__41339_41928);
var orig_type_41935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41395_41934,(0),null);
var f_41936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41395_41934,(1),null);
var seq__41340_41937 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41935,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41935,cljs.core.identity])));
var chunk__41342_41938 = null;
var count__41343_41939 = (0);
var i__41344_41940 = (0);
while(true){
if((i__41344_41940 < count__41343_41939)){
var vec__41411_41941 = chunk__41342_41938.cljs$core$IIndexed$_nth$arity$2(null,i__41344_41940);
var actual_type_41942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41411_41941,(0),null);
var factory_41943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41411_41941,(1),null);
var canonical_f_41944 = (function (){var G__41415 = (factory_41943.cljs$core$IFn$_invoke$arity$1 ? factory_41943.cljs$core$IFn$_invoke$arity$1(f_41936) : factory_41943.call(null,f_41936));
var fexpr__41414 = (cljs.core.truth_(selector_41924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41923,selector_41924):cljs.core.identity);
return (fexpr__41414.cljs$core$IFn$_invoke$arity$1 ? fexpr__41414.cljs$core$IFn$_invoke$arity$1(G__41415) : fexpr__41414.call(null,G__41415));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41924,actual_type_41942,f_41936], null),canonical_f_41944], 0));

if(cljs.core.truth_(elem_41923.addEventListener)){
elem_41923.addEventListener(cljs.core.name(actual_type_41942),canonical_f_41944);
} else {
elem_41923.attachEvent(cljs.core.name(actual_type_41942),canonical_f_41944);
}


var G__41947 = seq__41340_41937;
var G__41948 = chunk__41342_41938;
var G__41949 = count__41343_41939;
var G__41950 = (i__41344_41940 + (1));
seq__41340_41937 = G__41947;
chunk__41342_41938 = G__41948;
count__41343_41939 = G__41949;
i__41344_41940 = G__41950;
continue;
} else {
var temp__5735__auto___41951 = cljs.core.seq(seq__41340_41937);
if(temp__5735__auto___41951){
var seq__41340_41952__$1 = temp__5735__auto___41951;
if(cljs.core.chunked_seq_QMARK_(seq__41340_41952__$1)){
var c__4609__auto___41953 = cljs.core.chunk_first(seq__41340_41952__$1);
var G__41954 = cljs.core.chunk_rest(seq__41340_41952__$1);
var G__41955 = c__4609__auto___41953;
var G__41956 = cljs.core.count(c__4609__auto___41953);
var G__41957 = (0);
seq__41340_41937 = G__41954;
chunk__41342_41938 = G__41955;
count__41343_41939 = G__41956;
i__41344_41940 = G__41957;
continue;
} else {
var vec__41416_41958 = cljs.core.first(seq__41340_41952__$1);
var actual_type_41959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41416_41958,(0),null);
var factory_41960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41416_41958,(1),null);
var canonical_f_41963 = (function (){var G__41420 = (factory_41960.cljs$core$IFn$_invoke$arity$1 ? factory_41960.cljs$core$IFn$_invoke$arity$1(f_41936) : factory_41960.call(null,f_41936));
var fexpr__41419 = (cljs.core.truth_(selector_41924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41923,selector_41924):cljs.core.identity);
return (fexpr__41419.cljs$core$IFn$_invoke$arity$1 ? fexpr__41419.cljs$core$IFn$_invoke$arity$1(G__41420) : fexpr__41419.call(null,G__41420));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41924,actual_type_41959,f_41936], null),canonical_f_41963], 0));

if(cljs.core.truth_(elem_41923.addEventListener)){
elem_41923.addEventListener(cljs.core.name(actual_type_41959),canonical_f_41963);
} else {
elem_41923.attachEvent(cljs.core.name(actual_type_41959),canonical_f_41963);
}


var G__41966 = cljs.core.next(seq__41340_41952__$1);
var G__41967 = null;
var G__41968 = (0);
var G__41969 = (0);
seq__41340_41937 = G__41966;
chunk__41342_41938 = G__41967;
count__41343_41939 = G__41968;
i__41344_41940 = G__41969;
continue;
}
} else {
}
}
break;
}

var G__41970 = seq__41330_41925;
var G__41971 = chunk__41337_41926;
var G__41972 = count__41338_41927;
var G__41973 = (i__41339_41928 + (1));
seq__41330_41925 = G__41970;
chunk__41337_41926 = G__41971;
count__41338_41927 = G__41972;
i__41339_41928 = G__41973;
continue;
} else {
var temp__5735__auto___41974 = cljs.core.seq(seq__41330_41925);
if(temp__5735__auto___41974){
var seq__41330_41976__$1 = temp__5735__auto___41974;
if(cljs.core.chunked_seq_QMARK_(seq__41330_41976__$1)){
var c__4609__auto___41977 = cljs.core.chunk_first(seq__41330_41976__$1);
var G__41980 = cljs.core.chunk_rest(seq__41330_41976__$1);
var G__41981 = c__4609__auto___41977;
var G__41982 = cljs.core.count(c__4609__auto___41977);
var G__41983 = (0);
seq__41330_41925 = G__41980;
chunk__41337_41926 = G__41981;
count__41338_41927 = G__41982;
i__41339_41928 = G__41983;
continue;
} else {
var vec__41421_41986 = cljs.core.first(seq__41330_41976__$1);
var orig_type_41987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41421_41986,(0),null);
var f_41988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41421_41986,(1),null);
var seq__41331_41989 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41987,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41987,cljs.core.identity])));
var chunk__41333_41990 = null;
var count__41334_41991 = (0);
var i__41335_41992 = (0);
while(true){
if((i__41335_41992 < count__41334_41991)){
var vec__41434_41993 = chunk__41333_41990.cljs$core$IIndexed$_nth$arity$2(null,i__41335_41992);
var actual_type_41994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41434_41993,(0),null);
var factory_41995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41434_41993,(1),null);
var canonical_f_41999 = (function (){var G__41438 = (factory_41995.cljs$core$IFn$_invoke$arity$1 ? factory_41995.cljs$core$IFn$_invoke$arity$1(f_41988) : factory_41995.call(null,f_41988));
var fexpr__41437 = (cljs.core.truth_(selector_41924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41923,selector_41924):cljs.core.identity);
return (fexpr__41437.cljs$core$IFn$_invoke$arity$1 ? fexpr__41437.cljs$core$IFn$_invoke$arity$1(G__41438) : fexpr__41437.call(null,G__41438));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41924,actual_type_41994,f_41988], null),canonical_f_41999], 0));

if(cljs.core.truth_(elem_41923.addEventListener)){
elem_41923.addEventListener(cljs.core.name(actual_type_41994),canonical_f_41999);
} else {
elem_41923.attachEvent(cljs.core.name(actual_type_41994),canonical_f_41999);
}


var G__42002 = seq__41331_41989;
var G__42003 = chunk__41333_41990;
var G__42004 = count__41334_41991;
var G__42005 = (i__41335_41992 + (1));
seq__41331_41989 = G__42002;
chunk__41333_41990 = G__42003;
count__41334_41991 = G__42004;
i__41335_41992 = G__42005;
continue;
} else {
var temp__5735__auto___42006__$1 = cljs.core.seq(seq__41331_41989);
if(temp__5735__auto___42006__$1){
var seq__41331_42007__$1 = temp__5735__auto___42006__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41331_42007__$1)){
var c__4609__auto___42008 = cljs.core.chunk_first(seq__41331_42007__$1);
var G__42009 = cljs.core.chunk_rest(seq__41331_42007__$1);
var G__42010 = c__4609__auto___42008;
var G__42011 = cljs.core.count(c__4609__auto___42008);
var G__42012 = (0);
seq__41331_41989 = G__42009;
chunk__41333_41990 = G__42010;
count__41334_41991 = G__42011;
i__41335_41992 = G__42012;
continue;
} else {
var vec__41439_42013 = cljs.core.first(seq__41331_42007__$1);
var actual_type_42014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439_42013,(0),null);
var factory_42015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439_42013,(1),null);
var canonical_f_42016 = (function (){var G__41443 = (factory_42015.cljs$core$IFn$_invoke$arity$1 ? factory_42015.cljs$core$IFn$_invoke$arity$1(f_41988) : factory_42015.call(null,f_41988));
var fexpr__41442 = (cljs.core.truth_(selector_41924)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41923,selector_41924):cljs.core.identity);
return (fexpr__41442.cljs$core$IFn$_invoke$arity$1 ? fexpr__41442.cljs$core$IFn$_invoke$arity$1(G__41443) : fexpr__41442.call(null,G__41443));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41923,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41924,actual_type_42014,f_41988], null),canonical_f_42016], 0));

if(cljs.core.truth_(elem_41923.addEventListener)){
elem_41923.addEventListener(cljs.core.name(actual_type_42014),canonical_f_42016);
} else {
elem_41923.attachEvent(cljs.core.name(actual_type_42014),canonical_f_42016);
}


var G__42017 = cljs.core.next(seq__41331_42007__$1);
var G__42018 = null;
var G__42019 = (0);
var G__42020 = (0);
seq__41331_41989 = G__42017;
chunk__41333_41990 = G__42018;
count__41334_41991 = G__42019;
i__41335_41992 = G__42020;
continue;
}
} else {
}
}
break;
}

var G__42021 = cljs.core.next(seq__41330_41976__$1);
var G__42022 = null;
var G__42023 = (0);
var G__42024 = (0);
seq__41330_41925 = G__42021;
chunk__41337_41926 = G__42022;
count__41338_41927 = G__42023;
i__41339_41928 = G__42024;
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
var len__4789__auto___42025 = arguments.length;
var i__4790__auto___42026 = (0);
while(true){
if((i__4790__auto___42026 < len__4789__auto___42025)){
args__4795__auto__.push((arguments[i__4790__auto___42026]));

var G__42027 = (i__4790__auto___42026 + (1));
i__4790__auto___42026 = G__42027;
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

var vec__41450_42028 = dommy.core.elem_and_selector(elem_sel);
var elem_42029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450_42028,(0),null);
var selector_42030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450_42028,(1),null);
var seq__41453_42031 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41460_42032 = null;
var count__41461_42033 = (0);
var i__41462_42034 = (0);
while(true){
if((i__41462_42034 < count__41461_42033)){
var vec__41506_42035 = chunk__41460_42032.cljs$core$IIndexed$_nth$arity$2(null,i__41462_42034);
var orig_type_42036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41506_42035,(0),null);
var f_42037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41506_42035,(1),null);
var seq__41463_42038 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42036,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42036,cljs.core.identity])));
var chunk__41465_42039 = null;
var count__41466_42040 = (0);
var i__41467_42041 = (0);
while(true){
if((i__41467_42041 < count__41466_42040)){
var vec__41515_42042 = chunk__41465_42039.cljs$core$IIndexed$_nth$arity$2(null,i__41467_42041);
var actual_type_42043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515_42042,(0),null);
var __42044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515_42042,(1),null);
var keys_42045 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42030,actual_type_42043,f_42037], null);
var canonical_f_42046 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42029),keys_42045);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42045], 0));

if(cljs.core.truth_(elem_42029.removeEventListener)){
elem_42029.removeEventListener(cljs.core.name(actual_type_42043),canonical_f_42046);
} else {
elem_42029.detachEvent(cljs.core.name(actual_type_42043),canonical_f_42046);
}


var G__42047 = seq__41463_42038;
var G__42048 = chunk__41465_42039;
var G__42049 = count__41466_42040;
var G__42050 = (i__41467_42041 + (1));
seq__41463_42038 = G__42047;
chunk__41465_42039 = G__42048;
count__41466_42040 = G__42049;
i__41467_42041 = G__42050;
continue;
} else {
var temp__5735__auto___42051 = cljs.core.seq(seq__41463_42038);
if(temp__5735__auto___42051){
var seq__41463_42052__$1 = temp__5735__auto___42051;
if(cljs.core.chunked_seq_QMARK_(seq__41463_42052__$1)){
var c__4609__auto___42053 = cljs.core.chunk_first(seq__41463_42052__$1);
var G__42054 = cljs.core.chunk_rest(seq__41463_42052__$1);
var G__42055 = c__4609__auto___42053;
var G__42056 = cljs.core.count(c__4609__auto___42053);
var G__42057 = (0);
seq__41463_42038 = G__42054;
chunk__41465_42039 = G__42055;
count__41466_42040 = G__42056;
i__41467_42041 = G__42057;
continue;
} else {
var vec__41519_42058 = cljs.core.first(seq__41463_42052__$1);
var actual_type_42059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41519_42058,(0),null);
var __42060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41519_42058,(1),null);
var keys_42061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42030,actual_type_42059,f_42037], null);
var canonical_f_42062 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42029),keys_42061);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42061], 0));

if(cljs.core.truth_(elem_42029.removeEventListener)){
elem_42029.removeEventListener(cljs.core.name(actual_type_42059),canonical_f_42062);
} else {
elem_42029.detachEvent(cljs.core.name(actual_type_42059),canonical_f_42062);
}


var G__42063 = cljs.core.next(seq__41463_42052__$1);
var G__42064 = null;
var G__42065 = (0);
var G__42066 = (0);
seq__41463_42038 = G__42063;
chunk__41465_42039 = G__42064;
count__41466_42040 = G__42065;
i__41467_42041 = G__42066;
continue;
}
} else {
}
}
break;
}

var G__42067 = seq__41453_42031;
var G__42068 = chunk__41460_42032;
var G__42069 = count__41461_42033;
var G__42070 = (i__41462_42034 + (1));
seq__41453_42031 = G__42067;
chunk__41460_42032 = G__42068;
count__41461_42033 = G__42069;
i__41462_42034 = G__42070;
continue;
} else {
var temp__5735__auto___42071 = cljs.core.seq(seq__41453_42031);
if(temp__5735__auto___42071){
var seq__41453_42072__$1 = temp__5735__auto___42071;
if(cljs.core.chunked_seq_QMARK_(seq__41453_42072__$1)){
var c__4609__auto___42073 = cljs.core.chunk_first(seq__41453_42072__$1);
var G__42074 = cljs.core.chunk_rest(seq__41453_42072__$1);
var G__42075 = c__4609__auto___42073;
var G__42076 = cljs.core.count(c__4609__auto___42073);
var G__42077 = (0);
seq__41453_42031 = G__42074;
chunk__41460_42032 = G__42075;
count__41461_42033 = G__42076;
i__41462_42034 = G__42077;
continue;
} else {
var vec__41524_42078 = cljs.core.first(seq__41453_42072__$1);
var orig_type_42079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41524_42078,(0),null);
var f_42080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41524_42078,(1),null);
var seq__41454_42081 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42079,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42079,cljs.core.identity])));
var chunk__41456_42082 = null;
var count__41457_42083 = (0);
var i__41458_42084 = (0);
while(true){
if((i__41458_42084 < count__41457_42083)){
var vec__41535_42085 = chunk__41456_42082.cljs$core$IIndexed$_nth$arity$2(null,i__41458_42084);
var actual_type_42086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41535_42085,(0),null);
var __42087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41535_42085,(1),null);
var keys_42088 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42030,actual_type_42086,f_42080], null);
var canonical_f_42089 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42029),keys_42088);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42088], 0));

if(cljs.core.truth_(elem_42029.removeEventListener)){
elem_42029.removeEventListener(cljs.core.name(actual_type_42086),canonical_f_42089);
} else {
elem_42029.detachEvent(cljs.core.name(actual_type_42086),canonical_f_42089);
}


var G__42090 = seq__41454_42081;
var G__42091 = chunk__41456_42082;
var G__42092 = count__41457_42083;
var G__42093 = (i__41458_42084 + (1));
seq__41454_42081 = G__42090;
chunk__41456_42082 = G__42091;
count__41457_42083 = G__42092;
i__41458_42084 = G__42093;
continue;
} else {
var temp__5735__auto___42094__$1 = cljs.core.seq(seq__41454_42081);
if(temp__5735__auto___42094__$1){
var seq__41454_42095__$1 = temp__5735__auto___42094__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41454_42095__$1)){
var c__4609__auto___42096 = cljs.core.chunk_first(seq__41454_42095__$1);
var G__42097 = cljs.core.chunk_rest(seq__41454_42095__$1);
var G__42098 = c__4609__auto___42096;
var G__42099 = cljs.core.count(c__4609__auto___42096);
var G__42100 = (0);
seq__41454_42081 = G__42097;
chunk__41456_42082 = G__42098;
count__41457_42083 = G__42099;
i__41458_42084 = G__42100;
continue;
} else {
var vec__41538_42101 = cljs.core.first(seq__41454_42095__$1);
var actual_type_42102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41538_42101,(0),null);
var __42103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41538_42101,(1),null);
var keys_42104 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42030,actual_type_42102,f_42080], null);
var canonical_f_42105 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42029),keys_42104);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42104], 0));

if(cljs.core.truth_(elem_42029.removeEventListener)){
elem_42029.removeEventListener(cljs.core.name(actual_type_42102),canonical_f_42105);
} else {
elem_42029.detachEvent(cljs.core.name(actual_type_42102),canonical_f_42105);
}


var G__42106 = cljs.core.next(seq__41454_42095__$1);
var G__42107 = null;
var G__42108 = (0);
var G__42109 = (0);
seq__41454_42081 = G__42106;
chunk__41456_42082 = G__42107;
count__41457_42083 = G__42108;
i__41458_42084 = G__42109;
continue;
}
} else {
}
}
break;
}

var G__42110 = cljs.core.next(seq__41453_42072__$1);
var G__42111 = null;
var G__42112 = (0);
var G__42113 = (0);
seq__41453_42031 = G__42110;
chunk__41460_42032 = G__42111;
count__41461_42033 = G__42112;
i__41462_42034 = G__42113;
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
var len__4789__auto___42114 = arguments.length;
var i__4790__auto___42115 = (0);
while(true){
if((i__4790__auto___42115 < len__4789__auto___42114)){
args__4795__auto__.push((arguments[i__4790__auto___42115]));

var G__42116 = (i__4790__auto___42115 + (1));
i__4790__auto___42115 = G__42116;
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

var vec__41549_42117 = dommy.core.elem_and_selector(elem_sel);
var elem_42118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41549_42117,(0),null);
var selector_42119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41549_42117,(1),null);
var seq__41552_42120 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41553_42121 = null;
var count__41554_42122 = (0);
var i__41555_42123 = (0);
while(true){
if((i__41555_42123 < count__41554_42122)){
var vec__41583_42124 = chunk__41553_42121.cljs$core$IIndexed$_nth$arity$2(null,i__41555_42123);
var type_42125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41583_42124,(0),null);
var f_42126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41583_42124,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42125,((function (seq__41552_42120,chunk__41553_42121,count__41554_42122,i__41555_42123,vec__41583_42124,type_42125,f_42126,vec__41549_42117,elem_42118,selector_42119){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42125,dommy$core$this_fn], 0));

return (f_42126.cljs$core$IFn$_invoke$arity$1 ? f_42126.cljs$core$IFn$_invoke$arity$1(e) : f_42126.call(null,e));
});})(seq__41552_42120,chunk__41553_42121,count__41554_42122,i__41555_42123,vec__41583_42124,type_42125,f_42126,vec__41549_42117,elem_42118,selector_42119))
], 0));


var G__42127 = seq__41552_42120;
var G__42128 = chunk__41553_42121;
var G__42129 = count__41554_42122;
var G__42130 = (i__41555_42123 + (1));
seq__41552_42120 = G__42127;
chunk__41553_42121 = G__42128;
count__41554_42122 = G__42129;
i__41555_42123 = G__42130;
continue;
} else {
var temp__5735__auto___42131 = cljs.core.seq(seq__41552_42120);
if(temp__5735__auto___42131){
var seq__41552_42132__$1 = temp__5735__auto___42131;
if(cljs.core.chunked_seq_QMARK_(seq__41552_42132__$1)){
var c__4609__auto___42133 = cljs.core.chunk_first(seq__41552_42132__$1);
var G__42134 = cljs.core.chunk_rest(seq__41552_42132__$1);
var G__42135 = c__4609__auto___42133;
var G__42136 = cljs.core.count(c__4609__auto___42133);
var G__42137 = (0);
seq__41552_42120 = G__42134;
chunk__41553_42121 = G__42135;
count__41554_42122 = G__42136;
i__41555_42123 = G__42137;
continue;
} else {
var vec__41586_42138 = cljs.core.first(seq__41552_42132__$1);
var type_42139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41586_42138,(0),null);
var f_42140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41586_42138,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42139,((function (seq__41552_42120,chunk__41553_42121,count__41554_42122,i__41555_42123,vec__41586_42138,type_42139,f_42140,seq__41552_42132__$1,temp__5735__auto___42131,vec__41549_42117,elem_42118,selector_42119){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42139,dommy$core$this_fn], 0));

return (f_42140.cljs$core$IFn$_invoke$arity$1 ? f_42140.cljs$core$IFn$_invoke$arity$1(e) : f_42140.call(null,e));
});})(seq__41552_42120,chunk__41553_42121,count__41554_42122,i__41555_42123,vec__41586_42138,type_42139,f_42140,seq__41552_42132__$1,temp__5735__auto___42131,vec__41549_42117,elem_42118,selector_42119))
], 0));


var G__42141 = cljs.core.next(seq__41552_42132__$1);
var G__42142 = null;
var G__42143 = (0);
var G__42144 = (0);
seq__41552_42120 = G__42141;
chunk__41553_42121 = G__42142;
count__41554_42122 = G__42143;
i__41555_42123 = G__42144;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41545){
var G__41546 = cljs.core.first(seq41545);
var seq41545__$1 = cljs.core.next(seq41545);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41546,seq41545__$1);
}));


//# sourceMappingURL=dommy.core.js.map
