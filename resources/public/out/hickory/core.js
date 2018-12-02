// Compiled by ClojureScript 1.10.238 {}
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('hickory.utils');
goog.require('clojure.zip');
goog.require('goog.string');

/**
 * Objects that can be represented as Hiccup nodes implement this protocol in
 * order to make the conversion.
 * @interface
 */
hickory.core.HiccupRepresentable = function(){};

/**
 * Converts the node given into a hiccup-format data structure. The
 *   node must have an implementation of the HiccupRepresentable
 *   protocol; nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hiccup = (function hickory$core$as_hiccup(this$){
if(((!((this$ == null))) && (!((this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1 == null))))){
return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (hickory.core.as_hiccup["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HiccupRepresentable.as-hiccup",this$);
}
}
}
});


/**
 * Objects that can be represented as HTML DOM node maps, similar to
 * clojure.xml, implement this protocol to make the conversion.
 * 
 * Each DOM node will be a map or string (for Text/CDATASections). Nodes that
 * are maps have the appropriate subset of the keys
 * 
 *   :type     - [:comment, :document, :document-type, :element]
 *   :tag      - node's tag, check :type to see if applicable
 *   :attrs    - node's attributes as a map, check :type to see if applicable
 *   :content  - node's child nodes, in a vector, check :type to see if
 *               applicable
 * @interface
 */
hickory.core.HickoryRepresentable = function(){};

/**
 * Converts the node given into a hickory-format data structure. The
 *   node must have an implementation of the HickoryRepresentable protocol;
 *   nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hickory = (function hickory$core$as_hickory(this$){
if(((!((this$ == null))) && (!((this$.hickory$core$HickoryRepresentable$as_hickory$arity$1 == null))))){
return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hickory.core.as_hickory[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (hickory.core.as_hickory["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HickoryRepresentable.as-hickory",this$);
}
}
}
});

hickory.core.node_type = (function hickory$core$node_type(type){
return (Node[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"_NODE"].join('')]);
});
hickory.core.Attribute = hickory.core.node_type.call(null,"ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type.call(null,"COMMENT");
hickory.core.Document = hickory.core.node_type.call(null,"DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type.call(null,"DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type.call(null,"ELEMENT");
hickory.core.Text = hickory.core.node_type.call(null,"TEXT");
hickory.core.extend_type_with_seqable = (function hickory$core$extend_type_with_seqable(t){
t.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

return t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1);
});
});
hickory.core.extend_type_with_seqable.call(null,NodeList);
if(typeof NamedNodeMap !== 'undefined'){
hickory.core.extend_type_with_seqable.call(null,NamedNodeMap);
} else {
}
if(typeof MozNamedAttrMap !== 'undefined'){
hickory.core.extend_type_with_seqable.call(null,MozNamedAttrMap);
} else {
}
hickory.core.format_doctype = (function hickory$core$format_doctype(dt){
var name = (dt["name"]);
var publicId = (dt["publicId"]);
var systemId = (dt["systemId"]);
if(!(cljs.core.empty_QMARK_.call(null,publicId))){
return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else {
return ["<!DOCTYPE ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),">"].join('');
}
});
goog.object.set(hickory.core.HiccupRepresentable,"object",true);

goog.object.set(hickory.core.as_hiccup,"object",(function (this$){
var pred__23600 = cljs.core._EQ_;
var expr__23601 = (this$["nodeType"]);
if(cljs.core.truth_(pred__23600.call(null,hickory.core.Attribute,expr__23601))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword.call(null,(this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_(pred__23600.call(null,hickory.core.Comment,expr__23601))){
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1((this$["data"])),"-->"].join('');
} else {
if(cljs.core.truth_(pred__23600.call(null,hickory.core.Document,expr__23601))){
return cljs.core.map.call(null,hickory.core.as_hiccup,(this$["childNodes"]));
} else {
if(cljs.core.truth_(pred__23600.call(null,hickory.core.DocumentType,expr__23601))){
return hickory.core.format_doctype.call(null,this$);
} else {
if(cljs.core.truth_(pred__23600.call(null,hickory.core.Element,expr__23601))){
var tag = hickory.utils.lower_case_keyword.call(null,(this$["tagName"]));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_(hickory.utils.unescapable_content.call(null,tag))?cljs.core.map.call(null,((function (tag,pred__23600,expr__23601){
return (function (p1__23599_SHARP_){
return (p1__23599_SHARP_["wholeText"]);
});})(tag,pred__23600,expr__23601))
,(this$["childNodes"])):cljs.core.map.call(null,hickory.core.as_hiccup,(this$["childNodes"])))));
} else {
if(cljs.core.truth_(pred__23600.call(null,hickory.core.Text,expr__23601))){
return hickory.utils.html_escape.call(null,(this$["wholeText"]));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__23601)].join('')));
}
}
}
}
}
}
}));
goog.object.set(hickory.core.HickoryRepresentable,"object",true);

goog.object.set(hickory.core.as_hickory,"object",(function (this$){
var pred__23603 = cljs.core._EQ_;
var expr__23604 = (this$["nodeType"]);
if(cljs.core.truth_(pred__23603.call(null,hickory.core.Attribute,expr__23604))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword.call(null,(this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_(pred__23603.call(null,hickory.core.Comment,expr__23604))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else {
if(cljs.core.truth_(pred__23603.call(null,hickory.core.Document,expr__23604))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_(pred__23603.call(null,hickory.core.DocumentType,expr__23604))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document-type","document-type",-1309437776),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(this$["name"]),new cljs.core.Keyword(null,"publicid","publicid",1557995850),(this$["publicId"]),new cljs.core.Keyword(null,"systemid","systemid",-2052878192),(this$["systemId"])], null)], null);
} else {
if(cljs.core.truth_(pred__23603.call(null,hickory.core.Element,expr__23604))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["attributes"])))),new cljs.core.Keyword(null,"tag","tag",-1290361223),hickory.utils.lower_case_keyword.call(null,(this$["tagName"])),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_(pred__23603.call(null,hickory.core.Text,expr__23604))){
return (this$["wholeText"]);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__23604)].join('')));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function hickory$core$extract_doctype(s){
var temp__5457__auto__ = cljs.core.second.call(null,(function (){var or__3922__auto__ = cljs.core.re_find.call(null,/<!DOCTYPE ([^>]*)>/,s);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.re_find.call(null,/<!doctype ([^>]*)>/,s);
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var doctype = temp__5457__auto__;
return cljs.core.re_find.call(null,/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else {
return null;
}
});
hickory.core.remove_el = (function hickory$core$remove_el(el){
return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function hickory$core$parse_dom_with_domparser(s){
if(typeof DOMParser !== 'undefined'){
return (new DOMParser()).parseFromString(s,"text/html");
} else {
return null;
}
});
/**
 * Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
 */
hickory.core.parse_dom_with_write = (function hickory$core$parse_dom_with_write(s){
var doc = document.implementation.createHTMLDocument("");
var doctype_el = (doc["doctype"]);
if(cljs.core.truth_(hickory.core.extract_doctype.call(null,s))){
} else {
hickory.core.remove_el.call(null,doctype_el);
}

var temp__5457__auto___23606 = cljs.core.first.call(null,(doc["head"]["childNodes"]));
if(cljs.core.truth_(temp__5457__auto___23606)){
var title_el_23607 = temp__5457__auto___23606;
if(cljs.core.empty_QMARK_.call(null,(title_el_23607["text"]))){
hickory.core.remove_el.call(null,title_el_23607);
} else {
}
} else {
}

doc.write(s);

return doc;
});
/**
 * Parse an entire HTML document into a DOM structure that can be
 * used as input to as-hiccup or as-hickory.
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hiccup)
 * ```
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hickory)
 * ```
 * 
 * 
 *   
 */
hickory.core.parse = (function hickory$core$parse(s){
var or__3922__auto__ = hickory.core.parse_dom_with_domparser.call(null,s);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return hickory.core.parse_dom_with_write.call(null,s);
}
});
/**
 * Parse an HTML fragment (some group of tags that might be at home somewhere
 * in the tag hierarchy under <body>) into a list of DOM elements that can
 * each be passed as input to as-hiccup or as-hickory.
 */
hickory.core.parse_fragment = (function hickory$core$parse_fragment(s){
return (hickory.core.parse.call(null,s)["body"]["childNodes"]);
});

//# sourceMappingURL=core.js.map
