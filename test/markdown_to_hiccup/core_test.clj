(ns markdown-to-hiccup.core-test
  (:require [clojure.test :refer :all]
            [markdown-to-hiccup.core :as m]))

(deftest md->hiccup
  (testing "it maps valid markdown to hiccup"
    (let [md "#Title"
          expected [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
          found (m/md->hiccup md)]
      (is (not (nil? found)))
      (is (= expected found))))
  (testing "it decodes html escape characters by default"
    (let [md "#\"><'&"
          expected [:html {} [:head {}] [:body {} [:h1 {} "\"><'&\""]]]
          found (m/md->hiccup md)]
      (is (not (nil? found)))
      (is (= expected found))))
  (testing "it does not decode the escape characters if the :encode? keyword is set true"
    (let [md "#\"><&"
          expected [:html {} [:head {}] [:body {} [:h1 {} "&quot;&gt;&lt;&amp;"]]]
          found (m/md->hiccup md {:encode? true})]
      (is (not (nil? found)))
      (is (= expected found)))))

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
             (m/hicc-in hiccup :h1)))))
  (testing "it works with multiple keys."
    (let [nested-hicc [:body {} [:div {} [:div2 {} [:h1 {} "leaf"]]]]
          expected    [:h1 {} "leaf"]
          found       (m/hicc-in nested-hicc :body :div :div2 :h1)]
      (is (= expected found)))))

(deftest quotations
  (testing "It accepts quoations."
    (let [md "* My name is \"Michael\""
          expected [:div {} [:ul {} [:li {} "My name is \"Michael\""]]]
          found (->> md (m/md->hiccup) (m/component))]
      (is (= expected found)))))

(deftest hiccup-in
  (testing "It works with sibling elements identified by index."
    (let [nested-hicc   [:body {} [:div {} [:div2 {} [:h1 {} "leaf"] [:h1 {} "find me"]]]]
          expected      [:h1 {} "find me"]
          found         (m/hiccup-in nested-hicc :body 0 :div :div2 0 :h1 1)]
        (is (= expected found))))
  (testing "It returns the first nested component of hiccup when the leading path is unspecified"
    (let [hiccup [:body {} [:div [:h1 {} "find me"]]]
          expected [:h1 {} "find me"]]
      (is (= expected
             (m/hiccup-in hiccup :h1)))))
  (testing "it works with multiple keys and without specified indices"
    (let [nested-hicc [:body {} [:div {} [:div2 {} [:h1 {} "leaf"]]]]
          expected    [:h1 {} "leaf"]
          found       (m/hiccup-in nested-hicc :body :div :div2 :h1)]
      (is (= expected found)))))

(run-tests)
