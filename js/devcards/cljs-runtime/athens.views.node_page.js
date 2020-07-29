goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.util');
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
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58580 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58579){if((e58579 instanceof Object)){
var _ = e58579;
return false;
} else {
throw e58579;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
var G__58583_58731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58583_58731) : re_frame.core.dispatch.call(null,G__58583_58731));

var G__58584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58584) : re_frame.core.dispatch.call(null,G__58584));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58585 = block;
var map__58585__$1 = (((((!((map__58585 == null))))?(((((map__58585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58585):map__58585);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58585__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58585__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58585__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58585__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58586 = cljs.core.deref(state);
var map__58586__$1 = (((((!((map__58586 == null))))?(((((map__58586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58586):map__58586);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58589 = e.target.value;
var G__58590 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58589,G__58590) : athens.views.node_page.db_handler.call(null,G__58589,G__58590));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58591) : re_frame.core.dispatch.call(null,G__58591));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58592) : re_frame.core.dispatch.call(null,G__58592));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

var G__58593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58593) : re_frame.core.dispatch.call(null,G__58593));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58594(s__58595){
return (new cljs.core.LazySeq(null,(function (){
var s__58595__$1 = s__58595;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58595__$1);
if(temp__5735__auto__){
var s__58595__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58595__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58595__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58597 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58596 = (0);
while(true){
if((i__58596 < size__4581__auto__)){
var map__58598 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58596);
var map__58598__$1 = (((((!((map__58598 == null))))?(((((map__58598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58598):map__58598);
var child = map__58598__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58597,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58732 = (i__58596 + (1));
i__58596 = G__58732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58597),athens$views$node_page$node_page_el_$_iter__58594(cljs.core.chunk_rest(s__58595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58597),null);
}
} else {
var map__58600 = cljs.core.first(s__58595__$2);
var map__58600__$1 = (((((!((map__58600 == null))))?(((((map__58600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58600):map__58600);
var child = map__58600__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58594(cljs.core.rest(s__58595__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58602(s__58603){
return (new cljs.core.LazySeq(null,(function (){
var s__58603__$1 = s__58603;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58603__$1);
if(temp__5735__auto__){
var s__58603__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58603__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58603__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58605 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58604 = (0);
while(true){
if((i__58604 < size__4581__auto__)){
var vec__58606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58604);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58606,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58606,(1),null);
cljs.core.chunk_append(b__58605,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58604,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609(s__58610){
return (new cljs.core.LazySeq(null,((function (i__58604,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58610__$1 = s__58610;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58610__$1);
if(temp__5735__auto____$1){
var s__58610__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58610__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58610__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58612 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58611 = (0);
while(true){
if((i__58611 < size__4581__auto____$1)){
var vec__58613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58611);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58613,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58613,(1),null);
cljs.core.chunk_append(b__58612,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58611,i__58604,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58611,i__58604,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58611,i__58604,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616(s__58617){
return (new cljs.core.LazySeq(null,((function (i__58611,i__58604,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58617__$1 = s__58617;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58617__$1);
if(temp__5735__auto____$2){
var s__58617__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58617__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58617__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58619 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58618 = (0);
while(true){
if((i__58618 < size__4581__auto____$2)){
var map__58620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58618);
var map__58620__$1 = (((((!((map__58620 == null))))?(((((map__58620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58620):map__58620);
var block__$1 = map__58620__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58619,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58618,i__58611,i__58604,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616_$_iter__58622(s__58623){
return (new cljs.core.LazySeq(null,((function (i__58618,i__58611,i__58604,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58623__$1 = s__58623;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58623__$1);
if(temp__5735__auto____$3){
var s__58623__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58623__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58623__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58625 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58624 = (0);
while(true){
if((i__58624 < size__4581__auto____$3)){
var map__58626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58624);
var map__58626__$1 = (((((!((map__58626 == null))))?(((((map__58626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58626):map__58626);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58625,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58624,i__58618,i__58611,i__58604,map__58626,map__58626__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58625,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58624,i__58618,i__58611,i__58604,map__58626,map__58626__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58625,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58733 = (i__58624 + (1));
i__58624 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58625),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616_$_iter__58622(cljs.core.chunk_rest(s__58623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58625),null);
}
} else {
var map__58628 = cljs.core.first(s__58623__$2);
var map__58628__$1 = (((((!((map__58628 == null))))?(((((map__58628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58628):map__58628);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58618,i__58611,i__58604,map__58628,map__58628__$1,title__$1,string,uid__$2,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58618,i__58611,i__58604,map__58628,map__58628__$1,title__$1,string,uid__$2,s__58623__$2,temp__5735__auto____$3,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616_$_iter__58622(cljs.core.rest(s__58623__$2)));
}
} else {
return null;
}
break;
}
});})(i__58618,i__58611,i__58604,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58618,i__58611,i__58604,map__58620,map__58620__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58619,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58734 = (i__58618 + (1));
i__58618 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58619),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616(cljs.core.chunk_rest(s__58617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58619),null);
}
} else {
var map__58630 = cljs.core.first(s__58617__$2);
var map__58630__$1 = (((((!((map__58630 == null))))?(((((map__58630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58630):map__58630);
var block__$1 = map__58630__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58611,i__58604,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616_$_iter__58632(s__58633){
return (new cljs.core.LazySeq(null,((function (i__58611,i__58604,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58633__$1 = s__58633;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58633__$1);
if(temp__5735__auto____$3){
var s__58633__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58633__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58633__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58635 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58634 = (0);
while(true){
if((i__58634 < size__4581__auto____$2)){
var map__58636 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58634);
var map__58636__$1 = (((((!((map__58636 == null))))?(((((map__58636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58636):map__58636);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58635,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58634,i__58611,i__58604,map__58636,map__58636__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58635,s__58633__$2,temp__5735__auto____$3,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58634,i__58611,i__58604,map__58636,map__58636__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58635,s__58633__$2,temp__5735__auto____$3,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58735 = (i__58634 + (1));
i__58634 = G__58735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58635),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616_$_iter__58632(cljs.core.chunk_rest(s__58633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58635),null);
}
} else {
var map__58638 = cljs.core.first(s__58633__$2);
var map__58638__$1 = (((((!((map__58638 == null))))?(((((map__58638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58638):map__58638);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58611,i__58604,map__58638,map__58638__$1,title__$1,string,uid__$2,s__58633__$2,temp__5735__auto____$3,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58611,i__58604,map__58638,map__58638__$1,title__$1,string,uid__$2,s__58633__$2,temp__5735__auto____$3,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616_$_iter__58632(cljs.core.rest(s__58633__$2)));
}
} else {
return null;
}
break;
}
});})(i__58611,i__58604,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58611,i__58604,map__58630,map__58630__$1,block__$1,uid__$1,parents,s__58617__$2,temp__5735__auto____$2,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58616(cljs.core.rest(s__58617__$2)));
}
} else {
return null;
}
break;
}
});})(i__58611,i__58604,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58611,i__58604,vec__58613,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58612,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58736 = (i__58611 + (1));
i__58611 = G__58736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58612),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609(cljs.core.chunk_rest(s__58610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58612),null);
}
} else {
var vec__58640 = cljs.core.first(s__58610__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58640,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58640,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58604,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58604,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58604,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643(s__58644){
return (new cljs.core.LazySeq(null,((function (i__58604,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58644__$1 = s__58644;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58644__$1);
if(temp__5735__auto____$2){
var s__58644__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58644__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58644__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58646 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58645 = (0);
while(true){
if((i__58645 < size__4581__auto____$1)){
var map__58647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58645);
var map__58647__$1 = (((((!((map__58647 == null))))?(((((map__58647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58647):map__58647);
var block__$1 = map__58647__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58646,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58645,i__58604,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643_$_iter__58649(s__58650){
return (new cljs.core.LazySeq(null,((function (i__58645,i__58604,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58650__$1 = s__58650;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58650__$1);
if(temp__5735__auto____$3){
var s__58650__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58650__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58650__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58652 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58651 = (0);
while(true){
if((i__58651 < size__4581__auto____$2)){
var map__58653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58651);
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58652,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58651,i__58645,i__58604,map__58653,map__58653__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58652,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58651,i__58645,i__58604,map__58653,map__58653__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58652,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58737 = (i__58651 + (1));
i__58651 = G__58737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58652),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643_$_iter__58649(cljs.core.chunk_rest(s__58650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58652),null);
}
} else {
var map__58655 = cljs.core.first(s__58650__$2);
var map__58655__$1 = (((((!((map__58655 == null))))?(((((map__58655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58655):map__58655);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58655__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58645,i__58604,map__58655,map__58655__$1,title__$1,string,uid__$2,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58645,i__58604,map__58655,map__58655__$1,title__$1,string,uid__$2,s__58650__$2,temp__5735__auto____$3,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643_$_iter__58649(cljs.core.rest(s__58650__$2)));
}
} else {
return null;
}
break;
}
});})(i__58645,i__58604,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58645,i__58604,map__58647,map__58647__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58646,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58738 = (i__58645 + (1));
i__58645 = G__58738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58646),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643(cljs.core.chunk_rest(s__58644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58646),null);
}
} else {
var map__58657 = cljs.core.first(s__58644__$2);
var map__58657__$1 = (((((!((map__58657 == null))))?(((((map__58657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58657):map__58657);
var block__$1 = map__58657__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58604,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643_$_iter__58659(s__58660){
return (new cljs.core.LazySeq(null,((function (i__58604,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58660__$1 = s__58660;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58660__$1);
if(temp__5735__auto____$3){
var s__58660__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58660__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58660__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58662 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58661 = (0);
while(true){
if((i__58661 < size__4581__auto____$1)){
var map__58663 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58661);
var map__58663__$1 = (((((!((map__58663 == null))))?(((((map__58663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58663):map__58663);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58662,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58661,i__58604,map__58663,map__58663__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58662,s__58660__$2,temp__5735__auto____$3,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58661,i__58604,map__58663,map__58663__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58662,s__58660__$2,temp__5735__auto____$3,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58739 = (i__58661 + (1));
i__58661 = G__58739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58662),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643_$_iter__58659(cljs.core.chunk_rest(s__58660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58662),null);
}
} else {
var map__58665 = cljs.core.first(s__58660__$2);
var map__58665__$1 = (((((!((map__58665 == null))))?(((((map__58665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58665):map__58665);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58604,map__58665,map__58665__$1,title__$1,string,uid__$2,s__58660__$2,temp__5735__auto____$3,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58604,map__58665,map__58665__$1,title__$1,string,uid__$2,s__58660__$2,temp__5735__auto____$3,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643_$_iter__58659(cljs.core.rest(s__58660__$2)));
}
} else {
return null;
}
break;
}
});})(i__58604,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58604,map__58657,map__58657__$1,block__$1,uid__$1,parents,s__58644__$2,temp__5735__auto____$2,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609_$_iter__58643(cljs.core.rest(s__58644__$2)));
}
} else {
return null;
}
break;
}
});})(i__58604,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58604,vec__58640,group_title,group,s__58610__$2,temp__5735__auto____$1,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58609(cljs.core.rest(s__58610__$2)));
}
} else {
return null;
}
break;
}
});})(i__58604,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58604,vec__58606,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58605,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58740 = (i__58604 + (1));
i__58604 = G__58740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58605),athens$views$node_page$node_page_el_$_iter__58602(cljs.core.chunk_rest(s__58603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58605),null);
}
} else {
var vec__58667 = cljs.core.first(s__58603__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58667,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58667,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670(s__58671){
return (new cljs.core.LazySeq(null,(function (){
var s__58671__$1 = s__58671;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58671__$1);
if(temp__5735__auto____$1){
var s__58671__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58671__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58671__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58673 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58672 = (0);
while(true){
if((i__58672 < size__4581__auto__)){
var vec__58674 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58672);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58674,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58674,(1),null);
cljs.core.chunk_append(b__58673,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58672,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58672,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58672,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677(s__58678){
return (new cljs.core.LazySeq(null,((function (i__58672,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58678__$1 = s__58678;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58678__$1);
if(temp__5735__auto____$2){
var s__58678__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58678__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58678__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58680 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58679 = (0);
while(true){
if((i__58679 < size__4581__auto____$1)){
var map__58681 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58679);
var map__58681__$1 = (((((!((map__58681 == null))))?(((((map__58681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58681):map__58681);
var block__$1 = map__58681__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58680,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58679,i__58672,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677_$_iter__58683(s__58684){
return (new cljs.core.LazySeq(null,((function (i__58679,i__58672,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58684__$1 = s__58684;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58684__$1);
if(temp__5735__auto____$3){
var s__58684__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58684__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58684__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58686 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58685 = (0);
while(true){
if((i__58685 < size__4581__auto____$2)){
var map__58687 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58685);
var map__58687__$1 = (((((!((map__58687 == null))))?(((((map__58687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58687):map__58687);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58686,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58685,i__58679,i__58672,map__58687,map__58687__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58686,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58685,i__58679,i__58672,map__58687,map__58687__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58686,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58741 = (i__58685 + (1));
i__58685 = G__58741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58686),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677_$_iter__58683(cljs.core.chunk_rest(s__58684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58686),null);
}
} else {
var map__58689 = cljs.core.first(s__58684__$2);
var map__58689__$1 = (((((!((map__58689 == null))))?(((((map__58689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58689):map__58689);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58679,i__58672,map__58689,map__58689__$1,title__$1,string,uid__$2,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58679,i__58672,map__58689,map__58689__$1,title__$1,string,uid__$2,s__58684__$2,temp__5735__auto____$3,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677_$_iter__58683(cljs.core.rest(s__58684__$2)));
}
} else {
return null;
}
break;
}
});})(i__58679,i__58672,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58679,i__58672,map__58681,map__58681__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58680,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58742 = (i__58679 + (1));
i__58679 = G__58742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58680),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677(cljs.core.chunk_rest(s__58678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58680),null);
}
} else {
var map__58691 = cljs.core.first(s__58678__$2);
var map__58691__$1 = (((((!((map__58691 == null))))?(((((map__58691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58691):map__58691);
var block__$1 = map__58691__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58672,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677_$_iter__58693(s__58694){
return (new cljs.core.LazySeq(null,((function (i__58672,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58694__$1 = s__58694;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58694__$1);
if(temp__5735__auto____$3){
var s__58694__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58694__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58694__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58696 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58695 = (0);
while(true){
if((i__58695 < size__4581__auto____$1)){
var map__58697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58695);
var map__58697__$1 = (((((!((map__58697 == null))))?(((((map__58697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58697):map__58697);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58696,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58695,i__58672,map__58697,map__58697__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58696,s__58694__$2,temp__5735__auto____$3,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58695,i__58672,map__58697,map__58697__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58696,s__58694__$2,temp__5735__auto____$3,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58743 = (i__58695 + (1));
i__58695 = G__58743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58696),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677_$_iter__58693(cljs.core.chunk_rest(s__58694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58696),null);
}
} else {
var map__58699 = cljs.core.first(s__58694__$2);
var map__58699__$1 = (((((!((map__58699 == null))))?(((((map__58699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58699):map__58699);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58672,map__58699,map__58699__$1,title__$1,string,uid__$2,s__58694__$2,temp__5735__auto____$3,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58672,map__58699,map__58699__$1,title__$1,string,uid__$2,s__58694__$2,temp__5735__auto____$3,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677_$_iter__58693(cljs.core.rest(s__58694__$2)));
}
} else {
return null;
}
break;
}
});})(i__58672,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58672,map__58691,map__58691__$1,block__$1,uid__$1,parents,s__58678__$2,temp__5735__auto____$2,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58677(cljs.core.rest(s__58678__$2)));
}
} else {
return null;
}
break;
}
});})(i__58672,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58672,vec__58674,group_title,group,c__4580__auto__,size__4581__auto__,b__58673,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58744 = (i__58672 + (1));
i__58672 = G__58744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58673),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670(cljs.core.chunk_rest(s__58671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58673),null);
}
} else {
var vec__58701 = cljs.core.first(s__58671__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58701,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58701,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704(s__58705){
return (new cljs.core.LazySeq(null,(function (){
var s__58705__$1 = s__58705;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58705__$1);
if(temp__5735__auto____$2){
var s__58705__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58705__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58705__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58707 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58706 = (0);
while(true){
if((i__58706 < size__4581__auto__)){
var map__58708 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58706);
var map__58708__$1 = (((((!((map__58708 == null))))?(((((map__58708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58708):map__58708);
var block__$1 = map__58708__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58707,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58706,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704_$_iter__58710(s__58711){
return (new cljs.core.LazySeq(null,((function (i__58706,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
var s__58711__$1 = s__58711;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58711__$1);
if(temp__5735__auto____$3){
var s__58711__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58711__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58711__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58713 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58712 = (0);
while(true){
if((i__58712 < size__4581__auto____$1)){
var map__58714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58712);
var map__58714__$1 = (((((!((map__58714 == null))))?(((((map__58714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58714):map__58714);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58713,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58712,i__58706,map__58714,map__58714__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58713,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58712,i__58706,map__58714,map__58714__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58713,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58745 = (i__58712 + (1));
i__58712 = G__58745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58713),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704_$_iter__58710(cljs.core.chunk_rest(s__58711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58713),null);
}
} else {
var map__58716 = cljs.core.first(s__58711__$2);
var map__58716__$1 = (((((!((map__58716 == null))))?(((((map__58716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58716):map__58716);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58706,map__58716,map__58716__$1,title__$1,string,uid__$2,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58706,map__58716,map__58716__$1,title__$1,string,uid__$2,s__58711__$2,temp__5735__auto____$3,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704_$_iter__58710(cljs.core.rest(s__58711__$2)));
}
} else {
return null;
}
break;
}
});})(i__58706,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
,null,null));
});})(i__58706,map__58708,map__58708__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58707,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58746 = (i__58706 + (1));
i__58706 = G__58746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58707),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704(cljs.core.chunk_rest(s__58705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58707),null);
}
} else {
var map__58718 = cljs.core.first(s__58705__$2);
var map__58718__$1 = (((((!((map__58718 == null))))?(((((map__58718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58718):map__58718);
var block__$1 = map__58718__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58718,map__58718__$1,block__$1,uid__$1,parents,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704_$_iter__58720(s__58721){
return (new cljs.core.LazySeq(null,(function (){
var s__58721__$1 = s__58721;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58721__$1);
if(temp__5735__auto____$3){
var s__58721__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58721__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58721__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58723 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58722 = (0);
while(true){
if((i__58722 < size__4581__auto__)){
var map__58724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58722);
var map__58724__$1 = (((((!((map__58724 == null))))?(((((map__58724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58724):map__58724);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58723,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58722,map__58724,map__58724__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58723,s__58721__$2,temp__5735__auto____$3,map__58718,map__58718__$1,block__$1,uid__$1,parents,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58722,map__58724,map__58724__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58723,s__58721__$2,temp__5735__auto____$3,map__58718,map__58718__$1,block__$1,uid__$1,parents,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58747 = (i__58722 + (1));
i__58722 = G__58747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58723),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704_$_iter__58720(cljs.core.chunk_rest(s__58721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58723),null);
}
} else {
var map__58726 = cljs.core.first(s__58721__$2);
var map__58726__$1 = (((((!((map__58726 == null))))?(((((map__58726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58726):map__58726);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58726,map__58726__$1,title__$1,string,uid__$2,s__58721__$2,temp__5735__auto____$3,map__58718,map__58718__$1,block__$1,uid__$1,parents,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58726,map__58726__$1,title__$1,string,uid__$2,s__58721__$2,temp__5735__auto____$3,map__58718,map__58718__$1,block__$1,uid__$1,parents,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704_$_iter__58720(cljs.core.rest(s__58721__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58718,map__58718__$1,block__$1,uid__$1,parents,s__58705__$2,temp__5735__auto____$2,vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670_$_iter__58704(cljs.core.rest(s__58705__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58701,group_title,group,s__58671__$2,temp__5735__auto____$1,vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58602_$_iter__58670(cljs.core.rest(s__58671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58667,linked_or_unlinked,refs,s__58603__$2,temp__5735__auto__,map__58585,map__58585__$1,title,is_shortcut_QMARK_,children,uid,map__58586,map__58586__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58602(cljs.core.rest(s__58603__$2)));
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
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58728 = athens.db.get_node_document(ident);
var map__58728__$1 = (((((!((map__58728 == null))))?(((((map__58728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58728):map__58728);
var node = map__58728__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58730) : re_frame.core.subscribe.call(null,G__58730));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
