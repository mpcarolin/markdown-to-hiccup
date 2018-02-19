(ns markdown-to-hiccup.test
  (:require [clojure.test :refer :all]
            [markdown-to-hiccup.core :as m]))

(deftest test-md->hiccup
  (let [md "#Title"
        expected [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
        found (m/md->hiccup md)]
    (is (not (nil? found)))
    (is (= expected found))))

(deftest test-file->hiccup
  (let [path "./resources/sample.md"
        expected [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
        found (m/file->hiccup path)]
    (is (not (nil? found)))
    (is (= expected found))))

(deftest test-component
  (testing "It returns the nested h1 component."
    (let [md "#Title"
          expected [:h1 {} "Title"]
          hiccup (m/md->hiccup md)
          component (m/component hiccup)]
      (is (not (nil? component)))
      (is (= expected component))))
  (testing "It works with modified hiccup."
    (let [md "#Title"
          expected [:h1 {} "Title"]
          hiccup (m/md->hiccup md)
          modified (cons :div.anything (rest hiccup))
          component (m/component modified)]
      (is (not (nil? component)))
      (is (= expected component)))))
