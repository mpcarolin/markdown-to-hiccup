// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38817){
var map__38818 = p__38817;
var map__38818__$1 = ((((!((map__38818 == null)))?((((map__38818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38818):map__38818);
var m = map__38818__$1;
var n = cljs.core.get.call(null,map__38818__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38820_38842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38821_38843 = null;
var count__38822_38844 = (0);
var i__38823_38845 = (0);
while(true){
if((i__38823_38845 < count__38822_38844)){
var f_38846 = cljs.core._nth.call(null,chunk__38821_38843,i__38823_38845);
cljs.core.println.call(null,"  ",f_38846);

var G__38847 = seq__38820_38842;
var G__38848 = chunk__38821_38843;
var G__38849 = count__38822_38844;
var G__38850 = (i__38823_38845 + (1));
seq__38820_38842 = G__38847;
chunk__38821_38843 = G__38848;
count__38822_38844 = G__38849;
i__38823_38845 = G__38850;
continue;
} else {
var temp__5457__auto___38851 = cljs.core.seq.call(null,seq__38820_38842);
if(temp__5457__auto___38851){
var seq__38820_38852__$1 = temp__5457__auto___38851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38820_38852__$1)){
var c__31053__auto___38853 = cljs.core.chunk_first.call(null,seq__38820_38852__$1);
var G__38854 = cljs.core.chunk_rest.call(null,seq__38820_38852__$1);
var G__38855 = c__31053__auto___38853;
var G__38856 = cljs.core.count.call(null,c__31053__auto___38853);
var G__38857 = (0);
seq__38820_38842 = G__38854;
chunk__38821_38843 = G__38855;
count__38822_38844 = G__38856;
i__38823_38845 = G__38857;
continue;
} else {
var f_38858 = cljs.core.first.call(null,seq__38820_38852__$1);
cljs.core.println.call(null,"  ",f_38858);

var G__38859 = cljs.core.next.call(null,seq__38820_38852__$1);
var G__38860 = null;
var G__38861 = (0);
var G__38862 = (0);
seq__38820_38842 = G__38859;
chunk__38821_38843 = G__38860;
count__38822_38844 = G__38861;
i__38823_38845 = G__38862;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38863 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30122__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30122__auto__)){
return or__30122__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38863);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38863)))?cljs.core.second.call(null,arglists_38863):arglists_38863));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38824_38864 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38825_38865 = null;
var count__38826_38866 = (0);
var i__38827_38867 = (0);
while(true){
if((i__38827_38867 < count__38826_38866)){
var vec__38828_38868 = cljs.core._nth.call(null,chunk__38825_38865,i__38827_38867);
var name_38869 = cljs.core.nth.call(null,vec__38828_38868,(0),null);
var map__38831_38870 = cljs.core.nth.call(null,vec__38828_38868,(1),null);
var map__38831_38871__$1 = ((((!((map__38831_38870 == null)))?((((map__38831_38870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38831_38870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38831_38870):map__38831_38870);
var doc_38872 = cljs.core.get.call(null,map__38831_38871__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38873 = cljs.core.get.call(null,map__38831_38871__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38869);

cljs.core.println.call(null," ",arglists_38873);

if(cljs.core.truth_(doc_38872)){
cljs.core.println.call(null," ",doc_38872);
} else {
}

var G__38874 = seq__38824_38864;
var G__38875 = chunk__38825_38865;
var G__38876 = count__38826_38866;
var G__38877 = (i__38827_38867 + (1));
seq__38824_38864 = G__38874;
chunk__38825_38865 = G__38875;
count__38826_38866 = G__38876;
i__38827_38867 = G__38877;
continue;
} else {
var temp__5457__auto___38878 = cljs.core.seq.call(null,seq__38824_38864);
if(temp__5457__auto___38878){
var seq__38824_38879__$1 = temp__5457__auto___38878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38824_38879__$1)){
var c__31053__auto___38880 = cljs.core.chunk_first.call(null,seq__38824_38879__$1);
var G__38881 = cljs.core.chunk_rest.call(null,seq__38824_38879__$1);
var G__38882 = c__31053__auto___38880;
var G__38883 = cljs.core.count.call(null,c__31053__auto___38880);
var G__38884 = (0);
seq__38824_38864 = G__38881;
chunk__38825_38865 = G__38882;
count__38826_38866 = G__38883;
i__38827_38867 = G__38884;
continue;
} else {
var vec__38833_38885 = cljs.core.first.call(null,seq__38824_38879__$1);
var name_38886 = cljs.core.nth.call(null,vec__38833_38885,(0),null);
var map__38836_38887 = cljs.core.nth.call(null,vec__38833_38885,(1),null);
var map__38836_38888__$1 = ((((!((map__38836_38887 == null)))?((((map__38836_38887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38836_38887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38836_38887):map__38836_38887);
var doc_38889 = cljs.core.get.call(null,map__38836_38888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38890 = cljs.core.get.call(null,map__38836_38888__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38886);

cljs.core.println.call(null," ",arglists_38890);

if(cljs.core.truth_(doc_38889)){
cljs.core.println.call(null," ",doc_38889);
} else {
}

var G__38891 = cljs.core.next.call(null,seq__38824_38879__$1);
var G__38892 = null;
var G__38893 = (0);
var G__38894 = (0);
seq__38824_38864 = G__38891;
chunk__38825_38865 = G__38892;
count__38826_38866 = G__38893;
i__38827_38867 = G__38894;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38838 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38839 = null;
var count__38840 = (0);
var i__38841 = (0);
while(true){
if((i__38841 < count__38840)){
var role = cljs.core._nth.call(null,chunk__38839,i__38841);
var temp__5457__auto___38895__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38895__$1)){
var spec_38896 = temp__5457__auto___38895__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38896));
} else {
}

var G__38897 = seq__38838;
var G__38898 = chunk__38839;
var G__38899 = count__38840;
var G__38900 = (i__38841 + (1));
seq__38838 = G__38897;
chunk__38839 = G__38898;
count__38840 = G__38899;
i__38841 = G__38900;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38838);
if(temp__5457__auto____$1){
var seq__38838__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38838__$1)){
var c__31053__auto__ = cljs.core.chunk_first.call(null,seq__38838__$1);
var G__38901 = cljs.core.chunk_rest.call(null,seq__38838__$1);
var G__38902 = c__31053__auto__;
var G__38903 = cljs.core.count.call(null,c__31053__auto__);
var G__38904 = (0);
seq__38838 = G__38901;
chunk__38839 = G__38902;
count__38840 = G__38903;
i__38841 = G__38904;
continue;
} else {
var role = cljs.core.first.call(null,seq__38838__$1);
var temp__5457__auto___38905__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38905__$2)){
var spec_38906 = temp__5457__auto___38905__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38906));
} else {
}

var G__38907 = cljs.core.next.call(null,seq__38838__$1);
var G__38908 = null;
var G__38909 = (0);
var G__38910 = (0);
seq__38838 = G__38907;
chunk__38839 = G__38908;
count__38840 = G__38909;
i__38841 = G__38910;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1543501874007
