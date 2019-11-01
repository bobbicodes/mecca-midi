// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.castle');
goog.require('cljs.core');
mecca.castle.mortar_row = (function mecca$castle$mortar_row(x,y,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + (width * (8))),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 3.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 3.5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null);
});
mecca.castle.brick_row = (function mecca$castle$brick_row(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + ((8) * width)),new cljs.core.Keyword(null,"y1","y1",589123466),(1.5 + y),new cljs.core.Keyword(null,"y2","y2",-718691301),(1.5 + y),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"7 1",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),offset,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c74a0a"], null)], null);
});
mecca.castle.mortar_columns = (function mecca$castle$mortar_columns(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + ((8) * width)),new cljs.core.Keyword(null,"y1","y1",589123466),(1.5 + y),new cljs.core.Keyword(null,"y2","y2",-718691301),(1.5 + y),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),offset,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null);
});
mecca.castle.brick_row_pair = (function mecca$castle$brick_row_pair(x,y,width){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row,x,y,width,(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_columns,x,y,width,(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_row,x,y,width], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row,x,(y + (4)),width,(4)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_columns,x,(y + (4)),width,(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_row,x,(y + (4)),width], null)], null);
});
mecca.castle.castle_arch = (function mecca$castle$castle_arch(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__4324__auto__ = (function mecca$castle$castle_arch_$_iter__21749(s__21750){
return (new cljs.core.LazySeq(null,(function (){
var s__21750__$1 = s__21750;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21750__$1);
if(temp__5457__auto__){
var s__21750__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21750__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__21750__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__21752 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__21751 = (0);
while(true){
if((i__21751 < size__4323__auto__)){
var vec__21753 = cljs.core._nth.call(null,c__4322__auto__,i__21751);
var dy = cljs.core.nth.call(null,vec__21753,(0),null);
var dx = cljs.core.nth.call(null,vec__21753,(1),null);
cljs.core.chunk_append.call(null,b__21752,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(x + ((40) - dx)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((x + (40)) + dx),new cljs.core.Keyword(null,"y1","y1",589123466),(48.5 + dy),new cljs.core.Keyword(null,"y2","y2",-718691301),(48.5 + dy),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)));

var G__21759 = (i__21751 + (1));
i__21751 = G__21759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21752),mecca$castle$castle_arch_$_iter__21749.call(null,cljs.core.chunk_rest.call(null,s__21750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21752),null);
}
} else {
var vec__21756 = cljs.core.first.call(null,s__21750__$2);
var dy = cljs.core.nth.call(null,vec__21756,(0),null);
var dx = cljs.core.nth.call(null,vec__21756,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(x + ((40) - dx)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((x + (40)) + dx),new cljs.core.Keyword(null,"y1","y1",589123466),(48.5 + dy),new cljs.core.Keyword(null,"y2","y2",-718691301),(48.5 + dy),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)),mecca$castle$castle_arch_$_iter__21749.call(null,cljs.core.rest.call(null,s__21750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16.5,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [17.5,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [18.5,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [21.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [22.5,(8)], null)], null));
})()], null);
});
mecca.castle.castle_door = (function mecca$castle$castle_door(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.castle_arch,(x - (32)),y], null)], null);
});
mecca.castle.castle_roof = (function mecca$castle$castle_roof(x,y,width){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 0.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 0.5),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"9 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(-11),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + (4)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + (4)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + (4)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + (4)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"7 9",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(4),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c74a0a"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 7.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 7.5),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"9 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(-11),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 7.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 7.5),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"9 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(13),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fbbbaf"], null)], null)], null);
});
mecca.castle.brick_face = (function mecca$castle$brick_face(x,y,width){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (0.15)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.castle_roof,x,y,((8) * width)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (8)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (16)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (24)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (32)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (40)),width], null),((cljs.core._EQ_.call(null,width,(10)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.castle_door,((32) + x),(y + (24))], null):null)], null);
});

//# sourceMappingURL=castle.js.map
