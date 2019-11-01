// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33500){
var map__33501 = p__33500;
var map__33501__$1 = ((((!((map__33501 == null)))?(((((map__33501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33501):map__33501);
var m = map__33501__$1;
var n = cljs.core.get.call(null,map__33501__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33501__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__33503_33525 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33504_33526 = null;
var count__33505_33527 = (0);
var i__33506_33528 = (0);
while(true){
if((i__33506_33528 < count__33505_33527)){
var f_33529 = cljs.core._nth.call(null,chunk__33504_33526,i__33506_33528);
cljs.core.println.call(null,"  ",f_33529);


var G__33530 = seq__33503_33525;
var G__33531 = chunk__33504_33526;
var G__33532 = count__33505_33527;
var G__33533 = (i__33506_33528 + (1));
seq__33503_33525 = G__33530;
chunk__33504_33526 = G__33531;
count__33505_33527 = G__33532;
i__33506_33528 = G__33533;
continue;
} else {
var temp__5457__auto___33534 = cljs.core.seq.call(null,seq__33503_33525);
if(temp__5457__auto___33534){
var seq__33503_33535__$1 = temp__5457__auto___33534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33503_33535__$1)){
var c__4351__auto___33536 = cljs.core.chunk_first.call(null,seq__33503_33535__$1);
var G__33537 = cljs.core.chunk_rest.call(null,seq__33503_33535__$1);
var G__33538 = c__4351__auto___33536;
var G__33539 = cljs.core.count.call(null,c__4351__auto___33536);
var G__33540 = (0);
seq__33503_33525 = G__33537;
chunk__33504_33526 = G__33538;
count__33505_33527 = G__33539;
i__33506_33528 = G__33540;
continue;
} else {
var f_33541 = cljs.core.first.call(null,seq__33503_33535__$1);
cljs.core.println.call(null,"  ",f_33541);


var G__33542 = cljs.core.next.call(null,seq__33503_33535__$1);
var G__33543 = null;
var G__33544 = (0);
var G__33545 = (0);
seq__33503_33525 = G__33542;
chunk__33504_33526 = G__33543;
count__33505_33527 = G__33544;
i__33506_33528 = G__33545;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33546 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33546);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33546)))?cljs.core.second.call(null,arglists_33546):arglists_33546));
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
var seq__33507_33547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33508_33548 = null;
var count__33509_33549 = (0);
var i__33510_33550 = (0);
while(true){
if((i__33510_33550 < count__33509_33549)){
var vec__33511_33551 = cljs.core._nth.call(null,chunk__33508_33548,i__33510_33550);
var name_33552 = cljs.core.nth.call(null,vec__33511_33551,(0),null);
var map__33514_33553 = cljs.core.nth.call(null,vec__33511_33551,(1),null);
var map__33514_33554__$1 = ((((!((map__33514_33553 == null)))?(((((map__33514_33553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33514_33553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33514_33553):map__33514_33553);
var doc_33555 = cljs.core.get.call(null,map__33514_33554__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33556 = cljs.core.get.call(null,map__33514_33554__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33552);

cljs.core.println.call(null," ",arglists_33556);

if(cljs.core.truth_(doc_33555)){
cljs.core.println.call(null," ",doc_33555);
} else {
}


var G__33557 = seq__33507_33547;
var G__33558 = chunk__33508_33548;
var G__33559 = count__33509_33549;
var G__33560 = (i__33510_33550 + (1));
seq__33507_33547 = G__33557;
chunk__33508_33548 = G__33558;
count__33509_33549 = G__33559;
i__33510_33550 = G__33560;
continue;
} else {
var temp__5457__auto___33561 = cljs.core.seq.call(null,seq__33507_33547);
if(temp__5457__auto___33561){
var seq__33507_33562__$1 = temp__5457__auto___33561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33507_33562__$1)){
var c__4351__auto___33563 = cljs.core.chunk_first.call(null,seq__33507_33562__$1);
var G__33564 = cljs.core.chunk_rest.call(null,seq__33507_33562__$1);
var G__33565 = c__4351__auto___33563;
var G__33566 = cljs.core.count.call(null,c__4351__auto___33563);
var G__33567 = (0);
seq__33507_33547 = G__33564;
chunk__33508_33548 = G__33565;
count__33509_33549 = G__33566;
i__33510_33550 = G__33567;
continue;
} else {
var vec__33516_33568 = cljs.core.first.call(null,seq__33507_33562__$1);
var name_33569 = cljs.core.nth.call(null,vec__33516_33568,(0),null);
var map__33519_33570 = cljs.core.nth.call(null,vec__33516_33568,(1),null);
var map__33519_33571__$1 = ((((!((map__33519_33570 == null)))?(((((map__33519_33570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33519_33570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33519_33570):map__33519_33570);
var doc_33572 = cljs.core.get.call(null,map__33519_33571__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33573 = cljs.core.get.call(null,map__33519_33571__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33569);

cljs.core.println.call(null," ",arglists_33573);

if(cljs.core.truth_(doc_33572)){
cljs.core.println.call(null," ",doc_33572);
} else {
}


var G__33574 = cljs.core.next.call(null,seq__33507_33562__$1);
var G__33575 = null;
var G__33576 = (0);
var G__33577 = (0);
seq__33507_33547 = G__33574;
chunk__33508_33548 = G__33575;
count__33509_33549 = G__33576;
i__33510_33550 = G__33577;
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

var seq__33521 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33522 = null;
var count__33523 = (0);
var i__33524 = (0);
while(true){
if((i__33524 < count__33523)){
var role = cljs.core._nth.call(null,chunk__33522,i__33524);
var temp__5457__auto___33578__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33578__$1)){
var spec_33579 = temp__5457__auto___33578__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33579));
} else {
}


var G__33580 = seq__33521;
var G__33581 = chunk__33522;
var G__33582 = count__33523;
var G__33583 = (i__33524 + (1));
seq__33521 = G__33580;
chunk__33522 = G__33581;
count__33523 = G__33582;
i__33524 = G__33583;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33521);
if(temp__5457__auto____$1){
var seq__33521__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33521__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__33521__$1);
var G__33584 = cljs.core.chunk_rest.call(null,seq__33521__$1);
var G__33585 = c__4351__auto__;
var G__33586 = cljs.core.count.call(null,c__4351__auto__);
var G__33587 = (0);
seq__33521 = G__33584;
chunk__33522 = G__33585;
count__33523 = G__33586;
i__33524 = G__33587;
continue;
} else {
var role = cljs.core.first.call(null,seq__33521__$1);
var temp__5457__auto___33588__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33588__$2)){
var spec_33589 = temp__5457__auto___33588__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33589));
} else {
}


var G__33590 = cljs.core.next.call(null,seq__33521__$1);
var G__33591 = null;
var G__33592 = (0);
var G__33593 = (0);
seq__33521 = G__33590;
chunk__33522 = G__33591;
count__33523 = G__33592;
i__33524 = G__33593;
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

//# sourceMappingURL=repl.js.map
