(ns ^:figwheel-hooks mecca.midi
  (:require
   [re-frame.core :refer [subscribe]]
   [goog.crypt :as crypt]
   [clojure.string :as s]))

(defn hex->ascii [s]
  (->> s
       (apply str)
       crypt/hexToByteArray
       crypt/byteArrayToString))

(defn hex->dec [s]
  (js/parseInt (str "0x" (apply str s))))

(defn midi-tracks [file]
  (rest (s/split file #"4D54726B")))

(comment
  
(hex->ascii "4D54726B")
 (hex->dec "00001e44")
 
(count (midi-tracks @(subscribe [:file-upload])))
)


(def midi-offsets ; each function will output a string when passed the bytes at offsets
  [[[0x00 0x04]
    #(str "Hex to ASCII: " "\"" (hex->ascii %) "\"")]
   [[0x04 0x08]
    #(str "Header length: "
          (hex->dec %))]
   [[0x08 0x0a]
    #(let [format (hex->dec %)]
       (str "Format " format " - "
            (case format
              0 "Single track"
              1 "Multiple track"
              2 "Multiple song")))]
   [[0x0a 0x0c]
    #(str (hex->dec %)
          " track" (when-not (= 1 (hex->dec %)) "s"))]
   [[0x0c 0x0e]
    #(str (hex->dec %)
          " ticks per beat")]])