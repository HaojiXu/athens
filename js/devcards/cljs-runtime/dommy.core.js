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
var len__4789__auto___35375 = arguments.length;
var i__4790__auto___35376 = (0);
while(true){
if((i__4790__auto___35376 < len__4789__auto___35375)){
args__4795__auto__.push((arguments[i__4790__auto___35376]));

var G__35377 = (i__4790__auto___35376 + (1));
i__4790__auto___35376 = G__35377;
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
var seq__34995_35378 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34996_35379 = null;
var count__34997_35380 = (0);
var i__34998_35381 = (0);
while(true){
if((i__34998_35381 < count__34997_35380)){
var vec__35005_35382 = chunk__34996_35379.cljs$core$IIndexed$_nth$arity$2(null,i__34998_35381);
var k_35383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35382,(0),null);
var v_35384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35382,(1),null);
style.setProperty(dommy.utils.as_str(k_35383),v_35384);


var G__35385 = seq__34995_35378;
var G__35386 = chunk__34996_35379;
var G__35387 = count__34997_35380;
var G__35388 = (i__34998_35381 + (1));
seq__34995_35378 = G__35385;
chunk__34996_35379 = G__35386;
count__34997_35380 = G__35387;
i__34998_35381 = G__35388;
continue;
} else {
var temp__5735__auto___35389 = cljs.core.seq(seq__34995_35378);
if(temp__5735__auto___35389){
var seq__34995_35390__$1 = temp__5735__auto___35389;
if(cljs.core.chunked_seq_QMARK_(seq__34995_35390__$1)){
var c__4609__auto___35391 = cljs.core.chunk_first(seq__34995_35390__$1);
var G__35392 = cljs.core.chunk_rest(seq__34995_35390__$1);
var G__35393 = c__4609__auto___35391;
var G__35394 = cljs.core.count(c__4609__auto___35391);
var G__35395 = (0);
seq__34995_35378 = G__35392;
chunk__34996_35379 = G__35393;
count__34997_35380 = G__35394;
i__34998_35381 = G__35395;
continue;
} else {
var vec__35008_35396 = cljs.core.first(seq__34995_35390__$1);
var k_35397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35008_35396,(0),null);
var v_35398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35008_35396,(1),null);
style.setProperty(dommy.utils.as_str(k_35397),v_35398);


var G__35400 = cljs.core.next(seq__34995_35390__$1);
var G__35401 = null;
var G__35402 = (0);
var G__35403 = (0);
seq__34995_35378 = G__35400;
chunk__34996_35379 = G__35401;
count__34997_35380 = G__35402;
i__34998_35381 = G__35403;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34993){
var G__34994 = cljs.core.first(seq34993);
var seq34993__$1 = cljs.core.next(seq34993);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34994,seq34993__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35404 = arguments.length;
var i__4790__auto___35405 = (0);
while(true){
if((i__4790__auto___35405 < len__4789__auto___35404)){
args__4795__auto__.push((arguments[i__4790__auto___35405]));

var G__35407 = (i__4790__auto___35405 + (1));
i__4790__auto___35405 = G__35407;
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
var seq__35013_35409 = cljs.core.seq(keywords);
var chunk__35014_35410 = null;
var count__35015_35411 = (0);
var i__35016_35412 = (0);
while(true){
if((i__35016_35412 < count__35015_35411)){
var kw_35413 = chunk__35014_35410.cljs$core$IIndexed$_nth$arity$2(null,i__35016_35412);
style.removeProperty(dommy.utils.as_str(kw_35413));


var G__35414 = seq__35013_35409;
var G__35415 = chunk__35014_35410;
var G__35416 = count__35015_35411;
var G__35417 = (i__35016_35412 + (1));
seq__35013_35409 = G__35414;
chunk__35014_35410 = G__35415;
count__35015_35411 = G__35416;
i__35016_35412 = G__35417;
continue;
} else {
var temp__5735__auto___35418 = cljs.core.seq(seq__35013_35409);
if(temp__5735__auto___35418){
var seq__35013_35419__$1 = temp__5735__auto___35418;
if(cljs.core.chunked_seq_QMARK_(seq__35013_35419__$1)){
var c__4609__auto___35420 = cljs.core.chunk_first(seq__35013_35419__$1);
var G__35421 = cljs.core.chunk_rest(seq__35013_35419__$1);
var G__35422 = c__4609__auto___35420;
var G__35423 = cljs.core.count(c__4609__auto___35420);
var G__35424 = (0);
seq__35013_35409 = G__35421;
chunk__35014_35410 = G__35422;
count__35015_35411 = G__35423;
i__35016_35412 = G__35424;
continue;
} else {
var kw_35425 = cljs.core.first(seq__35013_35419__$1);
style.removeProperty(dommy.utils.as_str(kw_35425));


var G__35426 = cljs.core.next(seq__35013_35419__$1);
var G__35427 = null;
var G__35428 = (0);
var G__35429 = (0);
seq__35013_35409 = G__35426;
chunk__35014_35410 = G__35427;
count__35015_35411 = G__35428;
i__35016_35412 = G__35429;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq35011){
var G__35012 = cljs.core.first(seq35011);
var seq35011__$1 = cljs.core.next(seq35011);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35012,seq35011__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35431 = arguments.length;
var i__4790__auto___35433 = (0);
while(true){
if((i__4790__auto___35433 < len__4789__auto___35431)){
args__4795__auto__.push((arguments[i__4790__auto___35433]));

var G__35434 = (i__4790__auto___35433 + (1));
i__4790__auto___35433 = G__35434;
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

var seq__35021_35435 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__35022_35436 = null;
var count__35023_35437 = (0);
var i__35024_35438 = (0);
while(true){
if((i__35024_35438 < count__35023_35437)){
var vec__35031_35439 = chunk__35022_35436.cljs$core$IIndexed$_nth$arity$2(null,i__35024_35438);
var k_35440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031_35439,(0),null);
var v_35441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031_35439,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35440,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35441),"px"].join('')], 0));


var G__35442 = seq__35021_35435;
var G__35443 = chunk__35022_35436;
var G__35444 = count__35023_35437;
var G__35445 = (i__35024_35438 + (1));
seq__35021_35435 = G__35442;
chunk__35022_35436 = G__35443;
count__35023_35437 = G__35444;
i__35024_35438 = G__35445;
continue;
} else {
var temp__5735__auto___35446 = cljs.core.seq(seq__35021_35435);
if(temp__5735__auto___35446){
var seq__35021_35447__$1 = temp__5735__auto___35446;
if(cljs.core.chunked_seq_QMARK_(seq__35021_35447__$1)){
var c__4609__auto___35448 = cljs.core.chunk_first(seq__35021_35447__$1);
var G__35449 = cljs.core.chunk_rest(seq__35021_35447__$1);
var G__35450 = c__4609__auto___35448;
var G__35451 = cljs.core.count(c__4609__auto___35448);
var G__35452 = (0);
seq__35021_35435 = G__35449;
chunk__35022_35436 = G__35450;
count__35023_35437 = G__35451;
i__35024_35438 = G__35452;
continue;
} else {
var vec__35034_35453 = cljs.core.first(seq__35021_35447__$1);
var k_35454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35453,(0),null);
var v_35455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35453,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35454,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35455),"px"].join('')], 0));


var G__35456 = cljs.core.next(seq__35021_35447__$1);
var G__35457 = null;
var G__35458 = (0);
var G__35459 = (0);
seq__35021_35435 = G__35456;
chunk__35022_35436 = G__35457;
count__35023_35437 = G__35458;
i__35024_35438 = G__35459;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35019){
var G__35020 = cljs.core.first(seq35019);
var seq35019__$1 = cljs.core.next(seq35019);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35020,seq35019__$1);
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
var G__35042 = arguments.length;
switch (G__35042) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35461 = arguments.length;
var i__4790__auto___35462 = (0);
while(true){
if((i__4790__auto___35462 < len__4789__auto___35461)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35462]));

var G__35463 = (i__4790__auto___35462 + (1));
i__4790__auto___35462 = G__35463;
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
var G__35043 = elem;
(G__35043[k__$1] = v);

return G__35043;
} else {
var G__35044 = elem;
G__35044.setAttribute(k__$1,v);

return G__35044;
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

var seq__35045_35468 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__35046_35469 = null;
var count__35047_35470 = (0);
var i__35048_35471 = (0);
while(true){
if((i__35048_35471 < count__35047_35470)){
var vec__35055_35472 = chunk__35046_35469.cljs$core$IIndexed$_nth$arity$2(null,i__35048_35471);
var k_35473__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35472,(0),null);
var v_35474__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35472,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35473__$1,v_35474__$1);


var G__35475 = seq__35045_35468;
var G__35476 = chunk__35046_35469;
var G__35477 = count__35047_35470;
var G__35478 = (i__35048_35471 + (1));
seq__35045_35468 = G__35475;
chunk__35046_35469 = G__35476;
count__35047_35470 = G__35477;
i__35048_35471 = G__35478;
continue;
} else {
var temp__5735__auto___35479 = cljs.core.seq(seq__35045_35468);
if(temp__5735__auto___35479){
var seq__35045_35480__$1 = temp__5735__auto___35479;
if(cljs.core.chunked_seq_QMARK_(seq__35045_35480__$1)){
var c__4609__auto___35482 = cljs.core.chunk_first(seq__35045_35480__$1);
var G__35483 = cljs.core.chunk_rest(seq__35045_35480__$1);
var G__35484 = c__4609__auto___35482;
var G__35485 = cljs.core.count(c__4609__auto___35482);
var G__35486 = (0);
seq__35045_35468 = G__35483;
chunk__35046_35469 = G__35484;
count__35047_35470 = G__35485;
i__35048_35471 = G__35486;
continue;
} else {
var vec__35058_35487 = cljs.core.first(seq__35045_35480__$1);
var k_35488__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35487,(0),null);
var v_35489__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35487,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35488__$1,v_35489__$1);


var G__35495 = cljs.core.next(seq__35045_35480__$1);
var G__35496 = null;
var G__35497 = (0);
var G__35498 = (0);
seq__35045_35468 = G__35495;
chunk__35046_35469 = G__35496;
count__35047_35470 = G__35497;
i__35048_35471 = G__35498;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq35038){
var G__35039 = cljs.core.first(seq35038);
var seq35038__$1 = cljs.core.next(seq35038);
var G__35040 = cljs.core.first(seq35038__$1);
var seq35038__$2 = cljs.core.next(seq35038__$1);
var G__35041 = cljs.core.first(seq35038__$2);
var seq35038__$3 = cljs.core.next(seq35038__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35039,G__35040,G__35041,seq35038__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__35065 = arguments.length;
switch (G__35065) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35517 = arguments.length;
var i__4790__auto___35518 = (0);
while(true){
if((i__4790__auto___35518 < len__4789__auto___35517)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35518]));

var G__35519 = (i__4790__auto___35518 + (1));
i__4790__auto___35518 = G__35519;
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
var k_35520__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35066 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35066.cljs$core$IFn$_invoke$arity$1 ? fexpr__35066.cljs$core$IFn$_invoke$arity$1(k_35520__$1) : fexpr__35066.call(null,k_35520__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35520__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35067_35521 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35068_35522 = null;
var count__35069_35523 = (0);
var i__35070_35524 = (0);
while(true){
if((i__35070_35524 < count__35069_35523)){
var k_35525__$1 = chunk__35068_35522.cljs$core$IIndexed$_nth$arity$2(null,i__35070_35524);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35525__$1);


var G__35526 = seq__35067_35521;
var G__35527 = chunk__35068_35522;
var G__35528 = count__35069_35523;
var G__35529 = (i__35070_35524 + (1));
seq__35067_35521 = G__35526;
chunk__35068_35522 = G__35527;
count__35069_35523 = G__35528;
i__35070_35524 = G__35529;
continue;
} else {
var temp__5735__auto___35530 = cljs.core.seq(seq__35067_35521);
if(temp__5735__auto___35530){
var seq__35067_35531__$1 = temp__5735__auto___35530;
if(cljs.core.chunked_seq_QMARK_(seq__35067_35531__$1)){
var c__4609__auto___35532 = cljs.core.chunk_first(seq__35067_35531__$1);
var G__35533 = cljs.core.chunk_rest(seq__35067_35531__$1);
var G__35534 = c__4609__auto___35532;
var G__35535 = cljs.core.count(c__4609__auto___35532);
var G__35536 = (0);
seq__35067_35521 = G__35533;
chunk__35068_35522 = G__35534;
count__35069_35523 = G__35535;
i__35070_35524 = G__35536;
continue;
} else {
var k_35537__$1 = cljs.core.first(seq__35067_35531__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35537__$1);


var G__35538 = cljs.core.next(seq__35067_35531__$1);
var G__35539 = null;
var G__35540 = (0);
var G__35541 = (0);
seq__35067_35521 = G__35538;
chunk__35068_35522 = G__35539;
count__35069_35523 = G__35540;
i__35070_35524 = G__35541;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35062){
var G__35063 = cljs.core.first(seq35062);
var seq35062__$1 = cljs.core.next(seq35062);
var G__35064 = cljs.core.first(seq35062__$1);
var seq35062__$2 = cljs.core.next(seq35062__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35063,G__35064,seq35062__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__35072 = arguments.length;
switch (G__35072) {
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
var G__35077 = arguments.length;
switch (G__35077) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35566 = arguments.length;
var i__4790__auto___35567 = (0);
while(true){
if((i__4790__auto___35567 < len__4789__auto___35566)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35567]));

var G__35568 = (i__4790__auto___35567 + (1));
i__4790__auto___35567 = G__35568;
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
var temp__5733__auto___35569 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35569)){
var class_list_35570 = temp__5733__auto___35569;
var seq__35079_35571 = cljs.core.seq(classes__$1);
var chunk__35080_35572 = null;
var count__35081_35573 = (0);
var i__35082_35574 = (0);
while(true){
if((i__35082_35574 < count__35081_35573)){
var c_35575 = chunk__35080_35572.cljs$core$IIndexed$_nth$arity$2(null,i__35082_35574);
class_list_35570.add(c_35575);


var G__35576 = seq__35079_35571;
var G__35577 = chunk__35080_35572;
var G__35578 = count__35081_35573;
var G__35579 = (i__35082_35574 + (1));
seq__35079_35571 = G__35576;
chunk__35080_35572 = G__35577;
count__35081_35573 = G__35578;
i__35082_35574 = G__35579;
continue;
} else {
var temp__5735__auto___35580 = cljs.core.seq(seq__35079_35571);
if(temp__5735__auto___35580){
var seq__35079_35581__$1 = temp__5735__auto___35580;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35581__$1)){
var c__4609__auto___35582 = cljs.core.chunk_first(seq__35079_35581__$1);
var G__35584 = cljs.core.chunk_rest(seq__35079_35581__$1);
var G__35585 = c__4609__auto___35582;
var G__35586 = cljs.core.count(c__4609__auto___35582);
var G__35587 = (0);
seq__35079_35571 = G__35584;
chunk__35080_35572 = G__35585;
count__35081_35573 = G__35586;
i__35082_35574 = G__35587;
continue;
} else {
var c_35590 = cljs.core.first(seq__35079_35581__$1);
class_list_35570.add(c_35590);


var G__35591 = cljs.core.next(seq__35079_35581__$1);
var G__35592 = null;
var G__35593 = (0);
var G__35594 = (0);
seq__35079_35571 = G__35591;
chunk__35080_35572 = G__35592;
count__35081_35573 = G__35593;
i__35082_35574 = G__35594;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35083_35595 = cljs.core.seq(classes__$1);
var chunk__35084_35596 = null;
var count__35085_35597 = (0);
var i__35086_35598 = (0);
while(true){
if((i__35086_35598 < count__35085_35597)){
var c_35599 = chunk__35084_35596.cljs$core$IIndexed$_nth$arity$2(null,i__35086_35598);
var class_name_35600 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35600,c_35599))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35600 === ""))?c_35599:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35600)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35599)].join('')));
}


var G__35601 = seq__35083_35595;
var G__35602 = chunk__35084_35596;
var G__35603 = count__35085_35597;
var G__35604 = (i__35086_35598 + (1));
seq__35083_35595 = G__35601;
chunk__35084_35596 = G__35602;
count__35085_35597 = G__35603;
i__35086_35598 = G__35604;
continue;
} else {
var temp__5735__auto___35605 = cljs.core.seq(seq__35083_35595);
if(temp__5735__auto___35605){
var seq__35083_35606__$1 = temp__5735__auto___35605;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35606__$1)){
var c__4609__auto___35607 = cljs.core.chunk_first(seq__35083_35606__$1);
var G__35608 = cljs.core.chunk_rest(seq__35083_35606__$1);
var G__35609 = c__4609__auto___35607;
var G__35610 = cljs.core.count(c__4609__auto___35607);
var G__35611 = (0);
seq__35083_35595 = G__35608;
chunk__35084_35596 = G__35609;
count__35085_35597 = G__35610;
i__35086_35598 = G__35611;
continue;
} else {
var c_35612 = cljs.core.first(seq__35083_35606__$1);
var class_name_35613 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35613,c_35612))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35613 === ""))?c_35612:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35613)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35612)].join('')));
}


var G__35614 = cljs.core.next(seq__35083_35606__$1);
var G__35615 = null;
var G__35616 = (0);
var G__35617 = (0);
seq__35083_35595 = G__35614;
chunk__35084_35596 = G__35615;
count__35085_35597 = G__35616;
i__35086_35598 = G__35617;
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
var seq__35087_35619 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__35088_35620 = null;
var count__35089_35621 = (0);
var i__35090_35622 = (0);
while(true){
if((i__35090_35622 < count__35089_35621)){
var c_35623 = chunk__35088_35620.cljs$core$IIndexed$_nth$arity$2(null,i__35090_35622);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35623);


var G__35624 = seq__35087_35619;
var G__35625 = chunk__35088_35620;
var G__35626 = count__35089_35621;
var G__35627 = (i__35090_35622 + (1));
seq__35087_35619 = G__35624;
chunk__35088_35620 = G__35625;
count__35089_35621 = G__35626;
i__35090_35622 = G__35627;
continue;
} else {
var temp__5735__auto___35628 = cljs.core.seq(seq__35087_35619);
if(temp__5735__auto___35628){
var seq__35087_35629__$1 = temp__5735__auto___35628;
if(cljs.core.chunked_seq_QMARK_(seq__35087_35629__$1)){
var c__4609__auto___35630 = cljs.core.chunk_first(seq__35087_35629__$1);
var G__35631 = cljs.core.chunk_rest(seq__35087_35629__$1);
var G__35632 = c__4609__auto___35630;
var G__35633 = cljs.core.count(c__4609__auto___35630);
var G__35634 = (0);
seq__35087_35619 = G__35631;
chunk__35088_35620 = G__35632;
count__35089_35621 = G__35633;
i__35090_35622 = G__35634;
continue;
} else {
var c_35635 = cljs.core.first(seq__35087_35629__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35635);


var G__35637 = cljs.core.next(seq__35087_35629__$1);
var G__35638 = null;
var G__35639 = (0);
var G__35640 = (0);
seq__35087_35619 = G__35637;
chunk__35088_35620 = G__35638;
count__35089_35621 = G__35639;
i__35090_35622 = G__35640;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq35074){
var G__35075 = cljs.core.first(seq35074);
var seq35074__$1 = cljs.core.next(seq35074);
var G__35076 = cljs.core.first(seq35074__$1);
var seq35074__$2 = cljs.core.next(seq35074__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35075,G__35076,seq35074__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__35095 = arguments.length;
switch (G__35095) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35642 = arguments.length;
var i__4790__auto___35643 = (0);
while(true){
if((i__4790__auto___35643 < len__4789__auto___35642)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35643]));

var G__35644 = (i__4790__auto___35643 + (1));
i__4790__auto___35643 = G__35644;
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
var temp__5733__auto___35645 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35645)){
var class_list_35646 = temp__5733__auto___35645;
class_list_35646.remove(c__$1);
} else {
var class_name_35647 = dommy.core.class$(elem);
var new_class_name_35648 = dommy.utils.remove_class_str(class_name_35647,c__$1);
if((class_name_35647 === new_class_name_35648)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35648);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__35096 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__35097 = null;
var count__35098 = (0);
var i__35099 = (0);
while(true){
if((i__35099 < count__35098)){
var c = chunk__35097.cljs$core$IIndexed$_nth$arity$2(null,i__35099);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35649 = seq__35096;
var G__35650 = chunk__35097;
var G__35651 = count__35098;
var G__35652 = (i__35099 + (1));
seq__35096 = G__35649;
chunk__35097 = G__35650;
count__35098 = G__35651;
i__35099 = G__35652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35096);
if(temp__5735__auto__){
var seq__35096__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35096__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35096__$1);
var G__35653 = cljs.core.chunk_rest(seq__35096__$1);
var G__35654 = c__4609__auto__;
var G__35655 = cljs.core.count(c__4609__auto__);
var G__35656 = (0);
seq__35096 = G__35653;
chunk__35097 = G__35654;
count__35098 = G__35655;
i__35099 = G__35656;
continue;
} else {
var c = cljs.core.first(seq__35096__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35657 = cljs.core.next(seq__35096__$1);
var G__35658 = null;
var G__35659 = (0);
var G__35660 = (0);
seq__35096 = G__35657;
chunk__35097 = G__35658;
count__35098 = G__35659;
i__35099 = G__35660;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq35092){
var G__35093 = cljs.core.first(seq35092);
var seq35092__$1 = cljs.core.next(seq35092);
var G__35094 = cljs.core.first(seq35092__$1);
var seq35092__$2 = cljs.core.next(seq35092__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35093,G__35094,seq35092__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__35101 = arguments.length;
switch (G__35101) {
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
var temp__5733__auto___35662 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35662)){
var class_list_35663 = temp__5733__auto___35662;
class_list_35663.toggle(c__$1);
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
var G__35103 = arguments.length;
switch (G__35103) {
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
var G__35105 = arguments.length;
switch (G__35105) {
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
var G__35110 = arguments.length;
switch (G__35110) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35667 = arguments.length;
var i__4790__auto___35668 = (0);
while(true){
if((i__4790__auto___35668 < len__4789__auto___35667)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35668]));

var G__35669 = (i__4790__auto___35668 + (1));
i__4790__auto___35668 = G__35669;
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
var G__35111 = parent;
G__35111.appendChild(child);

return G__35111;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35112_35670 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35113_35671 = null;
var count__35114_35672 = (0);
var i__35115_35673 = (0);
while(true){
if((i__35115_35673 < count__35114_35672)){
var c_35674 = chunk__35113_35671.cljs$core$IIndexed$_nth$arity$2(null,i__35115_35673);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35674);


var G__35675 = seq__35112_35670;
var G__35676 = chunk__35113_35671;
var G__35677 = count__35114_35672;
var G__35678 = (i__35115_35673 + (1));
seq__35112_35670 = G__35675;
chunk__35113_35671 = G__35676;
count__35114_35672 = G__35677;
i__35115_35673 = G__35678;
continue;
} else {
var temp__5735__auto___35679 = cljs.core.seq(seq__35112_35670);
if(temp__5735__auto___35679){
var seq__35112_35680__$1 = temp__5735__auto___35679;
if(cljs.core.chunked_seq_QMARK_(seq__35112_35680__$1)){
var c__4609__auto___35681 = cljs.core.chunk_first(seq__35112_35680__$1);
var G__35682 = cljs.core.chunk_rest(seq__35112_35680__$1);
var G__35683 = c__4609__auto___35681;
var G__35684 = cljs.core.count(c__4609__auto___35681);
var G__35685 = (0);
seq__35112_35670 = G__35682;
chunk__35113_35671 = G__35683;
count__35114_35672 = G__35684;
i__35115_35673 = G__35685;
continue;
} else {
var c_35686 = cljs.core.first(seq__35112_35680__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35686);


var G__35687 = cljs.core.next(seq__35112_35680__$1);
var G__35688 = null;
var G__35689 = (0);
var G__35690 = (0);
seq__35112_35670 = G__35687;
chunk__35113_35671 = G__35688;
count__35114_35672 = G__35689;
i__35115_35673 = G__35690;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35107){
var G__35108 = cljs.core.first(seq35107);
var seq35107__$1 = cljs.core.next(seq35107);
var G__35109 = cljs.core.first(seq35107__$1);
var seq35107__$2 = cljs.core.next(seq35107__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35108,G__35109,seq35107__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__35120 = arguments.length;
switch (G__35120) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35692 = arguments.length;
var i__4790__auto___35693 = (0);
while(true){
if((i__4790__auto___35693 < len__4789__auto___35692)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35693]));

var G__35694 = (i__4790__auto___35693 + (1));
i__4790__auto___35693 = G__35694;
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
var G__35121 = parent;
G__35121.insertBefore(child,parent.firstChild);

return G__35121;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35122_35695 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35123_35696 = null;
var count__35124_35697 = (0);
var i__35125_35698 = (0);
while(true){
if((i__35125_35698 < count__35124_35697)){
var c_35699 = chunk__35123_35696.cljs$core$IIndexed$_nth$arity$2(null,i__35125_35698);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35699);


var G__35700 = seq__35122_35695;
var G__35701 = chunk__35123_35696;
var G__35702 = count__35124_35697;
var G__35703 = (i__35125_35698 + (1));
seq__35122_35695 = G__35700;
chunk__35123_35696 = G__35701;
count__35124_35697 = G__35702;
i__35125_35698 = G__35703;
continue;
} else {
var temp__5735__auto___35704 = cljs.core.seq(seq__35122_35695);
if(temp__5735__auto___35704){
var seq__35122_35705__$1 = temp__5735__auto___35704;
if(cljs.core.chunked_seq_QMARK_(seq__35122_35705__$1)){
var c__4609__auto___35706 = cljs.core.chunk_first(seq__35122_35705__$1);
var G__35707 = cljs.core.chunk_rest(seq__35122_35705__$1);
var G__35708 = c__4609__auto___35706;
var G__35709 = cljs.core.count(c__4609__auto___35706);
var G__35710 = (0);
seq__35122_35695 = G__35707;
chunk__35123_35696 = G__35708;
count__35124_35697 = G__35709;
i__35125_35698 = G__35710;
continue;
} else {
var c_35711 = cljs.core.first(seq__35122_35705__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35711);


var G__35712 = cljs.core.next(seq__35122_35705__$1);
var G__35713 = null;
var G__35714 = (0);
var G__35715 = (0);
seq__35122_35695 = G__35712;
chunk__35123_35696 = G__35713;
count__35124_35697 = G__35714;
i__35125_35698 = G__35715;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35117){
var G__35118 = cljs.core.first(seq35117);
var seq35117__$1 = cljs.core.next(seq35117);
var G__35119 = cljs.core.first(seq35117__$1);
var seq35117__$2 = cljs.core.next(seq35117__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35118,G__35119,seq35117__$2);
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
var temp__5733__auto___35716 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35716)){
var next_35717 = temp__5733__auto___35716;
dommy.core.insert_before_BANG_(elem,next_35717);
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
var G__35127 = arguments.length;
switch (G__35127) {
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
var G__35128 = p;
G__35128.removeChild(elem);

return G__35128;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35129){
var vec__35130 = p__35129;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(1),null);
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
var len__4789__auto___35719 = arguments.length;
var i__4790__auto___35720 = (0);
while(true){
if((i__4790__auto___35720 < len__4789__auto___35719)){
args__4795__auto__.push((arguments[i__4790__auto___35720]));

var G__35721 = (i__4790__auto___35720 + (1));
i__4790__auto___35720 = G__35721;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq35134){
var G__35135 = cljs.core.first(seq35134);
var seq35134__$1 = cljs.core.next(seq35134);
var G__35136 = cljs.core.first(seq35134__$1);
var seq35134__$2 = cljs.core.next(seq35134__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35135,G__35136,seq35134__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__35139 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__35139.cljs$core$IFn$_invoke$arity$1 ? fexpr__35139.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__35139.call(null,elem_sel));
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
var len__4789__auto___35722 = arguments.length;
var i__4790__auto___35723 = (0);
while(true){
if((i__4790__auto___35723 < len__4789__auto___35722)){
args__4795__auto__.push((arguments[i__4790__auto___35723]));

var G__35724 = (i__4790__auto___35723 + (1));
i__4790__auto___35723 = G__35724;
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

var vec__35142_35727 = dommy.core.elem_and_selector(elem_sel);
var elem_35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35727,(0),null);
var selector_35729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35727,(1),null);
var seq__35145_35730 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35152_35731 = null;
var count__35153_35732 = (0);
var i__35154_35733 = (0);
while(true){
if((i__35154_35733 < count__35153_35732)){
var vec__35207_35734 = chunk__35152_35731.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35733);
var orig_type_35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35207_35734,(0),null);
var f_35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35207_35734,(1),null);
var seq__35155_35737 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35735,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35735,cljs.core.identity])));
var chunk__35157_35738 = null;
var count__35158_35739 = (0);
var i__35159_35740 = (0);
while(true){
if((i__35159_35740 < count__35158_35739)){
var vec__35220_35741 = chunk__35157_35738.cljs$core$IIndexed$_nth$arity$2(null,i__35159_35740);
var actual_type_35742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220_35741,(0),null);
var factory_35743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220_35741,(1),null);
var canonical_f_35744 = (function (){var G__35224 = (factory_35743.cljs$core$IFn$_invoke$arity$1 ? factory_35743.cljs$core$IFn$_invoke$arity$1(f_35736) : factory_35743.call(null,f_35736));
var fexpr__35223 = (cljs.core.truth_(selector_35729)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35728,selector_35729):cljs.core.identity);
return (fexpr__35223.cljs$core$IFn$_invoke$arity$1 ? fexpr__35223.cljs$core$IFn$_invoke$arity$1(G__35224) : fexpr__35223.call(null,G__35224));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35728,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35729,actual_type_35742,f_35736], null),canonical_f_35744], 0));

if(cljs.core.truth_(elem_35728.addEventListener)){
elem_35728.addEventListener(cljs.core.name(actual_type_35742),canonical_f_35744);
} else {
elem_35728.attachEvent(cljs.core.name(actual_type_35742),canonical_f_35744);
}


var G__35745 = seq__35155_35737;
var G__35746 = chunk__35157_35738;
var G__35747 = count__35158_35739;
var G__35748 = (i__35159_35740 + (1));
seq__35155_35737 = G__35745;
chunk__35157_35738 = G__35746;
count__35158_35739 = G__35747;
i__35159_35740 = G__35748;
continue;
} else {
var temp__5735__auto___35749 = cljs.core.seq(seq__35155_35737);
if(temp__5735__auto___35749){
var seq__35155_35750__$1 = temp__5735__auto___35749;
if(cljs.core.chunked_seq_QMARK_(seq__35155_35750__$1)){
var c__4609__auto___35751 = cljs.core.chunk_first(seq__35155_35750__$1);
var G__35752 = cljs.core.chunk_rest(seq__35155_35750__$1);
var G__35753 = c__4609__auto___35751;
var G__35754 = cljs.core.count(c__4609__auto___35751);
var G__35755 = (0);
seq__35155_35737 = G__35752;
chunk__35157_35738 = G__35753;
count__35158_35739 = G__35754;
i__35159_35740 = G__35755;
continue;
} else {
var vec__35225_35756 = cljs.core.first(seq__35155_35750__$1);
var actual_type_35757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225_35756,(0),null);
var factory_35758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225_35756,(1),null);
var canonical_f_35759 = (function (){var G__35229 = (factory_35758.cljs$core$IFn$_invoke$arity$1 ? factory_35758.cljs$core$IFn$_invoke$arity$1(f_35736) : factory_35758.call(null,f_35736));
var fexpr__35228 = (cljs.core.truth_(selector_35729)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35728,selector_35729):cljs.core.identity);
return (fexpr__35228.cljs$core$IFn$_invoke$arity$1 ? fexpr__35228.cljs$core$IFn$_invoke$arity$1(G__35229) : fexpr__35228.call(null,G__35229));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35728,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35729,actual_type_35757,f_35736], null),canonical_f_35759], 0));

if(cljs.core.truth_(elem_35728.addEventListener)){
elem_35728.addEventListener(cljs.core.name(actual_type_35757),canonical_f_35759);
} else {
elem_35728.attachEvent(cljs.core.name(actual_type_35757),canonical_f_35759);
}


var G__35762 = cljs.core.next(seq__35155_35750__$1);
var G__35763 = null;
var G__35764 = (0);
var G__35765 = (0);
seq__35155_35737 = G__35762;
chunk__35157_35738 = G__35763;
count__35158_35739 = G__35764;
i__35159_35740 = G__35765;
continue;
}
} else {
}
}
break;
}

var G__35766 = seq__35145_35730;
var G__35767 = chunk__35152_35731;
var G__35768 = count__35153_35732;
var G__35769 = (i__35154_35733 + (1));
seq__35145_35730 = G__35766;
chunk__35152_35731 = G__35767;
count__35153_35732 = G__35768;
i__35154_35733 = G__35769;
continue;
} else {
var temp__5735__auto___35770 = cljs.core.seq(seq__35145_35730);
if(temp__5735__auto___35770){
var seq__35145_35771__$1 = temp__5735__auto___35770;
if(cljs.core.chunked_seq_QMARK_(seq__35145_35771__$1)){
var c__4609__auto___35772 = cljs.core.chunk_first(seq__35145_35771__$1);
var G__35773 = cljs.core.chunk_rest(seq__35145_35771__$1);
var G__35774 = c__4609__auto___35772;
var G__35775 = cljs.core.count(c__4609__auto___35772);
var G__35776 = (0);
seq__35145_35730 = G__35773;
chunk__35152_35731 = G__35774;
count__35153_35732 = G__35775;
i__35154_35733 = G__35776;
continue;
} else {
var vec__35230_35777 = cljs.core.first(seq__35145_35771__$1);
var orig_type_35778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35230_35777,(0),null);
var f_35779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35230_35777,(1),null);
var seq__35146_35780 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35778,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35778,cljs.core.identity])));
var chunk__35148_35781 = null;
var count__35149_35782 = (0);
var i__35150_35783 = (0);
while(true){
if((i__35150_35783 < count__35149_35782)){
var vec__35243_35784 = chunk__35148_35781.cljs$core$IIndexed$_nth$arity$2(null,i__35150_35783);
var actual_type_35785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35243_35784,(0),null);
var factory_35786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35243_35784,(1),null);
var canonical_f_35788 = (function (){var G__35247 = (factory_35786.cljs$core$IFn$_invoke$arity$1 ? factory_35786.cljs$core$IFn$_invoke$arity$1(f_35779) : factory_35786.call(null,f_35779));
var fexpr__35246 = (cljs.core.truth_(selector_35729)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35728,selector_35729):cljs.core.identity);
return (fexpr__35246.cljs$core$IFn$_invoke$arity$1 ? fexpr__35246.cljs$core$IFn$_invoke$arity$1(G__35247) : fexpr__35246.call(null,G__35247));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35728,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35729,actual_type_35785,f_35779], null),canonical_f_35788], 0));

if(cljs.core.truth_(elem_35728.addEventListener)){
elem_35728.addEventListener(cljs.core.name(actual_type_35785),canonical_f_35788);
} else {
elem_35728.attachEvent(cljs.core.name(actual_type_35785),canonical_f_35788);
}


var G__35790 = seq__35146_35780;
var G__35791 = chunk__35148_35781;
var G__35792 = count__35149_35782;
var G__35793 = (i__35150_35783 + (1));
seq__35146_35780 = G__35790;
chunk__35148_35781 = G__35791;
count__35149_35782 = G__35792;
i__35150_35783 = G__35793;
continue;
} else {
var temp__5735__auto___35794__$1 = cljs.core.seq(seq__35146_35780);
if(temp__5735__auto___35794__$1){
var seq__35146_35795__$1 = temp__5735__auto___35794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35146_35795__$1)){
var c__4609__auto___35796 = cljs.core.chunk_first(seq__35146_35795__$1);
var G__35797 = cljs.core.chunk_rest(seq__35146_35795__$1);
var G__35798 = c__4609__auto___35796;
var G__35799 = cljs.core.count(c__4609__auto___35796);
var G__35800 = (0);
seq__35146_35780 = G__35797;
chunk__35148_35781 = G__35798;
count__35149_35782 = G__35799;
i__35150_35783 = G__35800;
continue;
} else {
var vec__35251_35801 = cljs.core.first(seq__35146_35795__$1);
var actual_type_35802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251_35801,(0),null);
var factory_35803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251_35801,(1),null);
var canonical_f_35804 = (function (){var G__35255 = (factory_35803.cljs$core$IFn$_invoke$arity$1 ? factory_35803.cljs$core$IFn$_invoke$arity$1(f_35779) : factory_35803.call(null,f_35779));
var fexpr__35254 = (cljs.core.truth_(selector_35729)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35728,selector_35729):cljs.core.identity);
return (fexpr__35254.cljs$core$IFn$_invoke$arity$1 ? fexpr__35254.cljs$core$IFn$_invoke$arity$1(G__35255) : fexpr__35254.call(null,G__35255));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35728,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35729,actual_type_35802,f_35779], null),canonical_f_35804], 0));

if(cljs.core.truth_(elem_35728.addEventListener)){
elem_35728.addEventListener(cljs.core.name(actual_type_35802),canonical_f_35804);
} else {
elem_35728.attachEvent(cljs.core.name(actual_type_35802),canonical_f_35804);
}


var G__35805 = cljs.core.next(seq__35146_35795__$1);
var G__35806 = null;
var G__35807 = (0);
var G__35808 = (0);
seq__35146_35780 = G__35805;
chunk__35148_35781 = G__35806;
count__35149_35782 = G__35807;
i__35150_35783 = G__35808;
continue;
}
} else {
}
}
break;
}

var G__35809 = cljs.core.next(seq__35145_35771__$1);
var G__35810 = null;
var G__35811 = (0);
var G__35812 = (0);
seq__35145_35730 = G__35809;
chunk__35152_35731 = G__35810;
count__35153_35732 = G__35811;
i__35154_35733 = G__35812;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35140){
var G__35141 = cljs.core.first(seq35140);
var seq35140__$1 = cljs.core.next(seq35140);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35141,seq35140__$1);
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
var len__4789__auto___35813 = arguments.length;
var i__4790__auto___35814 = (0);
while(true){
if((i__4790__auto___35814 < len__4789__auto___35813)){
args__4795__auto__.push((arguments[i__4790__auto___35814]));

var G__35815 = (i__4790__auto___35814 + (1));
i__4790__auto___35814 = G__35815;
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

var vec__35258_35816 = dommy.core.elem_and_selector(elem_sel);
var elem_35817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258_35816,(0),null);
var selector_35818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258_35816,(1),null);
var seq__35261_35819 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35268_35820 = null;
var count__35269_35821 = (0);
var i__35270_35822 = (0);
while(true){
if((i__35270_35822 < count__35269_35821)){
var vec__35310_35823 = chunk__35268_35820.cljs$core$IIndexed$_nth$arity$2(null,i__35270_35822);
var orig_type_35824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35310_35823,(0),null);
var f_35825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35310_35823,(1),null);
var seq__35271_35826 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35824,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35824,cljs.core.identity])));
var chunk__35273_35827 = null;
var count__35274_35828 = (0);
var i__35275_35829 = (0);
while(true){
if((i__35275_35829 < count__35274_35828)){
var vec__35319_35830 = chunk__35273_35827.cljs$core$IIndexed$_nth$arity$2(null,i__35275_35829);
var actual_type_35831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319_35830,(0),null);
var __35832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319_35830,(1),null);
var keys_35833 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35831,f_35825], null);
var canonical_f_35834 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35833);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35833], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35831),canonical_f_35834);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35831),canonical_f_35834);
}


var G__35835 = seq__35271_35826;
var G__35836 = chunk__35273_35827;
var G__35837 = count__35274_35828;
var G__35838 = (i__35275_35829 + (1));
seq__35271_35826 = G__35835;
chunk__35273_35827 = G__35836;
count__35274_35828 = G__35837;
i__35275_35829 = G__35838;
continue;
} else {
var temp__5735__auto___35839 = cljs.core.seq(seq__35271_35826);
if(temp__5735__auto___35839){
var seq__35271_35840__$1 = temp__5735__auto___35839;
if(cljs.core.chunked_seq_QMARK_(seq__35271_35840__$1)){
var c__4609__auto___35841 = cljs.core.chunk_first(seq__35271_35840__$1);
var G__35842 = cljs.core.chunk_rest(seq__35271_35840__$1);
var G__35843 = c__4609__auto___35841;
var G__35844 = cljs.core.count(c__4609__auto___35841);
var G__35845 = (0);
seq__35271_35826 = G__35842;
chunk__35273_35827 = G__35843;
count__35274_35828 = G__35844;
i__35275_35829 = G__35845;
continue;
} else {
var vec__35322_35846 = cljs.core.first(seq__35271_35840__$1);
var actual_type_35847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35322_35846,(0),null);
var __35848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35322_35846,(1),null);
var keys_35849 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35847,f_35825], null);
var canonical_f_35850 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35849);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35849], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35847),canonical_f_35850);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35847),canonical_f_35850);
}


var G__35851 = cljs.core.next(seq__35271_35840__$1);
var G__35852 = null;
var G__35853 = (0);
var G__35854 = (0);
seq__35271_35826 = G__35851;
chunk__35273_35827 = G__35852;
count__35274_35828 = G__35853;
i__35275_35829 = G__35854;
continue;
}
} else {
}
}
break;
}

var G__35855 = seq__35261_35819;
var G__35856 = chunk__35268_35820;
var G__35857 = count__35269_35821;
var G__35858 = (i__35270_35822 + (1));
seq__35261_35819 = G__35855;
chunk__35268_35820 = G__35856;
count__35269_35821 = G__35857;
i__35270_35822 = G__35858;
continue;
} else {
var temp__5735__auto___35859 = cljs.core.seq(seq__35261_35819);
if(temp__5735__auto___35859){
var seq__35261_35860__$1 = temp__5735__auto___35859;
if(cljs.core.chunked_seq_QMARK_(seq__35261_35860__$1)){
var c__4609__auto___35861 = cljs.core.chunk_first(seq__35261_35860__$1);
var G__35862 = cljs.core.chunk_rest(seq__35261_35860__$1);
var G__35863 = c__4609__auto___35861;
var G__35864 = cljs.core.count(c__4609__auto___35861);
var G__35865 = (0);
seq__35261_35819 = G__35862;
chunk__35268_35820 = G__35863;
count__35269_35821 = G__35864;
i__35270_35822 = G__35865;
continue;
} else {
var vec__35325_35866 = cljs.core.first(seq__35261_35860__$1);
var orig_type_35867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325_35866,(0),null);
var f_35868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325_35866,(1),null);
var seq__35262_35869 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35867,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35867,cljs.core.identity])));
var chunk__35264_35870 = null;
var count__35265_35871 = (0);
var i__35266_35872 = (0);
while(true){
if((i__35266_35872 < count__35265_35871)){
var vec__35334_35873 = chunk__35264_35870.cljs$core$IIndexed$_nth$arity$2(null,i__35266_35872);
var actual_type_35874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35334_35873,(0),null);
var __35875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35334_35873,(1),null);
var keys_35876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35874,f_35868], null);
var canonical_f_35877 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35876);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35876], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35874),canonical_f_35877);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35874),canonical_f_35877);
}


var G__35878 = seq__35262_35869;
var G__35879 = chunk__35264_35870;
var G__35880 = count__35265_35871;
var G__35881 = (i__35266_35872 + (1));
seq__35262_35869 = G__35878;
chunk__35264_35870 = G__35879;
count__35265_35871 = G__35880;
i__35266_35872 = G__35881;
continue;
} else {
var temp__5735__auto___35882__$1 = cljs.core.seq(seq__35262_35869);
if(temp__5735__auto___35882__$1){
var seq__35262_35883__$1 = temp__5735__auto___35882__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35262_35883__$1)){
var c__4609__auto___35884 = cljs.core.chunk_first(seq__35262_35883__$1);
var G__35885 = cljs.core.chunk_rest(seq__35262_35883__$1);
var G__35886 = c__4609__auto___35884;
var G__35887 = cljs.core.count(c__4609__auto___35884);
var G__35888 = (0);
seq__35262_35869 = G__35885;
chunk__35264_35870 = G__35886;
count__35265_35871 = G__35887;
i__35266_35872 = G__35888;
continue;
} else {
var vec__35337_35889 = cljs.core.first(seq__35262_35883__$1);
var actual_type_35890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35337_35889,(0),null);
var __35891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35337_35889,(1),null);
var keys_35892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35818,actual_type_35890,f_35868], null);
var canonical_f_35893 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35817),keys_35892);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35817,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35892], 0));

if(cljs.core.truth_(elem_35817.removeEventListener)){
elem_35817.removeEventListener(cljs.core.name(actual_type_35890),canonical_f_35893);
} else {
elem_35817.detachEvent(cljs.core.name(actual_type_35890),canonical_f_35893);
}


var G__35894 = cljs.core.next(seq__35262_35883__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35262_35869 = G__35894;
chunk__35264_35870 = G__35895;
count__35265_35871 = G__35896;
i__35266_35872 = G__35897;
continue;
}
} else {
}
}
break;
}

var G__35898 = cljs.core.next(seq__35261_35860__$1);
var G__35899 = null;
var G__35900 = (0);
var G__35901 = (0);
seq__35261_35819 = G__35898;
chunk__35268_35820 = G__35899;
count__35269_35821 = G__35900;
i__35270_35822 = G__35901;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35256){
var G__35257 = cljs.core.first(seq35256);
var seq35256__$1 = cljs.core.next(seq35256);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35257,seq35256__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35902 = arguments.length;
var i__4790__auto___35903 = (0);
while(true){
if((i__4790__auto___35903 < len__4789__auto___35902)){
args__4795__auto__.push((arguments[i__4790__auto___35903]));

var G__35904 = (i__4790__auto___35903 + (1));
i__4790__auto___35903 = G__35904;
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

var vec__35346_35905 = dommy.core.elem_and_selector(elem_sel);
var elem_35906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35346_35905,(0),null);
var selector_35907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35346_35905,(1),null);
var seq__35349_35908 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35350_35909 = null;
var count__35351_35910 = (0);
var i__35352_35911 = (0);
while(true){
if((i__35352_35911 < count__35351_35910)){
var vec__35359_35912 = chunk__35350_35909.cljs$core$IIndexed$_nth$arity$2(null,i__35352_35911);
var type_35913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359_35912,(0),null);
var f_35914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35359_35912,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35913,((function (seq__35349_35908,chunk__35350_35909,count__35351_35910,i__35352_35911,vec__35359_35912,type_35913,f_35914,vec__35346_35905,elem_35906,selector_35907){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35913,dommy$core$this_fn], 0));

return (f_35914.cljs$core$IFn$_invoke$arity$1 ? f_35914.cljs$core$IFn$_invoke$arity$1(e) : f_35914.call(null,e));
});})(seq__35349_35908,chunk__35350_35909,count__35351_35910,i__35352_35911,vec__35359_35912,type_35913,f_35914,vec__35346_35905,elem_35906,selector_35907))
], 0));


var G__35915 = seq__35349_35908;
var G__35916 = chunk__35350_35909;
var G__35917 = count__35351_35910;
var G__35918 = (i__35352_35911 + (1));
seq__35349_35908 = G__35915;
chunk__35350_35909 = G__35916;
count__35351_35910 = G__35917;
i__35352_35911 = G__35918;
continue;
} else {
var temp__5735__auto___35919 = cljs.core.seq(seq__35349_35908);
if(temp__5735__auto___35919){
var seq__35349_35920__$1 = temp__5735__auto___35919;
if(cljs.core.chunked_seq_QMARK_(seq__35349_35920__$1)){
var c__4609__auto___35921 = cljs.core.chunk_first(seq__35349_35920__$1);
var G__35922 = cljs.core.chunk_rest(seq__35349_35920__$1);
var G__35923 = c__4609__auto___35921;
var G__35924 = cljs.core.count(c__4609__auto___35921);
var G__35925 = (0);
seq__35349_35908 = G__35922;
chunk__35350_35909 = G__35923;
count__35351_35910 = G__35924;
i__35352_35911 = G__35925;
continue;
} else {
var vec__35365_35926 = cljs.core.first(seq__35349_35920__$1);
var type_35927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365_35926,(0),null);
var f_35928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365_35926,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35927,((function (seq__35349_35908,chunk__35350_35909,count__35351_35910,i__35352_35911,vec__35365_35926,type_35927,f_35928,seq__35349_35920__$1,temp__5735__auto___35919,vec__35346_35905,elem_35906,selector_35907){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35927,dommy$core$this_fn], 0));

return (f_35928.cljs$core$IFn$_invoke$arity$1 ? f_35928.cljs$core$IFn$_invoke$arity$1(e) : f_35928.call(null,e));
});})(seq__35349_35908,chunk__35350_35909,count__35351_35910,i__35352_35911,vec__35365_35926,type_35927,f_35928,seq__35349_35920__$1,temp__5735__auto___35919,vec__35346_35905,elem_35906,selector_35907))
], 0));


var G__35929 = cljs.core.next(seq__35349_35920__$1);
var G__35930 = null;
var G__35931 = (0);
var G__35932 = (0);
seq__35349_35908 = G__35929;
chunk__35350_35909 = G__35930;
count__35351_35910 = G__35931;
i__35352_35911 = G__35932;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35340){
var G__35341 = cljs.core.first(seq35340);
var seq35340__$1 = cljs.core.next(seq35340);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35341,seq35340__$1);
}));


//# sourceMappingURL=dommy.core.js.map
