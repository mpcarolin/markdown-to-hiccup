// Compiled by ClojureScript 1.10.238 {}
goog.provide('markdown_to_hiccup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('hickory.core');
goog.require('markdown.core');
markdown_to_hiccup.core.decode = (function markdown_to_hiccup$core$decode(s){

var decoded_str = goog.string.unescapeEntities(s);
cljs.core.println.call(null,"DECODED:",decoded_str);

return cljs.reader.read_string.call(null,decoded_str);
});
markdown_to_hiccup.core.replacer = (function markdown_to_hiccup$core$replacer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text.replaceAll("&amp;","&"),state], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
markdown_to_hiccup.core.DomNode = (function (node,__meta,__extmap,__hash){
this.node = node;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
markdown_to_hiccup.core.DomNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k22625,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__22629 = k22625;
var G__22629__$1 = (((G__22629 instanceof cljs.core.Keyword))?G__22629.fqn:null);
switch (G__22629__$1) {
case "node":
return self__.node;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22625,else__4175__auto__);

}
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#markdown-to-hiccup.core.DomNode{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22624){
var self__ = this;
var G__22624__$1 = this;
return (new cljs.core.RecordIter((0),G__22624__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new markdown_to_hiccup.core.DomNode(self__.node,self__.__meta,self__.__extmap,self__.__hash));
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-2080006749 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22626,other22627){
var self__ = this;
var this22626__$1 = this;
return ((!((other22627 == null))) && ((this22626__$1.constructor === other22627.constructor)) && (cljs.core._EQ_.call(null,this22626__$1.node,other22627.node)) && (cljs.core._EQ_.call(null,this22626__$1.__extmap,other22627.__extmap)));
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new markdown_to_hiccup.core.DomNode(self__.node,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__22624){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__22630 = cljs.core.keyword_identical_QMARK_;
var expr__22631 = k__4180__auto__;
if(cljs.core.truth_(pred__22630.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22631))){
return (new markdown_to_hiccup.core.DomNode(G__22624,self__.__meta,self__.__extmap,null));
} else {
return (new markdown_to_hiccup.core.DomNode(self__.node,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__22624),null));
}
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",581201198),self__.node,null))], null),self__.__extmap));
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__22624){
var self__ = this;
var this__4171__auto____$1 = this;
return (new markdown_to_hiccup.core.DomNode(self__.node,G__22624,self__.__extmap,self__.__hash));
});

markdown_to_hiccup.core.DomNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

markdown_to_hiccup.core.DomNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null);
});

markdown_to_hiccup.core.DomNode.cljs$lang$type = true;

markdown_to_hiccup.core.DomNode.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"markdown-to-hiccup.core/DomNode",null,(1),null));
});

markdown_to_hiccup.core.DomNode.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"markdown-to-hiccup.core/DomNode");
});

/**
 * Positional factory function for markdown-to-hiccup.core/DomNode.
 */
markdown_to_hiccup.core.__GT_DomNode = (function markdown_to_hiccup$core$__GT_DomNode(node){
return (new markdown_to_hiccup.core.DomNode(node,null,null,null));
});

/**
 * Factory function for markdown-to-hiccup.core/DomNode, taking a map of keywords to field values.
 */
markdown_to_hiccup.core.map__GT_DomNode = (function markdown_to_hiccup$core$map__GT_DomNode(G__22628){
return (new markdown_to_hiccup.core.DomNode(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__22628),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__22628,new cljs.core.Keyword(null,"node","node",581201198))),null));
});

markdown_to_hiccup.core.foo = (function markdown_to_hiccup$core$foo(md_str){
var html = markdown.core.md__GT_html.call(null,md_str);
var dom = hickory.core.parse.call(null,html);
var hiccup = cljs.core.first.call(null,hickory.core.as_hiccup.call(null,dom));
return dom;
});
/**
 * Accepts a markdown string and returns a hiccup data structure converted from that markdown.
 *   Also accepts an optional params map. Use the :encode? boolean key to specify whether
 *   or not you want html escape characters to be encoded. Example:
 *  (md->hiccup "#Title" {:encode? true})
 */
markdown_to_hiccup.core.md__GT_hiccup = (function markdown_to_hiccup$core$md__GT_hiccup(var_args){
var G__22635 = arguments.length;
switch (G__22635) {
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

/**
 * NOTE: please use hiccup-in for better access to nested hiccup.
 *   Accepts a hiccup data structure and a keyword representing
 *   an html element tag (e.g. :body) and returns the first nested
 *   hiccup vector identified by the keyword.
 */
markdown_to_hiccup.core.hicc_in = (function markdown_to_hiccup$core$hicc_in(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22639 = arguments.length;
var i__4500__auto___22640 = (0);
while(true){
if((i__4500__auto___22640 < len__4499__auto___22639)){
args__4502__auto__.push((arguments[i__4500__auto___22640]));

var G__22641 = (i__4500__auto___22640 + (1));
i__4500__auto___22640 = G__22641;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
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
var G__22642 = cljs.core.rest.call(null,hiccup);
var G__22643 = kws;
hiccup = G__22642;
kws = G__22643;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,root)){
var branch_result = cljs.core.apply.call(null,markdown_to_hiccup.core.hicc_in,root,kws);
if(cljs.core.empty_QMARK_.call(null,branch_result)){
var G__22644 = cljs.core.rest.call(null,hiccup);
var G__22645 = kws;
hiccup = G__22644;
kws = G__22645;
continue;
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.call(null,root,kw)){
var G__22646 = hiccup;
var G__22647 = cljs.core.rest.call(null,kws);
hiccup = G__22646;
kws = G__22647;
continue;
} else {
var G__22648 = cljs.core.rest.call(null,hiccup);
var G__22649 = kws;
hiccup = G__22648;
kws = G__22649;
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

/** @this {Function} */
markdown_to_hiccup.core.hicc_in.cljs$lang$applyTo = (function (seq22637){
var G__22638 = cljs.core.first.call(null,seq22637);
var seq22637__$1 = cljs.core.next.call(null,seq22637);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22638,seq22637__$1);
});

markdown_to_hiccup.core.keywords_QMARK_ = (function markdown_to_hiccup$core$keywords_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22651 = arguments.length;
var i__4500__auto___22652 = (0);
while(true){
if((i__4500__auto___22652 < len__4499__auto___22651)){
args__4502__auto__.push((arguments[i__4500__auto___22652]));

var G__22653 = (i__4500__auto___22652 + (1));
i__4500__auto___22652 = G__22653;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,args);
});

markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$applyTo = (function (seq22650){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22650));
});

/**
 * Accepts a list of [keyword count] pairs, and subtracts the count
 * of the first pair. If that count becomes negative, dec-front returns
 * the rest of the list. Otherwise, it returns the list with the new
 * count value for the first pair.
 */
markdown_to_hiccup.core.dec_front = (function markdown_to_hiccup$core$dec_front(kw_pairs){
var vec__22654 = cljs.core.first.call(null,kw_pairs);
var kw = cljs.core.nth.call(null,vec__22654,(0),null);
var count = cljs.core.nth.call(null,vec__22654,(1),null);
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
var G__22657 = cljs.core.rest.call(null,arglist);
var G__22658 = cljs.core.conj.call(null,ret_vec,(0),curr_arg);
arglist = G__22657;
ret_vec = G__22658;
continue;
} else {
var G__22659 = cljs.core.rest.call(null,arglist);
var G__22660 = cljs.core.conj.call(null,ret_vec,curr_arg);
arglist = G__22659;
ret_vec = G__22660;
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
var vec__22661 = cljs.core.first.call(null,kw_pairs);
var kw = cljs.core.nth.call(null,vec__22661,(0),null);
var nth_kw = cljs.core.nth.call(null,vec__22661,(1),null);
var front = cljs.core.first.call(null,hiccup);
var remaining = cljs.core.rest.call(null,hiccup);
if(cljs.core.empty_QMARK_.call(null,hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if((kw == null)){
return hiccup;
} else {
if(cljs.core.map_QMARK_.call(null,front)){
var G__22664 = remaining;
var G__22665 = kw_pairs;
hiccup = G__22664;
kw_pairs = G__22665;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,front)){
var branch_result = markdown_to_hiccup.core.get_nested_hiccup.call(null,front,kw_pairs);
if(cljs.core.empty_QMARK_.call(null,branch_result)){
var nested_front = cljs.core.first.call(null,front);
if(cljs.core._EQ_.call(null,nested_front,kw)){
var G__22666 = remaining;
var G__22667 = markdown_to_hiccup.core.dec_front.call(null,kw_pairs);
hiccup = G__22666;
kw_pairs = G__22667;
continue;
} else {
var G__22668 = remaining;
var G__22669 = kw_pairs;
hiccup = G__22668;
kw_pairs = G__22669;
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
var G__22670 = remaining;
var G__22671 = new_pairs;
hiccup = G__22670;
kw_pairs = G__22671;
continue;

}
} else {
var G__22672 = remaining;
var G__22673 = kw_pairs;
hiccup = G__22672;
kw_pairs = G__22673;
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
var args__4502__auto__ = [];
var len__4499__auto___22676 = arguments.length;
var i__4500__auto___22677 = (0);
while(true){
if((i__4500__auto___22677 < len__4499__auto___22676)){
args__4502__auto__.push((arguments[i__4500__auto___22677]));

var G__22678 = (i__4500__auto___22677 + (1));
i__4500__auto___22677 = G__22678;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kw_pairs){
var pathway = markdown_to_hiccup.core.num_partition.call(null,kw_pairs);
return markdown_to_hiccup.core.get_nested_hiccup.call(null,hiccup,pathway);
});

markdown_to_hiccup.core.hiccup_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown_to_hiccup.core.hiccup_in.cljs$lang$applyTo = (function (seq22674){
var G__22675 = cljs.core.first.call(null,seq22674);
var seq22674__$1 = cljs.core.next.call(null,seq22674);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22675,seq22674__$1);
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

//# sourceMappingURL=core.js.map
