(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db]]
   [mecca.songs :as songs]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:file-upload nil
    :song ""}))

(reg-event-db
 :file-upload
 (fn [db [_ file]]
      (assoc db 
             :file-upload file
             :song "")))

(reg-event-db
 :select-song
 (fn [db [_ song]]
   (assoc db 
          :song song
          :file-upload (get songs/songs song))))

