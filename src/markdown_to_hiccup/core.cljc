(ns markdown-to-hiccup.core
  (:require [hickory.core :refer [parse as-hiccup]]
            [markdown.core :refer #?(:clj  [md-to-html-string]
                                     :cljs [md->html])]
            [clojure.test :refer [deftest is]]))

(defn md->hiccup
  "Generates a valid hiccup data structure from a markdown string. Allows
   passing parameters to configure markdown to html translation. See
   https://github.com/pauldorman/markdown-clj for valid parameters"
  ([md-str & params]
   (let [html #?(:clj  (md-to-html-string md-str)
                 :cljs (md->html md-str))
         dom  (parse html)]
     (as-hiccup dom)))
  ([md-str]
   (md->hiccup md-str {})))

#?(:clj
  (defn file->hiccup
  "Generates a valid hiccup data structure from markdown
   contained in the .md file located at file-path"
  [file-path]
  (let [contents (slurp file-path)]
    (md->hiccup contents))))

(defn -main
  []
  (let [md "###Title *bullet"]
    (println "md->hiccup for md {" md "}. Result:")
    (println (md->hiccup md))))


