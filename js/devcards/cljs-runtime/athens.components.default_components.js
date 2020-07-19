goog.provide('athens.components.default_components');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.util');
goog.require('re_frame.core');
athens.components.default_components.todo_on_click = (function athens$components$default_components$todo_on_click(uid,from_str,to_str){
var current_block_content = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)));
var G__56190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","string","block/string",-2066596447),clojure.string.replace(current_block_content,from_str,to_str),new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56190) : re_frame.core.dispatch.call(null,G__56190));
});
athens.components.default_components.find_weblink = (function athens$components$default_components$find_weblink(content){
return cljs.core.re_find(/http.*/,content);
});
athens.components.default_components.component_todo = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[TODO\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.components.default_components.todo_on_click(uid,/\{\{\[\[TODO\]\]\}\}/,"{{[[DONE]]}}");
})], null)], null);
})], null);
athens.components.default_components.component_done = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[DONE\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),"true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.components.default_components.todo_on_click(uid,/\{\{\[\[DONE\]\]\}\}/,"{{[[TODO]]}}");
})], null)], null);
})], null);
athens.components.default_components.component_youtube_embed = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[youtube\]\]\:.*/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/.*v=([a-zA-Z0-9_\-]+)/,content),(1)))].join(''),new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"], null)], null);
})], null);
athens.components.default_components.component_generic_embed = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/iframe\:.*/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"src","src",-1651076051),athens.components.default_components.find_weblink(content)], null)], null);
})], null);
athens.components.default_components.components = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.default_components.component_todo,athens.components.default_components.component_done,athens.components.default_components.component_youtube_embed,athens.components.default_components.component_generic_embed], null);

//# sourceMappingURL=athens.components.default_components.js.map
