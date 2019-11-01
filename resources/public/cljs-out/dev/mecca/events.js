// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$samples,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$eraser_QMARK_,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$current_DASH_note,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$repeat_QMARK_,cljs.core.cst$kw$file_DASH_upload,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$loop_DASH_end,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$notes,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$audio_DASH_context,cljs.core.cst$kw$tempo,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$xml,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[null,(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19942){
var vec__19943 = p__19942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,((function (vec__19943,_,time,pitch){
return (function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19943,_,time,pitch){
return (function (p1__19941_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19941_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19941_SHARP_))));
});})(vec__19943,_,time,pitch))
,note);
});})(vec__19943,_,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__19946){
var vec__19947 = p__19946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_samples,(function (db,p__19950){
var vec__19951 = p__19950;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951,(0),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$samples,samples);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__19954){
var vec__19955 = p__19954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19955,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19955,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_notes,(function (db,p__19958){
var vec__19959 = p__19958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19959,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19959,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19962){
var vec__19963 = p__19962;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19963,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19963,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19966){
var vec__19967 = p__19966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19967,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19967,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref((function (){var G__19970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19970) : re_frame.core.subscribe.call(null,G__19970));
})()).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__19971){
var vec__19972 = p__19971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__19975){
var vec__19976 = p__19975;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19976,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19976,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eraser_DASH_toggle,(function (db,p__19979){
var vec__19980 = p__19979;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19980,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19980,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eraser_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__19983){
var vec__19984 = p__19983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19984,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19984,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__19987){
var vec__19988 = p__19987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__19991){
var vec__19992 = p__19991;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19992,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19992,(1),null);
var G__19995_19996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19995_19996) : re_frame.core.dispatch.call(null,G__19995_19996));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__19997){
var vec__19998 = p__19997;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19998,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19998,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__20001){
var vec__20002 = p__20001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20002,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20002,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__20005){
var vec__20006 = p__20005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20006,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20006,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__20011){
var vec__20012 = p__20011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(1),null);
var notes = (function (){var G__20015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20015) : re_frame.core.subscribe.call(null,G__20015));
})();
var beat = (function (){var G__20016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20016) : re_frame.core.subscribe.call(null,G__20016));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20012,_,___$1){
return (function (p1__20009_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20009_SHARP_));
});})(notes,beat,vec__20012,_,___$1))
,cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__20017_20018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor,0.5], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20017_20018) : re_frame.core.dispatch.call(null,G__20017_20018));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__20012,_,___$1){
return (function (p1__20010_SHARP_){
return (0.5 + p1__20010_SHARP_);
});})(notes,beat,to_play,vec__20012,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__20020){
var vec__20021 = p__20020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20021,_,beats){
return (function (p1__20019_SHARP_){
return (beats + p1__20019_SHARP_);
});})(vec__20021,_,beats))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__20025){
var vec__20026 = p__20025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,((function (vec__20026,_,___$1){
return (function (p1__20024_SHARP_){
return ((10) + p1__20024_SHARP_);
});})(vec__20026,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__20029){
var vec__20030 = p__20029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20030,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20030,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1)),cljs.core.cst$kw$mario_DASH_x,(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__20034){
var vec__20035 = p__20034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20035,_,___$1){
return (function (p1__20033_SHARP_){
return (p1__20033_SHARP_ - 0.5);
});})(vec__20035,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__20038){
var vec__20039 = p__20038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20039,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20039,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__20042){
var vec__20043 = p__20042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20043,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20043,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__20047){
var vec__20048 = p__20047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20048,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20048,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20048,_,tempo){
return (function (p1__20046_SHARP_){
return ((8) + p1__20046_SHARP_);
});})(vec__20048,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__20052){
var vec__20053 = p__20052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20053,_,tempo){
return (function (p1__20051_SHARP_){
return (p1__20051_SHARP_ - (8));
});})(vec__20053,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__20056){
var vec__20057 = p__20056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20057,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20057,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repeat_DASH_toggle,(function (db,p__20060){
var vec__20061 = p__20060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$repeat_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loop_DASH_end,(function (db,p__20064){
var vec__20065 = p__20064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20065,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20065,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loop_DASH_end,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_note,(function (db,p__20069){
var vec__20070 = p__20069;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(1),null);
var tempo = (function (){var G__20073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20073) : re_frame.core.subscribe.call(null,G__20073));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_note,cljs.core.inc),cljs.core.cst$kw$next_DASH_note_DASH_time,((function (tempo,seconds_per_beat,vec__20070,_,___$1){
return (function (p1__20068_SHARP_){
return (p1__20068_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__20070,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schedule_DASH_note,(function (db,p__20075){
var vec__20076 = p__20075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20076,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20076,(1),null);
var notes = (function (){var G__20079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20079) : re_frame.core.subscribe.call(null,G__20079));
})();
var beat = (function (){var G__20080 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20080) : re_frame.core.subscribe.call(null,G__20080));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20076,_,___$1){
return (function (p1__20074_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20074_SHARP_));
});})(notes,beat,vec__20076,_,___$1))
,cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes_DASH_in_DASH_queue,cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__20081){
var vec__20082 = p__20081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__20085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20085) : re_frame.core.subscribe.call(null,G__20085));
})()).state,"suspended")){
cljs.core.deref((function (){var G__20086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20086) : re_frame.core.subscribe.call(null,G__20086));
})()).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__20087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20087) : re_frame.core.subscribe.call(null,G__20087));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__20088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20088) : re_frame.core.subscribe.call(null,G__20088));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__20092){
var vec__20093 = p__20092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20093,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20093,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__20098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20098) : re_frame.core.subscribe.call(null,G__20098));
})()));
if(and__3938__auto__){
return cljs.core.deref((function (){var G__20099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20099) : re_frame.core.subscribe.call(null,G__20099));
})());
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20093,_,___$1){
return (function (p1__20089_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20089_SHARP_,(12))){
return (0);
} else {
return (p1__20089_SHARP_ + (1));
}
});})(vec__20093,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,((function (vec__20093,_,___$1){
return (function (p1__20090_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__20090_SHARP_)){
return (0);
} else {
return (p1__20090_SHARP_ + (1));
}
});})(vec__20093,_,___$1))
),cljs.core.cst$kw$mario_DASH_y,((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref((function (){var G__20100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20100) : re_frame.core.subscribe.call(null,G__20100));
})()))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20093,_,___$1){
return (function (p1__20091_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20091_SHARP_,(12))){
return (0);
} else {
return (p1__20091_SHARP_ + (1));
}
});})(vec__20093,_,___$1))
);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__20101){
var vec__20102 = p__20101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20102,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20102,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$submit_DASH_xml,(function (db,p__20105){
var vec__20106 = p__20105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20106,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20106,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$xml,xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__20109){
var vec__20110 = p__20109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20110,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20110,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_megaman,(function (db,p__20113){
var vec__20114 = p__20113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20114,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20114,(1),null);
var G__20117_20118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(260)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20117_20118) : re_frame.core.dispatch.call(null,G__20117_20118));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_castle,(function (db,p__20119){
var vec__20120 = p__20119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(1),null);
var G__20123_20124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20123_20124) : re_frame.core.dispatch.call(null,G__20123_20124));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_zelda,(function (db,p__20125){
var vec__20126 = p__20125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(1),null);
var G__20129_20130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(390)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20129_20130) : re_frame.core.dispatch.call(null,G__20129_20130));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.zelda.zelda);
}));
