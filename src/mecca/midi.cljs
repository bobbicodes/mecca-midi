(ns ^:figwheel-hooks mecca.midi
  (:require
   [goog.crypt :as crypt]))

(defn hex->ascii [s]
  (->> s
       (apply str)
       crypt/hexToByteArray
       crypt/byteArrayToString))

(def midi-offsets ; each function will output a string when passed the bytes at offsets
  [[[0x00 0x04]
    #(str "Hex to ASCII: " "\"" (hex->ascii %) "\"")]
   [[0x04 0x08]
    #(str "Header length: "
          (js/parseInt (str "0x" (apply str %))))]
   [[0x08 0x0a]
    #(let [format (js/parseInt (str "0x" (apply str %)))]
       (str "Format " format " - "
            (case format
              0 "Single track"
              1 "Multiple track"
              2 "Multiple song")))]
   [[0x0a 0x0c]
    #(str (js/parseInt (str "0x" (apply str %))) 
          " track" (when-not (= 1 (js/parseInt (str "0x" (apply str %)))) "s"))]
   [[0x0c 0x0e]
    #(str (js/parseInt (str "0x" (apply str %)))
          " ticks per beat")]])