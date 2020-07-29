goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61125,p__61126){
var map__61127 = p__61125;
var map__61127__$1 = (((((!((map__61127 == null))))?(((((map__61127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61127):map__61127);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61127__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61128 = p__61126;
var map__61128__$1 = (((((!((map__61128 == null))))?(((((map__61128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61128):map__61128);
var msg = map__61128__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61128__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61131,p__61132){
var map__61133 = p__61131;
var map__61133__$1 = (((((!((map__61133 == null))))?(((((map__61133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61133):map__61133);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61134 = p__61132;
var map__61134__$1 = (((((!((map__61134 == null))))?(((((map__61134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61134):map__61134);
var msg = map__61134__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61134__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61137 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61139 = null;
var count__61140 = (0);
var i__61141 = (0);
while(true){
if((i__61141 < count__61140)){
var map__61147 = chunk__61139.cljs$core$IIndexed$_nth$arity$2(null,i__61141);
var map__61147__$1 = (((((!((map__61147 == null))))?(((((map__61147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61147):map__61147);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61194 = seq__61137;
var G__61195 = chunk__61139;
var G__61196 = count__61140;
var G__61197 = (i__61141 + (1));
seq__61137 = G__61194;
chunk__61139 = G__61195;
count__61140 = G__61196;
i__61141 = G__61197;
continue;
} else {
var G__61198 = seq__61137;
var G__61199 = chunk__61139;
var G__61200 = count__61140;
var G__61201 = (i__61141 + (1));
seq__61137 = G__61198;
chunk__61139 = G__61199;
count__61140 = G__61200;
i__61141 = G__61201;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61137);
if(temp__5735__auto__){
var seq__61137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61137__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61137__$1);
var G__61202 = cljs.core.chunk_rest(seq__61137__$1);
var G__61203 = c__4609__auto__;
var G__61204 = cljs.core.count(c__4609__auto__);
var G__61205 = (0);
seq__61137 = G__61202;
chunk__61139 = G__61203;
count__61140 = G__61204;
i__61141 = G__61205;
continue;
} else {
var map__61149 = cljs.core.first(seq__61137__$1);
var map__61149__$1 = (((((!((map__61149 == null))))?(((((map__61149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61149):map__61149);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61206 = cljs.core.next(seq__61137__$1);
var G__61207 = null;
var G__61208 = (0);
var G__61209 = (0);
seq__61137 = G__61206;
chunk__61139 = G__61207;
count__61140 = G__61208;
i__61141 = G__61209;
continue;
} else {
var G__61210 = cljs.core.next(seq__61137__$1);
var G__61211 = null;
var G__61212 = (0);
var G__61213 = (0);
seq__61137 = G__61210;
chunk__61139 = G__61211;
count__61140 = G__61212;
i__61141 = G__61213;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61151,msg){
var map__61152 = p__61151;
var map__61152__$1 = (((((!((map__61152 == null))))?(((((map__61152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61152):map__61152);
var runtime = map__61152__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61154,key,p__61155){
var map__61156 = p__61154;
var map__61156__$1 = (((((!((map__61156 == null))))?(((((map__61156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61156):map__61156);
var state = map__61156__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61157 = p__61155;
var map__61157__$1 = (((((!((map__61157 == null))))?(((((map__61157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61157):map__61157);
var spec = map__61157__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61160,key,spec){
var map__61161 = p__61160;
var map__61161__$1 = (((((!((map__61161 == null))))?(((((map__61161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61161):map__61161);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61168){
var map__61169 = p__61168;
var map__61169__$1 = (((((!((map__61169 == null))))?(((((map__61169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61169):map__61169);
var runtime = map__61169__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61169__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61163_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61163_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61164_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61164_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61165_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61165_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61166_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61166_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61167_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61167_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61171,key){
var map__61172 = p__61171;
var map__61172__$1 = (((((!((map__61172 == null))))?(((((map__61172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61172):map__61172);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61172__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61174,p__61175){
var map__61176 = p__61174;
var map__61176__$1 = (((((!((map__61176 == null))))?(((((map__61176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61176):map__61176);
var runtime = map__61176__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61176__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61177 = p__61175;
var map__61177__$1 = (((((!((map__61177 == null))))?(((((map__61177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61177):map__61177);
var msg = map__61177__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61177__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61180 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61182 = null;
var count__61183 = (0);
var i__61184 = (0);
while(true){
if((i__61184 < count__61183)){
var map__61190 = chunk__61182.cljs$core$IIndexed$_nth$arity$2(null,i__61184);
var map__61190__$1 = (((((!((map__61190 == null))))?(((((map__61190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61190):map__61190);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61190__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61214 = seq__61180;
var G__61215 = chunk__61182;
var G__61216 = count__61183;
var G__61217 = (i__61184 + (1));
seq__61180 = G__61214;
chunk__61182 = G__61215;
count__61183 = G__61216;
i__61184 = G__61217;
continue;
} else {
var G__61218 = seq__61180;
var G__61219 = chunk__61182;
var G__61220 = count__61183;
var G__61221 = (i__61184 + (1));
seq__61180 = G__61218;
chunk__61182 = G__61219;
count__61183 = G__61220;
i__61184 = G__61221;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61180);
if(temp__5735__auto__){
var seq__61180__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61180__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61180__$1);
var G__61222 = cljs.core.chunk_rest(seq__61180__$1);
var G__61223 = c__4609__auto__;
var G__61224 = cljs.core.count(c__4609__auto__);
var G__61225 = (0);
seq__61180 = G__61222;
chunk__61182 = G__61223;
count__61183 = G__61224;
i__61184 = G__61225;
continue;
} else {
var map__61192 = cljs.core.first(seq__61180__$1);
var map__61192__$1 = (((((!((map__61192 == null))))?(((((map__61192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61192):map__61192);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61226 = cljs.core.next(seq__61180__$1);
var G__61227 = null;
var G__61228 = (0);
var G__61229 = (0);
seq__61180 = G__61226;
chunk__61182 = G__61227;
count__61183 = G__61228;
i__61184 = G__61229;
continue;
} else {
var G__61230 = cljs.core.next(seq__61180__$1);
var G__61231 = null;
var G__61232 = (0);
var G__61233 = (0);
seq__61180 = G__61230;
chunk__61182 = G__61231;
count__61183 = G__61232;
i__61184 = G__61233;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
