// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mecca.songs');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file_DASH_upload,null,cljs.core.cst$kw$song,""], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__12532){
var vec__12533 = p__12532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$file_DASH_upload,file,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$song,""], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_song,(function (db,p__12536){
var vec__12537 = p__12536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(0),null);
var song = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$song,song,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file_DASH_upload,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.songs.songs,song)], 0));
}));
