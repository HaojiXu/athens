goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('athens.views.dropdown');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0 0.2em 1rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.page_menu_toggle_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.375rem 0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-100%, -50%)"], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58579) : re_frame.core.dispatch.call(null,G__58579));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58580 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58581 = athens.db.dsdb;
var G__58582 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58580,G__58581,G__58582) : posh.reagent.q.call(null,G__58580,G__58581,G__58582));
})());
});
athens.views.node_page.merge_parents_and_block = (function athens$views$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.views.node_page.group_by_parent = (function athens$views$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.views.node_page.get_data = (function athens$views$node_page$get_data(pattern){
return cljs.core.seq(athens.views.node_page.group_by_parent(athens.views.node_page.merge_parents_and_block(athens.views.node_page.get_ref_ids(pattern))));
});
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58584 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58584,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58584,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58584,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58583){if((e58583 instanceof Object)){
var _ = e58583;
return false;
} else {
throw e58583;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58587,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position){
var map__58588 = p__58587;
var map__58588__$1 = (((((!((map__58588 == null))))?(((((map__58588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58588):map__58588);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58590 = e.target.value;
var G__58591 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58590,G__58591) : athens.views.node_page.db_handler.call(null,G__58590,G__58591));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (e){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_page_menu_QMARK_,cljs.core.not),cljs.core.reset_BANG_(page_menu_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.target.getBoundingClientRect().left,new cljs.core.Keyword(null,"y","y",-1757859776),e.target.getBoundingClientRect().bottom], null)));
}),new cljs.core.Keyword(null,"active","active",1895962068),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?true:null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null)], null),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.page_menu_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join('')], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58592(s__58593){
return (new cljs.core.LazySeq(null,(function (){
var s__58593__$1 = s__58593;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58593__$1);
if(temp__5735__auto__){
var s__58593__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58593__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58593__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58595 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58594 = (0);
while(true){
if((i__58594 < size__4581__auto__)){
var map__58596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58594);
var map__58596__$1 = (((((!((map__58596 == null))))?(((((map__58596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58596):map__58596);
var child = map__58596__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58595,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58729 = (i__58594 + (1));
i__58594 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58595),athens$views$node_page$node_page_el_$_iter__58592(cljs.core.chunk_rest(s__58593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58595),null);
}
} else {
var map__58598 = cljs.core.first(s__58593__$2);
var map__58598__$1 = (((((!((map__58598 == null))))?(((((map__58598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58598):map__58598);
var child = map__58598__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58592(cljs.core.rest(s__58593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58600(s__58601){
return (new cljs.core.LazySeq(null,(function (){
var s__58601__$1 = s__58601;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58601__$1);
if(temp__5735__auto__){
var s__58601__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58601__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58601__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58603 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58602 = (0);
while(true){
if((i__58602 < size__4581__auto__)){
var vec__58604 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58602);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58604,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58604,(1),null);
cljs.core.chunk_append(b__58603,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58602,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607(s__58608){
return (new cljs.core.LazySeq(null,((function (i__58602,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58608__$1 = s__58608;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58608__$1);
if(temp__5735__auto____$1){
var s__58608__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58608__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58608__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58610 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58609 = (0);
while(true){
if((i__58609 < size__4581__auto____$1)){
var vec__58611 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58609);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58611,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58611,(1),null);
cljs.core.chunk_append(b__58610,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58609,i__58602,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58609,i__58602,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58609,i__58602,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614(s__58615){
return (new cljs.core.LazySeq(null,((function (i__58609,i__58602,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58615__$1 = s__58615;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58615__$1);
if(temp__5735__auto____$2){
var s__58615__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58615__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58615__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58617 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58616 = (0);
while(true){
if((i__58616 < size__4581__auto____$2)){
var map__58618 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58616);
var map__58618__$1 = (((((!((map__58618 == null))))?(((((map__58618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58618):map__58618);
var block = map__58618__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58617,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58616,i__58609,i__58602,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614_$_iter__58620(s__58621){
return (new cljs.core.LazySeq(null,((function (i__58616,i__58609,i__58602,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58621__$1 = s__58621;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58621__$1);
if(temp__5735__auto____$3){
var s__58621__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58621__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58621__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58623 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58622 = (0);
while(true){
if((i__58622 < size__4581__auto____$3)){
var map__58624 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58622);
var map__58624__$1 = (((((!((map__58624 == null))))?(((((map__58624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58624):map__58624);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58623,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58622,i__58616,i__58609,i__58602,map__58624,map__58624__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58623,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58622,i__58616,i__58609,i__58602,map__58624,map__58624__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58623,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58730 = (i__58622 + (1));
i__58622 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58623),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614_$_iter__58620(cljs.core.chunk_rest(s__58621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58623),null);
}
} else {
var map__58626 = cljs.core.first(s__58621__$2);
var map__58626__$1 = (((((!((map__58626 == null))))?(((((map__58626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58626):map__58626);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58616,i__58609,i__58602,map__58626,map__58626__$1,title__$1,string,uid__$2,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58616,i__58609,i__58602,map__58626,map__58626__$1,title__$1,string,uid__$2,s__58621__$2,temp__5735__auto____$3,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614_$_iter__58620(cljs.core.rest(s__58621__$2)));
}
} else {
return null;
}
break;
}
});})(i__58616,i__58609,i__58602,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58616,i__58609,i__58602,map__58618,map__58618__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58617,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58731 = (i__58616 + (1));
i__58616 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58617),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614(cljs.core.chunk_rest(s__58615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58617),null);
}
} else {
var map__58628 = cljs.core.first(s__58615__$2);
var map__58628__$1 = (((((!((map__58628 == null))))?(((((map__58628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58628):map__58628);
var block = map__58628__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58609,i__58602,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614_$_iter__58630(s__58631){
return (new cljs.core.LazySeq(null,((function (i__58609,i__58602,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58631__$1 = s__58631;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58631__$1);
if(temp__5735__auto____$3){
var s__58631__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58631__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58631__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58633 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58632 = (0);
while(true){
if((i__58632 < size__4581__auto____$2)){
var map__58634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58632);
var map__58634__$1 = (((((!((map__58634 == null))))?(((((map__58634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58634):map__58634);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58633,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58632,i__58609,i__58602,map__58634,map__58634__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58633,s__58631__$2,temp__5735__auto____$3,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58632,i__58609,i__58602,map__58634,map__58634__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58633,s__58631__$2,temp__5735__auto____$3,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58732 = (i__58632 + (1));
i__58632 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58633),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614_$_iter__58630(cljs.core.chunk_rest(s__58631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58633),null);
}
} else {
var map__58636 = cljs.core.first(s__58631__$2);
var map__58636__$1 = (((((!((map__58636 == null))))?(((((map__58636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58636):map__58636);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58609,i__58602,map__58636,map__58636__$1,title__$1,string,uid__$2,s__58631__$2,temp__5735__auto____$3,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58609,i__58602,map__58636,map__58636__$1,title__$1,string,uid__$2,s__58631__$2,temp__5735__auto____$3,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614_$_iter__58630(cljs.core.rest(s__58631__$2)));
}
} else {
return null;
}
break;
}
});})(i__58609,i__58602,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58609,i__58602,map__58628,map__58628__$1,block,uid__$1,parents,s__58615__$2,temp__5735__auto____$2,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58614(cljs.core.rest(s__58615__$2)));
}
} else {
return null;
}
break;
}
});})(i__58609,i__58602,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58609,i__58602,vec__58611,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58610,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58733 = (i__58609 + (1));
i__58609 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58610),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607(cljs.core.chunk_rest(s__58608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58610),null);
}
} else {
var vec__58638 = cljs.core.first(s__58608__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58638,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58638,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58602,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58602,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58602,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641(s__58642){
return (new cljs.core.LazySeq(null,((function (i__58602,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58642__$1 = s__58642;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58642__$1);
if(temp__5735__auto____$2){
var s__58642__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58642__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58642__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58644 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58643 = (0);
while(true){
if((i__58643 < size__4581__auto____$1)){
var map__58645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58643);
var map__58645__$1 = (((((!((map__58645 == null))))?(((((map__58645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58645):map__58645);
var block = map__58645__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58644,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58643,i__58602,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641_$_iter__58647(s__58648){
return (new cljs.core.LazySeq(null,((function (i__58643,i__58602,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58648__$1 = s__58648;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58648__$1);
if(temp__5735__auto____$3){
var s__58648__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58648__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58648__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58650 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58649 = (0);
while(true){
if((i__58649 < size__4581__auto____$2)){
var map__58651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58649);
var map__58651__$1 = (((((!((map__58651 == null))))?(((((map__58651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58651):map__58651);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58649,i__58643,i__58602,map__58651,map__58651__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58650,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58649,i__58643,i__58602,map__58651,map__58651__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58650,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58734 = (i__58649 + (1));
i__58649 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641_$_iter__58647(cljs.core.chunk_rest(s__58648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),null);
}
} else {
var map__58653 = cljs.core.first(s__58648__$2);
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58643,i__58602,map__58653,map__58653__$1,title__$1,string,uid__$2,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58643,i__58602,map__58653,map__58653__$1,title__$1,string,uid__$2,s__58648__$2,temp__5735__auto____$3,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641_$_iter__58647(cljs.core.rest(s__58648__$2)));
}
} else {
return null;
}
break;
}
});})(i__58643,i__58602,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58643,i__58602,map__58645,map__58645__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58644,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58735 = (i__58643 + (1));
i__58643 = G__58735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58644),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641(cljs.core.chunk_rest(s__58642__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58644),null);
}
} else {
var map__58655 = cljs.core.first(s__58642__$2);
var map__58655__$1 = (((((!((map__58655 == null))))?(((((map__58655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58655):map__58655);
var block = map__58655__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58602,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641_$_iter__58657(s__58658){
return (new cljs.core.LazySeq(null,((function (i__58602,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58658__$1 = s__58658;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58658__$1);
if(temp__5735__auto____$3){
var s__58658__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58658__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58658__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58660 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58659 = (0);
while(true){
if((i__58659 < size__4581__auto____$1)){
var map__58661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58659);
var map__58661__$1 = (((((!((map__58661 == null))))?(((((map__58661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58661):map__58661);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58660,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58659,i__58602,map__58661,map__58661__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58660,s__58658__$2,temp__5735__auto____$3,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58659,i__58602,map__58661,map__58661__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58660,s__58658__$2,temp__5735__auto____$3,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58736 = (i__58659 + (1));
i__58659 = G__58736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58660),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641_$_iter__58657(cljs.core.chunk_rest(s__58658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58660),null);
}
} else {
var map__58663 = cljs.core.first(s__58658__$2);
var map__58663__$1 = (((((!((map__58663 == null))))?(((((map__58663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58663):map__58663);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58602,map__58663,map__58663__$1,title__$1,string,uid__$2,s__58658__$2,temp__5735__auto____$3,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58602,map__58663,map__58663__$1,title__$1,string,uid__$2,s__58658__$2,temp__5735__auto____$3,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641_$_iter__58657(cljs.core.rest(s__58658__$2)));
}
} else {
return null;
}
break;
}
});})(i__58602,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58602,map__58655,map__58655__$1,block,uid__$1,parents,s__58642__$2,temp__5735__auto____$2,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607_$_iter__58641(cljs.core.rest(s__58642__$2)));
}
} else {
return null;
}
break;
}
});})(i__58602,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58602,vec__58638,group_title,group,s__58608__$2,temp__5735__auto____$1,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58607(cljs.core.rest(s__58608__$2)));
}
} else {
return null;
}
break;
}
});})(i__58602,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58602,vec__58604,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58603,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58737 = (i__58602 + (1));
i__58602 = G__58737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58603),athens$views$node_page$node_page_el_$_iter__58600(cljs.core.chunk_rest(s__58601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58603),null);
}
} else {
var vec__58665 = cljs.core.first(s__58601__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58665,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58665,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668(s__58669){
return (new cljs.core.LazySeq(null,(function (){
var s__58669__$1 = s__58669;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58669__$1);
if(temp__5735__auto____$1){
var s__58669__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58669__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58669__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58671 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58670 = (0);
while(true){
if((i__58670 < size__4581__auto__)){
var vec__58672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58670);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58672,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58672,(1),null);
cljs.core.chunk_append(b__58671,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58670,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58670,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58670,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675(s__58676){
return (new cljs.core.LazySeq(null,((function (i__58670,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58676__$1 = s__58676;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58676__$1);
if(temp__5735__auto____$2){
var s__58676__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58676__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58676__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58678 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58677 = (0);
while(true){
if((i__58677 < size__4581__auto____$1)){
var map__58679 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58677);
var map__58679__$1 = (((((!((map__58679 == null))))?(((((map__58679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58679):map__58679);
var block = map__58679__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58678,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58677,i__58670,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675_$_iter__58681(s__58682){
return (new cljs.core.LazySeq(null,((function (i__58677,i__58670,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58682__$1 = s__58682;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58682__$1);
if(temp__5735__auto____$3){
var s__58682__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58682__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58682__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58684 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58683 = (0);
while(true){
if((i__58683 < size__4581__auto____$2)){
var map__58685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58683);
var map__58685__$1 = (((((!((map__58685 == null))))?(((((map__58685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58685):map__58685);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58684,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58683,i__58677,i__58670,map__58685,map__58685__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58684,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58683,i__58677,i__58670,map__58685,map__58685__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58684,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58738 = (i__58683 + (1));
i__58683 = G__58738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58684),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675_$_iter__58681(cljs.core.chunk_rest(s__58682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58684),null);
}
} else {
var map__58687 = cljs.core.first(s__58682__$2);
var map__58687__$1 = (((((!((map__58687 == null))))?(((((map__58687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58687):map__58687);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58677,i__58670,map__58687,map__58687__$1,title__$1,string,uid__$2,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58677,i__58670,map__58687,map__58687__$1,title__$1,string,uid__$2,s__58682__$2,temp__5735__auto____$3,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675_$_iter__58681(cljs.core.rest(s__58682__$2)));
}
} else {
return null;
}
break;
}
});})(i__58677,i__58670,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58677,i__58670,map__58679,map__58679__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58678,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58739 = (i__58677 + (1));
i__58677 = G__58739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58678),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675(cljs.core.chunk_rest(s__58676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58678),null);
}
} else {
var map__58689 = cljs.core.first(s__58676__$2);
var map__58689__$1 = (((((!((map__58689 == null))))?(((((map__58689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58689):map__58689);
var block = map__58689__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58670,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675_$_iter__58691(s__58692){
return (new cljs.core.LazySeq(null,((function (i__58670,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58692__$1 = s__58692;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58692__$1);
if(temp__5735__auto____$3){
var s__58692__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58692__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58692__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58694 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58693 = (0);
while(true){
if((i__58693 < size__4581__auto____$1)){
var map__58695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58693);
var map__58695__$1 = (((((!((map__58695 == null))))?(((((map__58695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58695):map__58695);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58694,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58693,i__58670,map__58695,map__58695__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58694,s__58692__$2,temp__5735__auto____$3,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58693,i__58670,map__58695,map__58695__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58694,s__58692__$2,temp__5735__auto____$3,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58740 = (i__58693 + (1));
i__58693 = G__58740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58694),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675_$_iter__58691(cljs.core.chunk_rest(s__58692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58694),null);
}
} else {
var map__58697 = cljs.core.first(s__58692__$2);
var map__58697__$1 = (((((!((map__58697 == null))))?(((((map__58697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58697):map__58697);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58670,map__58697,map__58697__$1,title__$1,string,uid__$2,s__58692__$2,temp__5735__auto____$3,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58670,map__58697,map__58697__$1,title__$1,string,uid__$2,s__58692__$2,temp__5735__auto____$3,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675_$_iter__58691(cljs.core.rest(s__58692__$2)));
}
} else {
return null;
}
break;
}
});})(i__58670,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58670,map__58689,map__58689__$1,block,uid__$1,parents,s__58676__$2,temp__5735__auto____$2,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58675(cljs.core.rest(s__58676__$2)));
}
} else {
return null;
}
break;
}
});})(i__58670,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58670,vec__58672,group_title,group,c__4580__auto__,size__4581__auto__,b__58671,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58741 = (i__58670 + (1));
i__58670 = G__58741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58671),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668(cljs.core.chunk_rest(s__58669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58671),null);
}
} else {
var vec__58699 = cljs.core.first(s__58669__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58699,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58699,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702(s__58703){
return (new cljs.core.LazySeq(null,(function (){
var s__58703__$1 = s__58703;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58703__$1);
if(temp__5735__auto____$2){
var s__58703__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58703__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58703__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58705 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58704 = (0);
while(true){
if((i__58704 < size__4581__auto__)){
var map__58706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58704);
var map__58706__$1 = (((((!((map__58706 == null))))?(((((map__58706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58706):map__58706);
var block = map__58706__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58705,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58704,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702_$_iter__58708(s__58709){
return (new cljs.core.LazySeq(null,((function (i__58704,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
var s__58709__$1 = s__58709;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58709__$1);
if(temp__5735__auto____$3){
var s__58709__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58709__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58709__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58711 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58710 = (0);
while(true){
if((i__58710 < size__4581__auto____$1)){
var map__58712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58710);
var map__58712__$1 = (((((!((map__58712 == null))))?(((((map__58712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58712):map__58712);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58711,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58710,i__58704,map__58712,map__58712__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58711,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58710,i__58704,map__58712,map__58712__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58711,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58742 = (i__58710 + (1));
i__58710 = G__58742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58711),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702_$_iter__58708(cljs.core.chunk_rest(s__58709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58711),null);
}
} else {
var map__58714 = cljs.core.first(s__58709__$2);
var map__58714__$1 = (((((!((map__58714 == null))))?(((((map__58714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58714):map__58714);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58704,map__58714,map__58714__$1,title__$1,string,uid__$2,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58704,map__58714,map__58714__$1,title__$1,string,uid__$2,s__58709__$2,temp__5735__auto____$3,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702_$_iter__58708(cljs.core.rest(s__58709__$2)));
}
} else {
return null;
}
break;
}
});})(i__58704,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
,null,null));
});})(i__58704,map__58706,map__58706__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58705,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58743 = (i__58704 + (1));
i__58704 = G__58743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58705),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702(cljs.core.chunk_rest(s__58703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58705),null);
}
} else {
var map__58716 = cljs.core.first(s__58703__$2);
var map__58716__$1 = (((((!((map__58716 == null))))?(((((map__58716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58716):map__58716);
var block = map__58716__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58716,map__58716__$1,block,uid__$1,parents,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702_$_iter__58718(s__58719){
return (new cljs.core.LazySeq(null,(function (){
var s__58719__$1 = s__58719;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58719__$1);
if(temp__5735__auto____$3){
var s__58719__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58719__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58719__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58721 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58720 = (0);
while(true){
if((i__58720 < size__4581__auto__)){
var map__58722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58720);
var map__58722__$1 = (((((!((map__58722 == null))))?(((((map__58722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58722):map__58722);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58721,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58720,map__58722,map__58722__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58721,s__58719__$2,temp__5735__auto____$3,map__58716,map__58716__$1,block,uid__$1,parents,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58720,map__58722,map__58722__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58721,s__58719__$2,temp__5735__auto____$3,map__58716,map__58716__$1,block,uid__$1,parents,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58744 = (i__58720 + (1));
i__58720 = G__58744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58721),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702_$_iter__58718(cljs.core.chunk_rest(s__58719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58721),null);
}
} else {
var map__58724 = cljs.core.first(s__58719__$2);
var map__58724__$1 = (((((!((map__58724 == null))))?(((((map__58724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58724):map__58724);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58724,map__58724__$1,title__$1,string,uid__$2,s__58719__$2,temp__5735__auto____$3,map__58716,map__58716__$1,block,uid__$1,parents,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58724,map__58724__$1,title__$1,string,uid__$2,s__58719__$2,temp__5735__auto____$3,map__58716,map__58716__$1,block,uid__$1,parents,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702_$_iter__58718(cljs.core.rest(s__58719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58716,map__58716__$1,block,uid__$1,parents,s__58703__$2,temp__5735__auto____$2,vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668_$_iter__58702(cljs.core.rest(s__58703__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58699,group_title,group,s__58669__$2,temp__5735__auto____$1,vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58600_$_iter__58668(cljs.core.rest(s__58669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58665,linked_or_unlinked,refs,s__58601__$2,temp__5735__auto__,map__58588,map__58588__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58600(cljs.core.rest(s__58601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58726 = athens.db.get_node_document(ident);
var map__58726__$1 = (((((!((map__58726 == null))))?(((((map__58726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58726):map__58726);
var node = map__58726__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58728) : re_frame.core.subscribe.call(null,G__58728));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
var show_page_menu_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var page_menu_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
