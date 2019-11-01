// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
mecca.music.audio_context = (function mecca$music$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.music.audio_context', mecca.music.audio_context);
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.audiocontext !== 'undefined')){
} else {
mecca.music.audiocontext = reagent.core.atom.call(null,mecca.music.audio_context.call(null));
}
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var jump = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null));
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref.call(null,jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,((function (beat,notes,jump){
return (function (p1__16689_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16689_SHARP_),(cljs.core.deref.call(null,beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref.call(null,notes))))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var playing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (notes,playing_QMARK_,now){
return (function (p1__16690_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16690_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref.call(null,notes)));
var started = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var elapsed = (mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext)) - cljs.core.deref.call(null,started));
var beat_length = ((60) / cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var end_time = (cljs.core.deref.call(null,started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null));
} else {
if((cljs.core.deref.call(null,last_drawn_pos) < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));
} else {
}
}
} else {
}

return mecca.music.mario_jump.call(null);
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));

return mecca.music.mario_move.call(null);
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.call(null);
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.call(null,req.status,(200))){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_.call(null,out);
} else {
return cljs.core.async.close_BANG_.call(null,out);
}
});})(out,req))
;

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.call(null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref.call(null,mecca.music.audiocontext).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.call(null,named_url));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
} else {
cljs.core.async.close_BANG_.call(null,out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref.call(null,mecca.music.audiocontext).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__){
return (function (state_16702){
var state_val_16703 = (state_16702[(1)]);
if((state_val_16703 === (1))){
var inst_16691 = mecca.music.load_sound.call(null,named_url);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16702__$1,(2),inst_16691);
} else {
if((state_val_16703 === (2))){
var inst_16693 = (state_16702[(7)]);
var inst_16693__$1 = (state_16702[(2)]);
var state_16702__$1 = (function (){var statearr_16704 = state_16702;
(statearr_16704[(7)] = inst_16693__$1);

return statearr_16704;
})();
if(cljs.core.truth_(inst_16693__$1)){
var statearr_16705_16713 = state_16702__$1;
(statearr_16705_16713[(1)] = (3));

} else {
var statearr_16706_16714 = state_16702__$1;
(statearr_16706_16714[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (3))){
var inst_16693 = (state_16702[(7)]);
var inst_16695 = mecca.music.decode.call(null,inst_16693);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16702__$1,(6),inst_16695);
} else {
if((state_val_16703 === (4))){
var state_16702__$1 = state_16702;
var statearr_16707_16715 = state_16702__$1;
(statearr_16707_16715[(2)] = null);

(statearr_16707_16715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (5))){
var inst_16700 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16702__$1,inst_16700);
} else {
if((state_val_16703 === (6))){
var inst_16697 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16708_16716 = state_16702__$1;
(statearr_16708_16716[(2)] = inst_16697);

(statearr_16708_16716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__12885__auto__))
;
return ((function (switch__12726__auto__,c__12885__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__12727__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__12727__auto____0 = (function (){
var statearr_16709 = [null,null,null,null,null,null,null,null];
(statearr_16709[(0)] = mecca$music$get_and_decode_$_state_machine__12727__auto__);

(statearr_16709[(1)] = (1));

return statearr_16709;
});
var mecca$music$get_and_decode_$_state_machine__12727__auto____1 = (function (state_16702){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16710){if((e16710 instanceof Object)){
var ex__12730__auto__ = e16710;
var statearr_16711_16717 = state_16702;
(statearr_16711_16717[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16718 = state_16702;
state_16702 = G__16718;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__12727__auto__ = function(state_16702){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__12727__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__12727__auto____1.call(this,state_16702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__12727__auto____0;
mecca$music$get_and_decode_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__12727__auto____1;
return mecca$music$get_and_decode_$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__))
})();
var state__12887__auto__ = (function (){var statearr_16712 = f__12886__auto__.call(null);
(statearr_16712[(6)] = c__12885__auto__);

return statearr_16712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__))
);

return c__12885__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__){
return (function (state_16747){
var state_val_16748 = (state_16747[(1)]);
if((state_val_16748 === (1))){
var inst_16719 = cljs.core.PersistentHashMap.EMPTY;
var inst_16720 = cljs.core.range.call(null,(1),(19));
var inst_16721 = inst_16719;
var inst_16722 = inst_16720;
var state_16747__$1 = (function (){var statearr_16749 = state_16747;
(statearr_16749[(7)] = inst_16721);

(statearr_16749[(8)] = inst_16722);

return statearr_16749;
})();
var statearr_16750_16762 = state_16747__$1;
(statearr_16750_16762[(2)] = null);

(statearr_16750_16762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16748 === (2))){
var inst_16722 = (state_16747[(8)]);
var inst_16724 = cljs.core.first.call(null,inst_16722);
var inst_16725 = (inst_16724 == null);
var inst_16726 = cljs.core.not.call(null,inst_16725);
var state_16747__$1 = state_16747;
if(inst_16726){
var statearr_16751_16763 = state_16747__$1;
(statearr_16751_16763[(1)] = (4));

} else {
var statearr_16752_16764 = state_16747__$1;
(statearr_16752_16764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16748 === (3))){
var inst_16745 = (state_16747[(2)]);
var state_16747__$1 = state_16747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16747__$1,inst_16745);
} else {
if((state_val_16748 === (4))){
var inst_16728 = (state_16747[(9)]);
var inst_16722 = (state_16747[(8)]);
var inst_16728__$1 = cljs.core.first.call(null,inst_16722);
var inst_16729 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_16730 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16728__$1),".mp3"].join('');
var inst_16731 = [inst_16730,inst_16728__$1];
var inst_16732 = cljs.core.PersistentHashMap.fromArrays(inst_16729,inst_16731);
var inst_16733 = mecca.music.get_and_decode.call(null,inst_16732);
var state_16747__$1 = (function (){var statearr_16753 = state_16747;
(statearr_16753[(9)] = inst_16728__$1);

return statearr_16753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16747__$1,(7),inst_16733);
} else {
if((state_val_16748 === (5))){
var inst_16721 = (state_16747[(7)]);
var state_16747__$1 = state_16747;
var statearr_16754_16765 = state_16747__$1;
(statearr_16754_16765[(2)] = inst_16721);

(statearr_16754_16765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16748 === (6))){
var inst_16743 = (state_16747[(2)]);
var state_16747__$1 = state_16747;
var statearr_16755_16766 = state_16747__$1;
(statearr_16755_16766[(2)] = inst_16743);

(statearr_16755_16766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16748 === (7))){
var inst_16721 = (state_16747[(7)]);
var inst_16728 = (state_16747[(9)]);
var inst_16722 = (state_16747[(8)]);
var inst_16735 = (state_16747[(2)]);
var inst_16736 = cljs.core.prn.call(null,inst_16728);
var inst_16737 = cljs.core.prn.call(null,inst_16735);
var inst_16738 = cljs.core.assoc.call(null,inst_16721,inst_16728,inst_16735);
var inst_16739 = cljs.core.rest.call(null,inst_16722);
var inst_16721__$1 = inst_16738;
var inst_16722__$1 = inst_16739;
var state_16747__$1 = (function (){var statearr_16756 = state_16747;
(statearr_16756[(10)] = inst_16737);

(statearr_16756[(7)] = inst_16721__$1);

(statearr_16756[(11)] = inst_16736);

(statearr_16756[(8)] = inst_16722__$1);

return statearr_16756;
})();
var statearr_16757_16767 = state_16747__$1;
(statearr_16757_16767[(2)] = null);

(statearr_16757_16767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12885__auto__))
;
return ((function (switch__12726__auto__,c__12885__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__12727__auto__ = null;
var mecca$music$load_samples_$_state_machine__12727__auto____0 = (function (){
var statearr_16758 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16758[(0)] = mecca$music$load_samples_$_state_machine__12727__auto__);

(statearr_16758[(1)] = (1));

return statearr_16758;
});
var mecca$music$load_samples_$_state_machine__12727__auto____1 = (function (state_16747){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16759){if((e16759 instanceof Object)){
var ex__12730__auto__ = e16759;
var statearr_16760_16768 = state_16747;
(statearr_16760_16768[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16769 = state_16747;
state_16747 = G__16769;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__12727__auto__ = function(state_16747){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__12727__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__12727__auto____1.call(this,state_16747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__12727__auto____0;
mecca$music$load_samples_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__12727__auto____1;
return mecca$music$load_samples_$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__))
})();
var state__12887__auto__ = (function (){var statearr_16761 = f__12886__auto__.call(null);
(statearr_16761[(6)] = c__12885__auto__);

return statearr_16761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__))
);

return c__12885__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__){
return (function (state_16776){
var state_val_16777 = (state_16776[(1)]);
if((state_val_16777 === (1))){
var inst_16770 = mecca.music.load_samples.call(null);
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16776__$1,(2),inst_16770);
} else {
if((state_val_16777 === (2))){
var inst_16772 = (state_16776[(2)]);
var inst_16773 = mecca.music.samples = inst_16772;
var inst_16774 = cljs.core.prn.call(null,"Samples loaded");
var state_16776__$1 = (function (){var statearr_16778 = state_16776;
(statearr_16778[(7)] = inst_16773);

return statearr_16778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16776__$1,inst_16774);
} else {
return null;
}
}
});})(c__12885__auto__))
;
return ((function (switch__12726__auto__,c__12885__auto__){
return (function() {
var mecca$music$state_machine__12727__auto__ = null;
var mecca$music$state_machine__12727__auto____0 = (function (){
var statearr_16779 = [null,null,null,null,null,null,null,null];
(statearr_16779[(0)] = mecca$music$state_machine__12727__auto__);

(statearr_16779[(1)] = (1));

return statearr_16779;
});
var mecca$music$state_machine__12727__auto____1 = (function (state_16776){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16780){if((e16780 instanceof Object)){
var ex__12730__auto__ = e16780;
var statearr_16781_16783 = state_16776;
(statearr_16781_16783[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16784 = state_16776;
state_16776 = G__16784;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
mecca$music$state_machine__12727__auto__ = function(state_16776){
switch(arguments.length){
case 0:
return mecca$music$state_machine__12727__auto____0.call(this);
case 1:
return mecca$music$state_machine__12727__auto____1.call(this,state_16776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__12727__auto____0;
mecca$music$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__12727__auto____1;
return mecca$music$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__))
})();
var state__12887__auto__ = (function (){var statearr_16782 = f__12886__auto__.call(null);
(statearr_16782[(6)] = c__12885__auto__);

return statearr_16782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__))
);

return c__12885__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.call(null,mecca.music.add_semitone,cljs.core.repeat.call(null,semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.call(null,mecca.music.sub_semitone,cljs.core.repeat.call(null,semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate.call(null,(midi_num - (66)));
} else {
return mecca.music.dec_rate.call(null,((68) - midi_num));
}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
var compressor = cljs.core.deref.call(null,context).createDynamicsCompressor();
var analyser = cljs.core.deref.call(null,context).createAnalyser();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),cljs.core.deref.call(null,context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),time);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.call(null,note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__16785_SHARP_){
return (beats + p1__16785_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.call(null,note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__16786_SHARP_){
return (p1__16786_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var started = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.call(null,((function (notes,started,tempo){
return (function (p1__16787_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16787_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16787_SHARP_) <= to)));
});})(notes,started,tempo))
,cljs.core.deref.call(null,notes));
var advanced = cljs.core.map.call(null,((function (notes,started,tempo,section){
return (function (p1__16788_SHARP_){
return mecca.music.advance_note.call(null,from,p1__16788_SHARP_);
});})(notes,started,tempo,section))
,section);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,started,tempo,section,advanced){
return (function mecca$music$queue_section_$_iter__16789(s__16790){
return (new cljs.core.LazySeq(null,((function (notes,started,tempo,section,advanced){
return (function (){
var s__16790__$1 = s__16790;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16790__$1);
if(temp__5457__auto__){
var s__16790__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16790__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16790__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16792 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16791 = (0);
while(true){
if((i__16791 < size__4323__auto__)){
var map__16793 = cljs.core._nth.call(null,c__4322__auto__,i__16791);
var map__16793__$1 = ((((!((map__16793 == null)))?(((((map__16793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16793):map__16793);
var time = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16792,mecca.music.play_at.call(null,instrument,pitch,(cljs.core.deref.call(null,started) + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__16797 = (i__16791 + (1));
i__16791 = G__16797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16792),mecca$music$queue_section_$_iter__16789.call(null,cljs.core.chunk_rest.call(null,s__16790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16792),null);
}
} else {
var map__16795 = cljs.core.first.call(null,s__16790__$2);
var map__16795__$1 = ((((!((map__16795 == null)))?(((((map__16795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16795):map__16795);
var time = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(cljs.core.deref.call(null,started) + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$queue_section_$_iter__16789.call(null,cljs.core.rest.call(null,s__16790__$2)));
}
} else {
return null;
}
break;
}
});})(notes,started,tempo,section,advanced))
,null,null));
});})(notes,started,tempo,section,advanced))
;
return iter__4324__auto__.call(null,section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.call(null,((function (notes,now,tempo){
return (function (p1__16798_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16798_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16798_SHARP_) <= to)));
});})(notes,now,tempo))
,cljs.core.deref.call(null,notes));
var advanced = cljs.core.map.call(null,((function (notes,now,tempo,section){
return (function (p1__16799_SHARP_){
return mecca.music.advance_note.call(null,from,p1__16799_SHARP_);
});})(notes,now,tempo,section))
,section);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo,section,advanced){
return (function mecca$music$play_section_$_iter__16800(s__16801){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo,section,advanced){
return (function (){
var s__16801__$1 = s__16801;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16801__$1);
if(temp__5457__auto__){
var s__16801__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16801__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16801__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16803 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16802 = (0);
while(true){
if((i__16802 < size__4323__auto__)){
var map__16804 = cljs.core._nth.call(null,c__4322__auto__,i__16802);
var map__16804__$1 = ((((!((map__16804 == null)))?(((((map__16804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16804):map__16804);
var time = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16803,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__16808 = (i__16802 + (1));
i__16802 = G__16808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16803),mecca$music$play_section_$_iter__16800.call(null,cljs.core.chunk_rest.call(null,s__16801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16803),null);
}
} else {
var map__16806 = cljs.core.first.call(null,s__16801__$2);
var map__16806__$1 = ((((!((map__16806 == null)))?(((((map__16806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16806):map__16806);
var time = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_section_$_iter__16800.call(null,cljs.core.rest.call(null,s__16801__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo,section,advanced))
,null,null));
});})(notes,now,tempo,section,advanced))
;
return iter__4324__auto__.call(null,advanced);
})());
});
mecca.music.play_note = (function mecca$music$play_note(){
var editor_start = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var play_pos = (((cljs.core.deref.call(null,editor_start) < (4)))?cljs.core.deref.call(null,editor_start):((4) + cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null)))));
return mecca.music.play_section.call(null,(play_pos - (1)),(play_pos - 0.5));
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var beat_length = ((60) / cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var play_pos = (((cljs.core.deref.call(null,editor_start) < (4)))?cljs.core.deref.call(null,editor_start):((4) + cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null)))));
return mecca.music.play_section.call(null,(play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var editor_start = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var play_pos = cljs.core.deref.call(null,editor_start);
var length = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (notes,editor_start,play_pos){
return (function (p1__16809_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16809_SHARP_);
});})(notes,editor_start,play_pos))
,cljs.core.deref.call(null,notes)));
return mecca.music.play_section.call(null,(play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__16810(s__16811){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__16811__$1 = s__16811;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16811__$1);
if(temp__5457__auto__){
var s__16811__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16811__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16811__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16813 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16812 = (0);
while(true){
if((i__16812 < size__4323__auto__)){
var map__16814 = cljs.core._nth.call(null,c__4322__auto__,i__16812);
var map__16814__$1 = ((((!((map__16814 == null)))?(((((map__16814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16814):map__16814);
var time = cljs.core.get.call(null,map__16814__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16814__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16814__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16813,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__16818 = (i__16812 + (1));
i__16812 = G__16818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16813),mecca$music$play_song_BANG__$_iter__16810.call(null,cljs.core.chunk_rest.call(null,s__16811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16813),null);
}
} else {
var map__16816 = cljs.core.first.call(null,s__16811__$2);
var map__16816__$1 = ((((!((map__16816 == null)))?(((((map__16816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16816):map__16816);
var time = cljs.core.get.call(null,map__16816__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16816__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16816__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_song_BANG__$_iter__16810.call(null,cljs.core.rest.call(null,s__16811__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo))
,null,null));
});})(notes,now,tempo))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=music.js.map
