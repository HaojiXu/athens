goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__61794_61886 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61795_61887 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61794_61886,G__61795_61887) : re_frame.core.reg_fx.call(null,G__61794_61886,G__61795_61887));
var G__61796_61888 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61797_61889 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61796_61888,G__61797_61889) : re_frame.core.reg_fx.call(null,G__61796_61888,G__61797_61889));
var G__61798_61890 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61799_61891 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61798_61890,G__61799_61891) : re_frame.core.reg_fx.call(null,G__61798_61890,G__61799_61891));
var G__61800_61892 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61801_61893 = (function (p__61802){
var map__61803 = p__61802;
var map__61803__$1 = (((((!((map__61803 == null))))?(((((map__61803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61803):map__61803);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_61847){
var state_val_61848 = (state_61847[(1)]);
if((state_val_61848 === (7))){
var inst_61814 = (state_61847[(7)]);
var inst_61814__$1 = (state_61847[(2)]);
var inst_61816 = (inst_61814__$1 == null);
var inst_61817 = cljs.core.not(inst_61816);
var state_61847__$1 = (function (){var statearr_61849 = state_61847;
(statearr_61849[(7)] = inst_61814__$1);

return statearr_61849;
})();
if(inst_61817){
var statearr_61850_61894 = state_61847__$1;
(statearr_61850_61894[(1)] = (8));

} else {
var statearr_61851_61895 = state_61847__$1;
(statearr_61851_61895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (1))){
var state_61847__$1 = state_61847;
var G__61852_61896 = method;
var G__61852_61897__$1 = (((G__61852_61896 instanceof cljs.core.Keyword))?G__61852_61896.fqn:null);
switch (G__61852_61897__$1) {
case "post":
var statearr_61853_61899 = state_61847__$1;
(statearr_61853_61899[(1)] = (3));


break;
case "get":
var statearr_61854_61900 = state_61847__$1;
(statearr_61854_61900[(1)] = (4));


break;
case "put":
var statearr_61855_61901 = state_61847__$1;
(statearr_61855_61901[(1)] = (5));


break;
case "delete":
var statearr_61856_61902 = state_61847__$1;
(statearr_61856_61902[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61852_61897__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (4))){
var state_61847__$1 = state_61847;
var statearr_61857_61903 = state_61847__$1;
(statearr_61857_61903[(2)] = cljs_http.client.get);

(statearr_61857_61903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (15))){
var inst_61814 = (state_61847[(7)]);
var state_61847__$1 = state_61847;
var statearr_61858_61904 = state_61847__$1;
(statearr_61858_61904[(2)] = inst_61814);

(statearr_61858_61904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (13))){
var inst_61827 = (state_61847[(2)]);
var state_61847__$1 = state_61847;
var statearr_61859_61905 = state_61847__$1;
(statearr_61859_61905[(2)] = inst_61827);

(statearr_61859_61905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (6))){
var state_61847__$1 = state_61847;
var statearr_61860_61906 = state_61847__$1;
(statearr_61860_61906[(2)] = cljs_http.client.delete$);

(statearr_61860_61906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (17))){
var inst_61837 = (state_61847[(8)]);
var inst_61839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61837);
var inst_61840 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61839) : re_frame.core.dispatch.call(null,inst_61839));
var state_61847__$1 = state_61847;
var statearr_61861_61907 = state_61847__$1;
(statearr_61861_61907[(2)] = inst_61840);

(statearr_61861_61907[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (3))){
var state_61847__$1 = state_61847;
var statearr_61862_61908 = state_61847__$1;
(statearr_61862_61908[(2)] = cljs_http.client.post);

(statearr_61862_61908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (12))){
var state_61847__$1 = state_61847;
var statearr_61863_61909 = state_61847__$1;
(statearr_61863_61909[(2)] = false);

(statearr_61863_61909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (2))){
var inst_61811 = (state_61847[(2)]);
var inst_61812 = (inst_61811.cljs$core$IFn$_invoke$arity$2 ? inst_61811.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61811.call(null,url,opts));
var state_61847__$1 = state_61847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61847__$1,(7),inst_61812);
} else {
if((state_val_61848 === (19))){
var inst_61845 = (state_61847[(2)]);
var state_61847__$1 = state_61847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61847__$1,inst_61845);
} else {
if((state_val_61848 === (11))){
var state_61847__$1 = state_61847;
var statearr_61864_61910 = state_61847__$1;
(statearr_61864_61910[(2)] = true);

(statearr_61864_61910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (9))){
var state_61847__$1 = state_61847;
var statearr_61865_61911 = state_61847__$1;
(statearr_61865_61911[(2)] = false);

(statearr_61865_61911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (5))){
var state_61847__$1 = state_61847;
var statearr_61866_61912 = state_61847__$1;
(statearr_61866_61912[(2)] = cljs_http.client.put);

(statearr_61866_61912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (14))){
var inst_61814 = (state_61847[(7)]);
var inst_61832 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61814);
var state_61847__$1 = state_61847;
var statearr_61867_61913 = state_61847__$1;
(statearr_61867_61913[(2)] = inst_61832);

(statearr_61867_61913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (16))){
var inst_61835 = (state_61847[(9)]);
var inst_61835__$1 = (state_61847[(2)]);
var inst_61836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61835__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61835__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61847__$1 = (function (){var statearr_61868 = state_61847;
(statearr_61868[(8)] = inst_61837);

(statearr_61868[(9)] = inst_61835__$1);

return statearr_61868;
})();
if(cljs.core.truth_(inst_61836)){
var statearr_61869_61914 = state_61847__$1;
(statearr_61869_61914[(1)] = (17));

} else {
var statearr_61870_61915 = state_61847__$1;
(statearr_61870_61915[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (10))){
var inst_61830 = (state_61847[(2)]);
var state_61847__$1 = state_61847;
if(cljs.core.truth_(inst_61830)){
var statearr_61871_61916 = state_61847__$1;
(statearr_61871_61916[(1)] = (14));

} else {
var statearr_61872_61917 = state_61847__$1;
(statearr_61872_61917[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (18))){
var inst_61835 = (state_61847[(9)]);
var inst_61842 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61835);
var inst_61843 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61842) : re_frame.core.dispatch.call(null,inst_61842));
var state_61847__$1 = state_61847;
var statearr_61873_61918 = state_61847__$1;
(statearr_61873_61918[(2)] = inst_61843);

(statearr_61873_61918[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61848 === (8))){
var inst_61814 = (state_61847[(7)]);
var inst_61819 = inst_61814.cljs$lang$protocol_mask$partition0$;
var inst_61820 = (inst_61819 & (64));
var inst_61821 = inst_61814.cljs$core$ISeq$;
var inst_61822 = (cljs.core.PROTOCOL_SENTINEL === inst_61821);
var inst_61823 = ((inst_61820) || (inst_61822));
var state_61847__$1 = state_61847;
if(cljs.core.truth_(inst_61823)){
var statearr_61874_61919 = state_61847__$1;
(statearr_61874_61919[(1)] = (11));

} else {
var statearr_61875_61920 = state_61847__$1;
(statearr_61875_61920[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__43388__auto__ = null;
var athens$effects$state_machine__43388__auto____0 = (function (){
var statearr_61876 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61876[(0)] = athens$effects$state_machine__43388__auto__);

(statearr_61876[(1)] = (1));

return statearr_61876;
});
var athens$effects$state_machine__43388__auto____1 = (function (state_61847){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_61847);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e61877){if((e61877 instanceof Object)){
var ex__43391__auto__ = e61877;
var statearr_61878_61921 = state_61847;
(statearr_61878_61921[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61922 = state_61847;
state_61847 = G__61922;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
athens$effects$state_machine__43388__auto__ = function(state_61847){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43388__auto____0.call(this);
case 1:
return athens$effects$state_machine__43388__auto____1.call(this,state_61847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43388__auto____0;
athens$effects$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43388__auto____1;
return athens$effects$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_61879 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_61879[(6)] = c__43454__auto__);

return statearr_61879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61800_61892,G__61801_61893) : re_frame.core.reg_fx.call(null,G__61800_61892,G__61801_61893));
var G__61880_61923 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61881_61924 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61882){
var map__61883 = p__61882;
var map__61883__$1 = (((((!((map__61883 == null))))?(((((map__61883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61883):map__61883);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61885 = action;
var G__61885__$1 = (((G__61885 instanceof cljs.core.Keyword))?G__61885.fqn:null);
switch (G__61885__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61885__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61880_61923,G__61881_61924) : re_frame.core.reg_fx.call(null,G__61880_61923,G__61881_61924));

//# sourceMappingURL=athens.effects.js.map
