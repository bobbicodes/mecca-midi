(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [goog.crypt :as crypt]))

(+ 6 7 8)

(defn mecca []
  [:div
   [:h1 "Import MIDI"]
   [:p]
   [:div
    [:input#input
     {:type "file"
      :on-change
      (fn [event]
        (let [dom  (o/get event "target")
              file (o/getValueByKeys dom #js ["files" 0])
              reader (js/FileReader.)]
          (.readAsArrayBuffer reader file)
          (set! (.-onload reader)
                #(dispatch [:file-upload
                             (-> % .-target .-result
                                 (js/Uint8Array.)
                                 crypt/byteArrayToHex)]))))}]]
   (let [file (subscribe [:file-upload])]
     [:div
      [:h2 "Hex dump:"]
      [:p (str @file)]
      [:h2 "Header:"]
      [:p (apply str (take 8 @file))]
      (when (= (apply str (take 8 @file)) "4d546864")
        [:h3.green "Valid MIDI file :)"])])])
