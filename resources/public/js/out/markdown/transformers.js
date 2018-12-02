// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.links');
goog.require('markdown.lists');
goog.require('markdown.tables');
goog.require('markdown.common');
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.call(null,(4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim.call(null,text):null);
var and__30110__auto__ = cljs.core.not_empty.call(null,trimmed);
if(cljs.core.truth_(and__30110__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([type]),trimmed);
} else {
return and__30110__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_.call(null,text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_.call(null,text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,p__31990){
var map__31991 = p__31990;
var map__31991__$1 = ((((!((map__31991 == null)))?((((map__31991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31991):map__31991);
var state = map__31991__$1;
var code = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__30122__auto__ = code;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__30122__auto__ = markdown.transformers.h1_QMARK_.call(null,text);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return markdown.transformers.h2_QMARK_.call(null,text);
}
})())?"":text),((clojure.string.blank_QMARK_.call(null,text))?cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"heading","heading",-1312171873)):state)], null);
}
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,buf),state], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__31993 = cljs.core.into.call(null,buf,cljs.core.concat.call(null,cljs.core.seq.call(null,"<sup>"),cljs.core.second.call(null,remaining),cljs.core.seq.call(null,"</sup>")));
var G__31994 = cljs.core.drop.call(null,(2),remaining);
buf = G__31993;
remaining = G__31994;
continue;
} else {
var G__31995 = cljs.core.into.call(null,buf,cljs.core.first.call(null,remaining));
var G__31996 = cljs.core.rest.call(null,remaining);
buf = G__31995;
remaining = G__31996;
continue;

}
}
break;
}
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,p__31997){
var map__31998 = p__31997;
var map__31998__$1 = ((((!((map__31998 == null)))?((((map__31998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31998):map__31998);
var state = map__31998__$1;
var buf = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"buf","buf",-213913340));
var next_line = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287));
var code = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var heading_anchors = cljs.core.get.call(null,map__31998__$1,new cljs.core.Keyword(null,"heading-anchors","heading-anchors",1713527866));
if(cljs.core.truth_((function (){var or__30122__auto__ = codeblock;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return code;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_.call(null,(function (){var or__30122__auto__ = buf;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</h1>"].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_.call(null,(function (){var or__30122__auto__ = buf;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<h2>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</h2>"].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
var temp__5455__auto__ = markdown.common.make_heading.call(null,text,heading_anchors);
if(cljs.core.truth_(temp__5455__auto__)){
var heading = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__32000){
var map__32001 = p__32000;
var map__32001__$1 = ((((!((map__32001 == null)))?((((map__32001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32001):map__32001);
var state = map__32001__$1;
var code = cljs.core.get.call(null,map__32001__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var lists = cljs.core.get.call(null,map__32001__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last.call(null,(2),text))) && (cljs.core.not.call(null,(function (){var or__30122__auto__ = code;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return lists;
}
})())))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(2),text))),"<br />"].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,p__32004){
var map__32005 = p__32004;
var map__32005__$1 = ((((!((map__32005 == null)))?((((map__32005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32005):map__32005);
var state = map__32005__$1;
var code = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var frozen_strings = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560));
if(cljs.core.truth_(code)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var currently_frozen = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),frozen_strings], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,((function (currently_frozen,map__32005,map__32005__$1,state,code,frozen_strings){
return (function (p1__32003_SHARP_){
var vec__32007 = markdown.common.freeze_string.call(null,cljs.core.subs.call(null,p1__32003_SHARP_,(1),(cljs.core.count.call(null,p1__32003_SHARP_) - (1))),cljs.core.deref.call(null,currently_frozen));
var url = cljs.core.nth.call(null,vec__32007,(0),null);
var frozen_strings__$1 = cljs.core.nth.call(null,vec__32007,(1),null);
cljs.core.vreset_BANG_.call(null,currently_frozen,frozen_strings__$1);

return ["<a href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"</a>"].join('');
});})(currently_frozen,map__32005,map__32005__$1,state,code,frozen_strings))
),cljs.core.merge.call(null,state,cljs.core.deref.call(null,currently_frozen))], null);
}
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__30122__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__32010_SHARP_){
var encoded = (cljs.core.truth_(new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.call(null,p1__32010_SHARP_,(1),(cljs.core.count.call(null,p1__32010_SHARP_) - (1))):cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (c){
if((cljs.core.rand.call(null) > 0.5)){
return markdown.transformers._STAR_formatter_STAR_.call(null,"&#x%02x;",(c | (0)));
} else {
return c;
}
}),cljs.core.subs.call(null,p1__32010_SHARP_,(1),(cljs.core.count.call(null,p1__32010_SHARP_) - (1))))));
return ["<a href=\"mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),"</a>"].join('');
}))),state], null);
});
markdown.transformers.set_line_state = (function markdown$transformers$set_line_state(text,p__32011){
var map__32012 = p__32011;
var map__32012__$1 = ((((!((map__32012 == null)))?((((map__32012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32012):map__32012);
var state = map__32012__$1;
var inline_heading = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818)], null),inline_heading)], null);
});
markdown.transformers.clear_line_state = (function markdown$transformers$clear_line_state(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"temp","temp",1791541284))], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__30110__auto__ = cljs.core.not.call(null,last_line_empty_QMARK_);
if(and__30110__auto__){
return cljs.core.not_empty.call(null,text);
} else {
return and__30110__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('');
} else {
return text;
}
});
markdown.transformers.open_paragraph = (function markdown$transformers$open_paragraph(text,p__32014){
var map__32015 = p__32014;
var map__32015__$1 = ((((!((map__32015 == null)))?((((map__32015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32015):map__32015);
var state = map__32015__$1;
var eof = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var paragraph = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
var blockquote = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"blockquote","blockquote",372264190));
var heading = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var hr = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var temp = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
var lists = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var inline_heading = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818));
var last_line_empty_QMARK_ = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
var code = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.truth_((function (){var and__30110__auto__ = paragraph;
if(cljs.core.truth_(and__30110__auto__)){
return lists;
} else {
return and__30110__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))], null);
} else {
if(cljs.core.truth_((function (){var or__30122__auto__ = heading;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
var or__30122__auto____$1 = inline_heading;
if(cljs.core.truth_(or__30122__auto____$1)){
return or__30122__auto____$1;
} else {
var or__30122__auto____$2 = hr;
if(cljs.core.truth_(or__30122__auto____$2)){
return or__30122__auto____$2;
} else {
var or__30122__auto____$3 = code;
if(cljs.core.truth_(or__30122__auto____$3)){
return or__30122__auto____$3;
} else {
var or__30122__auto____$4 = lists;
if(cljs.core.truth_(or__30122__auto____$4)){
return or__30122__auto____$4;
} else {
return blockquote;
}
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph)){
if(cljs.core.truth_((function (){var or__30122__auto__ = eof;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text)),"</p>"].join(''),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__30110__auto__ = cljs.core.not.call(null,eof);
if(and__30110__auto__){
var and__30110__auto____$1 = !(clojure.string.blank_QMARK_.call(null,text));
if(and__30110__auto____$1){
var or__30122__auto__ = new cljs.core.Keyword(null,"inline-heading","inline-heading",-158773818).cljs$core$IFn$_invoke$arity$1(temp);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return last_line_empty_QMARK_;
}
} else {
return and__30110__auto____$1;
}
} else {
return and__30110__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),true,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.close_paragraph = (function markdown$transformers$close_paragraph(text,p__32017){
var map__32018 = p__32017;
var map__32018__$1 = ((((!((map__32018 == null)))?((((map__32018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32018):map__32018);
var state = map__32018__$1;
var next_line = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287));
var paragraph = cljs.core.get.call(null,map__32018__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
if(cljs.core.truth_((function (){var and__30110__auto__ = paragraph;
if(cljs.core.truth_(and__30110__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last.call(null,(3),(function (){var G__32020 = next_line;
if((G__32020 == null)){
return null;
} else {
return clojure.string.trim.call(null,G__32020);
}
})()));
} else {
return and__30110__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</p>"].join(''),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,state){
return cljs.core.apply.call(null,markdown.transformers.close_paragraph,markdown.transformers.open_paragraph.call(null,text,state));
});
markdown.transformers.code = (function markdown$transformers$code(text,p__32021){
var map__32022 = p__32021;
var map__32022__$1 = ((((!((map__32022 == null)))?((((map__32022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32022):map__32022);
var state = map__32022__$1;
var eof = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var lists = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var code = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__30122__auto__ = lists;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code)){
if(cljs.core.truth_((function (){var or__30122__auto__ = eof;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return cljs.core.not_EQ_.call(null,"    ",clojure.string.join.call(null,cljs.core.take.call(null,(4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</code></pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"indented-code","indented-code",-904930175),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<pre><code>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),true,new cljs.core.Keyword(null,"indented-code","indented-code",-904930175),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,p__32024){
var map__32025 = p__32024;
var map__32025__$1 = ((((!((map__32025 == null)))?((((map__32025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32025):map__32025);
var state = map__32025__$1;
var codeblock = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var codeblock_end = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736));
var indented_code = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"indented-code","indented-code",-904930175));
var next_line = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287));
var lists = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var trimmed = clojure.string.trim.call(null,text);
var next_line_closes_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last.call(null,(3),(function (){var G__32027 = next_line;
if((G__32027 == null)){
return null;
} else {
return clojure.string.trim.call(null,G__32027);
}
})()));
if(cljs.core.truth_((function (){var and__30110__auto__ = lists;
if(cljs.core.truth_(and__30110__auto__)){
return codeblock_end;
} else {
return and__30110__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736))], null);
} else {
if(cljs.core.truth_(codeblock_end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736))], null);
} else {
if(cljs.core.truth_((function (){var and__30110__auto__ = next_line_closes_QMARK_;
if(and__30110__auto__){
return codeblock;
} else {
return and__30110__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,clojure.string.split.call(null,next_line,/```/))))].join(''))),"</code></pre>"].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749),cljs.core.not.call(null,lists),new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736),true,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.not.call(null,lists))], null);
} else {
if((cljs.core.not.call(null,indented_code)) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.call(null,(3),trimmed)))){
var vec__32028 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.drop.call(null,(3),trimmed));
var lang = cljs.core.nth.call(null,vec__32028,(0),null);
var code = cljs.core.nth.call(null,vec__32028,(1),null);
var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,code));
var formatter = new cljs.core.Keyword(null,"code-style","code-style",-2144009586).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<pre><code",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,lang))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(formatter)?formatter.call(null,clojure.string.join.call(null,lang)):["class=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,lang)),"\""].join('')))].join(''):null)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code.call(null,((cljs.core.empty_QMARK_.call(null,s))?s:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n"].join('')))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((next_line_closes_QMARK_)?"</code></pre>":null))].join(''),((next_line_closes_QMARK_)?cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"codeblock-end","codeblock-end",1507794736),true,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749),true):cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),true,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),true))], null);
} else {
if(cljs.core.truth_(codeblock)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code.call(null,text)),"\n"].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<hr/>"].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1377740067),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
/**
 * Check for blockquotes and signal to blockquote-2 function with
 *   states blockquote-start and blockquote-end so that tags can be added.
 *   This approach enables lists to be included in blockquotes.
 */
markdown.transformers.blockquote_1 = (function markdown$transformers$blockquote_1(text,p__32031){
var map__32032 = p__32031;
var map__32032__$1 = ((((!((map__32032 == null)))?((((map__32032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32032):map__32032);
var state = map__32032__$1;
var eof = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var code = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var lists = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var trimmed = clojure.string.trim.call(null,text);
if(cljs.core.truth_((function (){var or__30122__auto__ = code;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote","blockquote",372264190).cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__30122__auto__ = eof;
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote-end","blockquote-end",1122544964),true,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),false)], null);
} else {
if(cljs.core._EQ_.call(null,">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?"</p>":null)),"<p>"].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true)], null);
} else {
if(((cljs.core.count.call(null,trimmed) >= (2))) && (cljs.core._EQ_.call(null,">-",cljs.core.subs.call(null,trimmed,(0),(2))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?"</p>":null)),"<footer>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,text,(2))),"</footer>"].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),false)], null);
} else {
if(cljs.core._EQ_.call(null,">",cljs.core.subs.call(null,trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?null:"<p>")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,text,(1)))," "].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682).cljs$core$IFn$_invoke$arity$1(state))?null:"<p>")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)," "].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true)], null);

}
}
}
}
} else {
if(cljs.core._EQ_.call(null,">",cljs.core.first.call(null,text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.rest.call(null,text)))," "].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote-start","blockquote-start",276074935),true,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),true,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
/**
 * Check for change in blockquote states and add start or end tags.
 *   Closing a blockquote with a list in it is a bit more complex,
 *   as the list is not closed until the following blank line.
 */
markdown.transformers.blockquote_2 = (function markdown$transformers$blockquote_2(text,p__32034){
var map__32035 = p__32034;
var map__32035__$1 = ((((!((map__32035 == null)))?((((map__32035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32035):map__32035);
var state = map__32035__$1;
var blockquote_start = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"blockquote-start","blockquote-start",276074935));
var blockquote_end = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"blockquote-end","blockquote-end",1122544964));
var blockquote_paragraph = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682));
var lists = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var not_in_list = (cljs.core.not.call(null,lists)) || (cljs.core.empty_QMARK_.call(null,lists));
if(cljs.core.truth_(blockquote_start)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<blockquote><p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"blockquote-start","blockquote-start",276074935))], null);
} else {
if(cljs.core.truth_((function (){var and__30110__auto__ = blockquote_end;
if(cljs.core.truth_(and__30110__auto__)){
return not_in_list;
} else {
return and__30110__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(blockquote_paragraph)?"</p>":null)),"</blockquote>"].join(''),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"blockquote-paragraph","blockquote-paragraph",1931783682),new cljs.core.Keyword(null,"blockquote-end","blockquote-end",1122544964))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
});
markdown.transformers.footer = (function markdown$transformers$footer(footnotes){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(footnotes))){
return "";
} else {
return (function (p1__32037_SHARP_){
return ["<ol class='footnotes'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32037_SHARP_),"</ol>"].join('');
}).call(null,cljs.core.reduce.call(null,(function (footnotes__$1,p__32038){
var vec__32039 = p__32038;
var id = cljs.core.nth.call(null,vec__32039,(0),null);
var label = cljs.core.nth.call(null,vec__32039,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(footnotes__$1),"<li id='fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",label))),"<a href='#fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'>&#8617;</a></li>"].join('');
}),"",cljs.core.into.call(null,cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(footnotes))));
}
});
/**
 * Given a line of metadata header text return either a list containing a parsed
 *   and normalizd key and the original text of the value, or if no header is found
 *   (this is a continuation or new value from a pervious header key) simply
 *   return the text. If a blank or invalid line is found return nil.
 */
markdown.transformers.parse_metadata_line = (function markdown$transformers$parse_metadata_line(line){
if(cljs.core.truth_(line)){
var vec__32042 = cljs.core.re_matches.call(null,/^([0-9A-Za-z_-]*):(.*)$/,line);
var _ = cljs.core.nth.call(null,vec__32042,(0),null);
var key = cljs.core.nth.call(null,vec__32042,(1),null);
var val = cljs.core.nth.call(null,vec__32042,(2),null);
var vec__32045 = cljs.core.re_matches.call(null,/^    (.*)$/,line);
var ___$1 = cljs.core.nth.call(null,vec__32045,(0),null);
var next_val = cljs.core.nth.call(null,vec__32045,(1),null);
if(cljs.core.not_EQ_.call(null,clojure.string.trim.call(null,line),"")){
if(cljs.core.truth_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.lower_case.call(null,key)),val], null);
} else {
if(cljs.core.truth_(next_val)){
return line;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a list of maps which contain a single key/value, flatten them all into
 *   a single map with all the leading spaces removed. If an empty list is provided
 *   then return nil.
 */
markdown.transformers.flatten_metadata = (function markdown$transformers$flatten_metadata(metadata){
if((cljs.core.count.call(null,metadata) > (0))){
var acc = cljs.core.PersistentArrayMap.EMPTY;
var remain = metadata;
var prev_key = null;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,remain))){
var data = cljs.core.first.call(null,remain);
var vec__32048 = ((cljs.core.sequential_QMARK_.call(null,data))?data:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key,data], null));
var key = cljs.core.nth.call(null,vec__32048,(0),null);
var val = cljs.core.nth.call(null,vec__32048,(1),null);
var prev_val = cljs.core.get.call(null,acc,key,cljs.core.PersistentVector.EMPTY);
var postfix = ((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last.call(null,(2),val)))?"\n":"");
var norm_val = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim.call(null,val)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix)].join('');
var new_val = ((!(cljs.core.empty_QMARK_.call(null,norm_val)))?cljs.core.conj.call(null,prev_val,norm_val):prev_val);
var G__32051 = cljs.core.merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new_val]));
var G__32052 = cljs.core.rest.call(null,remain);
var G__32053 = key;
acc = G__32051;
remain = G__32052;
prev_key = G__32053;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});
/**
 * Given a sequence of lines from a markdown document, attempt to parse a
 *   metadata header if it exists.
 */
markdown.transformers.parse_metadata_headers = (function markdown$transformers$parse_metadata_headers(lines_seq){
if(cljs.core.sequential_QMARK_.call(null,lines_seq)){
} else {
throw (new Error("Assert failed: (sequential? lines-seq)"));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,lines_seq)){
} else {
throw (new Error("Assert failed: (every? string? lines-seq)"));
}

return cljs.core.reduce.call(null,(function (acc,line){
var temp__5455__auto__ = markdown.transformers.parse_metadata_line.call(null,line);
if(cljs.core.truth_(temp__5455__auto__)){
var parsed = temp__5455__auto__;
return cljs.core.conj.call(null,acc,parsed);
} else {
return cljs.core.reduced.call(null,markdown.transformers.flatten_metadata.call(null,acc));
}
}),cljs.core.PersistentVector.EMPTY,lines_seq);
});
markdown.transformers.transformer_vector = cljs.core.PersistentVector.fromArray([markdown.transformers.set_line_state,markdown.transformers.empty_line,markdown.common.inhibit,markdown.common.escape_inhibit_separator,markdown.transformers.code,markdown.transformers.codeblock,markdown.common.escaped_chars,markdown.common.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.links.image,markdown.links.image_reference_link,markdown.links.link,markdown.links.implicit_reference_link,markdown.links.reference_link,markdown.links.footnote_link,markdown.transformers.hr,markdown.transformers.blockquote_1,markdown.lists.li,markdown.transformers.heading,markdown.transformers.blockquote_2,markdown.common.italics,markdown.common.bold_italic,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough,markdown.transformers.superscript,markdown.tables.table,markdown.transformers.paragraph,markdown.transformers.br,markdown.common.thaw_strings,markdown.common.dashes,markdown.transformers.clear_line_state], true);

//# sourceMappingURL=transformers.js.map?rel=1543501864074
