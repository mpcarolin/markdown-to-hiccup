// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39105){if((e39105 instanceof Error)){
var e = e39105;
return "Error: Unable to stringify";
} else {
throw e39105;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39108 = arguments.length;
switch (G__39108) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39106_SHARP_){
if(typeof p1__39106_SHARP_ === 'string'){
return p1__39106_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39106_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31408__auto__ = [];
var len__31401__auto___39111 = arguments.length;
var i__31402__auto___39112 = (0);
while(true){
if((i__31402__auto___39112 < len__31401__auto___39111)){
args__31408__auto__.push((arguments[i__31402__auto___39112]));

var G__39113 = (i__31402__auto___39112 + (1));
i__31402__auto___39112 = G__39113;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((0) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31409__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39110){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39110));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31408__auto__ = [];
var len__31401__auto___39115 = arguments.length;
var i__31402__auto___39116 = (0);
while(true){
if((i__31402__auto___39116 < len__31401__auto___39115)){
args__31408__auto__.push((arguments[i__31402__auto___39116]));

var G__39117 = (i__31402__auto___39116 + (1));
i__31402__auto___39116 = G__39117;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((0) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31409__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39114){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39114));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39118){
var map__39119 = p__39118;
var map__39119__$1 = ((((!((map__39119 == null)))?((((map__39119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39119):map__39119);
var message = cljs.core.get.call(null,map__39119__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39119__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30122__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30110__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30110__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30110__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34129__auto___39198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___39198,ch){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___39198,ch){
return (function (state_39170){
var state_val_39171 = (state_39170[(1)]);
if((state_val_39171 === (7))){
var inst_39166 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39172_39199 = state_39170__$1;
(statearr_39172_39199[(2)] = inst_39166);

(statearr_39172_39199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (1))){
var state_39170__$1 = state_39170;
var statearr_39173_39200 = state_39170__$1;
(statearr_39173_39200[(2)] = null);

(statearr_39173_39200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (4))){
var inst_39123 = (state_39170[(7)]);
var inst_39123__$1 = (state_39170[(2)]);
var state_39170__$1 = (function (){var statearr_39174 = state_39170;
(statearr_39174[(7)] = inst_39123__$1);

return statearr_39174;
})();
if(cljs.core.truth_(inst_39123__$1)){
var statearr_39175_39201 = state_39170__$1;
(statearr_39175_39201[(1)] = (5));

} else {
var statearr_39176_39202 = state_39170__$1;
(statearr_39176_39202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (15))){
var inst_39130 = (state_39170[(8)]);
var inst_39145 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39130);
var inst_39146 = cljs.core.first.call(null,inst_39145);
var inst_39147 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39146);
var inst_39148 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39147)].join('');
var inst_39149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39148);
var state_39170__$1 = state_39170;
var statearr_39177_39203 = state_39170__$1;
(statearr_39177_39203[(2)] = inst_39149);

(statearr_39177_39203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (13))){
var inst_39154 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39178_39204 = state_39170__$1;
(statearr_39178_39204[(2)] = inst_39154);

(statearr_39178_39204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (6))){
var state_39170__$1 = state_39170;
var statearr_39179_39205 = state_39170__$1;
(statearr_39179_39205[(2)] = null);

(statearr_39179_39205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (17))){
var inst_39152 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39180_39206 = state_39170__$1;
(statearr_39180_39206[(2)] = inst_39152);

(statearr_39180_39206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (3))){
var inst_39168 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39170__$1,inst_39168);
} else {
if((state_val_39171 === (12))){
var inst_39129 = (state_39170[(9)]);
var inst_39143 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39129,opts);
var state_39170__$1 = state_39170;
if(cljs.core.truth_(inst_39143)){
var statearr_39181_39207 = state_39170__$1;
(statearr_39181_39207[(1)] = (15));

} else {
var statearr_39182_39208 = state_39170__$1;
(statearr_39182_39208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (2))){
var state_39170__$1 = state_39170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39170__$1,(4),ch);
} else {
if((state_val_39171 === (11))){
var inst_39130 = (state_39170[(8)]);
var inst_39135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39136 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39130);
var inst_39137 = cljs.core.async.timeout.call(null,(1000));
var inst_39138 = [inst_39136,inst_39137];
var inst_39139 = (new cljs.core.PersistentVector(null,2,(5),inst_39135,inst_39138,null));
var state_39170__$1 = state_39170;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39170__$1,(14),inst_39139);
} else {
if((state_val_39171 === (9))){
var inst_39130 = (state_39170[(8)]);
var inst_39156 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39157 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39130);
var inst_39158 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39157);
var inst_39159 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39158)].join('');
var inst_39160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39159);
var state_39170__$1 = (function (){var statearr_39183 = state_39170;
(statearr_39183[(10)] = inst_39156);

return statearr_39183;
})();
var statearr_39184_39209 = state_39170__$1;
(statearr_39184_39209[(2)] = inst_39160);

(statearr_39184_39209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (5))){
var inst_39123 = (state_39170[(7)]);
var inst_39125 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39126 = (new cljs.core.PersistentArrayMap(null,2,inst_39125,null));
var inst_39127 = (new cljs.core.PersistentHashSet(null,inst_39126,null));
var inst_39128 = figwheel.client.focus_msgs.call(null,inst_39127,inst_39123);
var inst_39129 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39128);
var inst_39130 = cljs.core.first.call(null,inst_39128);
var inst_39131 = figwheel.client.autoload_QMARK_.call(null);
var state_39170__$1 = (function (){var statearr_39185 = state_39170;
(statearr_39185[(8)] = inst_39130);

(statearr_39185[(9)] = inst_39129);

return statearr_39185;
})();
if(cljs.core.truth_(inst_39131)){
var statearr_39186_39210 = state_39170__$1;
(statearr_39186_39210[(1)] = (8));

} else {
var statearr_39187_39211 = state_39170__$1;
(statearr_39187_39211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (14))){
var inst_39141 = (state_39170[(2)]);
var state_39170__$1 = state_39170;
var statearr_39188_39212 = state_39170__$1;
(statearr_39188_39212[(2)] = inst_39141);

(statearr_39188_39212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (16))){
var state_39170__$1 = state_39170;
var statearr_39189_39213 = state_39170__$1;
(statearr_39189_39213[(2)] = null);

(statearr_39189_39213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (10))){
var inst_39162 = (state_39170[(2)]);
var state_39170__$1 = (function (){var statearr_39190 = state_39170;
(statearr_39190[(11)] = inst_39162);

return statearr_39190;
})();
var statearr_39191_39214 = state_39170__$1;
(statearr_39191_39214[(2)] = null);

(statearr_39191_39214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39171 === (8))){
var inst_39129 = (state_39170[(9)]);
var inst_39133 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39129,opts);
var state_39170__$1 = state_39170;
if(cljs.core.truth_(inst_39133)){
var statearr_39192_39215 = state_39170__$1;
(statearr_39192_39215[(1)] = (11));

} else {
var statearr_39193_39216 = state_39170__$1;
(statearr_39193_39216[(1)] = (12));

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
});})(c__34129__auto___39198,ch))
;
return ((function (switch__34039__auto__,c__34129__auto___39198,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34040__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34040__auto____0 = (function (){
var statearr_39194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39194[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34040__auto__);

(statearr_39194[(1)] = (1));

return statearr_39194;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34040__auto____1 = (function (state_39170){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_39170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e39195){if((e39195 instanceof Object)){
var ex__34043__auto__ = e39195;
var statearr_39196_39217 = state_39170;
(statearr_39196_39217[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39218 = state_39170;
state_39170 = G__39218;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34040__auto__ = function(state_39170){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34040__auto____1.call(this,state_39170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34040__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34040__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___39198,ch))
})();
var state__34131__auto__ = (function (){var statearr_39197 = f__34130__auto__.call(null);
(statearr_39197[(6)] = c__34129__auto___39198);

return statearr_39197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___39198,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39219_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39219_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39223 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39223){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39221 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39222 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39221,_STAR_print_fn_STAR_39222,sb,base_path_39223){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_39221,_STAR_print_fn_STAR_39222,sb,base_path_39223))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39222;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39221;
}}catch (e39220){if((e39220 instanceof Error)){
var e = e39220;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39223], null));
} else {
var e = e39220;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39223))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39224){
var map__39225 = p__39224;
var map__39225__$1 = ((((!((map__39225 == null)))?((((map__39225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39225):map__39225);
var opts = map__39225__$1;
var build_id = cljs.core.get.call(null,map__39225__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39225,map__39225__$1,opts,build_id){
return (function (p__39227){
var vec__39228 = p__39227;
var seq__39229 = cljs.core.seq.call(null,vec__39228);
var first__39230 = cljs.core.first.call(null,seq__39229);
var seq__39229__$1 = cljs.core.next.call(null,seq__39229);
var map__39231 = first__39230;
var map__39231__$1 = ((((!((map__39231 == null)))?((((map__39231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39231):map__39231);
var msg = map__39231__$1;
var msg_name = cljs.core.get.call(null,map__39231__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39229__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39228,seq__39229,first__39230,seq__39229__$1,map__39231,map__39231__$1,msg,msg_name,_,map__39225,map__39225__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39228,seq__39229,first__39230,seq__39229__$1,map__39231,map__39231__$1,msg,msg_name,_,map__39225,map__39225__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39225,map__39225__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39233){
var vec__39234 = p__39233;
var seq__39235 = cljs.core.seq.call(null,vec__39234);
var first__39236 = cljs.core.first.call(null,seq__39235);
var seq__39235__$1 = cljs.core.next.call(null,seq__39235);
var map__39237 = first__39236;
var map__39237__$1 = ((((!((map__39237 == null)))?((((map__39237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39237):map__39237);
var msg = map__39237__$1;
var msg_name = cljs.core.get.call(null,map__39237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39235__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39239){
var map__39240 = p__39239;
var map__39240__$1 = ((((!((map__39240 == null)))?((((map__39240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39240):map__39240);
var on_compile_warning = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39240,map__39240__$1,on_compile_warning,on_compile_fail){
return (function (p__39242){
var vec__39243 = p__39242;
var seq__39244 = cljs.core.seq.call(null,vec__39243);
var first__39245 = cljs.core.first.call(null,seq__39244);
var seq__39244__$1 = cljs.core.next.call(null,seq__39244);
var map__39246 = first__39245;
var map__39246__$1 = ((((!((map__39246 == null)))?((((map__39246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39246):map__39246);
var msg = map__39246__$1;
var msg_name = cljs.core.get.call(null,map__39246__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39244__$1;
var pred__39248 = cljs.core._EQ_;
var expr__39249 = msg_name;
if(cljs.core.truth_(pred__39248.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39249))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39248.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39249))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39240,map__39240__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__,msg_hist,msg_names,msg){
return (function (state_39338){
var state_val_39339 = (state_39338[(1)]);
if((state_val_39339 === (7))){
var inst_39258 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39258)){
var statearr_39340_39387 = state_39338__$1;
(statearr_39340_39387[(1)] = (8));

} else {
var statearr_39341_39388 = state_39338__$1;
(statearr_39341_39388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (20))){
var inst_39332 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39342_39389 = state_39338__$1;
(statearr_39342_39389[(2)] = inst_39332);

(statearr_39342_39389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (27))){
var inst_39328 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39343_39390 = state_39338__$1;
(statearr_39343_39390[(2)] = inst_39328);

(statearr_39343_39390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (1))){
var inst_39251 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39251)){
var statearr_39344_39391 = state_39338__$1;
(statearr_39344_39391[(1)] = (2));

} else {
var statearr_39345_39392 = state_39338__$1;
(statearr_39345_39392[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (24))){
var inst_39330 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39346_39393 = state_39338__$1;
(statearr_39346_39393[(2)] = inst_39330);

(statearr_39346_39393[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (4))){
var inst_39336 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39338__$1,inst_39336);
} else {
if((state_val_39339 === (15))){
var inst_39334 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39347_39394 = state_39338__$1;
(statearr_39347_39394[(2)] = inst_39334);

(statearr_39347_39394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (21))){
var inst_39287 = (state_39338[(2)]);
var inst_39288 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39289 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39288);
var state_39338__$1 = (function (){var statearr_39348 = state_39338;
(statearr_39348[(7)] = inst_39287);

return statearr_39348;
})();
var statearr_39349_39395 = state_39338__$1;
(statearr_39349_39395[(2)] = inst_39289);

(statearr_39349_39395[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (31))){
var inst_39317 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39317)){
var statearr_39350_39396 = state_39338__$1;
(statearr_39350_39396[(1)] = (34));

} else {
var statearr_39351_39397 = state_39338__$1;
(statearr_39351_39397[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (32))){
var inst_39326 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39352_39398 = state_39338__$1;
(statearr_39352_39398[(2)] = inst_39326);

(statearr_39352_39398[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (33))){
var inst_39313 = (state_39338[(2)]);
var inst_39314 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39314);
var state_39338__$1 = (function (){var statearr_39353 = state_39338;
(statearr_39353[(8)] = inst_39313);

return statearr_39353;
})();
var statearr_39354_39399 = state_39338__$1;
(statearr_39354_39399[(2)] = inst_39315);

(statearr_39354_39399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (13))){
var inst_39272 = figwheel.client.heads_up.clear.call(null);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(16),inst_39272);
} else {
if((state_val_39339 === (22))){
var inst_39293 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39294 = figwheel.client.heads_up.append_warning_message.call(null,inst_39293);
var state_39338__$1 = state_39338;
var statearr_39355_39400 = state_39338__$1;
(statearr_39355_39400[(2)] = inst_39294);

(statearr_39355_39400[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (36))){
var inst_39324 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39356_39401 = state_39338__$1;
(statearr_39356_39401[(2)] = inst_39324);

(statearr_39356_39401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (29))){
var inst_39304 = (state_39338[(2)]);
var inst_39305 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39305);
var state_39338__$1 = (function (){var statearr_39357 = state_39338;
(statearr_39357[(9)] = inst_39304);

return statearr_39357;
})();
var statearr_39358_39402 = state_39338__$1;
(statearr_39358_39402[(2)] = inst_39306);

(statearr_39358_39402[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (6))){
var inst_39253 = (state_39338[(10)]);
var state_39338__$1 = state_39338;
var statearr_39359_39403 = state_39338__$1;
(statearr_39359_39403[(2)] = inst_39253);

(statearr_39359_39403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (28))){
var inst_39300 = (state_39338[(2)]);
var inst_39301 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39302 = figwheel.client.heads_up.display_warning.call(null,inst_39301);
var state_39338__$1 = (function (){var statearr_39360 = state_39338;
(statearr_39360[(11)] = inst_39300);

return statearr_39360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(29),inst_39302);
} else {
if((state_val_39339 === (25))){
var inst_39298 = figwheel.client.heads_up.clear.call(null);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(28),inst_39298);
} else {
if((state_val_39339 === (34))){
var inst_39319 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(37),inst_39319);
} else {
if((state_val_39339 === (17))){
var inst_39278 = (state_39338[(2)]);
var inst_39279 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39280 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39279);
var state_39338__$1 = (function (){var statearr_39361 = state_39338;
(statearr_39361[(12)] = inst_39278);

return statearr_39361;
})();
var statearr_39362_39404 = state_39338__$1;
(statearr_39362_39404[(2)] = inst_39280);

(statearr_39362_39404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (3))){
var inst_39270 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39270)){
var statearr_39363_39405 = state_39338__$1;
(statearr_39363_39405[(1)] = (13));

} else {
var statearr_39364_39406 = state_39338__$1;
(statearr_39364_39406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (12))){
var inst_39266 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39365_39407 = state_39338__$1;
(statearr_39365_39407[(2)] = inst_39266);

(statearr_39365_39407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (2))){
var inst_39253 = (state_39338[(10)]);
var inst_39253__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39338__$1 = (function (){var statearr_39366 = state_39338;
(statearr_39366[(10)] = inst_39253__$1);

return statearr_39366;
})();
if(cljs.core.truth_(inst_39253__$1)){
var statearr_39367_39408 = state_39338__$1;
(statearr_39367_39408[(1)] = (5));

} else {
var statearr_39368_39409 = state_39338__$1;
(statearr_39368_39409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (23))){
var inst_39296 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39296)){
var statearr_39369_39410 = state_39338__$1;
(statearr_39369_39410[(1)] = (25));

} else {
var statearr_39370_39411 = state_39338__$1;
(statearr_39370_39411[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (35))){
var state_39338__$1 = state_39338;
var statearr_39371_39412 = state_39338__$1;
(statearr_39371_39412[(2)] = null);

(statearr_39371_39412[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (19))){
var inst_39291 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39291)){
var statearr_39372_39413 = state_39338__$1;
(statearr_39372_39413[(1)] = (22));

} else {
var statearr_39373_39414 = state_39338__$1;
(statearr_39373_39414[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (11))){
var inst_39262 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39374_39415 = state_39338__$1;
(statearr_39374_39415[(2)] = inst_39262);

(statearr_39374_39415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (9))){
var inst_39264 = figwheel.client.heads_up.clear.call(null);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(12),inst_39264);
} else {
if((state_val_39339 === (5))){
var inst_39255 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39338__$1 = state_39338;
var statearr_39375_39416 = state_39338__$1;
(statearr_39375_39416[(2)] = inst_39255);

(statearr_39375_39416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (14))){
var inst_39282 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39282)){
var statearr_39376_39417 = state_39338__$1;
(statearr_39376_39417[(1)] = (18));

} else {
var statearr_39377_39418 = state_39338__$1;
(statearr_39377_39418[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (26))){
var inst_39308 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39338__$1 = state_39338;
if(cljs.core.truth_(inst_39308)){
var statearr_39378_39419 = state_39338__$1;
(statearr_39378_39419[(1)] = (30));

} else {
var statearr_39379_39420 = state_39338__$1;
(statearr_39379_39420[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (16))){
var inst_39274 = (state_39338[(2)]);
var inst_39275 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39276 = figwheel.client.heads_up.display_exception.call(null,inst_39275);
var state_39338__$1 = (function (){var statearr_39380 = state_39338;
(statearr_39380[(13)] = inst_39274);

return statearr_39380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(17),inst_39276);
} else {
if((state_val_39339 === (30))){
var inst_39310 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39311 = figwheel.client.heads_up.display_warning.call(null,inst_39310);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(33),inst_39311);
} else {
if((state_val_39339 === (10))){
var inst_39268 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39381_39421 = state_39338__$1;
(statearr_39381_39421[(2)] = inst_39268);

(statearr_39381_39421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (18))){
var inst_39284 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39285 = figwheel.client.heads_up.display_exception.call(null,inst_39284);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(21),inst_39285);
} else {
if((state_val_39339 === (37))){
var inst_39321 = (state_39338[(2)]);
var state_39338__$1 = state_39338;
var statearr_39382_39422 = state_39338__$1;
(statearr_39382_39422[(2)] = inst_39321);

(statearr_39382_39422[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39339 === (8))){
var inst_39260 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39338__$1 = state_39338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39338__$1,(11),inst_39260);
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
});})(c__34129__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34039__auto__,c__34129__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto____0 = (function (){
var statearr_39383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39383[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto__);

(statearr_39383[(1)] = (1));

return statearr_39383;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto____1 = (function (state_39338){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_39338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e39384){if((e39384 instanceof Object)){
var ex__34043__auto__ = e39384;
var statearr_39385_39423 = state_39338;
(statearr_39385_39423[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39424 = state_39338;
state_39338 = G__39424;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto__ = function(state_39338){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto____1.call(this,state_39338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__,msg_hist,msg_names,msg))
})();
var state__34131__auto__ = (function (){var statearr_39386 = f__34130__auto__.call(null);
(statearr_39386[(6)] = c__34129__auto__);

return statearr_39386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__,msg_hist,msg_names,msg))
);

return c__34129__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34129__auto___39453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___39453,ch){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___39453,ch){
return (function (state_39439){
var state_val_39440 = (state_39439[(1)]);
if((state_val_39440 === (1))){
var state_39439__$1 = state_39439;
var statearr_39441_39454 = state_39439__$1;
(statearr_39441_39454[(2)] = null);

(statearr_39441_39454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39440 === (2))){
var state_39439__$1 = state_39439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39439__$1,(4),ch);
} else {
if((state_val_39440 === (3))){
var inst_39437 = (state_39439[(2)]);
var state_39439__$1 = state_39439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39439__$1,inst_39437);
} else {
if((state_val_39440 === (4))){
var inst_39427 = (state_39439[(7)]);
var inst_39427__$1 = (state_39439[(2)]);
var state_39439__$1 = (function (){var statearr_39442 = state_39439;
(statearr_39442[(7)] = inst_39427__$1);

return statearr_39442;
})();
if(cljs.core.truth_(inst_39427__$1)){
var statearr_39443_39455 = state_39439__$1;
(statearr_39443_39455[(1)] = (5));

} else {
var statearr_39444_39456 = state_39439__$1;
(statearr_39444_39456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39440 === (5))){
var inst_39427 = (state_39439[(7)]);
var inst_39429 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39427);
var state_39439__$1 = state_39439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39439__$1,(8),inst_39429);
} else {
if((state_val_39440 === (6))){
var state_39439__$1 = state_39439;
var statearr_39445_39457 = state_39439__$1;
(statearr_39445_39457[(2)] = null);

(statearr_39445_39457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39440 === (7))){
var inst_39435 = (state_39439[(2)]);
var state_39439__$1 = state_39439;
var statearr_39446_39458 = state_39439__$1;
(statearr_39446_39458[(2)] = inst_39435);

(statearr_39446_39458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39440 === (8))){
var inst_39431 = (state_39439[(2)]);
var state_39439__$1 = (function (){var statearr_39447 = state_39439;
(statearr_39447[(8)] = inst_39431);

return statearr_39447;
})();
var statearr_39448_39459 = state_39439__$1;
(statearr_39448_39459[(2)] = null);

(statearr_39448_39459[(1)] = (2));


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
});})(c__34129__auto___39453,ch))
;
return ((function (switch__34039__auto__,c__34129__auto___39453,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34040__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34040__auto____0 = (function (){
var statearr_39449 = [null,null,null,null,null,null,null,null,null];
(statearr_39449[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34040__auto__);

(statearr_39449[(1)] = (1));

return statearr_39449;
});
var figwheel$client$heads_up_plugin_$_state_machine__34040__auto____1 = (function (state_39439){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_39439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e39450){if((e39450 instanceof Object)){
var ex__34043__auto__ = e39450;
var statearr_39451_39460 = state_39439;
(statearr_39451_39460[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39461 = state_39439;
state_39439 = G__39461;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34040__auto__ = function(state_39439){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34040__auto____1.call(this,state_39439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34040__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34040__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___39453,ch))
})();
var state__34131__auto__ = (function (){var statearr_39452 = f__34130__auto__.call(null);
(statearr_39452[(6)] = c__34129__auto___39453);

return statearr_39452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___39453,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__){
return (function (state_39467){
var state_val_39468 = (state_39467[(1)]);
if((state_val_39468 === (1))){
var inst_39462 = cljs.core.async.timeout.call(null,(3000));
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(2),inst_39462);
} else {
if((state_val_39468 === (2))){
var inst_39464 = (state_39467[(2)]);
var inst_39465 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39467__$1 = (function (){var statearr_39469 = state_39467;
(statearr_39469[(7)] = inst_39464);

return statearr_39469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39467__$1,inst_39465);
} else {
return null;
}
}
});})(c__34129__auto__))
;
return ((function (switch__34039__auto__,c__34129__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34040__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34040__auto____0 = (function (){
var statearr_39470 = [null,null,null,null,null,null,null,null];
(statearr_39470[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34040__auto__);

(statearr_39470[(1)] = (1));

return statearr_39470;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34040__auto____1 = (function (state_39467){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_39467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e39471){if((e39471 instanceof Object)){
var ex__34043__auto__ = e39471;
var statearr_39472_39474 = state_39467;
(statearr_39472_39474[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39475 = state_39467;
state_39467 = G__39475;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34040__auto__ = function(state_39467){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34040__auto____1.call(this,state_39467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34040__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34040__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__))
})();
var state__34131__auto__ = (function (){var statearr_39473 = f__34130__auto__.call(null);
(statearr_39473[(6)] = c__34129__auto__);

return statearr_39473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__))
);

return c__34129__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39482){
var state_val_39483 = (state_39482[(1)]);
if((state_val_39483 === (1))){
var inst_39476 = cljs.core.async.timeout.call(null,(2000));
var state_39482__$1 = state_39482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39482__$1,(2),inst_39476);
} else {
if((state_val_39483 === (2))){
var inst_39478 = (state_39482[(2)]);
var inst_39479 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39480 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39479);
var state_39482__$1 = (function (){var statearr_39484 = state_39482;
(statearr_39484[(7)] = inst_39478);

return statearr_39484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39482__$1,inst_39480);
} else {
return null;
}
}
});})(c__34129__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34039__auto__,c__34129__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto____0 = (function (){
var statearr_39485 = [null,null,null,null,null,null,null,null];
(statearr_39485[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto__);

(statearr_39485[(1)] = (1));

return statearr_39485;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto____1 = (function (state_39482){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_39482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e39486){if((e39486 instanceof Object)){
var ex__34043__auto__ = e39486;
var statearr_39487_39489 = state_39482;
(statearr_39487_39489[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39490 = state_39482;
state_39482 = G__39490;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto__ = function(state_39482){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto____1.call(this,state_39482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34131__auto__ = (function (){var statearr_39488 = f__34130__auto__.call(null);
(statearr_39488[(6)] = c__34129__auto__);

return statearr_39488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__,figwheel_version,temp__5457__auto__))
);

return c__34129__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39491){
var map__39492 = p__39491;
var map__39492__$1 = ((((!((map__39492 == null)))?((((map__39492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39492):map__39492);
var file = cljs.core.get.call(null,map__39492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39492__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39492__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39494 = "";
var G__39494__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39494),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39494);
var G__39494__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39494__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39494__$1);
if(cljs.core.truth_((function (){var and__30110__auto__ = line;
if(cljs.core.truth_(and__30110__auto__)){
return column;
} else {
return and__30110__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39494__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39494__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39495){
var map__39496 = p__39495;
var map__39496__$1 = ((((!((map__39496 == null)))?((((map__39496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39496):map__39496);
var ed = map__39496__$1;
var formatted_exception = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39498_39502 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39499_39503 = null;
var count__39500_39504 = (0);
var i__39501_39505 = (0);
while(true){
if((i__39501_39505 < count__39500_39504)){
var msg_39506 = cljs.core._nth.call(null,chunk__39499_39503,i__39501_39505);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39506);

var G__39507 = seq__39498_39502;
var G__39508 = chunk__39499_39503;
var G__39509 = count__39500_39504;
var G__39510 = (i__39501_39505 + (1));
seq__39498_39502 = G__39507;
chunk__39499_39503 = G__39508;
count__39500_39504 = G__39509;
i__39501_39505 = G__39510;
continue;
} else {
var temp__5457__auto___39511 = cljs.core.seq.call(null,seq__39498_39502);
if(temp__5457__auto___39511){
var seq__39498_39512__$1 = temp__5457__auto___39511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39498_39512__$1)){
var c__31053__auto___39513 = cljs.core.chunk_first.call(null,seq__39498_39512__$1);
var G__39514 = cljs.core.chunk_rest.call(null,seq__39498_39512__$1);
var G__39515 = c__31053__auto___39513;
var G__39516 = cljs.core.count.call(null,c__31053__auto___39513);
var G__39517 = (0);
seq__39498_39502 = G__39514;
chunk__39499_39503 = G__39515;
count__39500_39504 = G__39516;
i__39501_39505 = G__39517;
continue;
} else {
var msg_39518 = cljs.core.first.call(null,seq__39498_39512__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39518);

var G__39519 = cljs.core.next.call(null,seq__39498_39512__$1);
var G__39520 = null;
var G__39521 = (0);
var G__39522 = (0);
seq__39498_39502 = G__39519;
chunk__39499_39503 = G__39520;
count__39500_39504 = G__39521;
i__39501_39505 = G__39522;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39523){
var map__39524 = p__39523;
var map__39524__$1 = ((((!((map__39524 == null)))?((((map__39524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39524):map__39524);
var w = map__39524__$1;
var message = cljs.core.get.call(null,map__39524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30110__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30110__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30110__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39526 = cljs.core.seq.call(null,plugins);
var chunk__39527 = null;
var count__39528 = (0);
var i__39529 = (0);
while(true){
if((i__39529 < count__39528)){
var vec__39530 = cljs.core._nth.call(null,chunk__39527,i__39529);
var k = cljs.core.nth.call(null,vec__39530,(0),null);
var plugin = cljs.core.nth.call(null,vec__39530,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39536 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39526,chunk__39527,count__39528,i__39529,pl_39536,vec__39530,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39536.call(null,msg_hist);
});})(seq__39526,chunk__39527,count__39528,i__39529,pl_39536,vec__39530,k,plugin))
);
} else {
}

var G__39537 = seq__39526;
var G__39538 = chunk__39527;
var G__39539 = count__39528;
var G__39540 = (i__39529 + (1));
seq__39526 = G__39537;
chunk__39527 = G__39538;
count__39528 = G__39539;
i__39529 = G__39540;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39526);
if(temp__5457__auto__){
var seq__39526__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39526__$1)){
var c__31053__auto__ = cljs.core.chunk_first.call(null,seq__39526__$1);
var G__39541 = cljs.core.chunk_rest.call(null,seq__39526__$1);
var G__39542 = c__31053__auto__;
var G__39543 = cljs.core.count.call(null,c__31053__auto__);
var G__39544 = (0);
seq__39526 = G__39541;
chunk__39527 = G__39542;
count__39528 = G__39543;
i__39529 = G__39544;
continue;
} else {
var vec__39533 = cljs.core.first.call(null,seq__39526__$1);
var k = cljs.core.nth.call(null,vec__39533,(0),null);
var plugin = cljs.core.nth.call(null,vec__39533,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39545 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39526,chunk__39527,count__39528,i__39529,pl_39545,vec__39533,k,plugin,seq__39526__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39545.call(null,msg_hist);
});})(seq__39526,chunk__39527,count__39528,i__39529,pl_39545,vec__39533,k,plugin,seq__39526__$1,temp__5457__auto__))
);
} else {
}

var G__39546 = cljs.core.next.call(null,seq__39526__$1);
var G__39547 = null;
var G__39548 = (0);
var G__39549 = (0);
seq__39526 = G__39546;
chunk__39527 = G__39547;
count__39528 = G__39548;
i__39529 = G__39549;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39551 = arguments.length;
switch (G__39551) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39552_39557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39553_39558 = null;
var count__39554_39559 = (0);
var i__39555_39560 = (0);
while(true){
if((i__39555_39560 < count__39554_39559)){
var msg_39561 = cljs.core._nth.call(null,chunk__39553_39558,i__39555_39560);
figwheel.client.socket.handle_incoming_message.call(null,msg_39561);

var G__39562 = seq__39552_39557;
var G__39563 = chunk__39553_39558;
var G__39564 = count__39554_39559;
var G__39565 = (i__39555_39560 + (1));
seq__39552_39557 = G__39562;
chunk__39553_39558 = G__39563;
count__39554_39559 = G__39564;
i__39555_39560 = G__39565;
continue;
} else {
var temp__5457__auto___39566 = cljs.core.seq.call(null,seq__39552_39557);
if(temp__5457__auto___39566){
var seq__39552_39567__$1 = temp__5457__auto___39566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39552_39567__$1)){
var c__31053__auto___39568 = cljs.core.chunk_first.call(null,seq__39552_39567__$1);
var G__39569 = cljs.core.chunk_rest.call(null,seq__39552_39567__$1);
var G__39570 = c__31053__auto___39568;
var G__39571 = cljs.core.count.call(null,c__31053__auto___39568);
var G__39572 = (0);
seq__39552_39557 = G__39569;
chunk__39553_39558 = G__39570;
count__39554_39559 = G__39571;
i__39555_39560 = G__39572;
continue;
} else {
var msg_39573 = cljs.core.first.call(null,seq__39552_39567__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39573);

var G__39574 = cljs.core.next.call(null,seq__39552_39567__$1);
var G__39575 = null;
var G__39576 = (0);
var G__39577 = (0);
seq__39552_39557 = G__39574;
chunk__39553_39558 = G__39575;
count__39554_39559 = G__39576;
i__39555_39560 = G__39577;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31408__auto__ = [];
var len__31401__auto___39582 = arguments.length;
var i__31402__auto___39583 = (0);
while(true){
if((i__31402__auto___39583 < len__31401__auto___39582)){
args__31408__auto__.push((arguments[i__31402__auto___39583]));

var G__39584 = (i__31402__auto___39583 + (1));
i__31402__auto___39583 = G__39584;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((0) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31409__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39579){
var map__39580 = p__39579;
var map__39580__$1 = ((((!((map__39580 == null)))?((((map__39580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39580):map__39580);
var opts = map__39580__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39578){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39578));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39585){if((e39585 instanceof Error)){
var e = e39585;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39585;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39586){
var map__39587 = p__39586;
var map__39587__$1 = ((((!((map__39587 == null)))?((((map__39587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39587):map__39587);
var msg_name = cljs.core.get.call(null,map__39587__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1543501874635
