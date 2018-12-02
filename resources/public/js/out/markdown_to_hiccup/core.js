// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown_to_hiccup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('hickory.core');
goog.require('markdown.core');
markdown_to_hiccup.core.html_encodings = new cljs.core.PersistentArrayMap(null, 4, ["&quot;","\\\"","&gt;",">","&lt;","<","&amp;","&"], null);
markdown_to_hiccup.core.decode_reducer = (function markdown_to_hiccup$core$decode_reducer(acc,p__32259){
var vec__32260 = p__32259;
var match = cljs.core.nth.call(null,vec__32260,(0),null);
var replace = cljs.core.nth.call(null,vec__32260,(1),null);
return clojure.string.replace.call(null,acc,match,replace);
});
markdown_to_hiccup.core.decode = (function markdown_to_hiccup$core$decode(s){

var decoded_str = goog.string.unescapeEntities(s);
cljs.core.println.call(null,decoded_str);

return cljs.reader.read_string(decoded_str);
});
/**
 * Accepts a markdown string and returns a hiccup data structure converted from that markdown.
 *   Also accepts an optional params map. Use the :encode? boolean key to specify whether
 *   or not you want html escape characters to be encoded. Example:
 *  (md->hiccup "#Title" {:encode? true})
 */
markdown_to_hiccup.core.md__GT_hiccup = (function markdown_to_hiccup$core$md__GT_hiccup(var_args){
var G__32264 = arguments.length;
switch (G__32264) {
case 2:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (md_str,params){
var html = markdown.core.md__GT_html.call(null,md_str);
var dom = hickory.core.parse.call(null,html);
var hiccup = cljs.core.first.call(null,hickory.core.as_hiccup.call(null,dom));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"encode?","encode?",-640109139).cljs$core$IFn$_invoke$arity$1(params))){
return markdown_to_hiccup.core.decode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup)].join(''));
} else {
return hiccup;
}
});

markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (md_str){
return markdown_to_hiccup.core.md__GT_hiccup.call(null,md_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encode?","encode?",-640109139),false], null));
});

markdown_to_hiccup.core.md__GT_hiccup.cljs$lang$maxFixedArity = 2;

markdown_to_hiccup.core.md__GT_hiccup.call(null,"\u2014");
markdown_to_hiccup.core.md__GT_hiccup.call(null,"'");
/**
 * NOTE: please use hiccup-in for better access to nested hiccup.
 *   Accepts a hiccup data structure and a keyword representing
 *   an html element tag (e.g. :body) and returns the first nested
 *   hiccup vector identified by the keyword.
 */
markdown_to_hiccup.core.hicc_in = (function markdown_to_hiccup$core$hicc_in(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32268 = arguments.length;
var i__31402__auto___32269 = (0);
while(true){
if((i__31402__auto___32269 < len__31401__auto___32268)){
args__31408__auto__.push((arguments[i__31402__auto___32269]));

var G__32270 = (i__31402__auto___32269 + (1));
i__31402__auto___32269 = G__32270;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((1) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31409__auto__);
});

markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kws){
while(true){
var kw = cljs.core.first.call(null,kws);
var root = cljs.core.first.call(null,hiccup);
if((kw == null)){
return hiccup;
} else {
if(cljs.core.empty_QMARK_.call(null,hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.map_QMARK_.call(null,root)){
var G__32271 = cljs.core.rest.call(null,hiccup);
var G__32272 = kws;
hiccup = G__32271;
kws = G__32272;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,root)){
var branch_result = cljs.core.apply.call(null,markdown_to_hiccup.core.hicc_in,root,kws);
if(cljs.core.empty_QMARK_.call(null,branch_result)){
var G__32273 = cljs.core.rest.call(null,hiccup);
var G__32274 = kws;
hiccup = G__32273;
kws = G__32274;
continue;
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.call(null,root,kw)){
var G__32275 = hiccup;
var G__32276 = cljs.core.rest.call(null,kws);
hiccup = G__32275;
kws = G__32276;
continue;
} else {
var G__32277 = cljs.core.rest.call(null,hiccup);
var G__32278 = kws;
hiccup = G__32277;
kws = G__32278;
continue;

}
}
}
}
}
break;
}
});

markdown_to_hiccup.core.hicc_in.cljs$lang$maxFixedArity = (1);

markdown_to_hiccup.core.hicc_in.cljs$lang$applyTo = (function (seq32266){
var G__32267 = cljs.core.first.call(null,seq32266);
var seq32266__$1 = cljs.core.next.call(null,seq32266);
return markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic(G__32267,seq32266__$1);
});

markdown_to_hiccup.core.keywords_QMARK_ = (function markdown_to_hiccup$core$keywords_QMARK_(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32280 = arguments.length;
var i__31402__auto___32281 = (0);
while(true){
if((i__31402__auto___32281 < len__31401__auto___32280)){
args__31408__auto__.push((arguments[i__31402__auto___32281]));

var G__32282 = (i__31402__auto___32281 + (1));
i__31402__auto___32281 = G__32282;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((0) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((0)),(0),null)):null);
return markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__31409__auto__);
});

markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,args);
});

markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$maxFixedArity = (0);

markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$applyTo = (function (seq32279){
return markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32279));
});

/**
 * Accepts a list of [keyword count] pairs, and subtracts the count
 * of the first pair. If that count becomes negative, dec-front returns
 * the rest of the list. Otherwise, it returns the list with the new
 * count value for the first pair.
 */
markdown_to_hiccup.core.dec_front = (function markdown_to_hiccup$core$dec_front(kw_pairs){
var vec__32283 = cljs.core.first.call(null,kw_pairs);
var kw = cljs.core.nth.call(null,vec__32283,(0),null);
var count = cljs.core.nth.call(null,vec__32283,(1),null);
var new_count = (count - (1));
var new_pair = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new_count], null);
if((new_count < (0))){
return cljs.core.rest.call(null,kw_pairs);
} else {
return cljs.core.cons.call(null,new_pair,cljs.core.rest.call(null,kw_pairs));
}
});
/**
 * Accepts a list of keywords and numbers. Any place in which
 *   a number does not separate keywords, a zero will be inserted.
 *   Returns the arg list as a sequence of keyword -> number pairs
 *   nested as lists.
 */
markdown_to_hiccup.core.num_partition = (function markdown_to_hiccup$core$num_partition(args){
var arglist = args;
var ret_vec = cljs.core.PersistentVector.EMPTY;
while(true){
var curr_arg = cljs.core.first.call(null,arglist);
var prev_arg = cljs.core.peek.call(null,ret_vec);
if((curr_arg == null)){
if((prev_arg instanceof cljs.core.Keyword)){
return cljs.core.partition.call(null,(2),cljs.core.conj.call(null,ret_vec,(0)));
} else {
return cljs.core.partition.call(null,(2),ret_vec);
}
} else {
if(cljs.core.truth_(markdown_to_hiccup.core.keywords_QMARK_.call(null,curr_arg,prev_arg))){
var G__32286 = cljs.core.rest.call(null,arglist);
var G__32287 = cljs.core.conj.call(null,ret_vec,(0),curr_arg);
arglist = G__32286;
ret_vec = G__32287;
continue;
} else {
var G__32288 = cljs.core.rest.call(null,arglist);
var G__32289 = cljs.core.conj.call(null,ret_vec,curr_arg);
arglist = G__32288;
ret_vec = G__32289;
continue;

}
}
break;
}
});
markdown_to_hiccup.core.same_length_QMARK_ = (function markdown_to_hiccup$core$same_length_QMARK_(coll_a,coll_b){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll_a),cljs.core.count.call(null,coll_b));
});
/**
 * Recursive helper function for hiccup-in.
 */
markdown_to_hiccup.core.get_nested_hiccup = (function markdown_to_hiccup$core$get_nested_hiccup(hiccup,kw_pairs){
while(true){
var vec__32290 = cljs.core.first.call(null,kw_pairs);
var kw = cljs.core.nth.call(null,vec__32290,(0),null);
var nth_kw = cljs.core.nth.call(null,vec__32290,(1),null);
var front = cljs.core.first.call(null,hiccup);
var remaining = cljs.core.rest.call(null,hiccup);
if(cljs.core.empty_QMARK_.call(null,hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if((kw == null)){
return hiccup;
} else {
if(cljs.core.map_QMARK_.call(null,front)){
var G__32293 = remaining;
var G__32294 = kw_pairs;
hiccup = G__32293;
kw_pairs = G__32294;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,front)){
var branch_result = markdown_to_hiccup.core.get_nested_hiccup.call(null,front,kw_pairs);
if(cljs.core.empty_QMARK_.call(null,branch_result)){
var nested_front = cljs.core.first.call(null,front);
if(cljs.core._EQ_.call(null,nested_front,kw)){
var G__32295 = remaining;
var G__32296 = markdown_to_hiccup.core.dec_front.call(null,kw_pairs);
hiccup = G__32295;
kw_pairs = G__32296;
continue;
} else {
var G__32297 = remaining;
var G__32298 = kw_pairs;
hiccup = G__32297;
kw_pairs = G__32298;
continue;
}
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.call(null,front,kw)){
var new_pairs = markdown_to_hiccup.core.dec_front.call(null,kw_pairs);
if(cljs.core.empty_QMARK_.call(null,new_pairs)){
return hiccup;
} else {
var G__32299 = remaining;
var G__32300 = new_pairs;
hiccup = G__32299;
kw_pairs = G__32300;
continue;

}
} else {
var G__32301 = remaining;
var G__32302 = kw_pairs;
hiccup = G__32301;
kw_pairs = G__32302;
continue;

}
}
}
}
}
break;
}
});
/**
 * Accepts a hiccup data structure and any series of args in keyword, index order.
 * Each keyword represents a hiccup element, and the paired index is which element at that level hiccup-in will look in.
 * If no number proceeds a keyword, hiccup-in will find the first element with that keyword.
 * Returns the nested hiccup vector identified by the keywords.
 * Example: (hiccup-in hiccup :html :body :div 0 :h1 2 :p)
 */
markdown_to_hiccup.core.hiccup_in = (function markdown_to_hiccup$core$hiccup_in(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32305 = arguments.length;
var i__31402__auto___32306 = (0);
while(true){
if((i__31402__auto___32306 < len__31401__auto___32305)){
args__31408__auto__.push((arguments[i__31402__auto___32306]));

var G__32307 = (i__31402__auto___32306 + (1));
i__31402__auto___32306 = G__32307;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((1) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31409__auto__);
});

markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kw_pairs){
var pathway = markdown_to_hiccup.core.num_partition.call(null,kw_pairs);
return markdown_to_hiccup.core.get_nested_hiccup.call(null,hiccup,pathway);
});

markdown_to_hiccup.core.hiccup_in.cljs$lang$maxFixedArity = (1);

markdown_to_hiccup.core.hiccup_in.cljs$lang$applyTo = (function (seq32303){
var G__32304 = cljs.core.first.call(null,seq32303);
var seq32303__$1 = cljs.core.next.call(null,seq32303);
return markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic(G__32304,seq32303__$1);
});

/**
 * Accepts hiccup and returns the same hiccup only
 * without the :html, :head, and :body elements. Useful
 * if you want to nest your markdown hiccup in existing
 * hiccup data structures.
 */
markdown_to_hiccup.core.component = (function markdown_to_hiccup$core$component(hiccup){
var body = markdown_to_hiccup.core.hiccup_in.call(null,hiccup,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest.call(null,body)));
});

//# sourceMappingURL=core.js.map?rel=1543501864750
