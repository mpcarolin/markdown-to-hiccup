// Compiled by ClojureScript 1.10.238 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__23163){
var map__23164 = p__23163;
var map__23164__$1 = ((((!((map__23164 == null)))?(((((map__23164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23164):map__23164);
var replacement_transformers = cljs.core.get.call(null,map__23164__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__23164__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__23164__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__23164,map__23164__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_23166 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__23167 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_23166,map__23164,map__23164__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__23170,transformer){
var vec__23171 = p__23170;
var text = cljs.core.nth.call(null,vec__23171,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__23171,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_23166,map__23164,map__23164__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3922__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__23167,(0),null);
var new_state = cljs.core.nth.call(null,vec__23167,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_23166;
}});
;})(map__23164,map__23164__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23176 = arguments.length;
var i__4500__auto___23177 = (0);
while(true){
if((i__4500__auto___23177 < len__4499__auto___23176)){
args__4502__auto__.push((arguments[i__4500__auto___23177]));

var G__23178 = (i__4500__auto___23177 + (1));
i__4500__auto___23177 = G__23178;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq23174){
var G__23175 = cljs.core.first.call(null,seq23174);
var seq23174__$1 = cljs.core.next.call(null,seq23174);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23175,seq23174__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__23179_23183 = cljs.core.seq.call(null,lines);
var chunk__23180_23184 = null;
var count__23181_23185 = (0);
var i__23182_23186 = (0);
while(true){
if((i__23182_23186 < count__23181_23185)){
var line_23187 = cljs.core._nth.call(null,chunk__23180_23184,i__23182_23186);
markdown.links.parse_reference_link.call(null,line_23187,references);


var G__23188 = seq__23179_23183;
var G__23189 = chunk__23180_23184;
var G__23190 = count__23181_23185;
var G__23191 = (i__23182_23186 + (1));
seq__23179_23183 = G__23188;
chunk__23180_23184 = G__23189;
count__23181_23185 = G__23190;
i__23182_23186 = G__23191;
continue;
} else {
var temp__5457__auto___23192 = cljs.core.seq.call(null,seq__23179_23183);
if(temp__5457__auto___23192){
var seq__23179_23193__$1 = temp__5457__auto___23192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23179_23193__$1)){
var c__4319__auto___23194 = cljs.core.chunk_first.call(null,seq__23179_23193__$1);
var G__23195 = cljs.core.chunk_rest.call(null,seq__23179_23193__$1);
var G__23196 = c__4319__auto___23194;
var G__23197 = cljs.core.count.call(null,c__4319__auto___23194);
var G__23198 = (0);
seq__23179_23183 = G__23195;
chunk__23180_23184 = G__23196;
count__23181_23185 = G__23197;
i__23182_23186 = G__23198;
continue;
} else {
var line_23199 = cljs.core.first.call(null,seq__23179_23193__$1);
markdown.links.parse_reference_link.call(null,line_23199,references);


var G__23200 = cljs.core.next.call(null,seq__23179_23193__$1);
var G__23201 = null;
var G__23202 = (0);
var G__23203 = (0);
seq__23179_23183 = G__23200;
chunk__23180_23184 = G__23201;
count__23181_23185 = G__23202;
i__23182_23186 = G__23203;
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
var seq__23204_23208 = cljs.core.seq.call(null,lines);
var chunk__23205_23209 = null;
var count__23206_23210 = (0);
var i__23207_23211 = (0);
while(true){
if((i__23207_23211 < count__23206_23210)){
var line_23212 = cljs.core._nth.call(null,chunk__23205_23209,i__23207_23211);
markdown.links.parse_footnote_link.call(null,line_23212,footnotes);


var G__23213 = seq__23204_23208;
var G__23214 = chunk__23205_23209;
var G__23215 = count__23206_23210;
var G__23216 = (i__23207_23211 + (1));
seq__23204_23208 = G__23213;
chunk__23205_23209 = G__23214;
count__23206_23210 = G__23215;
i__23207_23211 = G__23216;
continue;
} else {
var temp__5457__auto___23217 = cljs.core.seq.call(null,seq__23204_23208);
if(temp__5457__auto___23217){
var seq__23204_23218__$1 = temp__5457__auto___23217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23204_23218__$1)){
var c__4319__auto___23219 = cljs.core.chunk_first.call(null,seq__23204_23218__$1);
var G__23220 = cljs.core.chunk_rest.call(null,seq__23204_23218__$1);
var G__23221 = c__4319__auto___23219;
var G__23222 = cljs.core.count.call(null,c__4319__auto___23219);
var G__23223 = (0);
seq__23204_23208 = G__23220;
chunk__23205_23209 = G__23221;
count__23206_23210 = G__23222;
i__23207_23211 = G__23223;
continue;
} else {
var line_23224 = cljs.core.first.call(null,seq__23204_23218__$1);
markdown.links.parse_footnote_link.call(null,line_23224,footnotes);


var G__23225 = cljs.core.next.call(null,seq__23204_23218__$1);
var G__23226 = null;
var G__23227 = (0);
var G__23228 = (0);
seq__23204_23208 = G__23225;
chunk__23205_23209 = G__23226;
count__23206_23210 = G__23227;
i__23207_23211 = G__23228;
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
var vec__23230 = cljs.core.split_with.call(null,(function (p1__23229_SHARP_){
return cljs.core.not_empty.call(null,p1__23229_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__23230,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__23230,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_23233 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_23234 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_23233,_STAR_formatter_STAR_23234){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_23233,_STAR_formatter_STAR_23234))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__23235 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__23235,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__23235,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__23241_23248 = lines__$1;
var vec__23242_23249 = G__23241_23248;
var seq__23243_23250 = cljs.core.seq.call(null,vec__23242_23249);
var first__23244_23251 = cljs.core.first.call(null,seq__23243_23250);
var seq__23243_23252__$1 = cljs.core.next.call(null,seq__23243_23250);
var line_23253 = first__23244_23251;
var more_23254 = seq__23243_23252__$1;
var state_23255 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__23241_23256__$1 = G__23241_23248;
var state_23257__$1 = state_23255;
while(true){
var vec__23245_23258 = G__23241_23256__$1;
var seq__23246_23259 = cljs.core.seq.call(null,vec__23245_23258);
var first__23247_23260 = cljs.core.first.call(null,seq__23246_23259);
var seq__23246_23261__$1 = cljs.core.next.call(null,seq__23246_23259);
var line_23262__$1 = first__23247_23260;
var more_23263__$1 = seq__23246_23261__$1;
var state_23264__$2 = state_23257__$1;
var line_23265__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_23264__$2))?"":line_23262__$1);
var state_23266__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_23264__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_23264__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_23264__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_23264__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_23264__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_23263__$1))){
var G__23267 = more_23263__$1;
var G__23268 = cljs.core.assoc.call(null,transformer.call(null,html,line_23265__$2,cljs.core.first.call(null,more_23263__$1),cljs.core.dissoc.call(null,state_23266__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_23265__$2));
G__23241_23256__$1 = G__23267;
state_23257__$1 = G__23268;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_23266__$3))),line_23265__$2,"",cljs.core.assoc.call(null,state_23266__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_23234;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_23233;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23271 = arguments.length;
var i__4500__auto___23272 = (0);
while(true){
if((i__4500__auto___23272 < len__4499__auto___23271)){
args__4502__auto__.push((arguments[i__4500__auto___23272]));

var G__23273 = (i__4500__auto___23272 + (1));
i__4500__auto___23272 = G__23273;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq23269){
var G__23270 = cljs.core.first.call(null,seq23269);
var seq23269__$1 = cljs.core.next.call(null,seq23269);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23270,seq23269__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23276 = arguments.length;
var i__4500__auto___23277 = (0);
while(true){
if((i__4500__auto___23277 < len__4499__auto___23276)){
args__4502__auto__.push((arguments[i__4500__auto___23277]));

var G__23278 = (i__4500__auto___23277 + (1));
i__4500__auto___23277 = G__23278;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq23274){
var G__23275 = cljs.core.first.call(null,seq23274);
var seq23274__$1 = cljs.core.next.call(null,seq23274);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23275,seq23274__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23280 = arguments.length;
var i__4500__auto___23281 = (0);
while(true){
if((i__4500__auto___23281 < len__4499__auto___23280)){
args__4502__auto__.push((arguments[i__4500__auto___23281]));

var G__23282 = (i__4500__auto___23281 + (1));
i__4500__auto___23281 = G__23282;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq23279){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23279));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23284 = arguments.length;
var i__4500__auto___23285 = (0);
while(true){
if((i__4500__auto___23285 < len__4499__auto___23284)){
args__4502__auto__.push((arguments[i__4500__auto___23285]));

var G__23286 = (i__4500__auto___23285 + (1));
i__4500__auto___23285 = G__23286;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq23283){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23283));
});


//# sourceMappingURL=core.js.map
