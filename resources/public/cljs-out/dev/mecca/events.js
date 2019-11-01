// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.songs.megaman');
goog.require('mecca.songs.zelda');
goog.require('mecca.songs.city');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.call(null,"remove note"),(function (db,p__18229){
var vec__18230 = p__18229;
var _ = cljs.core.nth.call(null,vec__18230,(0),null);
var time = cljs.core.nth.call(null,vec__18230,(1),null);
var pitch = cljs.core.nth.call(null,vec__18230,(2),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),((function (vec__18230,_,time,pitch){
return (function (note){
return cljs.core.remove.call(null,((function (vec__18230,_,time,pitch){
return (function (p1__18228_SHARP_){
return ((cljs.core._EQ_.call(null,time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__18228_SHARP_))) && (cljs.core._EQ_.call(null,pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__18228_SHARP_))));
});})(vec__18230,_,time,pitch))
,note);
});})(vec__18230,_,time,pitch))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__18233){
var vec__18234 = p__18233;
var _ = cljs.core.nth.call(null,vec__18234,(0),null);
var file = cljs.core.nth.call(null,vec__18234,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__18237){
var vec__18238 = p__18237;
var _ = cljs.core.nth.call(null,vec__18238,(0),null);
var beats_per_measure = cljs.core.nth.call(null,vec__18238,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__18241){
var vec__18242 = p__18241;
var _ = cljs.core.nth.call(null,vec__18242,(0),null);
var notes = cljs.core.nth.call(null,vec__18242,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__18245){
var vec__18246 = p__18245;
var _ = cljs.core.nth.call(null,vec__18246,(0),null);
var new_time = cljs.core.nth.call(null,vec__18246,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__18249){
var vec__18250 = p__18249;
var _ = cljs.core.nth.call(null,vec__18250,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18250,(1),null);
mecca.music.play_song_BANG_.call(null);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref.call(null,mecca.music.audiocontext).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__18253){
var vec__18254 = p__18253;
var _ = cljs.core.nth.call(null,vec__18254,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18254,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__18257){
var vec__18258 = p__18257;
var _ = cljs.core.nth.call(null,vec__18258,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18258,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__18261){
var vec__18262 = p__18261;
var _ = cljs.core.nth.call(null,vec__18262,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18262,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__18265){
var vec__18266 = p__18265;
var _ = cljs.core.nth.call(null,vec__18266,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18266,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__18269){
var vec__18270 = p__18269;
var _ = cljs.core.nth.call(null,vec__18270,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18270,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__18273){
var vec__18274 = p__18273;
var _ = cljs.core.nth.call(null,vec__18274,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18274,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null));

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__18277){
var vec__18278 = p__18277;
var _ = cljs.core.nth.call(null,vec__18278,(0),null);
var pos = cljs.core.nth.call(null,vec__18278,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__18281){
var vec__18282 = p__18281;
var _ = cljs.core.nth.call(null,vec__18282,(0),null);
var instrument = cljs.core.nth.call(null,vec__18282,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__18285){
var vec__18286 = p__18285;
var _ = cljs.core.nth.call(null,vec__18286,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18286,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__18291){
var vec__18292 = p__18291;
var _ = cljs.core.nth.call(null,vec__18292,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18292,(1),null);
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var to_play = cljs.core.filter.call(null,((function (notes,beat,vec__18292,_,___$1){
return (function (p1__18289_SHARP_){
return cljs.core._EQ_.call(null,((1) + cljs.core.deref.call(null,beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__18289_SHARP_));
});})(notes,beat,vec__18292,_,___$1))
,cljs.core.deref.call(null,notes));
if(((4) < cljs.core.deref.call(null,beat))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),0.5], null));
} else {
}

return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),((function (notes,beat,to_play,vec__18292,_,___$1){
return (function (p1__18290_SHARP_){
return (0.5 + p1__18290_SHARP_);
});})(notes,beat,to_play,vec__18292,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__18296){
var vec__18297 = p__18296;
var _ = cljs.core.nth.call(null,vec__18297,(0),null);
var beats = cljs.core.nth.call(null,vec__18297,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),((function (vec__18297,_,beats){
return (function (p1__18295_SHARP_){
return (beats + p1__18295_SHARP_);
});})(vec__18297,_,beats))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__18301){
var vec__18302 = p__18301;
var _ = cljs.core.nth.call(null,vec__18302,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18302,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),((function (vec__18302,_,___$1){
return (function (p1__18300_SHARP_){
return ((10) + p1__18300_SHARP_);
});})(vec__18302,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__18305){
var vec__18306 = p__18305;
var _ = cljs.core.nth.call(null,vec__18306,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18306,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1)),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(16));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__18310){
var vec__18311 = p__18310;
var _ = cljs.core.nth.call(null,vec__18311,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18311,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),((function (vec__18311,_,___$1){
return (function (p1__18309_SHARP_){
return (p1__18309_SHARP_ - 0.5);
});})(vec__18311,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__18314){
var vec__18315 = p__18314;
var _ = cljs.core.nth.call(null,vec__18315,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18315,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__18318){
var vec__18319 = p__18318;
var _ = cljs.core.nth.call(null,vec__18319,(0),null);
var tempo = cljs.core.nth.call(null,vec__18319,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__18323){
var vec__18324 = p__18323;
var _ = cljs.core.nth.call(null,vec__18324,(0),null);
var tempo = cljs.core.nth.call(null,vec__18324,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),((function (vec__18324,_,tempo){
return (function (p1__18322_SHARP_){
return ((8) + p1__18322_SHARP_);
});})(vec__18324,_,tempo))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__18328){
var vec__18329 = p__18328;
var _ = cljs.core.nth.call(null,vec__18329,(0),null);
var tempo = cljs.core.nth.call(null,vec__18329,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),((function (vec__18329,_,tempo){
return (function (p1__18327_SHARP_){
return (p1__18327_SHARP_ - (8));
});})(vec__18329,_,tempo))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__18332){
var vec__18333 = p__18332;
var _ = cljs.core.nth.call(null,vec__18333,(0),null);
var key = cljs.core.nth.call(null,vec__18333,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__18336){
var vec__18337 = p__18336;
var _ = cljs.core.nth.call(null,vec__18337,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18337,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__18340){
var vec__18341 = p__18340;
var _ = cljs.core.nth.call(null,vec__18341,(0),null);
var x = cljs.core.nth.call(null,vec__18341,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__18345){
var vec__18346 = p__18345;
var _ = cljs.core.nth.call(null,vec__18346,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18346,(1),null);
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var seconds_per_beat = (60.0 / cljs.core.deref.call(null,tempo));
return cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),((function (tempo,seconds_per_beat,vec__18346,_,___$1){
return (function (p1__18344_SHARP_){
return (p1__18344_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__18346,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__18350){
var vec__18351 = p__18350;
var _ = cljs.core.nth.call(null,vec__18351,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18351,(1),null);
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
var to_play = cljs.core.filter.call(null,((function (notes,beat,vec__18351,_,___$1){
return (function (p1__18349_SHARP_){
return cljs.core._EQ_.call(null,((1) + cljs.core.deref.call(null,beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__18349_SHARP_));
});})(notes,beat,vec__18351,_,___$1))
,cljs.core.deref.call(null,notes));
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.call(null,"add note"),(function (db,p__18354){
var vec__18355 = p__18354;
var _ = cljs.core.nth.call(null,vec__18355,(0),null);
var instrument = cljs.core.nth.call(null,vec__18355,(1),null);
var time = cljs.core.nth.call(null,vec__18355,(2),null);
var pitch = cljs.core.nth.call(null,vec__18355,(3),null);
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.music.audiocontext).state,"suspended")){
cljs.core.deref.call(null,mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample.call(null,instrument,(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch));

return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__18361){
var vec__18362 = p__18361;
var _ = cljs.core.nth.call(null,vec__18362,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18362,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.call(null,(0),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))));
if(and__3938__auto__){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),((function (vec__18362,_,___$1){
return (function (p1__18358_SHARP_){
if(cljs.core._EQ_.call(null,p1__18358_SHARP_,(12))){
return (0);
} else {
return (p1__18358_SHARP_ + (1));
}
});})(vec__18362,_,___$1))
),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),((function (vec__18362,_,___$1){
return (function (p1__18359_SHARP_){
if(cljs.core._EQ_.call(null,(8),p1__18359_SHARP_)){
return (0);
} else {
return (p1__18359_SHARP_ + (1));
}
});})(vec__18362,_,___$1))
),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))))));
} else {
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),((function (vec__18362,_,___$1){
return (function (p1__18360_SHARP_){
if(cljs.core._EQ_.call(null,p1__18360_SHARP_,(12))){
return (0);
} else {
return (p1__18360_SHARP_ + (1));
}
});})(vec__18362,_,___$1))
);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__18365){
var vec__18366 = p__18365;
var _ = cljs.core.nth.call(null,vec__18366,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18366,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(1));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"submit-xml","submit-xml",-1403162082),(function (db,p__18369){
var vec__18370 = p__18369;
var _ = cljs.core.nth.call(null,vec__18370,(0),null);
var xml = cljs.core.nth.call(null,vec__18370,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__18373){
var vec__18374 = p__18373;
var _ = cljs.core.nth.call(null,vec__18374,(0),null);
var notes = cljs.core.nth.call(null,vec__18374,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-megaman","load-megaman",59599960),(function (db,p__18377){
var vec__18378 = p__18377;
var _ = cljs.core.nth.call(null,vec__18378,(0),null);
var notes = cljs.core.nth.call(null,vec__18378,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(260)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-castle","load-castle",-840389601),(function (db,p__18381){
var vec__18382 = p__18381;
var _ = cljs.core.nth.call(null,vec__18382,(0),null);
var notes = cljs.core.nth.call(null,vec__18382,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(150)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.city.city);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-zelda","load-zelda",-1565536165),(function (db,p__18385){
var vec__18386 = p__18385;
var _ = cljs.core.nth.call(null,vec__18386,(0),null);
var notes = cljs.core.nth.call(null,vec__18386,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(390)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.zelda.zelda);
}));

//# sourceMappingURL=events.js.map
