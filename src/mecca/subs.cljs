(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf :refer [reg-sub]]))

(reg-sub
 :file-upload
 (fn [db _]
   (:file-upload db)))

(reg-sub
 :song
 (fn [db _]
   (:song db)))
