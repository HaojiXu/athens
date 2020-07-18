goog.provide('athens.components.todo');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.util');
goog.require('re_frame.core');
athens.components.todo.todo_on_click = (function athens$components$todo$todo_on_click(uid,from_str,to_str){
var current_block_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)),new cljs.core.Keyword("block","string","block/string",-2066596447));
var G__56190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),clojure.string.replace(current_block_content,from_str,to_str),new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56190) : re_frame.core.dispatch.call(null,G__56190));
});
athens.components.todo.component_todo = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[TODO\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"component-todo",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.components.todo.todo_on_click(uid,/\{\{\[\[TODO\]\]\}\}/,"{{[[DONE]]}}");
}),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)], null)], null);
})], null);
athens.components.todo.component_done = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[DONE\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"component-todo",new cljs.core.Keyword(null,"checked","checked",-50955819),"true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.components.todo.todo_on_click(uid,/\{\{\[\[DONE\]\]\}\}/,"{{[[TODO]]}}");
}),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)], null)], null);
})], null);
athens.components.todo.components = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.todo.component_todo,athens.components.todo.component_done], null);

//# sourceMappingURL=athens.components.todo.js.map
