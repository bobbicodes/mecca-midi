// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.songs');
mecca.view.file_upload = (function mecca$view$file_upload(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__12553 = dom;
var G__12554 = ["files",(0)];
return goog.object.getValueByKeys(G__12553,G__12554);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12552_SHARP_){
var G__12555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__12556 = (new Uint8Array(p1__12552_SHARP_.target.result));
return goog.crypt.byteArrayToHex(G__12556);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12555) : re_frame.core.dispatch.call(null,G__12555));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.song_picker = (function mecca$view$song_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Pick song: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__12557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$song], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12557) : re_frame.core.subscribe.call(null,G__12557));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__12558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_song,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12558) : re_frame.core.dispatch.call(null,G__12558));
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$song_picker_$_iter__12559(s__12560){
return (new cljs.core.LazySeq(null,(function (){
var s__12560__$1 = s__12560;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12560__$1);
if(temp__5457__auto__){
var s__12560__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12560__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12560__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12562 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12561 = (0);
while(true){
if((i__12561 < size__4323__auto__)){
var song = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12561);
cljs.core.chunk_append(b__12562,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,song], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,song], null)));

var G__12563 = (i__12561 + (1));
i__12561 = G__12563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12562),mecca$view$song_picker_$_iter__12559(cljs.core.chunk_rest(s__12560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12562),null);
}
} else {
var song = cljs.core.first(s__12560__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,song], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,song], null)),mecca$view$song_picker_$_iter__12559(cljs.core.rest(s__12560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.keys(mecca.songs.songs));
})())], null)], null);
});
mecca.view.midi_output = (function mecca$view$midi_output(){
var file = (function (){var G__12565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12565) : re_frame.core.subscribe.call(null,G__12565));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Hex dump:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(8),cljs.core.cst$kw$cols,(38),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (file){
return (function (p1__12564_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12564_SHARP_);
});})(file))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.deref(file))))),cljs.core.cst$kw$read_DASH_only,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.deref(file)))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.deref(file))),"4D546864"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$green,"Valid MIDI file :)"], null):null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import MIDI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_upload], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.song_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.midi_output], null)], null);
});
