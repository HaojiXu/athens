goog.provide('athens.components.todo');
goog.require('cljs.core');
athens.components.todo.component_todo = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[TODO\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"component-todo",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)], null)], null);
})], null);
athens.components.todo.component_done = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[DONE\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"component-todo",new cljs.core.Keyword(null,"checked","checked",-50955819),"true",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)], null)], null);
})], null);
athens.components.todo.components = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.todo.component_todo,athens.components.todo.component_done], null);

//# sourceMappingURL=athens.components.todo.js.map
