// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.midi');
goog.require('mecca.songs');
mecca.view.file_upload = (function mecca$view$file_upload(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__12564 = dom;
var G__12565 = ["files",(0)];
return goog.object.getValueByKeys(G__12564,G__12565);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12563_SHARP_){
var G__12566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__12567 = (new Uint8Array(p1__12563_SHARP_.target.result));
return goog.crypt.byteArrayToHex(G__12567);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12566) : re_frame.core.dispatch.call(null,G__12566));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.song_picker = (function mecca$view$song_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Pick song: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__12568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$song], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12568) : re_frame.core.subscribe.call(null,G__12568));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__12569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_song,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12569) : re_frame.core.dispatch.call(null,G__12569));
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$song_picker_$_iter__12570(s__12571){
return (new cljs.core.LazySeq(null,(function (){
var s__12571__$1 = s__12571;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12571__$1);
if(temp__5457__auto__){
var s__12571__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12571__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12571__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12573 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12572 = (0);
while(true){
if((i__12572 < size__4323__auto__)){
var song = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12572);
cljs.core.chunk_append(b__12573,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,song], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,song], null)));

var G__12574 = (i__12572 + (1));
i__12572 = G__12574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12573),mecca$view$song_picker_$_iter__12570(cljs.core.chunk_rest(s__12571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12573),null);
}
} else {
var song = cljs.core.first(s__12571__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,song], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,song], null)),mecca$view$song_picker_$_iter__12570(cljs.core.rest(s__12571__$2)));
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
mecca.view.hex_bytes = (function mecca$view$hex_bytes(var_args){
var G__12577 = arguments.length;
switch (G__12577) {
case 2:
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2 = (function (file,n){
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,n,(n + (1)));
});

mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3 = (function (file,from,to){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12575_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12575_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.take.cljs$core$IFn$_invoke$arity$2((((2) * to) - ((2) * from)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((2) * from),file))));
});

mecca.view.hex_bytes.cljs$lang$maxFixedArity = 3;

mecca.view.header_table = (function mecca$view$header_table(file,offsets){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0pky,"Bytes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Notes"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$header_table_$_iter__12579(s__12580){
return (new cljs.core.LazySeq(null,(function (){
var s__12580__$1 = s__12580;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12580__$1);
if(temp__5457__auto__){
var s__12580__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12580__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12580__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12582 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12581 = (0);
while(true){
if((i__12581 < size__4323__auto__)){
var vec__12583 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12581);
var vec__12586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12583,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12586,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12586,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12583,(1),null);
cljs.core.chunk_append(b__12582,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))," - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12589 = mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to);
return (notes.cljs$core$IFn$_invoke$arity$1 ? notes.cljs$core$IFn$_invoke$arity$1(G__12589) : notes.call(null,G__12589));
})())].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,from], null)));

var G__12597 = (i__12581 + (1));
i__12581 = G__12597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12582),mecca$view$header_table_$_iter__12579(cljs.core.chunk_rest(s__12580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12582),null);
}
} else {
var vec__12590 = cljs.core.first(s__12580__$2);
var vec__12593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12590,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12590,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))," - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12596 = mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to);
return (notes.cljs$core$IFn$_invoke$arity$1 ? notes.cljs$core$IFn$_invoke$arity$1(G__12596) : notes.call(null,G__12596));
})())].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,from], null)),mecca$view$header_table_$_iter__12579(cljs.core.rest(s__12580__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(offsets);
})())], null)], null)], null);
});
mecca.view.midi_output = (function mecca$view$midi_output(){
var file = (function (){var G__12599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12599) : re_frame.core.subscribe.call(null,G__12599));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(8),cljs.core.cst$kw$cols,(38),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (file){
return (function (p1__12598_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12598_SHARP_);
});})(file))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.deref(file))))),cljs.core.cst$kw$read_DASH_only,true], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.deref(file))),"4D546864"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$green,"This is a MIDI file :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.header_table,cljs.core.deref(file),mecca.midi.midi_offsets], null)], null):null)], null);
});
mecca.view.tracks = (function mecca$view$tracks(file){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),(function (){var iter__4324__auto__ = (function mecca$view$tracks_$_iter__12601(s__12602){
return (new cljs.core.LazySeq(null,(function (){
var s__12602__$1 = s__12602;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12602__$1);
if(temp__5457__auto__){
var s__12602__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12602__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12602__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12604 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12603 = (0);
while(true){
if((i__12603 < size__4323__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12603);
cljs.core.chunk_append(b__12604,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,["Track ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((track + (1)))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.midi.hex__GT_dec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mecca.midi.midi_tracks(file),track))))," bytes"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(8),cljs.core.cst$kw$cols,(38),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12603,track,c__4322__auto__,size__4323__auto__,b__12604,s__12602__$2,temp__5457__auto__){
return (function (p1__12600_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12600_SHARP_);
});})(i__12603,track,c__4322__auto__,size__4323__auto__,b__12604,s__12602__$2,temp__5457__auto__))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mecca.midi.midi_tracks(file),track))))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__12605 = (i__12603 + (1));
i__12603 = G__12605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12604),mecca$view$tracks_$_iter__12601(cljs.core.chunk_rest(s__12602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12604),null);
}
} else {
var track = cljs.core.first(s__12602__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,["Track ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((track + (1)))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.midi.hex__GT_dec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mecca.midi.midi_tracks(file),track))))," bytes"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(8),cljs.core.cst$kw$cols,(38),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (track,s__12602__$2,temp__5457__auto__){
return (function (p1__12600_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12600_SHARP_);
});})(track,s__12602__$2,temp__5457__auto__))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mecca.midi.midi_tracks(file),track))))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),mecca$view$tracks_$_iter__12601(cljs.core.rest(s__12602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(mecca.midi.midi_tracks(file))));
})());
});
mecca.view.mecca = (function mecca$view$mecca(){
var file = (function (){var G__12608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12608) : re_frame.core.subscribe.call(null,G__12608));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import MIDI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_upload], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.song_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.midi_output], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.tracks,cljs.core.deref(file)], null)], null);
});
