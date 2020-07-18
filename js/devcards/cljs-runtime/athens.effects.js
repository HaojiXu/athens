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
var G__61780_61872 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61781_61873 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61780_61872,G__61781_61873) : re_frame.core.reg_fx.call(null,G__61780_61872,G__61781_61873));
var G__61782_61874 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61783_61875 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61782_61874,G__61783_61875) : re_frame.core.reg_fx.call(null,G__61782_61874,G__61783_61875));
var G__61784_61876 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61785_61877 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61784_61876,G__61785_61877) : re_frame.core.reg_fx.call(null,G__61784_61876,G__61785_61877));
var G__61786_61878 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61787_61879 = (function (p__61788){
var map__61789 = p__61788;
var map__61789__$1 = (((((!((map__61789 == null))))?(((((map__61789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61789):map__61789);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_61833){
var state_val_61834 = (state_61833[(1)]);
if((state_val_61834 === (7))){
var inst_61800 = (state_61833[(7)]);
var inst_61800__$1 = (state_61833[(2)]);
var inst_61802 = (inst_61800__$1 == null);
var inst_61803 = cljs.core.not(inst_61802);
var state_61833__$1 = (function (){var statearr_61835 = state_61833;
(statearr_61835[(7)] = inst_61800__$1);

return statearr_61835;
})();
if(inst_61803){
var statearr_61836_61880 = state_61833__$1;
(statearr_61836_61880[(1)] = (8));

} else {
var statearr_61837_61881 = state_61833__$1;
(statearr_61837_61881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (1))){
var state_61833__$1 = state_61833;
var G__61838_61882 = method;
var G__61838_61883__$1 = (((G__61838_61882 instanceof cljs.core.Keyword))?G__61838_61882.fqn:null);
switch (G__61838_61883__$1) {
case "post":
var statearr_61839_61885 = state_61833__$1;
(statearr_61839_61885[(1)] = (3));


break;
case "get":
var statearr_61840_61886 = state_61833__$1;
(statearr_61840_61886[(1)] = (4));


break;
case "put":
var statearr_61841_61887 = state_61833__$1;
(statearr_61841_61887[(1)] = (5));


break;
case "delete":
var statearr_61842_61888 = state_61833__$1;
(statearr_61842_61888[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61838_61883__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (4))){
var state_61833__$1 = state_61833;
var statearr_61843_61889 = state_61833__$1;
(statearr_61843_61889[(2)] = cljs_http.client.get);

(statearr_61843_61889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (15))){
var inst_61800 = (state_61833[(7)]);
var state_61833__$1 = state_61833;
var statearr_61844_61890 = state_61833__$1;
(statearr_61844_61890[(2)] = inst_61800);

(statearr_61844_61890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (13))){
var inst_61813 = (state_61833[(2)]);
var state_61833__$1 = state_61833;
var statearr_61845_61891 = state_61833__$1;
(statearr_61845_61891[(2)] = inst_61813);

(statearr_61845_61891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (6))){
var state_61833__$1 = state_61833;
var statearr_61846_61892 = state_61833__$1;
(statearr_61846_61892[(2)] = cljs_http.client.delete$);

(statearr_61846_61892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (17))){
var inst_61823 = (state_61833[(8)]);
var inst_61825 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61823);
var inst_61826 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61825) : re_frame.core.dispatch.call(null,inst_61825));
var state_61833__$1 = state_61833;
var statearr_61847_61893 = state_61833__$1;
(statearr_61847_61893[(2)] = inst_61826);

(statearr_61847_61893[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (3))){
var state_61833__$1 = state_61833;
var statearr_61848_61894 = state_61833__$1;
(statearr_61848_61894[(2)] = cljs_http.client.post);

(statearr_61848_61894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (12))){
var state_61833__$1 = state_61833;
var statearr_61849_61895 = state_61833__$1;
(statearr_61849_61895[(2)] = false);

(statearr_61849_61895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (2))){
var inst_61797 = (state_61833[(2)]);
var inst_61798 = (inst_61797.cljs$core$IFn$_invoke$arity$2 ? inst_61797.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61797.call(null,url,opts));
var state_61833__$1 = state_61833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61833__$1,(7),inst_61798);
} else {
if((state_val_61834 === (19))){
var inst_61831 = (state_61833[(2)]);
var state_61833__$1 = state_61833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61833__$1,inst_61831);
} else {
if((state_val_61834 === (11))){
var state_61833__$1 = state_61833;
var statearr_61850_61896 = state_61833__$1;
(statearr_61850_61896[(2)] = true);

(statearr_61850_61896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (9))){
var state_61833__$1 = state_61833;
var statearr_61851_61897 = state_61833__$1;
(statearr_61851_61897[(2)] = false);

(statearr_61851_61897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (5))){
var state_61833__$1 = state_61833;
var statearr_61852_61898 = state_61833__$1;
(statearr_61852_61898[(2)] = cljs_http.client.put);

(statearr_61852_61898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (14))){
var inst_61800 = (state_61833[(7)]);
var inst_61818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61800);
var state_61833__$1 = state_61833;
var statearr_61853_61899 = state_61833__$1;
(statearr_61853_61899[(2)] = inst_61818);

(statearr_61853_61899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (16))){
var inst_61821 = (state_61833[(9)]);
var inst_61821__$1 = (state_61833[(2)]);
var inst_61822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61821__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61821__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61833__$1 = (function (){var statearr_61854 = state_61833;
(statearr_61854[(9)] = inst_61821__$1);

(statearr_61854[(8)] = inst_61823);

return statearr_61854;
})();
if(cljs.core.truth_(inst_61822)){
var statearr_61855_61900 = state_61833__$1;
(statearr_61855_61900[(1)] = (17));

} else {
var statearr_61856_61901 = state_61833__$1;
(statearr_61856_61901[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (10))){
var inst_61816 = (state_61833[(2)]);
var state_61833__$1 = state_61833;
if(cljs.core.truth_(inst_61816)){
var statearr_61857_61902 = state_61833__$1;
(statearr_61857_61902[(1)] = (14));

} else {
var statearr_61858_61903 = state_61833__$1;
(statearr_61858_61903[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (18))){
var inst_61821 = (state_61833[(9)]);
var inst_61828 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61821);
var inst_61829 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61828) : re_frame.core.dispatch.call(null,inst_61828));
var state_61833__$1 = state_61833;
var statearr_61859_61904 = state_61833__$1;
(statearr_61859_61904[(2)] = inst_61829);

(statearr_61859_61904[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61834 === (8))){
var inst_61800 = (state_61833[(7)]);
var inst_61805 = inst_61800.cljs$lang$protocol_mask$partition0$;
var inst_61806 = (inst_61805 & (64));
var inst_61807 = inst_61800.cljs$core$ISeq$;
var inst_61808 = (cljs.core.PROTOCOL_SENTINEL === inst_61807);
var inst_61809 = ((inst_61806) || (inst_61808));
var state_61833__$1 = state_61833;
if(cljs.core.truth_(inst_61809)){
var statearr_61860_61905 = state_61833__$1;
(statearr_61860_61905[(1)] = (11));

} else {
var statearr_61861_61906 = state_61833__$1;
(statearr_61861_61906[(1)] = (12));

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
var athens$effects$state_machine__37203__auto__ = null;
var athens$effects$state_machine__37203__auto____0 = (function (){
var statearr_61862 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61862[(0)] = athens$effects$state_machine__37203__auto__);

(statearr_61862[(1)] = (1));

return statearr_61862;
});
var athens$effects$state_machine__37203__auto____1 = (function (state_61833){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_61833);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e61863){if((e61863 instanceof Object)){
var ex__37206__auto__ = e61863;
var statearr_61864_61907 = state_61833;
(statearr_61864_61907[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61908 = state_61833;
state_61833 = G__61908;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$effects$state_machine__37203__auto__ = function(state_61833){
switch(arguments.length){
case 0:
return athens$effects$state_machine__37203__auto____0.call(this);
case 1:
return athens$effects$state_machine__37203__auto____1.call(this,state_61833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__37203__auto____0;
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__37203__auto____1;
return athens$effects$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_61865 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_61865[(6)] = c__37270__auto__);

return statearr_61865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61786_61878,G__61787_61879) : re_frame.core.reg_fx.call(null,G__61786_61878,G__61787_61879));
var G__61866_61909 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61867_61910 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61868){
var map__61869 = p__61868;
var map__61869__$1 = (((((!((map__61869 == null))))?(((((map__61869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61869):map__61869);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61871 = action;
var G__61871__$1 = (((G__61871 instanceof cljs.core.Keyword))?G__61871.fqn:null);
switch (G__61871__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61871__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61866_61909,G__61867_61910) : re_frame.core.reg_fx.call(null,G__61866_61909,G__61867_61910));

//# sourceMappingURL=athens.effects.js.map
