goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.marked');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__5735__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__5735__auto__)){
var ws = temp__5735__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__4185__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.leading_space_count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(devcards.util.markdown.is_bullet_item_QMARK_(s)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,margin);
} else {
return clojure.string.trim(s);
}
});
devcards.util.markdown.markdown_to_html = (function devcards$util$markdown$markdown_to_html(markdown_txt){
return marked(markdown_txt);
});
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if((typeof devcards !== 'undefined') && (typeof devcards.util !== 'undefined') && (typeof devcards.util.markdown !== 'undefined') && (typeof devcards.util.markdown.block_parser !== 'undefined')){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41825 = cljs.core.get_global_hierarchy;
return (fexpr__41825.cljs$core$IFn$_invoke$arity$0 ? fexpr__41825.cljs$core$IFn$_invoke$arity$0() : fexpr__41825.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),(function (p__41830,line){
var map__41831 = p__41830;
var map__41831__$1 = (((((!((map__41831 == null))))?(((((map__41831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41831):map__41831);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41831__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?new cljs.core.Keyword(null,"delim","delim",1621565472):new cljs.core.Keyword(null,"line","line",212345235)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stage)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__41833,line){
var map__41834 = p__41833;
var map__41834__$1 = (((((!((map__41834 == null))))?(((((map__41834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41834):map__41834);
var st = map__41834__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41834__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var left_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41834__$1,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,devcards.util.markdown.strip_left_margin(line,left_margin));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__41840,line){
var map__41841 = p__41840;
var map__41841__$1 = (((((!((map__41841 == null))))?(((((map__41841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41841):map__41841);
var st = map__41841__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41841__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085).cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__41846,line){
var map__41847 = p__41846;
var map__41847__$1 = (((((!((map__41847 == null))))?(((((map__41847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41847):map__41847);
var st = map__41847__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41847__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41847__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"lang","lang",-1819677104),((clojure.string.blank_QMARK_(lang))?null:lang),new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085),devcards.util.markdown.leading_space_count(line),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__41849,line){
var map__41850 = p__41849;
var map__41850__$1 = (((((!((map__41850 == null))))?(((((map__41850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41850):map__41850);
var st = map__41850__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41850__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41850__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147),devcards.util.markdown.bullets_left_edge(lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__41853 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__41853__$1 = (((((!((map__41853 == null))))?(((((map__41853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41853):map__41853);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41853__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41853__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(function (p1__41852_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__41852_SHARP_);
}));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41856){
var map__41857 = p__41856;
var map__41857__$1 = (((((!((map__41857 == null))))?(((((map__41857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41857):map__41857);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41857__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.not_empty(content);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});

//# sourceMappingURL=devcards.util.markdown.js.map
