(ns markdown-to-hiccup.test
  (:require [clojure.test :refer :all]
            [markdown-to-hiccup.core :as m]))

(deftest test-md->hiccup
  (let [md "#Title"
        expected '([:html {} [:head {}] [:body {} [:h1 {} "Title"]]])
        found (m/md->hiccup md)]
    (println (System/getProperty "user.dir"))
    (is (not (nil? found)))
    (is (= expected found))))

(deftest test-file->hiccup
  (let [path "./resources/sample.md"
        expected '([:html {} [:head {}] [:body {} [:h1 {} "Title"]]])
        found (m/file->hiccup path)]
    (is (not (nil? found)))
    (is (= expected found))))
