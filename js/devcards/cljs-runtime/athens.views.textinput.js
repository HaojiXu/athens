goog.provide('athens.views.textinput');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('stylefy.core');
athens.views.textinput.textinput_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"transition-timing-function","transition-timing-function",-549540522),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"transition-property","transition-property",2036650935),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092)],[athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),"2rem",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)),"0.125rem 0.5rem",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"ease",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"4","4",-1197948085).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),new cljs.core.Keyword(null,"&:focus:hover","&:focus:hover",-1024682251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"8","8",1405994928).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS)], null)], null)], null),"box-shadow, border, background",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),"0.25rem","100%","0.1s"]);
athens.views.textinput.input_wrap = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"stretch",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"1.75rem"], null)], null)], null)], null);
athens.views.textinput.input_icon = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"left","left",-399115937)],["translateY(-50%)",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),"50%",new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null)], null),"flex","absolute","none","0.375rem"]);
athens.views.textinput.textinput = (function athens$views$textinput$textinput(p__60870){
var map__60871 = p__60870;
var map__60871__$1 = (((((!((map__60871 == null))))?(((((map__60871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60871):map__60871);
var props = map__60871__$1;
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var props_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996)], 0));
if(cljs.core.truth_(icon)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.textinput.input_wrap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.textinput.textinput_style,style], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec(cljs.core.flatten(class$))], null)], 0)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.textinput.input_icon),icon], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.textinput.textinput_style,style], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec(cljs.core.flatten(class$))], null)], 0)))], null);
}
});

//# sourceMappingURL=athens.views.textinput.js.map
