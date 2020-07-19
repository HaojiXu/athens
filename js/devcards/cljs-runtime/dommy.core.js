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
var G__34987 = arguments.length;
switch (G__34987) {
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
var G__34989 = arguments.length;
switch (G__34989) {
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
var G__34992 = arguments.length;
switch (G__34992) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34990_SHARP_){
return (!((p1__34990_SHARP_ === base)));
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
var len__4789__auto___35436 = arguments.length;
var i__4790__auto___35437 = (0);
while(true){
if((i__4790__auto___35437 < len__4789__auto___35436)){
args__4795__auto__.push((arguments[i__4790__auto___35437]));

var G__35438 = (i__4790__auto___35437 + (1));
i__4790__auto___35437 = G__35438;
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
var seq__34997_35439 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34998_35440 = null;
var count__34999_35441 = (0);
var i__35000_35442 = (0);
while(true){
if((i__35000_35442 < count__34999_35441)){
var vec__35007_35443 = chunk__34998_35440.cljs$core$IIndexed$_nth$arity$2(null,i__35000_35442);
var k_35444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35443,(0),null);
var v_35445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007_35443,(1),null);
style.setProperty(dommy.utils.as_str(k_35444),v_35445);


var G__35448 = seq__34997_35439;
var G__35449 = chunk__34998_35440;
var G__35450 = count__34999_35441;
var G__35451 = (i__35000_35442 + (1));
seq__34997_35439 = G__35448;
chunk__34998_35440 = G__35449;
count__34999_35441 = G__35450;
i__35000_35442 = G__35451;
continue;
} else {
var temp__5735__auto___35452 = cljs.core.seq(seq__34997_35439);
if(temp__5735__auto___35452){
var seq__34997_35453__$1 = temp__5735__auto___35452;
if(cljs.core.chunked_seq_QMARK_(seq__34997_35453__$1)){
var c__4609__auto___35454 = cljs.core.chunk_first(seq__34997_35453__$1);
var G__35455 = cljs.core.chunk_rest(seq__34997_35453__$1);
var G__35456 = c__4609__auto___35454;
var G__35457 = cljs.core.count(c__4609__auto___35454);
var G__35458 = (0);
seq__34997_35439 = G__35455;
chunk__34998_35440 = G__35456;
count__34999_35441 = G__35457;
i__35000_35442 = G__35458;
continue;
} else {
var vec__35010_35459 = cljs.core.first(seq__34997_35453__$1);
var k_35460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35459,(0),null);
var v_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35459,(1),null);
style.setProperty(dommy.utils.as_str(k_35460),v_35461);


var G__35462 = cljs.core.next(seq__34997_35453__$1);
var G__35463 = null;
var G__35464 = (0);
var G__35465 = (0);
seq__34997_35439 = G__35462;
chunk__34998_35440 = G__35463;
count__34999_35441 = G__35464;
i__35000_35442 = G__35465;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34995){
var G__34996 = cljs.core.first(seq34995);
var seq34995__$1 = cljs.core.next(seq34995);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34996,seq34995__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35467 = arguments.length;
var i__4790__auto___35468 = (0);
while(true){
if((i__4790__auto___35468 < len__4789__auto___35467)){
args__4795__auto__.push((arguments[i__4790__auto___35468]));

var G__35470 = (i__4790__auto___35468 + (1));
i__4790__auto___35468 = G__35470;
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
var seq__35016_35471 = cljs.core.seq(keywords);
var chunk__35017_35472 = null;
var count__35018_35473 = (0);
var i__35019_35474 = (0);
while(true){
if((i__35019_35474 < count__35018_35473)){
var kw_35475 = chunk__35017_35472.cljs$core$IIndexed$_nth$arity$2(null,i__35019_35474);
style.removeProperty(dommy.utils.as_str(kw_35475));


var G__35476 = seq__35016_35471;
var G__35477 = chunk__35017_35472;
var G__35478 = count__35018_35473;
var G__35479 = (i__35019_35474 + (1));
seq__35016_35471 = G__35476;
chunk__35017_35472 = G__35477;
count__35018_35473 = G__35478;
i__35019_35474 = G__35479;
continue;
} else {
var temp__5735__auto___35480 = cljs.core.seq(seq__35016_35471);
if(temp__5735__auto___35480){
var seq__35016_35481__$1 = temp__5735__auto___35480;
if(cljs.core.chunked_seq_QMARK_(seq__35016_35481__$1)){
var c__4609__auto___35482 = cljs.core.chunk_first(seq__35016_35481__$1);
var G__35483 = cljs.core.chunk_rest(seq__35016_35481__$1);
var G__35484 = c__4609__auto___35482;
var G__35485 = cljs.core.count(c__4609__auto___35482);
var G__35486 = (0);
seq__35016_35471 = G__35483;
chunk__35017_35472 = G__35484;
count__35018_35473 = G__35485;
i__35019_35474 = G__35486;
continue;
} else {
var kw_35487 = cljs.core.first(seq__35016_35481__$1);
style.removeProperty(dommy.utils.as_str(kw_35487));


var G__35488 = cljs.core.next(seq__35016_35481__$1);
var G__35489 = null;
var G__35490 = (0);
var G__35491 = (0);
seq__35016_35471 = G__35488;
chunk__35017_35472 = G__35489;
count__35018_35473 = G__35490;
i__35019_35474 = G__35491;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq35014){
var G__35015 = cljs.core.first(seq35014);
var seq35014__$1 = cljs.core.next(seq35014);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35015,seq35014__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35492 = arguments.length;
var i__4790__auto___35493 = (0);
while(true){
if((i__4790__auto___35493 < len__4789__auto___35492)){
args__4795__auto__.push((arguments[i__4790__auto___35493]));

var G__35494 = (i__4790__auto___35493 + (1));
i__4790__auto___35493 = G__35494;
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

var seq__35022_35495 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35023_35496 = null;
var count__35024_35497 = (0);
var i__35025_35498 = (0);
while(true){
if((i__35025_35498 < count__35024_35497)){
var vec__35032_35499 = chunk__35023_35496.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35498);
var k_35500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35499,(0),null);
var v_35501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032_35499,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35500,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35501),"px"].join('')], 0));


var G__35502 = seq__35022_35495;
var G__35503 = chunk__35023_35496;
var G__35504 = count__35024_35497;
var G__35505 = (i__35025_35498 + (1));
seq__35022_35495 = G__35502;
chunk__35023_35496 = G__35503;
count__35024_35497 = G__35504;
i__35025_35498 = G__35505;
continue;
} else {
var temp__5735__auto___35506 = cljs.core.seq(seq__35022_35495);
if(temp__5735__auto___35506){
var seq__35022_35507__$1 = temp__5735__auto___35506;
if(cljs.core.chunked_seq_QMARK_(seq__35022_35507__$1)){
var c__4609__auto___35508 = cljs.core.chunk_first(seq__35022_35507__$1);
var G__35509 = cljs.core.chunk_rest(seq__35022_35507__$1);
var G__35510 = c__4609__auto___35508;
var G__35511 = cljs.core.count(c__4609__auto___35508);
var G__35512 = (0);
seq__35022_35495 = G__35509;
chunk__35023_35496 = G__35510;
count__35024_35497 = G__35511;
i__35025_35498 = G__35512;
continue;
} else {
var vec__35035_35513 = cljs.core.first(seq__35022_35507__$1);
var k_35514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35513,(0),null);
var v_35515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035_35513,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35514,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35515),"px"].join('')], 0));


var G__35516 = cljs.core.next(seq__35022_35507__$1);
var G__35517 = null;
var G__35518 = (0);
var G__35519 = (0);
seq__35022_35495 = G__35516;
chunk__35023_35496 = G__35517;
count__35024_35497 = G__35518;
i__35025_35498 = G__35519;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35020){
var G__35021 = cljs.core.first(seq35020);
var seq35020__$1 = cljs.core.next(seq35020);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35021,seq35020__$1);
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
var G__35043 = arguments.length;
switch (G__35043) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35521 = arguments.length;
var i__4790__auto___35522 = (0);
while(true){
if((i__4790__auto___35522 < len__4789__auto___35521)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35522]));

var G__35523 = (i__4790__auto___35522 + (1));
i__4790__auto___35522 = G__35523;
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
var G__35044 = elem;
(G__35044[k__$1] = v);

return G__35044;
} else {
var G__35045 = elem;
G__35045.setAttribute(k__$1,v);

return G__35045;
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

var seq__35046_35524 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35047_35525 = null;
var count__35048_35526 = (0);
var i__35049_35527 = (0);
while(true){
if((i__35049_35527 < count__35048_35526)){
var vec__35056_35528 = chunk__35047_35525.cljs$core$IIndexed$_nth$arity$2(null,i__35049_35527);
var k_35529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35528,(0),null);
var v_35530__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056_35528,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35529__$1,v_35530__$1);


var G__35531 = seq__35046_35524;
var G__35532 = chunk__35047_35525;
var G__35533 = count__35048_35526;
var G__35534 = (i__35049_35527 + (1));
seq__35046_35524 = G__35531;
chunk__35047_35525 = G__35532;
count__35048_35526 = G__35533;
i__35049_35527 = G__35534;
continue;
} else {
var temp__5735__auto___35535 = cljs.core.seq(seq__35046_35524);
if(temp__5735__auto___35535){
var seq__35046_35536__$1 = temp__5735__auto___35535;
if(cljs.core.chunked_seq_QMARK_(seq__35046_35536__$1)){
var c__4609__auto___35537 = cljs.core.chunk_first(seq__35046_35536__$1);
var G__35538 = cljs.core.chunk_rest(seq__35046_35536__$1);
var G__35539 = c__4609__auto___35537;
var G__35540 = cljs.core.count(c__4609__auto___35537);
var G__35541 = (0);
seq__35046_35524 = G__35538;
chunk__35047_35525 = G__35539;
count__35048_35526 = G__35540;
i__35049_35527 = G__35541;
continue;
} else {
var vec__35059_35542 = cljs.core.first(seq__35046_35536__$1);
var k_35543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35542,(0),null);
var v_35544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35542,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35543__$1,v_35544__$1);


var G__35545 = cljs.core.next(seq__35046_35536__$1);
var G__35546 = null;
var G__35547 = (0);
var G__35548 = (0);
seq__35046_35524 = G__35545;
chunk__35047_35525 = G__35546;
count__35048_35526 = G__35547;
i__35049_35527 = G__35548;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq35039){
var G__35040 = cljs.core.first(seq35039);
var seq35039__$1 = cljs.core.next(seq35039);
var G__35041 = cljs.core.first(seq35039__$1);
var seq35039__$2 = cljs.core.next(seq35039__$1);
var G__35042 = cljs.core.first(seq35039__$2);
var seq35039__$3 = cljs.core.next(seq35039__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35040,G__35041,G__35042,seq35039__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__35066 = arguments.length;
switch (G__35066) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35550 = arguments.length;
var i__4790__auto___35551 = (0);
while(true){
if((i__4790__auto___35551 < len__4789__auto___35550)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35551]));

var G__35552 = (i__4790__auto___35551 + (1));
i__4790__auto___35551 = G__35552;
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
var k_35553__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35067.cljs$core$IFn$_invoke$arity$1 ? fexpr__35067.cljs$core$IFn$_invoke$arity$1(k_35553__$1) : fexpr__35067.call(null,k_35553__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35553__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35068_35554 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35069_35555 = null;
var count__35070_35556 = (0);
var i__35071_35557 = (0);
while(true){
if((i__35071_35557 < count__35070_35556)){
var k_35558__$1 = chunk__35069_35555.cljs$core$IIndexed$_nth$arity$2(null,i__35071_35557);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35558__$1);


var G__35559 = seq__35068_35554;
var G__35560 = chunk__35069_35555;
var G__35561 = count__35070_35556;
var G__35562 = (i__35071_35557 + (1));
seq__35068_35554 = G__35559;
chunk__35069_35555 = G__35560;
count__35070_35556 = G__35561;
i__35071_35557 = G__35562;
continue;
} else {
var temp__5735__auto___35563 = cljs.core.seq(seq__35068_35554);
if(temp__5735__auto___35563){
var seq__35068_35564__$1 = temp__5735__auto___35563;
if(cljs.core.chunked_seq_QMARK_(seq__35068_35564__$1)){
var c__4609__auto___35565 = cljs.core.chunk_first(seq__35068_35564__$1);
var G__35566 = cljs.core.chunk_rest(seq__35068_35564__$1);
var G__35567 = c__4609__auto___35565;
var G__35568 = cljs.core.count(c__4609__auto___35565);
var G__35569 = (0);
seq__35068_35554 = G__35566;
chunk__35069_35555 = G__35567;
count__35070_35556 = G__35568;
i__35071_35557 = G__35569;
continue;
} else {
var k_35570__$1 = cljs.core.first(seq__35068_35564__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35570__$1);


var G__35571 = cljs.core.next(seq__35068_35564__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__35068_35554 = G__35571;
chunk__35069_35555 = G__35572;
count__35070_35556 = G__35573;
i__35071_35557 = G__35574;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35063){
var G__35064 = cljs.core.first(seq35063);
var seq35063__$1 = cljs.core.next(seq35063);
var G__35065 = cljs.core.first(seq35063__$1);
var seq35063__$2 = cljs.core.next(seq35063__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35064,G__35065,seq35063__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__35073 = arguments.length;
switch (G__35073) {
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
var G__35078 = arguments.length;
switch (G__35078) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35577 = arguments.length;
var i__4790__auto___35578 = (0);
while(true){
if((i__4790__auto___35578 < len__4789__auto___35577)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35578]));

var G__35579 = (i__4790__auto___35578 + (1));
i__4790__auto___35578 = G__35579;
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
var temp__5733__auto___35581 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35581)){
var class_list_35582 = temp__5733__auto___35581;
var seq__35079_35583 = cljs.core.seq(classes__$1);
var chunk__35080_35584 = null;
var count__35081_35585 = (0);
var i__35082_35586 = (0);
while(true){
if((i__35082_35586 < count__35081_35585)){
var c_35587 = chunk__35080_35584.cljs$core$IIndexed$_nth$arity$2(null,i__35082_35586);
class_list_35582.add(c_35587);


var G__35589 = seq__35079_35583;
var G__35590 = chunk__35080_35584;
var G__35591 = count__35081_35585;
var G__35592 = (i__35082_35586 + (1));
seq__35079_35583 = G__35589;
chunk__35080_35584 = G__35590;
count__35081_35585 = G__35591;
i__35082_35586 = G__35592;
continue;
} else {
var temp__5735__auto___35593 = cljs.core.seq(seq__35079_35583);
if(temp__5735__auto___35593){
var seq__35079_35594__$1 = temp__5735__auto___35593;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35594__$1)){
var c__4609__auto___35595 = cljs.core.chunk_first(seq__35079_35594__$1);
var G__35596 = cljs.core.chunk_rest(seq__35079_35594__$1);
var G__35597 = c__4609__auto___35595;
var G__35598 = cljs.core.count(c__4609__auto___35595);
var G__35599 = (0);
seq__35079_35583 = G__35596;
chunk__35080_35584 = G__35597;
count__35081_35585 = G__35598;
i__35082_35586 = G__35599;
continue;
} else {
var c_35600 = cljs.core.first(seq__35079_35594__$1);
class_list_35582.add(c_35600);


var G__35601 = cljs.core.next(seq__35079_35594__$1);
var G__35602 = null;
var G__35603 = (0);
var G__35604 = (0);
seq__35079_35583 = G__35601;
chunk__35080_35584 = G__35602;
count__35081_35585 = G__35603;
i__35082_35586 = G__35604;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35083_35605 = cljs.core.seq(classes__$1);
var chunk__35084_35606 = null;
var count__35085_35607 = (0);
var i__35086_35608 = (0);
while(true){
if((i__35086_35608 < count__35085_35607)){
var c_35609 = chunk__35084_35606.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35608);
var class_name_35610 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35610,c_35609))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35610 === ""))?c_35609:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35610)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35609)].join('')));
}


var G__35612 = seq__35083_35605;
var G__35613 = chunk__35084_35606;
var G__35614 = count__35085_35607;
var G__35615 = (i__35086_35608 + (1));
seq__35083_35605 = G__35612;
chunk__35084_35606 = G__35613;
count__35085_35607 = G__35614;
i__35086_35608 = G__35615;
continue;
} else {
var temp__5735__auto___35616 = cljs.core.seq(seq__35083_35605);
if(temp__5735__auto___35616){
var seq__35083_35617__$1 = temp__5735__auto___35616;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35617__$1)){
var c__4609__auto___35618 = cljs.core.chunk_first(seq__35083_35617__$1);
var G__35619 = cljs.core.chunk_rest(seq__35083_35617__$1);
var G__35620 = c__4609__auto___35618;
var G__35621 = cljs.core.count(c__4609__auto___35618);
var G__35622 = (0);
seq__35083_35605 = G__35619;
chunk__35084_35606 = G__35620;
count__35085_35607 = G__35621;
i__35086_35608 = G__35622;
continue;
} else {
var c_35624 = cljs.core.first(seq__35083_35617__$1);
var class_name_35626 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35626,c_35624))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35626 === ""))?c_35624:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35626)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35624)].join('')));
}


var G__35628 = cljs.core.next(seq__35083_35617__$1);
var G__35629 = null;
var G__35630 = (0);
var G__35631 = (0);
seq__35083_35605 = G__35628;
chunk__35084_35606 = G__35629;
count__35085_35607 = G__35630;
i__35086_35608 = G__35631;
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
var seq__35088_35632 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__35089_35633 = null;
var count__35090_35634 = (0);
var i__35091_35635 = (0);
while(true){
if((i__35091_35635 < count__35090_35634)){
var c_35636 = chunk__35089_35633.cljs$core$IIndexed$_nth$arity$2(null,i__35091_35635);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35636);


var G__35637 = seq__35088_35632;
var G__35638 = chunk__35089_35633;
var G__35639 = count__35090_35634;
var G__35640 = (i__35091_35635 + (1));
seq__35088_35632 = G__35637;
chunk__35089_35633 = G__35638;
count__35090_35634 = G__35639;
i__35091_35635 = G__35640;
continue;
} else {
var temp__5735__auto___35641 = cljs.core.seq(seq__35088_35632);
if(temp__5735__auto___35641){
var seq__35088_35643__$1 = temp__5735__auto___35641;
if(cljs.core.chunked_seq_QMARK_(seq__35088_35643__$1)){
var c__4609__auto___35644 = cljs.core.chunk_first(seq__35088_35643__$1);
var G__35645 = cljs.core.chunk_rest(seq__35088_35643__$1);
var G__35646 = c__4609__auto___35644;
var G__35647 = cljs.core.count(c__4609__auto___35644);
var G__35648 = (0);
seq__35088_35632 = G__35645;
chunk__35089_35633 = G__35646;
count__35090_35634 = G__35647;
i__35091_35635 = G__35648;
continue;
} else {
var c_35653 = cljs.core.first(seq__35088_35643__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35653);


var G__35654 = cljs.core.next(seq__35088_35643__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__35088_35632 = G__35654;
chunk__35089_35633 = G__35655;
count__35090_35634 = G__35656;
i__35091_35635 = G__35657;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq35075){
var G__35076 = cljs.core.first(seq35075);
var seq35075__$1 = cljs.core.next(seq35075);
var G__35077 = cljs.core.first(seq35075__$1);
var seq35075__$2 = cljs.core.next(seq35075__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35076,G__35077,seq35075__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__35098 = arguments.length;
switch (G__35098) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35661 = arguments.length;
var i__4790__auto___35662 = (0);
while(true){
if((i__4790__auto___35662 < len__4789__auto___35661)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35662]));

var G__35663 = (i__4790__auto___35662 + (1));
i__4790__auto___35662 = G__35663;
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
var temp__5733__auto___35664 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35664)){
var class_list_35665 = temp__5733__auto___35664;
class_list_35665.remove(c__$1);
} else {
var class_name_35666 = dommy.core.class$(elem);
var new_class_name_35667 = dommy.utils.remove_class_str(class_name_35666,c__$1);
if((class_name_35666 === new_class_name_35667)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35667);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__35099 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__35100 = null;
var count__35101 = (0);
var i__35102 = (0);
while(true){
if((i__35102 < count__35101)){
var c = chunk__35100.cljs$core$IIndexed$_nth$arity$2(null,i__35102);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35672 = seq__35099;
var G__35673 = chunk__35100;
var G__35674 = count__35101;
var G__35675 = (i__35102 + (1));
seq__35099 = G__35672;
chunk__35100 = G__35673;
count__35101 = G__35674;
i__35102 = G__35675;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35099);
if(temp__5735__auto__){
var seq__35099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35099__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35099__$1);
var G__35676 = cljs.core.chunk_rest(seq__35099__$1);
var G__35677 = c__4609__auto__;
var G__35678 = cljs.core.count(c__4609__auto__);
var G__35679 = (0);
seq__35099 = G__35676;
chunk__35100 = G__35677;
count__35101 = G__35678;
i__35102 = G__35679;
continue;
} else {
var c = cljs.core.first(seq__35099__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35685 = cljs.core.next(seq__35099__$1);
var G__35686 = null;
var G__35687 = (0);
var G__35688 = (0);
seq__35099 = G__35685;
chunk__35100 = G__35686;
count__35101 = G__35687;
i__35102 = G__35688;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq35095){
var G__35096 = cljs.core.first(seq35095);
var seq35095__$1 = cljs.core.next(seq35095);
var G__35097 = cljs.core.first(seq35095__$1);
var seq35095__$2 = cljs.core.next(seq35095__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35096,G__35097,seq35095__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__35104 = arguments.length;
switch (G__35104) {
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
var temp__5733__auto___35695 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35695)){
var class_list_35696 = temp__5733__auto___35695;
class_list_35696.toggle(c__$1);
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
var G__35106 = arguments.length;
switch (G__35106) {
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
var G__35108 = arguments.length;
switch (G__35108) {
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
var G__35113 = arguments.length;
switch (G__35113) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35700 = arguments.length;
var i__4790__auto___35701 = (0);
while(true){
if((i__4790__auto___35701 < len__4789__auto___35700)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35701]));

var G__35702 = (i__4790__auto___35701 + (1));
i__4790__auto___35701 = G__35702;
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
var G__35114 = parent;
G__35114.appendChild(child);

return G__35114;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35115_35703 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35116_35704 = null;
var count__35117_35705 = (0);
var i__35118_35706 = (0);
while(true){
if((i__35118_35706 < count__35117_35705)){
var c_35707 = chunk__35116_35704.cljs$core$IIndexed$_nth$arity$2(null,i__35118_35706);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35707);


var G__35708 = seq__35115_35703;
var G__35709 = chunk__35116_35704;
var G__35710 = count__35117_35705;
var G__35711 = (i__35118_35706 + (1));
seq__35115_35703 = G__35708;
chunk__35116_35704 = G__35709;
count__35117_35705 = G__35710;
i__35118_35706 = G__35711;
continue;
} else {
var temp__5735__auto___35712 = cljs.core.seq(seq__35115_35703);
if(temp__5735__auto___35712){
var seq__35115_35713__$1 = temp__5735__auto___35712;
if(cljs.core.chunked_seq_QMARK_(seq__35115_35713__$1)){
var c__4609__auto___35714 = cljs.core.chunk_first(seq__35115_35713__$1);
var G__35715 = cljs.core.chunk_rest(seq__35115_35713__$1);
var G__35716 = c__4609__auto___35714;
var G__35717 = cljs.core.count(c__4609__auto___35714);
var G__35718 = (0);
seq__35115_35703 = G__35715;
chunk__35116_35704 = G__35716;
count__35117_35705 = G__35717;
i__35118_35706 = G__35718;
continue;
} else {
var c_35719 = cljs.core.first(seq__35115_35713__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35719);


var G__35720 = cljs.core.next(seq__35115_35713__$1);
var G__35721 = null;
var G__35722 = (0);
var G__35723 = (0);
seq__35115_35703 = G__35720;
chunk__35116_35704 = G__35721;
count__35117_35705 = G__35722;
i__35118_35706 = G__35723;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35110){
var G__35111 = cljs.core.first(seq35110);
var seq35110__$1 = cljs.core.next(seq35110);
var G__35112 = cljs.core.first(seq35110__$1);
var seq35110__$2 = cljs.core.next(seq35110__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35111,G__35112,seq35110__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__35123 = arguments.length;
switch (G__35123) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35725 = arguments.length;
var i__4790__auto___35726 = (0);
while(true){
if((i__4790__auto___35726 < len__4789__auto___35725)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35726]));

var G__35727 = (i__4790__auto___35726 + (1));
i__4790__auto___35726 = G__35727;
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
var G__35124 = parent;
G__35124.insertBefore(child,parent.firstChild);

return G__35124;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35125_35728 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35126_35729 = null;
var count__35127_35730 = (0);
var i__35128_35731 = (0);
while(true){
if((i__35128_35731 < count__35127_35730)){
var c_35732 = chunk__35126_35729.cljs$core$IIndexed$_nth$arity$2(null,i__35128_35731);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35732);


var G__35733 = seq__35125_35728;
var G__35734 = chunk__35126_35729;
var G__35735 = count__35127_35730;
var G__35736 = (i__35128_35731 + (1));
seq__35125_35728 = G__35733;
chunk__35126_35729 = G__35734;
count__35127_35730 = G__35735;
i__35128_35731 = G__35736;
continue;
} else {
var temp__5735__auto___35737 = cljs.core.seq(seq__35125_35728);
if(temp__5735__auto___35737){
var seq__35125_35738__$1 = temp__5735__auto___35737;
if(cljs.core.chunked_seq_QMARK_(seq__35125_35738__$1)){
var c__4609__auto___35739 = cljs.core.chunk_first(seq__35125_35738__$1);
var G__35740 = cljs.core.chunk_rest(seq__35125_35738__$1);
var G__35741 = c__4609__auto___35739;
var G__35742 = cljs.core.count(c__4609__auto___35739);
var G__35743 = (0);
seq__35125_35728 = G__35740;
chunk__35126_35729 = G__35741;
count__35127_35730 = G__35742;
i__35128_35731 = G__35743;
continue;
} else {
var c_35744 = cljs.core.first(seq__35125_35738__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35744);


var G__35745 = cljs.core.next(seq__35125_35738__$1);
var G__35746 = null;
var G__35747 = (0);
var G__35748 = (0);
seq__35125_35728 = G__35745;
chunk__35126_35729 = G__35746;
count__35127_35730 = G__35747;
i__35128_35731 = G__35748;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35120){
var G__35121 = cljs.core.first(seq35120);
var seq35120__$1 = cljs.core.next(seq35120);
var G__35122 = cljs.core.first(seq35120__$1);
var seq35120__$2 = cljs.core.next(seq35120__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35121,G__35122,seq35120__$2);
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
var temp__5733__auto___35749 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35749)){
var next_35750 = temp__5733__auto___35749;
dommy.core.insert_before_BANG_(elem,next_35750);
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
var G__35133 = arguments.length;
switch (G__35133) {
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
var G__35134 = p;
G__35134.removeChild(elem);

return G__35134;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35135){
var vec__35136 = p__35135;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35136,(1),null);
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
var len__4789__auto___35752 = arguments.length;
var i__4790__auto___35753 = (0);
while(true){
if((i__4790__auto___35753 < len__4789__auto___35752)){
args__4795__auto__.push((arguments[i__4790__auto___35753]));

var G__35754 = (i__4790__auto___35753 + (1));
i__4790__auto___35753 = G__35754;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq35139){
var G__35140 = cljs.core.first(seq35139);
var seq35139__$1 = cljs.core.next(seq35139);
var G__35141 = cljs.core.first(seq35139__$1);
var seq35139__$2 = cljs.core.next(seq35139__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35140,G__35141,seq35139__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__35142 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__35142.cljs$core$IFn$_invoke$arity$1 ? fexpr__35142.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__35142.call(null,elem_sel));
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
var len__4789__auto___35755 = arguments.length;
var i__4790__auto___35756 = (0);
while(true){
if((i__4790__auto___35756 < len__4789__auto___35755)){
args__4795__auto__.push((arguments[i__4790__auto___35756]));

var G__35757 = (i__4790__auto___35756 + (1));
i__4790__auto___35756 = G__35757;
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

var vec__35145_35758 = dommy.core.elem_and_selector(elem_sel);
var elem_35759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145_35758,(0),null);
var selector_35760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35145_35758,(1),null);
var seq__35151_35761 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35158_35762 = null;
var count__35159_35763 = (0);
var i__35160_35764 = (0);
while(true){
if((i__35160_35764 < count__35159_35763)){
var vec__35220_35765 = chunk__35158_35762.cljs$core$IIndexed$_nth$arity$2(null,i__35160_35764);
var orig_type_35766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220_35765,(0),null);
var f_35767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220_35765,(1),null);
var seq__35161_35768 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35766,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35766,cljs.core.identity])));
var chunk__35163_35769 = null;
var count__35164_35770 = (0);
var i__35165_35771 = (0);
while(true){
if((i__35165_35771 < count__35164_35770)){
var vec__35237_35772 = chunk__35163_35769.cljs$core$IIndexed$_nth$arity$2(null,i__35165_35771);
var actual_type_35773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35237_35772,(0),null);
var factory_35774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35237_35772,(1),null);
var canonical_f_35775 = (function (){var G__35241 = (factory_35774.cljs$core$IFn$_invoke$arity$1 ? factory_35774.cljs$core$IFn$_invoke$arity$1(f_35767) : factory_35774.call(null,f_35767));
var fexpr__35240 = (cljs.core.truth_(selector_35760)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35759,selector_35760):cljs.core.identity);
return (fexpr__35240.cljs$core$IFn$_invoke$arity$1 ? fexpr__35240.cljs$core$IFn$_invoke$arity$1(G__35241) : fexpr__35240.call(null,G__35241));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35759,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35760,actual_type_35773,f_35767], null),canonical_f_35775], 0));

if(cljs.core.truth_(elem_35759.addEventListener)){
elem_35759.addEventListener(cljs.core.name(actual_type_35773),canonical_f_35775);
} else {
elem_35759.attachEvent(cljs.core.name(actual_type_35773),canonical_f_35775);
}


var G__35781 = seq__35161_35768;
var G__35782 = chunk__35163_35769;
var G__35783 = count__35164_35770;
var G__35784 = (i__35165_35771 + (1));
seq__35161_35768 = G__35781;
chunk__35163_35769 = G__35782;
count__35164_35770 = G__35783;
i__35165_35771 = G__35784;
continue;
} else {
var temp__5735__auto___35786 = cljs.core.seq(seq__35161_35768);
if(temp__5735__auto___35786){
var seq__35161_35787__$1 = temp__5735__auto___35786;
if(cljs.core.chunked_seq_QMARK_(seq__35161_35787__$1)){
var c__4609__auto___35788 = cljs.core.chunk_first(seq__35161_35787__$1);
var G__35789 = cljs.core.chunk_rest(seq__35161_35787__$1);
var G__35790 = c__4609__auto___35788;
var G__35791 = cljs.core.count(c__4609__auto___35788);
var G__35792 = (0);
seq__35161_35768 = G__35789;
chunk__35163_35769 = G__35790;
count__35164_35770 = G__35791;
i__35165_35771 = G__35792;
continue;
} else {
var vec__35242_35793 = cljs.core.first(seq__35161_35787__$1);
var actual_type_35794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242_35793,(0),null);
var factory_35795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242_35793,(1),null);
var canonical_f_35796 = (function (){var G__35246 = (factory_35795.cljs$core$IFn$_invoke$arity$1 ? factory_35795.cljs$core$IFn$_invoke$arity$1(f_35767) : factory_35795.call(null,f_35767));
var fexpr__35245 = (cljs.core.truth_(selector_35760)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35759,selector_35760):cljs.core.identity);
return (fexpr__35245.cljs$core$IFn$_invoke$arity$1 ? fexpr__35245.cljs$core$IFn$_invoke$arity$1(G__35246) : fexpr__35245.call(null,G__35246));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35759,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35760,actual_type_35794,f_35767], null),canonical_f_35796], 0));

if(cljs.core.truth_(elem_35759.addEventListener)){
elem_35759.addEventListener(cljs.core.name(actual_type_35794),canonical_f_35796);
} else {
elem_35759.attachEvent(cljs.core.name(actual_type_35794),canonical_f_35796);
}


var G__35797 = cljs.core.next(seq__35161_35787__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35161_35768 = G__35797;
chunk__35163_35769 = G__35798;
count__35164_35770 = G__35799;
i__35165_35771 = G__35800;
continue;
}
} else {
}
}
break;
}

var G__35802 = seq__35151_35761;
var G__35803 = chunk__35158_35762;
var G__35804 = count__35159_35763;
var G__35805 = (i__35160_35764 + (1));
seq__35151_35761 = G__35802;
chunk__35158_35762 = G__35803;
count__35159_35763 = G__35804;
i__35160_35764 = G__35805;
continue;
} else {
var temp__5735__auto___35807 = cljs.core.seq(seq__35151_35761);
if(temp__5735__auto___35807){
var seq__35151_35809__$1 = temp__5735__auto___35807;
if(cljs.core.chunked_seq_QMARK_(seq__35151_35809__$1)){
var c__4609__auto___35811 = cljs.core.chunk_first(seq__35151_35809__$1);
var G__35812 = cljs.core.chunk_rest(seq__35151_35809__$1);
var G__35813 = c__4609__auto___35811;
var G__35814 = cljs.core.count(c__4609__auto___35811);
var G__35815 = (0);
seq__35151_35761 = G__35812;
chunk__35158_35762 = G__35813;
count__35159_35763 = G__35814;
i__35160_35764 = G__35815;
continue;
} else {
var vec__35247_35816 = cljs.core.first(seq__35151_35809__$1);
var orig_type_35817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_35816,(0),null);
var f_35818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_35816,(1),null);
var seq__35152_35819 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35817,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35817,cljs.core.identity])));
var chunk__35154_35820 = null;
var count__35155_35821 = (0);
var i__35156_35822 = (0);
while(true){
if((i__35156_35822 < count__35155_35821)){
var vec__35261_35825 = chunk__35154_35820.cljs$core$IIndexed$_nth$arity$2(null,i__35156_35822);
var actual_type_35826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35825,(0),null);
var factory_35827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_35825,(1),null);
var canonical_f_35829 = (function (){var G__35265 = (factory_35827.cljs$core$IFn$_invoke$arity$1 ? factory_35827.cljs$core$IFn$_invoke$arity$1(f_35818) : factory_35827.call(null,f_35818));
var fexpr__35264 = (cljs.core.truth_(selector_35760)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35759,selector_35760):cljs.core.identity);
return (fexpr__35264.cljs$core$IFn$_invoke$arity$1 ? fexpr__35264.cljs$core$IFn$_invoke$arity$1(G__35265) : fexpr__35264.call(null,G__35265));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35759,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35760,actual_type_35826,f_35818], null),canonical_f_35829], 0));

if(cljs.core.truth_(elem_35759.addEventListener)){
elem_35759.addEventListener(cljs.core.name(actual_type_35826),canonical_f_35829);
} else {
elem_35759.attachEvent(cljs.core.name(actual_type_35826),canonical_f_35829);
}


var G__35830 = seq__35152_35819;
var G__35831 = chunk__35154_35820;
var G__35832 = count__35155_35821;
var G__35833 = (i__35156_35822 + (1));
seq__35152_35819 = G__35830;
chunk__35154_35820 = G__35831;
count__35155_35821 = G__35832;
i__35156_35822 = G__35833;
continue;
} else {
var temp__5735__auto___35834__$1 = cljs.core.seq(seq__35152_35819);
if(temp__5735__auto___35834__$1){
var seq__35152_35835__$1 = temp__5735__auto___35834__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35152_35835__$1)){
var c__4609__auto___35836 = cljs.core.chunk_first(seq__35152_35835__$1);
var G__35839 = cljs.core.chunk_rest(seq__35152_35835__$1);
var G__35840 = c__4609__auto___35836;
var G__35841 = cljs.core.count(c__4609__auto___35836);
var G__35842 = (0);
seq__35152_35819 = G__35839;
chunk__35154_35820 = G__35840;
count__35155_35821 = G__35841;
i__35156_35822 = G__35842;
continue;
} else {
var vec__35268_35847 = cljs.core.first(seq__35152_35835__$1);
var actual_type_35848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35268_35847,(0),null);
var factory_35849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35268_35847,(1),null);
var canonical_f_35851 = (function (){var G__35272 = (factory_35849.cljs$core$IFn$_invoke$arity$1 ? factory_35849.cljs$core$IFn$_invoke$arity$1(f_35818) : factory_35849.call(null,f_35818));
var fexpr__35271 = (cljs.core.truth_(selector_35760)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35759,selector_35760):cljs.core.identity);
return (fexpr__35271.cljs$core$IFn$_invoke$arity$1 ? fexpr__35271.cljs$core$IFn$_invoke$arity$1(G__35272) : fexpr__35271.call(null,G__35272));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35759,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35760,actual_type_35848,f_35818], null),canonical_f_35851], 0));

if(cljs.core.truth_(elem_35759.addEventListener)){
elem_35759.addEventListener(cljs.core.name(actual_type_35848),canonical_f_35851);
} else {
elem_35759.attachEvent(cljs.core.name(actual_type_35848),canonical_f_35851);
}


var G__35854 = cljs.core.next(seq__35152_35835__$1);
var G__35855 = null;
var G__35856 = (0);
var G__35857 = (0);
seq__35152_35819 = G__35854;
chunk__35154_35820 = G__35855;
count__35155_35821 = G__35856;
i__35156_35822 = G__35857;
continue;
}
} else {
}
}
break;
}

var G__35860 = cljs.core.next(seq__35151_35809__$1);
var G__35861 = null;
var G__35862 = (0);
var G__35863 = (0);
seq__35151_35761 = G__35860;
chunk__35158_35762 = G__35861;
count__35159_35763 = G__35862;
i__35160_35764 = G__35863;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35143){
var G__35144 = cljs.core.first(seq35143);
var seq35143__$1 = cljs.core.next(seq35143);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35144,seq35143__$1);
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
var len__4789__auto___35864 = arguments.length;
var i__4790__auto___35865 = (0);
while(true){
if((i__4790__auto___35865 < len__4789__auto___35864)){
args__4795__auto__.push((arguments[i__4790__auto___35865]));

var G__35868 = (i__4790__auto___35865 + (1));
i__4790__auto___35865 = G__35868;
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

var vec__35277_35874 = dommy.core.elem_and_selector(elem_sel);
var elem_35875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277_35874,(0),null);
var selector_35876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277_35874,(1),null);
var seq__35280_35877 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35287_35878 = null;
var count__35288_35879 = (0);
var i__35289_35880 = (0);
while(true){
if((i__35289_35880 < count__35288_35879)){
var vec__35375_35883 = chunk__35287_35878.cljs$core$IIndexed$_nth$arity$2(null,i__35289_35880);
var orig_type_35884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375_35883,(0),null);
var f_35885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375_35883,(1),null);
var seq__35290_35888 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35884,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35884,cljs.core.identity])));
var chunk__35292_35889 = null;
var count__35293_35890 = (0);
var i__35294_35891 = (0);
while(true){
if((i__35294_35891 < count__35293_35890)){
var vec__35387_35893 = chunk__35292_35889.cljs$core$IIndexed$_nth$arity$2(null,i__35294_35891);
var actual_type_35894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387_35893,(0),null);
var __35895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387_35893,(1),null);
var keys_35896 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35876,actual_type_35894,f_35885], null);
var canonical_f_35897 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35875),keys_35896);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35875,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35896], 0));

if(cljs.core.truth_(elem_35875.removeEventListener)){
elem_35875.removeEventListener(cljs.core.name(actual_type_35894),canonical_f_35897);
} else {
elem_35875.detachEvent(cljs.core.name(actual_type_35894),canonical_f_35897);
}


var G__35902 = seq__35290_35888;
var G__35903 = chunk__35292_35889;
var G__35904 = count__35293_35890;
var G__35905 = (i__35294_35891 + (1));
seq__35290_35888 = G__35902;
chunk__35292_35889 = G__35903;
count__35293_35890 = G__35904;
i__35294_35891 = G__35905;
continue;
} else {
var temp__5735__auto___35906 = cljs.core.seq(seq__35290_35888);
if(temp__5735__auto___35906){
var seq__35290_35907__$1 = temp__5735__auto___35906;
if(cljs.core.chunked_seq_QMARK_(seq__35290_35907__$1)){
var c__4609__auto___35908 = cljs.core.chunk_first(seq__35290_35907__$1);
var G__35910 = cljs.core.chunk_rest(seq__35290_35907__$1);
var G__35911 = c__4609__auto___35908;
var G__35912 = cljs.core.count(c__4609__auto___35908);
var G__35913 = (0);
seq__35290_35888 = G__35910;
chunk__35292_35889 = G__35911;
count__35293_35890 = G__35912;
i__35294_35891 = G__35913;
continue;
} else {
var vec__35391_35917 = cljs.core.first(seq__35290_35907__$1);
var actual_type_35918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35391_35917,(0),null);
var __35919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35391_35917,(1),null);
var keys_35921 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35876,actual_type_35918,f_35885], null);
var canonical_f_35922 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35875),keys_35921);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35875,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35921], 0));

if(cljs.core.truth_(elem_35875.removeEventListener)){
elem_35875.removeEventListener(cljs.core.name(actual_type_35918),canonical_f_35922);
} else {
elem_35875.detachEvent(cljs.core.name(actual_type_35918),canonical_f_35922);
}


var G__35925 = cljs.core.next(seq__35290_35907__$1);
var G__35926 = null;
var G__35927 = (0);
var G__35928 = (0);
seq__35290_35888 = G__35925;
chunk__35292_35889 = G__35926;
count__35293_35890 = G__35927;
i__35294_35891 = G__35928;
continue;
}
} else {
}
}
break;
}

var G__35930 = seq__35280_35877;
var G__35931 = chunk__35287_35878;
var G__35932 = count__35288_35879;
var G__35933 = (i__35289_35880 + (1));
seq__35280_35877 = G__35930;
chunk__35287_35878 = G__35931;
count__35288_35879 = G__35932;
i__35289_35880 = G__35933;
continue;
} else {
var temp__5735__auto___35934 = cljs.core.seq(seq__35280_35877);
if(temp__5735__auto___35934){
var seq__35280_35935__$1 = temp__5735__auto___35934;
if(cljs.core.chunked_seq_QMARK_(seq__35280_35935__$1)){
var c__4609__auto___35937 = cljs.core.chunk_first(seq__35280_35935__$1);
var G__35939 = cljs.core.chunk_rest(seq__35280_35935__$1);
var G__35940 = c__4609__auto___35937;
var G__35941 = cljs.core.count(c__4609__auto___35937);
var G__35942 = (0);
seq__35280_35877 = G__35939;
chunk__35287_35878 = G__35940;
count__35288_35879 = G__35941;
i__35289_35880 = G__35942;
continue;
} else {
var vec__35395_35944 = cljs.core.first(seq__35280_35935__$1);
var orig_type_35945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395_35944,(0),null);
var f_35946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395_35944,(1),null);
var seq__35281_35947 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35945,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35945,cljs.core.identity])));
var chunk__35283_35948 = null;
var count__35284_35949 = (0);
var i__35285_35950 = (0);
while(true){
if((i__35285_35950 < count__35284_35949)){
var vec__35404_35954 = chunk__35283_35948.cljs$core$IIndexed$_nth$arity$2(null,i__35285_35950);
var actual_type_35955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35404_35954,(0),null);
var __35956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35404_35954,(1),null);
var keys_35958 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35876,actual_type_35955,f_35946], null);
var canonical_f_35959 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35875),keys_35958);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35875,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35958], 0));

if(cljs.core.truth_(elem_35875.removeEventListener)){
elem_35875.removeEventListener(cljs.core.name(actual_type_35955),canonical_f_35959);
} else {
elem_35875.detachEvent(cljs.core.name(actual_type_35955),canonical_f_35959);
}


var G__35969 = seq__35281_35947;
var G__35970 = chunk__35283_35948;
var G__35971 = count__35284_35949;
var G__35972 = (i__35285_35950 + (1));
seq__35281_35947 = G__35969;
chunk__35283_35948 = G__35970;
count__35284_35949 = G__35971;
i__35285_35950 = G__35972;
continue;
} else {
var temp__5735__auto___35974__$1 = cljs.core.seq(seq__35281_35947);
if(temp__5735__auto___35974__$1){
var seq__35281_35976__$1 = temp__5735__auto___35974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35281_35976__$1)){
var c__4609__auto___35977 = cljs.core.chunk_first(seq__35281_35976__$1);
var G__35978 = cljs.core.chunk_rest(seq__35281_35976__$1);
var G__35979 = c__4609__auto___35977;
var G__35980 = cljs.core.count(c__4609__auto___35977);
var G__35981 = (0);
seq__35281_35947 = G__35978;
chunk__35283_35948 = G__35979;
count__35284_35949 = G__35980;
i__35285_35950 = G__35981;
continue;
} else {
var vec__35407_35985 = cljs.core.first(seq__35281_35976__$1);
var actual_type_35986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35407_35985,(0),null);
var __35987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35407_35985,(1),null);
var keys_35988 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35876,actual_type_35986,f_35946], null);
var canonical_f_35989 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35875),keys_35988);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35875,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35988], 0));

if(cljs.core.truth_(elem_35875.removeEventListener)){
elem_35875.removeEventListener(cljs.core.name(actual_type_35986),canonical_f_35989);
} else {
elem_35875.detachEvent(cljs.core.name(actual_type_35986),canonical_f_35989);
}


var G__35993 = cljs.core.next(seq__35281_35976__$1);
var G__35994 = null;
var G__35995 = (0);
var G__35996 = (0);
seq__35281_35947 = G__35993;
chunk__35283_35948 = G__35994;
count__35284_35949 = G__35995;
i__35285_35950 = G__35996;
continue;
}
} else {
}
}
break;
}

var G__35997 = cljs.core.next(seq__35280_35935__$1);
var G__35998 = null;
var G__35999 = (0);
var G__36000 = (0);
seq__35280_35877 = G__35997;
chunk__35287_35878 = G__35998;
count__35288_35879 = G__35999;
i__35289_35880 = G__36000;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35275){
var G__35276 = cljs.core.first(seq35275);
var seq35275__$1 = cljs.core.next(seq35275);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35276,seq35275__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36004 = arguments.length;
var i__4790__auto___36005 = (0);
while(true){
if((i__4790__auto___36005 < len__4789__auto___36004)){
args__4795__auto__.push((arguments[i__4790__auto___36005]));

var G__36006 = (i__4790__auto___36005 + (1));
i__4790__auto___36005 = G__36006;
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

var vec__35412_36010 = dommy.core.elem_and_selector(elem_sel);
var elem_36011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412_36010,(0),null);
var selector_36012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412_36010,(1),null);
var seq__35415_36016 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35416_36017 = null;
var count__35417_36018 = (0);
var i__35418_36019 = (0);
while(true){
if((i__35418_36019 < count__35417_36018)){
var vec__35425_36020 = chunk__35416_36017.cljs$core$IIndexed$_nth$arity$2(null,i__35418_36019);
var type_36021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35425_36020,(0),null);
var f_36022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35425_36020,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36021,((function (seq__35415_36016,chunk__35416_36017,count__35417_36018,i__35418_36019,vec__35425_36020,type_36021,f_36022,vec__35412_36010,elem_36011,selector_36012){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36021,dommy$core$this_fn], 0));

return (f_36022.cljs$core$IFn$_invoke$arity$1 ? f_36022.cljs$core$IFn$_invoke$arity$1(e) : f_36022.call(null,e));
});})(seq__35415_36016,chunk__35416_36017,count__35417_36018,i__35418_36019,vec__35425_36020,type_36021,f_36022,vec__35412_36010,elem_36011,selector_36012))
], 0));


var G__36027 = seq__35415_36016;
var G__36028 = chunk__35416_36017;
var G__36029 = count__35417_36018;
var G__36030 = (i__35418_36019 + (1));
seq__35415_36016 = G__36027;
chunk__35416_36017 = G__36028;
count__35417_36018 = G__36029;
i__35418_36019 = G__36030;
continue;
} else {
var temp__5735__auto___36031 = cljs.core.seq(seq__35415_36016);
if(temp__5735__auto___36031){
var seq__35415_36033__$1 = temp__5735__auto___36031;
if(cljs.core.chunked_seq_QMARK_(seq__35415_36033__$1)){
var c__4609__auto___36034 = cljs.core.chunk_first(seq__35415_36033__$1);
var G__36035 = cljs.core.chunk_rest(seq__35415_36033__$1);
var G__36036 = c__4609__auto___36034;
var G__36037 = cljs.core.count(c__4609__auto___36034);
var G__36038 = (0);
seq__35415_36016 = G__36035;
chunk__35416_36017 = G__36036;
count__35417_36018 = G__36037;
i__35418_36019 = G__36038;
continue;
} else {
var vec__35428_36039 = cljs.core.first(seq__35415_36033__$1);
var type_36040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428_36039,(0),null);
var f_36041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428_36039,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36040,((function (seq__35415_36016,chunk__35416_36017,count__35417_36018,i__35418_36019,vec__35428_36039,type_36040,f_36041,seq__35415_36033__$1,temp__5735__auto___36031,vec__35412_36010,elem_36011,selector_36012){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36040,dommy$core$this_fn], 0));

return (f_36041.cljs$core$IFn$_invoke$arity$1 ? f_36041.cljs$core$IFn$_invoke$arity$1(e) : f_36041.call(null,e));
});})(seq__35415_36016,chunk__35416_36017,count__35417_36018,i__35418_36019,vec__35428_36039,type_36040,f_36041,seq__35415_36033__$1,temp__5735__auto___36031,vec__35412_36010,elem_36011,selector_36012))
], 0));


var G__36064 = cljs.core.next(seq__35415_36033__$1);
var G__36065 = null;
var G__36066 = (0);
var G__36067 = (0);
seq__35415_36016 = G__36064;
chunk__35416_36017 = G__36065;
count__35417_36018 = G__36066;
i__35418_36019 = G__36067;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35410){
var G__35411 = cljs.core.first(seq35410);
var seq35410__$1 = cljs.core.next(seq35410);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35411,seq35410__$1);
}));


//# sourceMappingURL=dommy.core.js.map
