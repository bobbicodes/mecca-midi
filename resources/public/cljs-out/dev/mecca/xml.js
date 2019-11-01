// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.xml');
goog.require('cljs.core');
goog.require('mecca.score');
goog.require('re_frame.core');
mecca.xml.get_measures = (function mecca$xml$get_measures(score){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(score),(7)));
});
mecca.xml.get_tag = (function mecca$xml$get_tag(tag,content){
return cljs.core.filter.call(null,(function (p1__21946_SHARP_){
return cljs.core._EQ_.call(null,tag,cljs.core.get.call(null,p1__21946_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(content));
});
mecca.xml.extract_notes = (function mecca$xml$extract_notes(measure){
return mecca.xml.get_tag.call(null,new cljs.core.Keyword(null,"note","note",1426297904),measure);
});
mecca.xml.get_pitch = (function mecca$xml$get_pitch(note){
return cljs.core.first.call(null,mecca.xml.get_tag.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),note));
});
mecca.xml.get_attr = (function mecca$xml$get_attr(attr,note){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.xml.get_tag.call(null,attr,note))));
});
mecca.xml.get_duration = (function mecca$xml$get_duration(note){
return parseInt(mecca.xml.get_attr.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068),note));
});
mecca.xml.get_voice = (function mecca$xml$get_voice(note){
return parseInt(mecca.xml.get_attr.call(null,new cljs.core.Keyword(null,"voice","voice",185716428),note));
});
mecca.xml.extract_voice = (function mecca$xml$extract_voice(measure,voice){
return cljs.core.filter.call(null,(function (p1__21947_SHARP_){
return cljs.core._EQ_.call(null,voice,mecca.xml.get_voice.call(null,p1__21947_SHARP_));
}),mecca.xml.get_tag.call(null,new cljs.core.Keyword(null,"note","note",1426297904),measure));
});
mecca.xml.get_step = (function mecca$xml$get_step(pitch){
return mecca.xml.get_attr.call(null,new cljs.core.Keyword(null,"step","step",1288888124),pitch);
});
mecca.xml.get_octave = (function mecca$xml$get_octave(pitch){
return parseInt(mecca.xml.get_attr.call(null,new cljs.core.Keyword(null,"octave","octave",1066197953),pitch));
});
mecca.xml.get_alter = (function mecca$xml$get_alter(pitch){
return parseInt(mecca.xml.get_attr.call(null,new cljs.core.Keyword(null,"alter","alter",1560300098),pitch));
});
mecca.xml.pitch__GT_midi = (function mecca$xml$pitch__GT_midi(pitch){
var base_pitch = ((12) + ((12) * mecca.xml.get_octave.call(null,pitch)));
var pitch_steps = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","D","E","F","G","A","B"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11)], null));
var step = mecca.xml.get_step.call(null,pitch);
var alter = ((cljs.core.int_QMARK_.call(null,mecca.xml.get_alter.call(null,pitch)))?mecca.xml.get_alter.call(null,pitch):(0));
return ((cljs.core.get.call(null,pitch_steps,step) + base_pitch) + alter);
});
mecca.xml.parse_note = (function mecca$xml$parse_note(note,time){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"pitch","pitch",1495126700),((mecca.xml.pitch__GT_midi.call(null,mecca.xml.get_pitch.call(null,note)) + (function (){var G__21948 = mecca.xml.get_voice.call(null,note);
switch (G__21948) {
case (5):
return (12);

break;
default:
return (0);

}
})()) + (6)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (){var G__21949 = mecca.xml.get_voice.call(null,note);
switch (G__21949) {
case (5):
return (15);

break;
case (1):
return (14);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21949)].join('')));

}
})()], null);
});
mecca.xml.parse_measure = (function mecca$xml$parse_measure(measure,voice){
var time = (1);
var notes = mecca.xml.extract_voice.call(null,measure,voice);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,notes)){
return result;
} else {
var G__21952 = (time + (mecca.xml.get_duration.call(null,cljs.core.first.call(null,notes)) / (6)));
var G__21953 = cljs.core.rest.call(null,notes);
var G__21954 = cljs.core.conj.call(null,result,mecca.xml.parse_note.call(null,cljs.core.first.call(null,notes),time));
time = G__21952;
notes = G__21953;
result = G__21954;
continue;
}
break;
}
});
mecca.xml.parse_voice = (function mecca$xml$parse_voice(voice){
var time = (1);
var notes = cljs.core.flatten.call(null,cljs.core.map.call(null,((function (time){
return (function (p1__21955_SHARP_){
return mecca.xml.extract_voice.call(null,p1__21955_SHARP_,voice);
});})(time))
,mecca.xml.get_measures.call(null,mecca.score.zelda_parsed)));
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,notes)){
return result;
} else {
var G__21956 = (time + (mecca.xml.get_duration.call(null,cljs.core.first.call(null,notes)) / (6)));
var G__21957 = cljs.core.rest.call(null,notes);
var G__21958 = cljs.core.conj.call(null,result,mecca.xml.parse_note.call(null,cljs.core.first.call(null,notes),time));
time = G__21956;
notes = G__21957;
result = G__21958;
continue;
}
break;
}
});

//# sourceMappingURL=xml.js.map
