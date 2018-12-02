// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__32056){
var map__32057 = p__32056;
var map__32057__$1 = ((((!((map__32057 == null)))?((((map__32057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32057):map__32057);
var replacement_transformers = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__32057,map__32057__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_32059 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__32060 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_32059,map__32057,map__32057__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__32063,transformer){
var vec__32064 = p__32063;
var text = cljs.core.nth.call(null,vec__32064,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__32064,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_32059,map__32057,map__32057__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__30122__auto__ = replacement_transformers;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__32060,(0),null);
var new_state = cljs.core.nth.call(null,vec__32060,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_32059;
}});
;})(map__32057,map__32057__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32069 = arguments.length;
var i__31402__auto___32070 = (0);
while(true){
if((i__31402__auto___32070 < len__31401__auto___32069)){
args__31408__auto__.push((arguments[i__31402__auto___32070]));

var G__32071 = (i__31402__auto___32070 + (1));
i__31402__auto___32070 = G__32071;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((1) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31409__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq32067){
var G__32068 = cljs.core.first.call(null,seq32067);
var seq32067__$1 = cljs.core.next.call(null,seq32067);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__32068,seq32067__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__32072_32076 = cljs.core.seq.call(null,lines);
var chunk__32073_32077 = null;
var count__32074_32078 = (0);
var i__32075_32079 = (0);
while(true){
if((i__32075_32079 < count__32074_32078)){
var line_32080 = cljs.core._nth.call(null,chunk__32073_32077,i__32075_32079);
markdown.links.parse_reference_link.call(null,line_32080,references);

var G__32081 = seq__32072_32076;
var G__32082 = chunk__32073_32077;
var G__32083 = count__32074_32078;
var G__32084 = (i__32075_32079 + (1));
seq__32072_32076 = G__32081;
chunk__32073_32077 = G__32082;
count__32074_32078 = G__32083;
i__32075_32079 = G__32084;
continue;
} else {
var temp__5457__auto___32085 = cljs.core.seq.call(null,seq__32072_32076);
if(temp__5457__auto___32085){
var seq__32072_32086__$1 = temp__5457__auto___32085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32072_32086__$1)){
var c__31053__auto___32087 = cljs.core.chunk_first.call(null,seq__32072_32086__$1);
var G__32088 = cljs.core.chunk_rest.call(null,seq__32072_32086__$1);
var G__32089 = c__31053__auto___32087;
var G__32090 = cljs.core.count.call(null,c__31053__auto___32087);
var G__32091 = (0);
seq__32072_32076 = G__32088;
chunk__32073_32077 = G__32089;
count__32074_32078 = G__32090;
i__32075_32079 = G__32091;
continue;
} else {
var line_32092 = cljs.core.first.call(null,seq__32072_32086__$1);
markdown.links.parse_reference_link.call(null,line_32092,references);

var G__32093 = cljs.core.next.call(null,seq__32072_32086__$1);
var G__32094 = null;
var G__32095 = (0);
var G__32096 = (0);
seq__32072_32076 = G__32093;
chunk__32073_32077 = G__32094;
count__32074_32078 = G__32095;
i__32075_32079 = G__32096;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__32097_32101 = cljs.core.seq.call(null,lines);
var chunk__32098_32102 = null;
var count__32099_32103 = (0);
var i__32100_32104 = (0);
while(true){
if((i__32100_32104 < count__32099_32103)){
var line_32105 = cljs.core._nth.call(null,chunk__32098_32102,i__32100_32104);
markdown.links.parse_footnote_link.call(null,line_32105,footnotes);

var G__32106 = seq__32097_32101;
var G__32107 = chunk__32098_32102;
var G__32108 = count__32099_32103;
var G__32109 = (i__32100_32104 + (1));
seq__32097_32101 = G__32106;
chunk__32098_32102 = G__32107;
count__32099_32103 = G__32108;
i__32100_32104 = G__32109;
continue;
} else {
var temp__5457__auto___32110 = cljs.core.seq.call(null,seq__32097_32101);
if(temp__5457__auto___32110){
var seq__32097_32111__$1 = temp__5457__auto___32110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32097_32111__$1)){
var c__31053__auto___32112 = cljs.core.chunk_first.call(null,seq__32097_32111__$1);
var G__32113 = cljs.core.chunk_rest.call(null,seq__32097_32111__$1);
var G__32114 = c__31053__auto___32112;
var G__32115 = cljs.core.count.call(null,c__31053__auto___32112);
var G__32116 = (0);
seq__32097_32101 = G__32113;
chunk__32098_32102 = G__32114;
count__32099_32103 = G__32115;
i__32100_32104 = G__32116;
continue;
} else {
var line_32117 = cljs.core.first.call(null,seq__32097_32111__$1);
markdown.links.parse_footnote_link.call(null,line_32117,footnotes);

var G__32118 = cljs.core.next.call(null,seq__32097_32111__$1);
var G__32119 = null;
var G__32120 = (0);
var G__32121 = (0);
seq__32097_32101 = G__32118;
chunk__32098_32102 = G__32119;
count__32099_32103 = G__32120;
i__32100_32104 = G__32121;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__32123 = cljs.core.split_with.call(null,(function (p1__32122_SHARP_){
return cljs.core.not_empty.call(null,p1__32122_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__32123,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__32123,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_32126 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_32127 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_32126,_STAR_formatter_STAR_32127){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_32126,_STAR_formatter_STAR_32127))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__32128 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__32128,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__32128,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__32134_32141 = lines__$1;
var vec__32135_32142 = G__32134_32141;
var seq__32136_32143 = cljs.core.seq.call(null,vec__32135_32142);
var first__32137_32144 = cljs.core.first.call(null,seq__32136_32143);
var seq__32136_32145__$1 = cljs.core.next.call(null,seq__32136_32143);
var line_32146 = first__32137_32144;
var more_32147 = seq__32136_32145__$1;
var state_32148 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__32134_32149__$1 = G__32134_32141;
var state_32150__$1 = state_32148;
while(true){
var vec__32138_32151 = G__32134_32149__$1;
var seq__32139_32152 = cljs.core.seq.call(null,vec__32138_32151);
var first__32140_32153 = cljs.core.first.call(null,seq__32139_32152);
var seq__32139_32154__$1 = cljs.core.next.call(null,seq__32139_32152);
var line_32155__$1 = first__32140_32153;
var more_32156__$1 = seq__32139_32154__$1;
var state_32157__$2 = state_32150__$1;
var line_32158__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_32157__$2))?"":line_32155__$1);
var state_32159__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_32157__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_32157__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_32157__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_32157__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_32157__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_32156__$1))){
var G__32160 = more_32156__$1;
var G__32161 = cljs.core.assoc.call(null,transformer.call(null,html,line_32158__$2,cljs.core.first.call(null,more_32156__$1),cljs.core.dissoc.call(null,state_32159__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_32158__$2));
G__32134_32149__$1 = G__32160;
state_32150__$1 = G__32161;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_32159__$3))),line_32158__$2,"",cljs.core.assoc.call(null,state_32159__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_32127;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_32126;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32164 = arguments.length;
var i__31402__auto___32165 = (0);
while(true){
if((i__31402__auto___32165 < len__31401__auto___32164)){
args__31408__auto__.push((arguments[i__31402__auto___32165]));

var G__32166 = (i__31402__auto___32165 + (1));
i__31402__auto___32165 = G__32166;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((1) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31409__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq32162){
var G__32163 = cljs.core.first.call(null,seq32162);
var seq32162__$1 = cljs.core.next.call(null,seq32162);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__32163,seq32162__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32169 = arguments.length;
var i__31402__auto___32170 = (0);
while(true){
if((i__31402__auto___32170 < len__31401__auto___32169)){
args__31408__auto__.push((arguments[i__31402__auto___32170]));

var G__32171 = (i__31402__auto___32170 + (1));
i__31402__auto___32170 = G__32171;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((1) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31409__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq32167){
var G__32168 = cljs.core.first.call(null,seq32167);
var seq32167__$1 = cljs.core.next.call(null,seq32167);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__32168,seq32167__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32173 = arguments.length;
var i__31402__auto___32174 = (0);
while(true){
if((i__31402__auto___32174 < len__31401__auto___32173)){
args__31408__auto__.push((arguments[i__31402__auto___32174]));

var G__32175 = (i__31402__auto___32174 + (1));
i__31402__auto___32174 = G__32175;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((0) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__31409__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq32172){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32172));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__31408__auto__ = [];
var len__31401__auto___32177 = arguments.length;
var i__31402__auto___32178 = (0);
while(true){
if((i__31402__auto___32178 < len__31401__auto___32177)){
args__31408__auto__.push((arguments[i__31402__auto___32178]));

var G__32179 = (i__31402__auto___32178 + (1));
i__31402__auto___32178 = G__32179;
continue;
} else {
}
break;
}

var argseq__31409__auto__ = ((((0) < args__31408__auto__.length))?(new cljs.core.IndexedSeq(args__31408__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__31409__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq32176){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32176));
});


//# sourceMappingURL=core.js.map?rel=1543501864267
