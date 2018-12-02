// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30122__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30122__auto__){
return or__30122__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30122__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
var or__30122__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30122__auto____$1)){
return or__30122__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37343_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37343_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37344 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37345 = null;
var count__37346 = (0);
var i__37347 = (0);
while(true){
if((i__37347 < count__37346)){
var n = cljs.core._nth.call(null,chunk__37345,i__37347);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37348 = seq__37344;
var G__37349 = chunk__37345;
var G__37350 = count__37346;
var G__37351 = (i__37347 + (1));
seq__37344 = G__37348;
chunk__37345 = G__37349;
count__37346 = G__37350;
i__37347 = G__37351;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37344);
if(temp__5457__auto__){
var seq__37344__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37344__$1)){
var c__31053__auto__ = cljs.core.chunk_first.call(null,seq__37344__$1);
var G__37352 = cljs.core.chunk_rest.call(null,seq__37344__$1);
var G__37353 = c__31053__auto__;
var G__37354 = cljs.core.count.call(null,c__31053__auto__);
var G__37355 = (0);
seq__37344 = G__37352;
chunk__37345 = G__37353;
count__37346 = G__37354;
i__37347 = G__37355;
continue;
} else {
var n = cljs.core.first.call(null,seq__37344__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37356 = cljs.core.next.call(null,seq__37344__$1);
var G__37357 = null;
var G__37358 = (0);
var G__37359 = (0);
seq__37344 = G__37356;
chunk__37345 = G__37357;
count__37346 = G__37358;
i__37347 = G__37359;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37360){
var vec__37361 = p__37360;
var _ = cljs.core.nth.call(null,vec__37361,(0),null);
var v = cljs.core.nth.call(null,vec__37361,(1),null);
var and__30110__auto__ = v;
if(cljs.core.truth_(and__30110__auto__)){
return v.call(null,dep);
} else {
return and__30110__auto__;
}
}),cljs.core.filter.call(null,(function (p__37364){
var vec__37365 = p__37364;
var k = cljs.core.nth.call(null,vec__37365,(0),null);
var v = cljs.core.nth.call(null,vec__37365,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37377_37385 = cljs.core.seq.call(null,deps);
var chunk__37378_37386 = null;
var count__37379_37387 = (0);
var i__37380_37388 = (0);
while(true){
if((i__37380_37388 < count__37379_37387)){
var dep_37389 = cljs.core._nth.call(null,chunk__37378_37386,i__37380_37388);
if(cljs.core.truth_((function (){var and__30110__auto__ = dep_37389;
if(cljs.core.truth_(and__30110__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37389));
} else {
return and__30110__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37389,(depth + (1)),state);
} else {
}

var G__37390 = seq__37377_37385;
var G__37391 = chunk__37378_37386;
var G__37392 = count__37379_37387;
var G__37393 = (i__37380_37388 + (1));
seq__37377_37385 = G__37390;
chunk__37378_37386 = G__37391;
count__37379_37387 = G__37392;
i__37380_37388 = G__37393;
continue;
} else {
var temp__5457__auto___37394 = cljs.core.seq.call(null,seq__37377_37385);
if(temp__5457__auto___37394){
var seq__37377_37395__$1 = temp__5457__auto___37394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37377_37395__$1)){
var c__31053__auto___37396 = cljs.core.chunk_first.call(null,seq__37377_37395__$1);
var G__37397 = cljs.core.chunk_rest.call(null,seq__37377_37395__$1);
var G__37398 = c__31053__auto___37396;
var G__37399 = cljs.core.count.call(null,c__31053__auto___37396);
var G__37400 = (0);
seq__37377_37385 = G__37397;
chunk__37378_37386 = G__37398;
count__37379_37387 = G__37399;
i__37380_37388 = G__37400;
continue;
} else {
var dep_37401 = cljs.core.first.call(null,seq__37377_37395__$1);
if(cljs.core.truth_((function (){var and__30110__auto__ = dep_37401;
if(cljs.core.truth_(and__30110__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37401));
} else {
return and__30110__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37401,(depth + (1)),state);
} else {
}

var G__37402 = cljs.core.next.call(null,seq__37377_37395__$1);
var G__37403 = null;
var G__37404 = (0);
var G__37405 = (0);
seq__37377_37385 = G__37402;
chunk__37378_37386 = G__37403;
count__37379_37387 = G__37404;
i__37380_37388 = G__37405;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37381){
var vec__37382 = p__37381;
var seq__37383 = cljs.core.seq.call(null,vec__37382);
var first__37384 = cljs.core.first.call(null,seq__37383);
var seq__37383__$1 = cljs.core.next.call(null,seq__37383);
var x = first__37384;
var xs = seq__37383__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37382,seq__37383,first__37384,seq__37383__$1,x,xs,get_deps__$1){
return (function (p1__37368_SHARP_){
return clojure.set.difference.call(null,p1__37368_SHARP_,x);
});})(vec__37382,seq__37383,first__37384,seq__37383__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37406 = cljs.core.seq.call(null,provides);
var chunk__37407 = null;
var count__37408 = (0);
var i__37409 = (0);
while(true){
if((i__37409 < count__37408)){
var prov = cljs.core._nth.call(null,chunk__37407,i__37409);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37410_37418 = cljs.core.seq.call(null,requires);
var chunk__37411_37419 = null;
var count__37412_37420 = (0);
var i__37413_37421 = (0);
while(true){
if((i__37413_37421 < count__37412_37420)){
var req_37422 = cljs.core._nth.call(null,chunk__37411_37419,i__37413_37421);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37422,prov);

var G__37423 = seq__37410_37418;
var G__37424 = chunk__37411_37419;
var G__37425 = count__37412_37420;
var G__37426 = (i__37413_37421 + (1));
seq__37410_37418 = G__37423;
chunk__37411_37419 = G__37424;
count__37412_37420 = G__37425;
i__37413_37421 = G__37426;
continue;
} else {
var temp__5457__auto___37427 = cljs.core.seq.call(null,seq__37410_37418);
if(temp__5457__auto___37427){
var seq__37410_37428__$1 = temp__5457__auto___37427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37410_37428__$1)){
var c__31053__auto___37429 = cljs.core.chunk_first.call(null,seq__37410_37428__$1);
var G__37430 = cljs.core.chunk_rest.call(null,seq__37410_37428__$1);
var G__37431 = c__31053__auto___37429;
var G__37432 = cljs.core.count.call(null,c__31053__auto___37429);
var G__37433 = (0);
seq__37410_37418 = G__37430;
chunk__37411_37419 = G__37431;
count__37412_37420 = G__37432;
i__37413_37421 = G__37433;
continue;
} else {
var req_37434 = cljs.core.first.call(null,seq__37410_37428__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37434,prov);

var G__37435 = cljs.core.next.call(null,seq__37410_37428__$1);
var G__37436 = null;
var G__37437 = (0);
var G__37438 = (0);
seq__37410_37418 = G__37435;
chunk__37411_37419 = G__37436;
count__37412_37420 = G__37437;
i__37413_37421 = G__37438;
continue;
}
} else {
}
}
break;
}

var G__37439 = seq__37406;
var G__37440 = chunk__37407;
var G__37441 = count__37408;
var G__37442 = (i__37409 + (1));
seq__37406 = G__37439;
chunk__37407 = G__37440;
count__37408 = G__37441;
i__37409 = G__37442;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37406);
if(temp__5457__auto__){
var seq__37406__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37406__$1)){
var c__31053__auto__ = cljs.core.chunk_first.call(null,seq__37406__$1);
var G__37443 = cljs.core.chunk_rest.call(null,seq__37406__$1);
var G__37444 = c__31053__auto__;
var G__37445 = cljs.core.count.call(null,c__31053__auto__);
var G__37446 = (0);
seq__37406 = G__37443;
chunk__37407 = G__37444;
count__37408 = G__37445;
i__37409 = G__37446;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37406__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37414_37447 = cljs.core.seq.call(null,requires);
var chunk__37415_37448 = null;
var count__37416_37449 = (0);
var i__37417_37450 = (0);
while(true){
if((i__37417_37450 < count__37416_37449)){
var req_37451 = cljs.core._nth.call(null,chunk__37415_37448,i__37417_37450);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37451,prov);

var G__37452 = seq__37414_37447;
var G__37453 = chunk__37415_37448;
var G__37454 = count__37416_37449;
var G__37455 = (i__37417_37450 + (1));
seq__37414_37447 = G__37452;
chunk__37415_37448 = G__37453;
count__37416_37449 = G__37454;
i__37417_37450 = G__37455;
continue;
} else {
var temp__5457__auto___37456__$1 = cljs.core.seq.call(null,seq__37414_37447);
if(temp__5457__auto___37456__$1){
var seq__37414_37457__$1 = temp__5457__auto___37456__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37414_37457__$1)){
var c__31053__auto___37458 = cljs.core.chunk_first.call(null,seq__37414_37457__$1);
var G__37459 = cljs.core.chunk_rest.call(null,seq__37414_37457__$1);
var G__37460 = c__31053__auto___37458;
var G__37461 = cljs.core.count.call(null,c__31053__auto___37458);
var G__37462 = (0);
seq__37414_37447 = G__37459;
chunk__37415_37448 = G__37460;
count__37416_37449 = G__37461;
i__37417_37450 = G__37462;
continue;
} else {
var req_37463 = cljs.core.first.call(null,seq__37414_37457__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37463,prov);

var G__37464 = cljs.core.next.call(null,seq__37414_37457__$1);
var G__37465 = null;
var G__37466 = (0);
var G__37467 = (0);
seq__37414_37447 = G__37464;
chunk__37415_37448 = G__37465;
count__37416_37449 = G__37466;
i__37417_37450 = G__37467;
continue;
}
} else {
}
}
break;
}

var G__37468 = cljs.core.next.call(null,seq__37406__$1);
var G__37469 = null;
var G__37470 = (0);
var G__37471 = (0);
seq__37406 = G__37468;
chunk__37407 = G__37469;
count__37408 = G__37470;
i__37409 = G__37471;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37472_37476 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37473_37477 = null;
var count__37474_37478 = (0);
var i__37475_37479 = (0);
while(true){
if((i__37475_37479 < count__37474_37478)){
var ns_37480 = cljs.core._nth.call(null,chunk__37473_37477,i__37475_37479);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37480);

var G__37481 = seq__37472_37476;
var G__37482 = chunk__37473_37477;
var G__37483 = count__37474_37478;
var G__37484 = (i__37475_37479 + (1));
seq__37472_37476 = G__37481;
chunk__37473_37477 = G__37482;
count__37474_37478 = G__37483;
i__37475_37479 = G__37484;
continue;
} else {
var temp__5457__auto___37485 = cljs.core.seq.call(null,seq__37472_37476);
if(temp__5457__auto___37485){
var seq__37472_37486__$1 = temp__5457__auto___37485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37472_37486__$1)){
var c__31053__auto___37487 = cljs.core.chunk_first.call(null,seq__37472_37486__$1);
var G__37488 = cljs.core.chunk_rest.call(null,seq__37472_37486__$1);
var G__37489 = c__31053__auto___37487;
var G__37490 = cljs.core.count.call(null,c__31053__auto___37487);
var G__37491 = (0);
seq__37472_37476 = G__37488;
chunk__37473_37477 = G__37489;
count__37474_37478 = G__37490;
i__37475_37479 = G__37491;
continue;
} else {
var ns_37492 = cljs.core.first.call(null,seq__37472_37486__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37492);

var G__37493 = cljs.core.next.call(null,seq__37472_37486__$1);
var G__37494 = null;
var G__37495 = (0);
var G__37496 = (0);
seq__37472_37476 = G__37493;
chunk__37473_37477 = G__37494;
count__37474_37478 = G__37495;
i__37475_37479 = G__37496;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30122__auto__ = goog.require__;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37497__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37498__i = 0, G__37498__a = new Array(arguments.length -  0);
while (G__37498__i < G__37498__a.length) {G__37498__a[G__37498__i] = arguments[G__37498__i + 0]; ++G__37498__i;}
  args = new cljs.core.IndexedSeq(G__37498__a,0,null);
} 
return G__37497__delegate.call(this,args);};
G__37497.cljs$lang$maxFixedArity = 0;
G__37497.cljs$lang$applyTo = (function (arglist__37499){
var args = cljs.core.seq(arglist__37499);
return G__37497__delegate(args);
});
G__37497.cljs$core$IFn$_invoke$arity$variadic = G__37497__delegate;
return G__37497;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37500_SHARP_,p2__37501_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37500_SHARP_)].join('')),p2__37501_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37502_SHARP_,p2__37503_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37502_SHARP_)].join(''),p2__37503_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37504 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37504.addCallback(((function (G__37504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37504))
);

G__37504.addErrback(((function (G__37504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37504))
);

return G__37504;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37505){if((e37505 instanceof Error)){
var e = e37505;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37505;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37506){if((e37506 instanceof Error)){
var e = e37506;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37506;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37507 = cljs.core._EQ_;
var expr__37508 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37507.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37508))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37507.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37508))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37507.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37508))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37507,expr__37508){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37507,expr__37508))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37510,callback){
var map__37511 = p__37510;
var map__37511__$1 = ((((!((map__37511 == null)))?((((map__37511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37511):map__37511);
var file_msg = map__37511__$1;
var request_url = cljs.core.get.call(null,map__37511__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30122__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37511,map__37511__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37511,map__37511__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__){
return (function (state_37549){
var state_val_37550 = (state_37549[(1)]);
if((state_val_37550 === (7))){
var inst_37545 = (state_37549[(2)]);
var state_37549__$1 = state_37549;
var statearr_37551_37577 = state_37549__$1;
(statearr_37551_37577[(2)] = inst_37545);

(statearr_37551_37577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (1))){
var state_37549__$1 = state_37549;
var statearr_37552_37578 = state_37549__$1;
(statearr_37552_37578[(2)] = null);

(statearr_37552_37578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (4))){
var inst_37515 = (state_37549[(7)]);
var inst_37515__$1 = (state_37549[(2)]);
var state_37549__$1 = (function (){var statearr_37553 = state_37549;
(statearr_37553[(7)] = inst_37515__$1);

return statearr_37553;
})();
if(cljs.core.truth_(inst_37515__$1)){
var statearr_37554_37579 = state_37549__$1;
(statearr_37554_37579[(1)] = (5));

} else {
var statearr_37555_37580 = state_37549__$1;
(statearr_37555_37580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (15))){
var inst_37528 = (state_37549[(8)]);
var inst_37530 = (state_37549[(9)]);
var inst_37532 = inst_37530.call(null,inst_37528);
var state_37549__$1 = state_37549;
var statearr_37556_37581 = state_37549__$1;
(statearr_37556_37581[(2)] = inst_37532);

(statearr_37556_37581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (13))){
var inst_37539 = (state_37549[(2)]);
var state_37549__$1 = state_37549;
var statearr_37557_37582 = state_37549__$1;
(statearr_37557_37582[(2)] = inst_37539);

(statearr_37557_37582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (6))){
var state_37549__$1 = state_37549;
var statearr_37558_37583 = state_37549__$1;
(statearr_37558_37583[(2)] = null);

(statearr_37558_37583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (17))){
var inst_37536 = (state_37549[(2)]);
var state_37549__$1 = state_37549;
var statearr_37559_37584 = state_37549__$1;
(statearr_37559_37584[(2)] = inst_37536);

(statearr_37559_37584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (3))){
var inst_37547 = (state_37549[(2)]);
var state_37549__$1 = state_37549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37549__$1,inst_37547);
} else {
if((state_val_37550 === (12))){
var state_37549__$1 = state_37549;
var statearr_37560_37585 = state_37549__$1;
(statearr_37560_37585[(2)] = null);

(statearr_37560_37585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (2))){
var state_37549__$1 = state_37549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37549__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37550 === (11))){
var inst_37520 = (state_37549[(10)]);
var inst_37526 = figwheel.client.file_reloading.blocking_load.call(null,inst_37520);
var state_37549__$1 = state_37549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37549__$1,(14),inst_37526);
} else {
if((state_val_37550 === (9))){
var inst_37520 = (state_37549[(10)]);
var state_37549__$1 = state_37549;
if(cljs.core.truth_(inst_37520)){
var statearr_37561_37586 = state_37549__$1;
(statearr_37561_37586[(1)] = (11));

} else {
var statearr_37562_37587 = state_37549__$1;
(statearr_37562_37587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (5))){
var inst_37515 = (state_37549[(7)]);
var inst_37521 = (state_37549[(11)]);
var inst_37520 = cljs.core.nth.call(null,inst_37515,(0),null);
var inst_37521__$1 = cljs.core.nth.call(null,inst_37515,(1),null);
var state_37549__$1 = (function (){var statearr_37563 = state_37549;
(statearr_37563[(10)] = inst_37520);

(statearr_37563[(11)] = inst_37521__$1);

return statearr_37563;
})();
if(cljs.core.truth_(inst_37521__$1)){
var statearr_37564_37588 = state_37549__$1;
(statearr_37564_37588[(1)] = (8));

} else {
var statearr_37565_37589 = state_37549__$1;
(statearr_37565_37589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (14))){
var inst_37520 = (state_37549[(10)]);
var inst_37530 = (state_37549[(9)]);
var inst_37528 = (state_37549[(2)]);
var inst_37529 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37530__$1 = cljs.core.get.call(null,inst_37529,inst_37520);
var state_37549__$1 = (function (){var statearr_37566 = state_37549;
(statearr_37566[(8)] = inst_37528);

(statearr_37566[(9)] = inst_37530__$1);

return statearr_37566;
})();
if(cljs.core.truth_(inst_37530__$1)){
var statearr_37567_37590 = state_37549__$1;
(statearr_37567_37590[(1)] = (15));

} else {
var statearr_37568_37591 = state_37549__$1;
(statearr_37568_37591[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (16))){
var inst_37528 = (state_37549[(8)]);
var inst_37534 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37528);
var state_37549__$1 = state_37549;
var statearr_37569_37592 = state_37549__$1;
(statearr_37569_37592[(2)] = inst_37534);

(statearr_37569_37592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (10))){
var inst_37541 = (state_37549[(2)]);
var state_37549__$1 = (function (){var statearr_37570 = state_37549;
(statearr_37570[(12)] = inst_37541);

return statearr_37570;
})();
var statearr_37571_37593 = state_37549__$1;
(statearr_37571_37593[(2)] = null);

(statearr_37571_37593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (8))){
var inst_37521 = (state_37549[(11)]);
var inst_37523 = eval(inst_37521);
var state_37549__$1 = state_37549;
var statearr_37572_37594 = state_37549__$1;
(statearr_37572_37594[(2)] = inst_37523);

(statearr_37572_37594[(1)] = (10));


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
});})(c__34129__auto__))
;
return ((function (switch__34039__auto__,c__34129__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34040__auto__ = null;
var figwheel$client$file_reloading$state_machine__34040__auto____0 = (function (){
var statearr_37573 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37573[(0)] = figwheel$client$file_reloading$state_machine__34040__auto__);

(statearr_37573[(1)] = (1));

return statearr_37573;
});
var figwheel$client$file_reloading$state_machine__34040__auto____1 = (function (state_37549){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_37549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e37574){if((e37574 instanceof Object)){
var ex__34043__auto__ = e37574;
var statearr_37575_37595 = state_37549;
(statearr_37575_37595[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37596 = state_37549;
state_37549 = G__37596;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34040__auto__ = function(state_37549){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34040__auto____1.call(this,state_37549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34040__auto____0;
figwheel$client$file_reloading$state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34040__auto____1;
return figwheel$client$file_reloading$state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__))
})();
var state__34131__auto__ = (function (){var statearr_37576 = f__34130__auto__.call(null);
(statearr_37576[(6)] = c__34129__auto__);

return statearr_37576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__))
);

return c__34129__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37598 = arguments.length;
switch (G__37598) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37600,callback){
var map__37601 = p__37600;
var map__37601__$1 = ((((!((map__37601 == null)))?((((map__37601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37601):map__37601);
var file_msg = map__37601__$1;
var namespace = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37601,map__37601__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37601,map__37601__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37603){
var map__37604 = p__37603;
var map__37604__$1 = ((((!((map__37604 == null)))?((((map__37604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37604):map__37604);
var file_msg = map__37604__$1;
var namespace = cljs.core.get.call(null,map__37604__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37606){
var map__37607 = p__37606;
var map__37607__$1 = ((((!((map__37607 == null)))?((((map__37607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37607):map__37607);
var file_msg = map__37607__$1;
var namespace = cljs.core.get.call(null,map__37607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30110__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30110__auto__){
var or__30122__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
var or__30122__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30122__auto____$1)){
return or__30122__auto____$1;
} else {
var or__30122__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__30122__auto____$2)){
return or__30122__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__30110__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37609,callback){
var map__37610 = p__37609;
var map__37610__$1 = ((((!((map__37610 == null)))?((((map__37610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37610):map__37610);
var file_msg = map__37610__$1;
var request_url = cljs.core.get.call(null,map__37610__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37610__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34129__auto___37660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto___37660,out){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto___37660,out){
return (function (state_37645){
var state_val_37646 = (state_37645[(1)]);
if((state_val_37646 === (1))){
var inst_37619 = cljs.core.seq.call(null,files);
var inst_37620 = cljs.core.first.call(null,inst_37619);
var inst_37621 = cljs.core.next.call(null,inst_37619);
var inst_37622 = files;
var state_37645__$1 = (function (){var statearr_37647 = state_37645;
(statearr_37647[(7)] = inst_37622);

(statearr_37647[(8)] = inst_37620);

(statearr_37647[(9)] = inst_37621);

return statearr_37647;
})();
var statearr_37648_37661 = state_37645__$1;
(statearr_37648_37661[(2)] = null);

(statearr_37648_37661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (2))){
var inst_37622 = (state_37645[(7)]);
var inst_37628 = (state_37645[(10)]);
var inst_37627 = cljs.core.seq.call(null,inst_37622);
var inst_37628__$1 = cljs.core.first.call(null,inst_37627);
var inst_37629 = cljs.core.next.call(null,inst_37627);
var inst_37630 = (inst_37628__$1 == null);
var inst_37631 = cljs.core.not.call(null,inst_37630);
var state_37645__$1 = (function (){var statearr_37649 = state_37645;
(statearr_37649[(11)] = inst_37629);

(statearr_37649[(10)] = inst_37628__$1);

return statearr_37649;
})();
if(inst_37631){
var statearr_37650_37662 = state_37645__$1;
(statearr_37650_37662[(1)] = (4));

} else {
var statearr_37651_37663 = state_37645__$1;
(statearr_37651_37663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (3))){
var inst_37643 = (state_37645[(2)]);
var state_37645__$1 = state_37645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37645__$1,inst_37643);
} else {
if((state_val_37646 === (4))){
var inst_37628 = (state_37645[(10)]);
var inst_37633 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37628);
var state_37645__$1 = state_37645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37645__$1,(7),inst_37633);
} else {
if((state_val_37646 === (5))){
var inst_37639 = cljs.core.async.close_BANG_.call(null,out);
var state_37645__$1 = state_37645;
var statearr_37652_37664 = state_37645__$1;
(statearr_37652_37664[(2)] = inst_37639);

(statearr_37652_37664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (6))){
var inst_37641 = (state_37645[(2)]);
var state_37645__$1 = state_37645;
var statearr_37653_37665 = state_37645__$1;
(statearr_37653_37665[(2)] = inst_37641);

(statearr_37653_37665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (7))){
var inst_37629 = (state_37645[(11)]);
var inst_37635 = (state_37645[(2)]);
var inst_37636 = cljs.core.async.put_BANG_.call(null,out,inst_37635);
var inst_37622 = inst_37629;
var state_37645__$1 = (function (){var statearr_37654 = state_37645;
(statearr_37654[(7)] = inst_37622);

(statearr_37654[(12)] = inst_37636);

return statearr_37654;
})();
var statearr_37655_37666 = state_37645__$1;
(statearr_37655_37666[(2)] = null);

(statearr_37655_37666[(1)] = (2));


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
});})(c__34129__auto___37660,out))
;
return ((function (switch__34039__auto__,c__34129__auto___37660,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto____0 = (function (){
var statearr_37656 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37656[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto__);

(statearr_37656[(1)] = (1));

return statearr_37656;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto____1 = (function (state_37645){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_37645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e37657){if((e37657 instanceof Object)){
var ex__34043__auto__ = e37657;
var statearr_37658_37667 = state_37645;
(statearr_37658_37667[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37668 = state_37645;
state_37645 = G__37668;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto__ = function(state_37645){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto____1.call(this,state_37645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto___37660,out))
})();
var state__34131__auto__ = (function (){var statearr_37659 = f__34130__auto__.call(null);
(statearr_37659[(6)] = c__34129__auto___37660);

return statearr_37659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto___37660,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37669,opts){
var map__37670 = p__37669;
var map__37670__$1 = ((((!((map__37670 == null)))?((((map__37670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37670):map__37670);
var eval_body = cljs.core.get.call(null,map__37670__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30110__auto__ = eval_body;
if(cljs.core.truth_(and__30110__auto__)){
return typeof eval_body === 'string';
} else {
return and__30110__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37672){var e = e37672;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37673_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37673_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37674){
var vec__37675 = p__37674;
var k = cljs.core.nth.call(null,vec__37675,(0),null);
var v = cljs.core.nth.call(null,vec__37675,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37678){
var vec__37679 = p__37678;
var k = cljs.core.nth.call(null,vec__37679,(0),null);
var v = cljs.core.nth.call(null,vec__37679,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37685,p__37686){
var map__37687 = p__37685;
var map__37687__$1 = ((((!((map__37687 == null)))?((((map__37687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37687):map__37687);
var opts = map__37687__$1;
var before_jsload = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37688 = p__37686;
var map__37688__$1 = ((((!((map__37688 == null)))?((((map__37688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37688):map__37688);
var msg = map__37688__$1;
var files = cljs.core.get.call(null,map__37688__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37688__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37688__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34130__auto__ = (function (){var switch__34039__auto__ = ((function (c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37842){
var state_val_37843 = (state_37842[(1)]);
if((state_val_37843 === (7))){
var inst_37705 = (state_37842[(7)]);
var inst_37702 = (state_37842[(8)]);
var inst_37703 = (state_37842[(9)]);
var inst_37704 = (state_37842[(10)]);
var inst_37710 = cljs.core._nth.call(null,inst_37703,inst_37705);
var inst_37711 = figwheel.client.file_reloading.eval_body.call(null,inst_37710,opts);
var inst_37712 = (inst_37705 + (1));
var tmp37844 = inst_37702;
var tmp37845 = inst_37703;
var tmp37846 = inst_37704;
var inst_37702__$1 = tmp37844;
var inst_37703__$1 = tmp37845;
var inst_37704__$1 = tmp37846;
var inst_37705__$1 = inst_37712;
var state_37842__$1 = (function (){var statearr_37847 = state_37842;
(statearr_37847[(7)] = inst_37705__$1);

(statearr_37847[(8)] = inst_37702__$1);

(statearr_37847[(9)] = inst_37703__$1);

(statearr_37847[(11)] = inst_37711);

(statearr_37847[(10)] = inst_37704__$1);

return statearr_37847;
})();
var statearr_37848_37931 = state_37842__$1;
(statearr_37848_37931[(2)] = null);

(statearr_37848_37931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (20))){
var inst_37745 = (state_37842[(12)]);
var inst_37753 = figwheel.client.file_reloading.sort_files.call(null,inst_37745);
var state_37842__$1 = state_37842;
var statearr_37849_37932 = state_37842__$1;
(statearr_37849_37932[(2)] = inst_37753);

(statearr_37849_37932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (27))){
var state_37842__$1 = state_37842;
var statearr_37850_37933 = state_37842__$1;
(statearr_37850_37933[(2)] = null);

(statearr_37850_37933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (1))){
var inst_37694 = (state_37842[(13)]);
var inst_37691 = before_jsload.call(null,files);
var inst_37692 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37693 = (function (){return ((function (inst_37694,inst_37691,inst_37692,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37682_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37682_SHARP_);
});
;})(inst_37694,inst_37691,inst_37692,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37694__$1 = cljs.core.filter.call(null,inst_37693,files);
var inst_37695 = cljs.core.not_empty.call(null,inst_37694__$1);
var state_37842__$1 = (function (){var statearr_37851 = state_37842;
(statearr_37851[(14)] = inst_37692);

(statearr_37851[(15)] = inst_37691);

(statearr_37851[(13)] = inst_37694__$1);

return statearr_37851;
})();
if(cljs.core.truth_(inst_37695)){
var statearr_37852_37934 = state_37842__$1;
(statearr_37852_37934[(1)] = (2));

} else {
var statearr_37853_37935 = state_37842__$1;
(statearr_37853_37935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (24))){
var state_37842__$1 = state_37842;
var statearr_37854_37936 = state_37842__$1;
(statearr_37854_37936[(2)] = null);

(statearr_37854_37936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (39))){
var inst_37795 = (state_37842[(16)]);
var state_37842__$1 = state_37842;
var statearr_37855_37937 = state_37842__$1;
(statearr_37855_37937[(2)] = inst_37795);

(statearr_37855_37937[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (46))){
var inst_37837 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
var statearr_37856_37938 = state_37842__$1;
(statearr_37856_37938[(2)] = inst_37837);

(statearr_37856_37938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (4))){
var inst_37739 = (state_37842[(2)]);
var inst_37740 = cljs.core.List.EMPTY;
var inst_37741 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37740);
var inst_37742 = (function (){return ((function (inst_37739,inst_37740,inst_37741,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37683_SHARP_){
var and__30110__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37683_SHARP_);
if(cljs.core.truth_(and__30110__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37683_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37683_SHARP_)));
} else {
return and__30110__auto__;
}
});
;})(inst_37739,inst_37740,inst_37741,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37743 = cljs.core.filter.call(null,inst_37742,files);
var inst_37744 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37745 = cljs.core.concat.call(null,inst_37743,inst_37744);
var state_37842__$1 = (function (){var statearr_37857 = state_37842;
(statearr_37857[(17)] = inst_37739);

(statearr_37857[(12)] = inst_37745);

(statearr_37857[(18)] = inst_37741);

return statearr_37857;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37858_37939 = state_37842__$1;
(statearr_37858_37939[(1)] = (16));

} else {
var statearr_37859_37940 = state_37842__$1;
(statearr_37859_37940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (15))){
var inst_37729 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
var statearr_37860_37941 = state_37842__$1;
(statearr_37860_37941[(2)] = inst_37729);

(statearr_37860_37941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (21))){
var inst_37755 = (state_37842[(19)]);
var inst_37755__$1 = (state_37842[(2)]);
var inst_37756 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37755__$1);
var state_37842__$1 = (function (){var statearr_37861 = state_37842;
(statearr_37861[(19)] = inst_37755__$1);

return statearr_37861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37842__$1,(22),inst_37756);
} else {
if((state_val_37843 === (31))){
var inst_37840 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37842__$1,inst_37840);
} else {
if((state_val_37843 === (32))){
var inst_37795 = (state_37842[(16)]);
var inst_37800 = inst_37795.cljs$lang$protocol_mask$partition0$;
var inst_37801 = (inst_37800 & (64));
var inst_37802 = inst_37795.cljs$core$ISeq$;
var inst_37803 = (cljs.core.PROTOCOL_SENTINEL === inst_37802);
var inst_37804 = (inst_37801) || (inst_37803);
var state_37842__$1 = state_37842;
if(cljs.core.truth_(inst_37804)){
var statearr_37862_37942 = state_37842__$1;
(statearr_37862_37942[(1)] = (35));

} else {
var statearr_37863_37943 = state_37842__$1;
(statearr_37863_37943[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (40))){
var inst_37817 = (state_37842[(20)]);
var inst_37816 = (state_37842[(2)]);
var inst_37817__$1 = cljs.core.get.call(null,inst_37816,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37818 = cljs.core.get.call(null,inst_37816,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37819 = cljs.core.not_empty.call(null,inst_37817__$1);
var state_37842__$1 = (function (){var statearr_37864 = state_37842;
(statearr_37864[(20)] = inst_37817__$1);

(statearr_37864[(21)] = inst_37818);

return statearr_37864;
})();
if(cljs.core.truth_(inst_37819)){
var statearr_37865_37944 = state_37842__$1;
(statearr_37865_37944[(1)] = (41));

} else {
var statearr_37866_37945 = state_37842__$1;
(statearr_37866_37945[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (33))){
var state_37842__$1 = state_37842;
var statearr_37867_37946 = state_37842__$1;
(statearr_37867_37946[(2)] = false);

(statearr_37867_37946[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (13))){
var inst_37715 = (state_37842[(22)]);
var inst_37719 = cljs.core.chunk_first.call(null,inst_37715);
var inst_37720 = cljs.core.chunk_rest.call(null,inst_37715);
var inst_37721 = cljs.core.count.call(null,inst_37719);
var inst_37702 = inst_37720;
var inst_37703 = inst_37719;
var inst_37704 = inst_37721;
var inst_37705 = (0);
var state_37842__$1 = (function (){var statearr_37868 = state_37842;
(statearr_37868[(7)] = inst_37705);

(statearr_37868[(8)] = inst_37702);

(statearr_37868[(9)] = inst_37703);

(statearr_37868[(10)] = inst_37704);

return statearr_37868;
})();
var statearr_37869_37947 = state_37842__$1;
(statearr_37869_37947[(2)] = null);

(statearr_37869_37947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (22))){
var inst_37758 = (state_37842[(23)]);
var inst_37759 = (state_37842[(24)]);
var inst_37755 = (state_37842[(19)]);
var inst_37763 = (state_37842[(25)]);
var inst_37758__$1 = (state_37842[(2)]);
var inst_37759__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37758__$1);
var inst_37760 = (function (){var all_files = inst_37755;
var res_SINGLEQUOTE_ = inst_37758__$1;
var res = inst_37759__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37758,inst_37759,inst_37755,inst_37763,inst_37758__$1,inst_37759__$1,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37684_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37684_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37758,inst_37759,inst_37755,inst_37763,inst_37758__$1,inst_37759__$1,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37761 = cljs.core.filter.call(null,inst_37760,inst_37758__$1);
var inst_37762 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37763__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37762);
var inst_37764 = cljs.core.not_empty.call(null,inst_37763__$1);
var state_37842__$1 = (function (){var statearr_37870 = state_37842;
(statearr_37870[(23)] = inst_37758__$1);

(statearr_37870[(24)] = inst_37759__$1);

(statearr_37870[(25)] = inst_37763__$1);

(statearr_37870[(26)] = inst_37761);

return statearr_37870;
})();
if(cljs.core.truth_(inst_37764)){
var statearr_37871_37948 = state_37842__$1;
(statearr_37871_37948[(1)] = (23));

} else {
var statearr_37872_37949 = state_37842__$1;
(statearr_37872_37949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (36))){
var state_37842__$1 = state_37842;
var statearr_37873_37950 = state_37842__$1;
(statearr_37873_37950[(2)] = false);

(statearr_37873_37950[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (41))){
var inst_37817 = (state_37842[(20)]);
var inst_37821 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37822 = cljs.core.map.call(null,inst_37821,inst_37817);
var inst_37823 = cljs.core.pr_str.call(null,inst_37822);
var inst_37824 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37823)].join('');
var inst_37825 = figwheel.client.utils.log.call(null,inst_37824);
var state_37842__$1 = state_37842;
var statearr_37874_37951 = state_37842__$1;
(statearr_37874_37951[(2)] = inst_37825);

(statearr_37874_37951[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (43))){
var inst_37818 = (state_37842[(21)]);
var inst_37828 = (state_37842[(2)]);
var inst_37829 = cljs.core.not_empty.call(null,inst_37818);
var state_37842__$1 = (function (){var statearr_37875 = state_37842;
(statearr_37875[(27)] = inst_37828);

return statearr_37875;
})();
if(cljs.core.truth_(inst_37829)){
var statearr_37876_37952 = state_37842__$1;
(statearr_37876_37952[(1)] = (44));

} else {
var statearr_37877_37953 = state_37842__$1;
(statearr_37877_37953[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (29))){
var inst_37758 = (state_37842[(23)]);
var inst_37759 = (state_37842[(24)]);
var inst_37755 = (state_37842[(19)]);
var inst_37795 = (state_37842[(16)]);
var inst_37763 = (state_37842[(25)]);
var inst_37761 = (state_37842[(26)]);
var inst_37791 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37794 = (function (){var all_files = inst_37755;
var res_SINGLEQUOTE_ = inst_37758;
var res = inst_37759;
var files_not_loaded = inst_37761;
var dependencies_that_loaded = inst_37763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37795,inst_37763,inst_37761,inst_37791,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37793){
var map__37878 = p__37793;
var map__37878__$1 = ((((!((map__37878 == null)))?((((map__37878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37878):map__37878);
var namespace = cljs.core.get.call(null,map__37878__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37795,inst_37763,inst_37761,inst_37791,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37795__$1 = cljs.core.group_by.call(null,inst_37794,inst_37761);
var inst_37797 = (inst_37795__$1 == null);
var inst_37798 = cljs.core.not.call(null,inst_37797);
var state_37842__$1 = (function (){var statearr_37880 = state_37842;
(statearr_37880[(28)] = inst_37791);

(statearr_37880[(16)] = inst_37795__$1);

return statearr_37880;
})();
if(inst_37798){
var statearr_37881_37954 = state_37842__$1;
(statearr_37881_37954[(1)] = (32));

} else {
var statearr_37882_37955 = state_37842__$1;
(statearr_37882_37955[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (44))){
var inst_37818 = (state_37842[(21)]);
var inst_37831 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37818);
var inst_37832 = cljs.core.pr_str.call(null,inst_37831);
var inst_37833 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37832)].join('');
var inst_37834 = figwheel.client.utils.log.call(null,inst_37833);
var state_37842__$1 = state_37842;
var statearr_37883_37956 = state_37842__$1;
(statearr_37883_37956[(2)] = inst_37834);

(statearr_37883_37956[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (6))){
var inst_37736 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
var statearr_37884_37957 = state_37842__$1;
(statearr_37884_37957[(2)] = inst_37736);

(statearr_37884_37957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (28))){
var inst_37761 = (state_37842[(26)]);
var inst_37788 = (state_37842[(2)]);
var inst_37789 = cljs.core.not_empty.call(null,inst_37761);
var state_37842__$1 = (function (){var statearr_37885 = state_37842;
(statearr_37885[(29)] = inst_37788);

return statearr_37885;
})();
if(cljs.core.truth_(inst_37789)){
var statearr_37886_37958 = state_37842__$1;
(statearr_37886_37958[(1)] = (29));

} else {
var statearr_37887_37959 = state_37842__$1;
(statearr_37887_37959[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (25))){
var inst_37759 = (state_37842[(24)]);
var inst_37775 = (state_37842[(2)]);
var inst_37776 = cljs.core.not_empty.call(null,inst_37759);
var state_37842__$1 = (function (){var statearr_37888 = state_37842;
(statearr_37888[(30)] = inst_37775);

return statearr_37888;
})();
if(cljs.core.truth_(inst_37776)){
var statearr_37889_37960 = state_37842__$1;
(statearr_37889_37960[(1)] = (26));

} else {
var statearr_37890_37961 = state_37842__$1;
(statearr_37890_37961[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (34))){
var inst_37811 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
if(cljs.core.truth_(inst_37811)){
var statearr_37891_37962 = state_37842__$1;
(statearr_37891_37962[(1)] = (38));

} else {
var statearr_37892_37963 = state_37842__$1;
(statearr_37892_37963[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (17))){
var state_37842__$1 = state_37842;
var statearr_37893_37964 = state_37842__$1;
(statearr_37893_37964[(2)] = recompile_dependents);

(statearr_37893_37964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (3))){
var state_37842__$1 = state_37842;
var statearr_37894_37965 = state_37842__$1;
(statearr_37894_37965[(2)] = null);

(statearr_37894_37965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (12))){
var inst_37732 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
var statearr_37895_37966 = state_37842__$1;
(statearr_37895_37966[(2)] = inst_37732);

(statearr_37895_37966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (2))){
var inst_37694 = (state_37842[(13)]);
var inst_37701 = cljs.core.seq.call(null,inst_37694);
var inst_37702 = inst_37701;
var inst_37703 = null;
var inst_37704 = (0);
var inst_37705 = (0);
var state_37842__$1 = (function (){var statearr_37896 = state_37842;
(statearr_37896[(7)] = inst_37705);

(statearr_37896[(8)] = inst_37702);

(statearr_37896[(9)] = inst_37703);

(statearr_37896[(10)] = inst_37704);

return statearr_37896;
})();
var statearr_37897_37967 = state_37842__$1;
(statearr_37897_37967[(2)] = null);

(statearr_37897_37967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (23))){
var inst_37758 = (state_37842[(23)]);
var inst_37759 = (state_37842[(24)]);
var inst_37755 = (state_37842[(19)]);
var inst_37763 = (state_37842[(25)]);
var inst_37761 = (state_37842[(26)]);
var inst_37766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37768 = (function (){var all_files = inst_37755;
var res_SINGLEQUOTE_ = inst_37758;
var res = inst_37759;
var files_not_loaded = inst_37761;
var dependencies_that_loaded = inst_37763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37763,inst_37761,inst_37766,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37767){
var map__37898 = p__37767;
var map__37898__$1 = ((((!((map__37898 == null)))?((((map__37898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37898):map__37898);
var request_url = cljs.core.get.call(null,map__37898__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37763,inst_37761,inst_37766,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37769 = cljs.core.reverse.call(null,inst_37763);
var inst_37770 = cljs.core.map.call(null,inst_37768,inst_37769);
var inst_37771 = cljs.core.pr_str.call(null,inst_37770);
var inst_37772 = figwheel.client.utils.log.call(null,inst_37771);
var state_37842__$1 = (function (){var statearr_37900 = state_37842;
(statearr_37900[(31)] = inst_37766);

return statearr_37900;
})();
var statearr_37901_37968 = state_37842__$1;
(statearr_37901_37968[(2)] = inst_37772);

(statearr_37901_37968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (35))){
var state_37842__$1 = state_37842;
var statearr_37902_37969 = state_37842__$1;
(statearr_37902_37969[(2)] = true);

(statearr_37902_37969[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (19))){
var inst_37745 = (state_37842[(12)]);
var inst_37751 = figwheel.client.file_reloading.expand_files.call(null,inst_37745);
var state_37842__$1 = state_37842;
var statearr_37903_37970 = state_37842__$1;
(statearr_37903_37970[(2)] = inst_37751);

(statearr_37903_37970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (11))){
var state_37842__$1 = state_37842;
var statearr_37904_37971 = state_37842__$1;
(statearr_37904_37971[(2)] = null);

(statearr_37904_37971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (9))){
var inst_37734 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
var statearr_37905_37972 = state_37842__$1;
(statearr_37905_37972[(2)] = inst_37734);

(statearr_37905_37972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (5))){
var inst_37705 = (state_37842[(7)]);
var inst_37704 = (state_37842[(10)]);
var inst_37707 = (inst_37705 < inst_37704);
var inst_37708 = inst_37707;
var state_37842__$1 = state_37842;
if(cljs.core.truth_(inst_37708)){
var statearr_37906_37973 = state_37842__$1;
(statearr_37906_37973[(1)] = (7));

} else {
var statearr_37907_37974 = state_37842__$1;
(statearr_37907_37974[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (14))){
var inst_37715 = (state_37842[(22)]);
var inst_37724 = cljs.core.first.call(null,inst_37715);
var inst_37725 = figwheel.client.file_reloading.eval_body.call(null,inst_37724,opts);
var inst_37726 = cljs.core.next.call(null,inst_37715);
var inst_37702 = inst_37726;
var inst_37703 = null;
var inst_37704 = (0);
var inst_37705 = (0);
var state_37842__$1 = (function (){var statearr_37908 = state_37842;
(statearr_37908[(7)] = inst_37705);

(statearr_37908[(8)] = inst_37702);

(statearr_37908[(9)] = inst_37703);

(statearr_37908[(32)] = inst_37725);

(statearr_37908[(10)] = inst_37704);

return statearr_37908;
})();
var statearr_37909_37975 = state_37842__$1;
(statearr_37909_37975[(2)] = null);

(statearr_37909_37975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (45))){
var state_37842__$1 = state_37842;
var statearr_37910_37976 = state_37842__$1;
(statearr_37910_37976[(2)] = null);

(statearr_37910_37976[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (26))){
var inst_37758 = (state_37842[(23)]);
var inst_37759 = (state_37842[(24)]);
var inst_37755 = (state_37842[(19)]);
var inst_37763 = (state_37842[(25)]);
var inst_37761 = (state_37842[(26)]);
var inst_37778 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37780 = (function (){var all_files = inst_37755;
var res_SINGLEQUOTE_ = inst_37758;
var res = inst_37759;
var files_not_loaded = inst_37761;
var dependencies_that_loaded = inst_37763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37763,inst_37761,inst_37778,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37779){
var map__37911 = p__37779;
var map__37911__$1 = ((((!((map__37911 == null)))?((((map__37911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37911):map__37911);
var namespace = cljs.core.get.call(null,map__37911__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37911__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37763,inst_37761,inst_37778,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37781 = cljs.core.map.call(null,inst_37780,inst_37759);
var inst_37782 = cljs.core.pr_str.call(null,inst_37781);
var inst_37783 = figwheel.client.utils.log.call(null,inst_37782);
var inst_37784 = (function (){var all_files = inst_37755;
var res_SINGLEQUOTE_ = inst_37758;
var res = inst_37759;
var files_not_loaded = inst_37761;
var dependencies_that_loaded = inst_37763;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37763,inst_37761,inst_37778,inst_37780,inst_37781,inst_37782,inst_37783,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37758,inst_37759,inst_37755,inst_37763,inst_37761,inst_37778,inst_37780,inst_37781,inst_37782,inst_37783,state_val_37843,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37785 = setTimeout(inst_37784,(10));
var state_37842__$1 = (function (){var statearr_37913 = state_37842;
(statearr_37913[(33)] = inst_37778);

(statearr_37913[(34)] = inst_37783);

return statearr_37913;
})();
var statearr_37914_37977 = state_37842__$1;
(statearr_37914_37977[(2)] = inst_37785);

(statearr_37914_37977[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (16))){
var state_37842__$1 = state_37842;
var statearr_37915_37978 = state_37842__$1;
(statearr_37915_37978[(2)] = reload_dependents);

(statearr_37915_37978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (38))){
var inst_37795 = (state_37842[(16)]);
var inst_37813 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37795);
var state_37842__$1 = state_37842;
var statearr_37916_37979 = state_37842__$1;
(statearr_37916_37979[(2)] = inst_37813);

(statearr_37916_37979[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (30))){
var state_37842__$1 = state_37842;
var statearr_37917_37980 = state_37842__$1;
(statearr_37917_37980[(2)] = null);

(statearr_37917_37980[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (10))){
var inst_37715 = (state_37842[(22)]);
var inst_37717 = cljs.core.chunked_seq_QMARK_.call(null,inst_37715);
var state_37842__$1 = state_37842;
if(inst_37717){
var statearr_37918_37981 = state_37842__$1;
(statearr_37918_37981[(1)] = (13));

} else {
var statearr_37919_37982 = state_37842__$1;
(statearr_37919_37982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (18))){
var inst_37749 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
if(cljs.core.truth_(inst_37749)){
var statearr_37920_37983 = state_37842__$1;
(statearr_37920_37983[(1)] = (19));

} else {
var statearr_37921_37984 = state_37842__$1;
(statearr_37921_37984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (42))){
var state_37842__$1 = state_37842;
var statearr_37922_37985 = state_37842__$1;
(statearr_37922_37985[(2)] = null);

(statearr_37922_37985[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (37))){
var inst_37808 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
var statearr_37923_37986 = state_37842__$1;
(statearr_37923_37986[(2)] = inst_37808);

(statearr_37923_37986[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (8))){
var inst_37702 = (state_37842[(8)]);
var inst_37715 = (state_37842[(22)]);
var inst_37715__$1 = cljs.core.seq.call(null,inst_37702);
var state_37842__$1 = (function (){var statearr_37924 = state_37842;
(statearr_37924[(22)] = inst_37715__$1);

return statearr_37924;
})();
if(inst_37715__$1){
var statearr_37925_37987 = state_37842__$1;
(statearr_37925_37987[(1)] = (10));

} else {
var statearr_37926_37988 = state_37842__$1;
(statearr_37926_37988[(1)] = (11));

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
});})(c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34039__auto__,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto____0 = (function (){
var statearr_37927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37927[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto__);

(statearr_37927[(1)] = (1));

return statearr_37927;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto____1 = (function (state_37842){
while(true){
var ret_value__34041__auto__ = (function (){try{while(true){
var result__34042__auto__ = switch__34039__auto__.call(null,state_37842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34042__auto__;
}
break;
}
}catch (e37928){if((e37928 instanceof Object)){
var ex__34043__auto__ = e37928;
var statearr_37929_37989 = state_37842;
(statearr_37929_37989[(5)] = ex__34043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37990 = state_37842;
state_37842 = G__37990;
continue;
} else {
return ret_value__34041__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto__ = function(state_37842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto____1.call(this,state_37842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34040__auto__;
})()
;})(switch__34039__auto__,c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34131__auto__ = (function (){var statearr_37930 = f__34130__auto__.call(null);
(statearr_37930[(6)] = c__34129__auto__);

return statearr_37930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34131__auto__);
});})(c__34129__auto__,map__37687,map__37687__$1,opts,before_jsload,on_jsload,reload_dependents,map__37688,map__37688__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34129__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37993,link){
var map__37994 = p__37993;
var map__37994__$1 = ((((!((map__37994 == null)))?((((map__37994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37994):map__37994);
var file = cljs.core.get.call(null,map__37994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37994,map__37994__$1,file){
return (function (p1__37991_SHARP_,p2__37992_SHARP_){
if(cljs.core._EQ_.call(null,p1__37991_SHARP_,p2__37992_SHARP_)){
return p1__37991_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37994,map__37994__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37997){
var map__37998 = p__37997;
var map__37998__$1 = ((((!((map__37998 == null)))?((((map__37998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37998):map__37998);
var match_length = cljs.core.get.call(null,map__37998__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37998__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37996_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37996_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38000_SHARP_,p2__38001_SHARP_){
return cljs.core.assoc.call(null,p1__38000_SHARP_,cljs.core.get.call(null,p2__38001_SHARP_,key),p2__38001_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38002 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38002);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38002);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38003,p__38004){
var map__38005 = p__38003;
var map__38005__$1 = ((((!((map__38005 == null)))?((((map__38005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38005):map__38005);
var on_cssload = cljs.core.get.call(null,map__38005__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38006 = p__38004;
var map__38006__$1 = ((((!((map__38006 == null)))?((((map__38006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38006):map__38006);
var files_msg = map__38006__$1;
var files = cljs.core.get.call(null,map__38006__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1543501872586
