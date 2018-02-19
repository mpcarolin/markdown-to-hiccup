(ns markdown-to-hiccup.core
  (:require [hickory.core :refer [parse as-hiccup]]
            [markdown.core :refer #?(:clj  [md-to-html-string]
                                     :cljs [md->html])]))

(defn md->hiccup
  "Generates a valid hiccup data structure from a markdown string. Allows
   passing parameters to configure markdown to html translation. See
   https://github.com/pauldorman/markdown-clj for valid parameters"
  ([md-str & params]
   (let [html #?(:clj  (md-to-html-string md-str)
                 :cljs (md->html md-str))
         dom  (parse html)]
     (first (as-hiccup dom))))
  ([md-str]
   (md->hiccup md-str {})))

(defn- el-eq
  [hiccup keyword]
  (if (sequential? hiccup)
    (= (first hiccup) keyword)
    (= hiccup keyword)))

(defn hicc-in
  "Accepts a hiccup data structure and a keyword representing
  an html element tag (e.g. :body) and returns the nested
  hiccup vector identified by the keyword."
  [hiccup keyword]
  (loop [curr-hiccup hiccup]
    (let [root (first curr-hiccup)]
      (cond
        (empty? curr-hiccup) []
        (el-eq root keyword) curr-hiccup
        :else                (recur (rest curr-hiccup))))))

(defn component
  "Accepts hiccup and returns the same hiccup only
   without the :html, :head, and :body elements. Useful
   if you want to nest your markdown hiccup in existing
   hiccup data structures."
  [hiccup]
  (let [body (first (hicc-in hiccup :body))]
    (body 2)))

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


