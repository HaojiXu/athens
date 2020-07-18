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
var G__58578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58578) : re_frame.core.dispatch.call(null,G__58578));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58579 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58580 = athens.db.dsdb;
var G__58581 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58579,G__58580,G__58581) : posh.reagent.q.call(null,G__58579,G__58580,G__58581));
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
return cljs.core.boolean$((function (){try{var vec__58583 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58582){if((e58582 instanceof Object)){
var _ = e58582;
return false;
} else {
throw e58582;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58586,editing_uid,ref_groups,timeline_page_QMARK_,show_page_menu_QMARK_,page_menu_position){
var map__58587 = p__58586;
var map__58587__$1 = (((((!((map__58587 == null))))?(((((map__58587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58587):map__58587);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58587__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58587__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58587__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58589 = e.target.value;
var G__58590 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58589,G__58590) : athens.views.node_page.db_handler.call(null,G__58589,G__58590));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (e){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_page_menu_QMARK_,cljs.core.not),cljs.core.reset_BANG_(page_menu_position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.target.getBoundingClientRect().left,new cljs.core.Keyword(null,"y","y",-1757859776),e.target.getBoundingClientRect().bottom], null)));
}),new cljs.core.Keyword(null,"active","active",1895962068),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?true:null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null)], null),(cljs.core.truth_(cljs.core.deref(show_page_menu_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.dropdown.page_menu_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(page_menu_position))),"px"].join('')], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58591(s__58592){
return (new cljs.core.LazySeq(null,(function (){
var s__58592__$1 = s__58592;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58592__$1);
if(temp__5735__auto__){
var s__58592__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58592__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58592__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58594 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58593 = (0);
while(true){
if((i__58593 < size__4581__auto__)){
var map__58595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58593);
var map__58595__$1 = (((((!((map__58595 == null))))?(((((map__58595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58595):map__58595);
var child = map__58595__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58594,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58728 = (i__58593 + (1));
i__58593 = G__58728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58594),athens$views$node_page$node_page_el_$_iter__58591(cljs.core.chunk_rest(s__58592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58594),null);
}
} else {
var map__58597 = cljs.core.first(s__58592__$2);
var map__58597__$1 = (((((!((map__58597 == null))))?(((((map__58597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58597):map__58597);
var child = map__58597__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58591(cljs.core.rest(s__58592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58599(s__58600){
return (new cljs.core.LazySeq(null,(function (){
var s__58600__$1 = s__58600;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58600__$1);
if(temp__5735__auto__){
var s__58600__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58600__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58600__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58602 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58601 = (0);
while(true){
if((i__58601 < size__4581__auto__)){
var vec__58603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58601);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(1),null);
cljs.core.chunk_append(b__58602,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58601,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606(s__58607){
return (new cljs.core.LazySeq(null,((function (i__58601,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58607__$1 = s__58607;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58607__$1);
if(temp__5735__auto____$1){
var s__58607__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58607__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58607__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58609 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58608 = (0);
while(true){
if((i__58608 < size__4581__auto____$1)){
var vec__58610 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58608);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58610,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58610,(1),null);
cljs.core.chunk_append(b__58609,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58608,i__58601,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58608,i__58601,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58608,i__58601,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613(s__58614){
return (new cljs.core.LazySeq(null,((function (i__58608,i__58601,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58614__$1 = s__58614;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58614__$1);
if(temp__5735__auto____$2){
var s__58614__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58614__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58614__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58616 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58615 = (0);
while(true){
if((i__58615 < size__4581__auto____$2)){
var map__58617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58615);
var map__58617__$1 = (((((!((map__58617 == null))))?(((((map__58617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58617):map__58617);
var block = map__58617__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58616,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58615,i__58608,i__58601,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613_$_iter__58619(s__58620){
return (new cljs.core.LazySeq(null,((function (i__58615,i__58608,i__58601,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58620__$1 = s__58620;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58620__$1);
if(temp__5735__auto____$3){
var s__58620__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58620__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58620__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58622 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58621 = (0);
while(true){
if((i__58621 < size__4581__auto____$3)){
var map__58623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58621);
var map__58623__$1 = (((((!((map__58623 == null))))?(((((map__58623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58623):map__58623);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58622,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58621,i__58615,i__58608,i__58601,map__58623,map__58623__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58622,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58621,i__58615,i__58608,i__58601,map__58623,map__58623__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58622,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58729 = (i__58621 + (1));
i__58621 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58622),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613_$_iter__58619(cljs.core.chunk_rest(s__58620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58622),null);
}
} else {
var map__58625 = cljs.core.first(s__58620__$2);
var map__58625__$1 = (((((!((map__58625 == null))))?(((((map__58625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58625):map__58625);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58615,i__58608,i__58601,map__58625,map__58625__$1,title__$1,string,uid__$2,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58615,i__58608,i__58601,map__58625,map__58625__$1,title__$1,string,uid__$2,s__58620__$2,temp__5735__auto____$3,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613_$_iter__58619(cljs.core.rest(s__58620__$2)));
}
} else {
return null;
}
break;
}
});})(i__58615,i__58608,i__58601,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58615,i__58608,i__58601,map__58617,map__58617__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58616,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58730 = (i__58615 + (1));
i__58615 = G__58730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58616),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613(cljs.core.chunk_rest(s__58614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58616),null);
}
} else {
var map__58627 = cljs.core.first(s__58614__$2);
var map__58627__$1 = (((((!((map__58627 == null))))?(((((map__58627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58627):map__58627);
var block = map__58627__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58608,i__58601,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613_$_iter__58629(s__58630){
return (new cljs.core.LazySeq(null,((function (i__58608,i__58601,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58630__$1 = s__58630;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58630__$1);
if(temp__5735__auto____$3){
var s__58630__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58630__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58630__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58632 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58631 = (0);
while(true){
if((i__58631 < size__4581__auto____$2)){
var map__58633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58631);
var map__58633__$1 = (((((!((map__58633 == null))))?(((((map__58633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58633):map__58633);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58633__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58632,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58631,i__58608,i__58601,map__58633,map__58633__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58632,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58631,i__58608,i__58601,map__58633,map__58633__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58632,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58731 = (i__58631 + (1));
i__58631 = G__58731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58632),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613_$_iter__58629(cljs.core.chunk_rest(s__58630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58632),null);
}
} else {
var map__58635 = cljs.core.first(s__58630__$2);
var map__58635__$1 = (((((!((map__58635 == null))))?(((((map__58635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58635):map__58635);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58635__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58608,i__58601,map__58635,map__58635__$1,title__$1,string,uid__$2,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58608,i__58601,map__58635,map__58635__$1,title__$1,string,uid__$2,s__58630__$2,temp__5735__auto____$3,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613_$_iter__58629(cljs.core.rest(s__58630__$2)));
}
} else {
return null;
}
break;
}
});})(i__58608,i__58601,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58608,i__58601,map__58627,map__58627__$1,block,uid__$1,parents,s__58614__$2,temp__5735__auto____$2,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58613(cljs.core.rest(s__58614__$2)));
}
} else {
return null;
}
break;
}
});})(i__58608,i__58601,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58608,i__58601,vec__58610,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58609,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58732 = (i__58608 + (1));
i__58608 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58609),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606(cljs.core.chunk_rest(s__58607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58609),null);
}
} else {
var vec__58637 = cljs.core.first(s__58607__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58601,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58601,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58601,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640(s__58641){
return (new cljs.core.LazySeq(null,((function (i__58601,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58641__$1 = s__58641;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58641__$1);
if(temp__5735__auto____$2){
var s__58641__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58641__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58641__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58643 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58642 = (0);
while(true){
if((i__58642 < size__4581__auto____$1)){
var map__58644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58642);
var map__58644__$1 = (((((!((map__58644 == null))))?(((((map__58644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58644):map__58644);
var block = map__58644__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58643,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58642,i__58601,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640_$_iter__58646(s__58647){
return (new cljs.core.LazySeq(null,((function (i__58642,i__58601,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58647__$1 = s__58647;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58647__$1);
if(temp__5735__auto____$3){
var s__58647__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58647__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58647__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58649 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58648 = (0);
while(true){
if((i__58648 < size__4581__auto____$2)){
var map__58650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58648);
var map__58650__$1 = (((((!((map__58650 == null))))?(((((map__58650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58650):map__58650);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58649,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58648,i__58642,i__58601,map__58650,map__58650__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58648,i__58642,i__58601,map__58650,map__58650__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58649,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58733 = (i__58648 + (1));
i__58648 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58649),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640_$_iter__58646(cljs.core.chunk_rest(s__58647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58649),null);
}
} else {
var map__58652 = cljs.core.first(s__58647__$2);
var map__58652__$1 = (((((!((map__58652 == null))))?(((((map__58652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58652):map__58652);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58642,i__58601,map__58652,map__58652__$1,title__$1,string,uid__$2,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58642,i__58601,map__58652,map__58652__$1,title__$1,string,uid__$2,s__58647__$2,temp__5735__auto____$3,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640_$_iter__58646(cljs.core.rest(s__58647__$2)));
}
} else {
return null;
}
break;
}
});})(i__58642,i__58601,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58642,i__58601,map__58644,map__58644__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58643,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58734 = (i__58642 + (1));
i__58642 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58643),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640(cljs.core.chunk_rest(s__58641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58643),null);
}
} else {
var map__58654 = cljs.core.first(s__58641__$2);
var map__58654__$1 = (((((!((map__58654 == null))))?(((((map__58654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58654):map__58654);
var block = map__58654__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58601,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640_$_iter__58656(s__58657){
return (new cljs.core.LazySeq(null,((function (i__58601,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58657__$1 = s__58657;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58657__$1);
if(temp__5735__auto____$3){
var s__58657__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58657__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58657__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58659 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58658 = (0);
while(true){
if((i__58658 < size__4581__auto____$1)){
var map__58660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58658);
var map__58660__$1 = (((((!((map__58660 == null))))?(((((map__58660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58660):map__58660);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58659,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58658,i__58601,map__58660,map__58660__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58659,s__58657__$2,temp__5735__auto____$3,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58658,i__58601,map__58660,map__58660__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58659,s__58657__$2,temp__5735__auto____$3,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58735 = (i__58658 + (1));
i__58658 = G__58735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58659),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640_$_iter__58656(cljs.core.chunk_rest(s__58657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58659),null);
}
} else {
var map__58662 = cljs.core.first(s__58657__$2);
var map__58662__$1 = (((((!((map__58662 == null))))?(((((map__58662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58662):map__58662);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58601,map__58662,map__58662__$1,title__$1,string,uid__$2,s__58657__$2,temp__5735__auto____$3,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58601,map__58662,map__58662__$1,title__$1,string,uid__$2,s__58657__$2,temp__5735__auto____$3,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640_$_iter__58656(cljs.core.rest(s__58657__$2)));
}
} else {
return null;
}
break;
}
});})(i__58601,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58601,map__58654,map__58654__$1,block,uid__$1,parents,s__58641__$2,temp__5735__auto____$2,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606_$_iter__58640(cljs.core.rest(s__58641__$2)));
}
} else {
return null;
}
break;
}
});})(i__58601,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58601,vec__58637,group_title,group,s__58607__$2,temp__5735__auto____$1,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58606(cljs.core.rest(s__58607__$2)));
}
} else {
return null;
}
break;
}
});})(i__58601,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58601,vec__58603,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58602,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58736 = (i__58601 + (1));
i__58601 = G__58736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58602),athens$views$node_page$node_page_el_$_iter__58599(cljs.core.chunk_rest(s__58600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58602),null);
}
} else {
var vec__58664 = cljs.core.first(s__58600__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58664,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58664,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667(s__58668){
return (new cljs.core.LazySeq(null,(function (){
var s__58668__$1 = s__58668;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58668__$1);
if(temp__5735__auto____$1){
var s__58668__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58668__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58668__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58670 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58669 = (0);
while(true){
if((i__58669 < size__4581__auto__)){
var vec__58671 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58669);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58671,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58671,(1),null);
cljs.core.chunk_append(b__58670,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58669,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58669,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58669,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674(s__58675){
return (new cljs.core.LazySeq(null,((function (i__58669,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58675__$1 = s__58675;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58675__$1);
if(temp__5735__auto____$2){
var s__58675__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58675__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58675__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58677 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58676 = (0);
while(true){
if((i__58676 < size__4581__auto____$1)){
var map__58678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58676);
var map__58678__$1 = (((((!((map__58678 == null))))?(((((map__58678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58678):map__58678);
var block = map__58678__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58677,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58676,i__58669,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674_$_iter__58680(s__58681){
return (new cljs.core.LazySeq(null,((function (i__58676,i__58669,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58681__$1 = s__58681;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58681__$1);
if(temp__5735__auto____$3){
var s__58681__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58681__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58681__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58683 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58682 = (0);
while(true){
if((i__58682 < size__4581__auto____$2)){
var map__58684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58682);
var map__58684__$1 = (((((!((map__58684 == null))))?(((((map__58684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58684):map__58684);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58683,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58682,i__58676,i__58669,map__58684,map__58684__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58683,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58682,i__58676,i__58669,map__58684,map__58684__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58683,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58737 = (i__58682 + (1));
i__58682 = G__58737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58683),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674_$_iter__58680(cljs.core.chunk_rest(s__58681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58683),null);
}
} else {
var map__58686 = cljs.core.first(s__58681__$2);
var map__58686__$1 = (((((!((map__58686 == null))))?(((((map__58686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58686):map__58686);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58676,i__58669,map__58686,map__58686__$1,title__$1,string,uid__$2,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58676,i__58669,map__58686,map__58686__$1,title__$1,string,uid__$2,s__58681__$2,temp__5735__auto____$3,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674_$_iter__58680(cljs.core.rest(s__58681__$2)));
}
} else {
return null;
}
break;
}
});})(i__58676,i__58669,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58676,i__58669,map__58678,map__58678__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58677,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58738 = (i__58676 + (1));
i__58676 = G__58738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58677),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674(cljs.core.chunk_rest(s__58675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58677),null);
}
} else {
var map__58688 = cljs.core.first(s__58675__$2);
var map__58688__$1 = (((((!((map__58688 == null))))?(((((map__58688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58688):map__58688);
var block = map__58688__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58669,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674_$_iter__58690(s__58691){
return (new cljs.core.LazySeq(null,((function (i__58669,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58691__$1 = s__58691;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58691__$1);
if(temp__5735__auto____$3){
var s__58691__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58691__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58691__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58693 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58692 = (0);
while(true){
if((i__58692 < size__4581__auto____$1)){
var map__58694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58692);
var map__58694__$1 = (((((!((map__58694 == null))))?(((((map__58694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58694):map__58694);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58693,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58692,i__58669,map__58694,map__58694__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58693,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58692,i__58669,map__58694,map__58694__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58693,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58739 = (i__58692 + (1));
i__58692 = G__58739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58693),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674_$_iter__58690(cljs.core.chunk_rest(s__58691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58693),null);
}
} else {
var map__58696 = cljs.core.first(s__58691__$2);
var map__58696__$1 = (((((!((map__58696 == null))))?(((((map__58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58696):map__58696);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58669,map__58696,map__58696__$1,title__$1,string,uid__$2,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58669,map__58696,map__58696__$1,title__$1,string,uid__$2,s__58691__$2,temp__5735__auto____$3,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674_$_iter__58690(cljs.core.rest(s__58691__$2)));
}
} else {
return null;
}
break;
}
});})(i__58669,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58669,map__58688,map__58688__$1,block,uid__$1,parents,s__58675__$2,temp__5735__auto____$2,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58674(cljs.core.rest(s__58675__$2)));
}
} else {
return null;
}
break;
}
});})(i__58669,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58669,vec__58671,group_title,group,c__4580__auto__,size__4581__auto__,b__58670,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null));

var G__58740 = (i__58669 + (1));
i__58669 = G__58740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58670),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667(cljs.core.chunk_rest(s__58668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58670),null);
}
} else {
var vec__58698 = cljs.core.first(s__58668__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58698,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58698,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701(s__58702){
return (new cljs.core.LazySeq(null,(function (){
var s__58702__$1 = s__58702;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58702__$1);
if(temp__5735__auto____$2){
var s__58702__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58702__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58702__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58704 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58703 = (0);
while(true){
if((i__58703 < size__4581__auto__)){
var map__58705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58703);
var map__58705__$1 = (((((!((map__58705 == null))))?(((((map__58705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58705):map__58705);
var block = map__58705__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58704,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58703,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701_$_iter__58707(s__58708){
return (new cljs.core.LazySeq(null,((function (i__58703,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
var s__58708__$1 = s__58708;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58708__$1);
if(temp__5735__auto____$3){
var s__58708__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58708__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58708__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58710 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58709 = (0);
while(true){
if((i__58709 < size__4581__auto____$1)){
var map__58711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58709);
var map__58711__$1 = (((((!((map__58711 == null))))?(((((map__58711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58711):map__58711);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58710,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58709,i__58703,map__58711,map__58711__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58709,i__58703,map__58711,map__58711__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58710,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58741 = (i__58709 + (1));
i__58709 = G__58741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58710),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701_$_iter__58707(cljs.core.chunk_rest(s__58708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58710),null);
}
} else {
var map__58713 = cljs.core.first(s__58708__$2);
var map__58713__$1 = (((((!((map__58713 == null))))?(((((map__58713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58713):map__58713);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58713__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58703,map__58713,map__58713__$1,title__$1,string,uid__$2,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58703,map__58713,map__58713__$1,title__$1,string,uid__$2,s__58708__$2,temp__5735__auto____$3,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701_$_iter__58707(cljs.core.rest(s__58708__$2)));
}
} else {
return null;
}
break;
}
});})(i__58703,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
,null,null));
});})(i__58703,map__58705,map__58705__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58704,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58742 = (i__58703 + (1));
i__58703 = G__58742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58704),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701(cljs.core.chunk_rest(s__58702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58704),null);
}
} else {
var map__58715 = cljs.core.first(s__58702__$2);
var map__58715__$1 = (((((!((map__58715 == null))))?(((((map__58715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58715):map__58715);
var block = map__58715__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58715__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58715__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58715,map__58715__$1,block,uid__$1,parents,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701_$_iter__58717(s__58718){
return (new cljs.core.LazySeq(null,(function (){
var s__58718__$1 = s__58718;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58718__$1);
if(temp__5735__auto____$3){
var s__58718__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58718__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58718__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58720 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58719 = (0);
while(true){
if((i__58719 < size__4581__auto__)){
var map__58721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58719);
var map__58721__$1 = (((((!((map__58721 == null))))?(((((map__58721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58721):map__58721);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58720,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58719,map__58721,map__58721__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58720,s__58718__$2,temp__5735__auto____$3,map__58715,map__58715__$1,block,uid__$1,parents,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58719,map__58721,map__58721__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58720,s__58718__$2,temp__5735__auto____$3,map__58715,map__58715__$1,block,uid__$1,parents,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58743 = (i__58719 + (1));
i__58719 = G__58743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58720),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701_$_iter__58717(cljs.core.chunk_rest(s__58718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58720),null);
}
} else {
var map__58723 = cljs.core.first(s__58718__$2);
var map__58723__$1 = (((((!((map__58723 == null))))?(((((map__58723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58723):map__58723);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58723__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58723,map__58723__$1,title__$1,string,uid__$2,s__58718__$2,temp__5735__auto____$3,map__58715,map__58715__$1,block,uid__$1,parents,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58723,map__58723__$1,title__$1,string,uid__$2,s__58718__$2,temp__5735__auto____$3,map__58715,map__58715__$1,block,uid__$1,parents,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701_$_iter__58717(cljs.core.rest(s__58718__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58715,map__58715__$1,block,uid__$1,parents,s__58702__$2,temp__5735__auto____$2,vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667_$_iter__58701(cljs.core.rest(s__58702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58698,group_title,group,s__58668__$2,temp__5735__auto____$1,vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58599_$_iter__58667(cljs.core.rest(s__58668__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58664,linked_or_unlinked,refs,s__58600__$2,temp__5735__auto__,map__58587,map__58587__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58599(cljs.core.rest(s__58600__$2)));
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
var map__58725 = athens.db.get_node_document(ident);
var map__58725__$1 = (((((!((map__58725 == null))))?(((((map__58725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58725):map__58725);
var node = map__58725__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58727) : re_frame.core.subscribe.call(null,G__58727));
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
