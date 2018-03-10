(ns markdown-to-hiccup.core-test
  (:require [clojure.test :refer :all]
            [markdown-to-hiccup.core :as m]))

(deftest md->hiccup
  (let [md "#Title"
        expected [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
        found (m/md->hiccup md)]
    (is (not (nil? found)))
    (is (= expected found))))

(deftest file->hiccup
  (let [path "./resources/sample.md"
        expected [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
        found (m/file->hiccup path)]
    (is (not (nil? found)))
    (is (= expected found))))

(deftest component
  (testing "It returns the nested h1 component."
    (let [md "#Title"
          expected [:div {} [:h1 {} "Title"]]
          hiccup (m/md->hiccup md)
          component (m/component hiccup)]
      (is (not (nil? component)))
      (is (= expected component))))
  (testing "It works with >1 markdown element"
    (let [md "#Title\n#SecondTitle"
          expected [:div {} [:h1 {} "Title"] [:h1 {} "SecondTitle"]]
          hiccup (m/md->hiccup md)]
      (is (= expected
             (m/component hiccup)))))
  (testing "It works with modified hiccup."
    (let [md "#Title"
          expected [:div {} [:h1 {} "Title"]]
          hiccup (m/md->hiccup md)
          modified (cons :div.anything (rest hiccup))
          component (m/component modified)]
      (is (not (nil? component)))
      (is (= expected component)))))

(deftest hicc-in
  (testing "It returns the first nested component of hiccup."
    (let [hiccup [:body {} [:div [:h1 {} "find me"]]]
          expected [:h1 {} "find me"]]
      (is (= expected
             (m/hicc-in hiccup :h1))))))


