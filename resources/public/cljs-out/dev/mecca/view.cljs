(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [goog.crypt :as crypt]
   [mecca.midi :as midi]
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

(defn hex-bytes
  ([file n] (hex-bytes file n (inc n)))
  ([file from to]
   (map #(apply str %)
        (partition 2 (take (- (* 2 to) (* 2 from))
                           (drop (* 2 from) file))))))

(defn header-table [file offsets]
  [:div
   [:table.tg
    [:tbody
     [:tr [:th.tg-0pky "Bytes"] [:th.tg-0lax "Hex"] [:th.tg-0lax "Notes"]]
     (doall (for [[[from to] notes] offsets]
              ^{:key from}
              [:tr
               [:td.tg-hmp3 (str "$" (.toString from 16) " - $" (.toString to 16))]
               [:td.tg-hmp3 (apply str (interpose " " (hex-bytes file from to)))]
               [:td.tg-hmp3 (str (->>
                                  (hex-bytes file from to)
                                  notes))]]))]]])

(defn midi-output []
  (let [file (subscribe [:file-upload])]
    [:div
     [:textarea
      {:rows      8
       :cols      38
       :value     (apply str (interpose " " (map #(apply str %) (partition 2 @file))))
       :read-only true}]
     (when (= (apply str (take 8 @file)) "4D546864")
       [:div
        [:p.green "This is a MIDI file :)"]
        [header-table @file midi/midi-offsets]])]))

(comment
  
(map #(apply str %) (partition 2 @(subscribe [:file-upload])))
 
  )


(defn mecca []
  [:div
   [:h1 "Import MIDI"]
   [file-upload]
   [song-picker]
   [midi-output]])
