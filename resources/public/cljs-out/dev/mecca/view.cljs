(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [goog.crypt :as crypt]
   [mecca.songs :as songs]))

(defn file-upload []
  [:div
   [:input#input
    {:type      "file"
     :on-change 
     (fn [e]
       (let [dom    (o/get e "target")
             file   (o/getValueByKeys dom #js ["files" 0])
             reader (js/FileReader.)]
         (.readAsArrayBuffer reader file)
         (set! (.-onload reader)
               #(dispatch [:file-upload
                           (-> % .-target .-result
                               (js/Uint8Array.)
                               crypt/byteArrayToHex
                               .toUpperCase)]))))}]])

(defn song-picker []
  [:label
   "Pick song: "
   [:select
    {:value     @(subscribe [:song])
     :on-change (fn [e]
                  (.preventDefault e)
                  (dispatch [:select-song (-> e .-target .-value)]))}
    (doall
     (for [song (keys songs/songs)]
       ^{:key song}
       [:option song]))]])


(defn midi-output []
  (let [file (subscribe [:file-upload])]
    [:div
     [:h2 "Hex dump:"]
     [:textarea
      {:rows      8
       :cols      38
       :value     (apply str (interpose " " (map #(apply str %) (partition 2 @file))))
       :read-only true}]
     [:h2 "Header:"]
     [:p (apply str (take 8 @file))]
     (when (= (apply str (take 8 @file)) "4D546864")
       [:h3.green "Valid MIDI file :)"])]))

(comment
  
(map #(apply str %) (partition 2 @(subscribe [:file-upload])))
 
  )


(defn mecca []
  [:div
   [:h1 "Import MIDI"]
   [file-upload]
   [song-picker]
   [midi-output]])
