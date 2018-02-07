(ns markdown-to-hiccup.core
  (:require [hickory.core :refer [parse as-hiccup]]
            [markdown.core :refer [md-to-html-string]]
            [clojure.test :refer [deftest is]])
  (:gen-class))

(defn md->hiccup
  "Generates a valid hiccup data structure from a markdown string. Allows
   passing parameters to configure markdown to html translation. See
   https://github.com/pauldorman/markdown-clj for valid parameters"
  ([md-str & params]
   (let [html (md-to-html-string md-str)
         dom  (parse html)]
     (as-hiccup dom)))
  ([md-str]
   (md->hiccup md-str {})))

(deftest test-md->hiccup
  (let [md "#Title"
        expected '([:html {} [:head {}] [:body {} [:h1 {} "Title"]]])
        found (md->hiccup md)]
    (is (not (nil? found)))
    (is (= expected found))))

(defn file->hiccup
  "Generates a valid hiccup data structure from markdown
   contained in the .md file located at file-path"
  [file-path]
  (let [contents (slurp file-path)]
    (md->hiccup contents)))

