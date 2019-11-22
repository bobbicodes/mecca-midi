// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.midi');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.crypt');
mecca.midi.hex__GT_ascii = (function mecca$midi$hex__GT_ascii(s){
var G__12552 = (function (){var G__12553 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s);
return goog.crypt.hexToByteArray(G__12553);
})();
return goog.crypt.byteArrayToString(G__12552);
});
mecca.midi.midi_offsets = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),(function (p1__12554_SHARP_){
return ["Hex to ASCII: ","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.midi.hex__GT_ascii(p1__12554_SHARP_)),"\""].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(8)], null),(function (p1__12555_SHARP_){
return ["Header length: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12555_SHARP_))].join('')))].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10)], null),(function (p1__12556_SHARP_){
var format = parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12556_SHARP_))].join(''));
return ["Format ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12559 = format;
switch (G__12559) {
case (0):
return "Single track";

break;
case (1):
return "Multiple track";

break;
case (2):
return "Multiple song";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12559)].join('')));

}
})())].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(12)], null),(function (p1__12557_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12557_SHARP_))].join('')))," track",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12557_SHARP_))].join(''))))?null:"s"))].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),(function (p1__12558_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12558_SHARP_))].join('')))," ticks per beat"].join('');
})], null)], null);
