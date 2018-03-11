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

(defn hicc-in
  "NOTE: please use hiccup-in for better access to nested hiccup.
  Accepts a hiccup data structure and a keyword representing
  an html element tag (e.g. :body) and returns the first nested
  hiccup vector identified by the keyword."
  [hiccup & kws]
  (let [kw   (first kws)
        root (first hiccup)]
    (cond
      (nil? kw)              hiccup
      (empty? hiccup)        []
      (map? root)            (recur (rest hiccup) kws)
      (vector? root)         (let [branch-result (apply hicc-in root kws)]
                               (if (empty? branch-result)
                                 (recur (rest hiccup) kws)
                                 branch-result))
      (= root kw)            (recur hiccup (rest kws))
      :else                  (recur (rest hiccup) kws))))

(defn- keywords?
  [& args]
  (every? keyword? args))

(defn- dec-front
  "Accepts a list of [keyword count] pairs, and subtracts the count
   of the first pair. If that count becomes negative, dec-front returns
   the rest of the list. Otherwise, it returns the list with the new 
   count value for the first pair."
  [kw-pairs]
  (let [[kw count] (first kw-pairs)
        new-count  (dec count)
        new-pair   [kw new-count]]
    (if (neg? new-count)
      (rest kw-pairs)
      (cons new-pair (rest kw-pairs)))))

(defn- num-partition
  "Accepts a list of keywords and numbers. Any place in which 
  a number does not separate keywords, a zero will be inserted.
  Returns the arg list as a sequence of keyword -> number pairs
  nested as lists."
  [args]
  (loop [arglist    args
         ret-vec   []]
    (let [curr-arg (first arglist)
          prev-arg (peek ret-vec)]
      (cond
        ;; base case
        (nil? curr-arg)            (if (keyword? prev-arg)
                                     (partition 2 (conj ret-vec 0))
                                     (partition 2 ret-vec))
        ;; recursive cases
        (keywords? curr-arg
                   prev-arg)       (recur (rest arglist)
                                          (conj ret-vec 0 curr-arg))

        :else                      (recur (rest arglist)
                                          (conj ret-vec curr-arg))))))

(defn- get-nested-hiccup
  "Recursive helper function for hiccup-in."
  [hiccup kw-pairs]
  (let [[kw nth-kw]   (first kw-pairs)
        front         (first hiccup)]
    (cond
      (empty? hiccup)        []
      (nil? kw)              hiccup
      (map? front)           (recur (rest hiccup) kw-pairs)
      (vector? front)        (let [branch-result (hicc-in-helper front kw-pairs)]
                               (if (empty? branch-result)
                                 (recur (rest hiccup) kw-pairs)
                                 branch-result))
      (= front kw)           (let [new-pairs (dec-front kw-pairs)]
                               (if (empty? new-pairs)
                                 hiccup
                                 (recur (rest hiccup) (dec-front kw-pairs))))
      :else                  (recur (rest hiccup) kw-pairs))))

(defn hiccup-in
  "Accepts a hiccup data structure and any series of args in keyword, index order. 
   Each keyword represents a hiccup element, and the paired index is which element
   at that level hicc-in will look in. If no number proceeds a keyword, hiccup-in 
   will find the first element with that keyword. Returns the nested hiccup vector 
   identified by the keywords. Example: (hicc-in hiccup :html :body :div 0 :h1 2 :p)"
  [hiccup & kw-pairs]
   (let [pathway (num-partition kw-pairs)]
     (get-nested-hiccup hiccup pathway)))

(defn component
  "Accepts hiccup and returns the same hiccup only
   without the :html, :head, and :body elements. Useful
   if you want to nest your markdown hiccup in existing
   hiccup data structures."
  [hiccup]
  (let [body (hiccup-in hiccup :body)]
    (vec (cons :div (rest body)))))

#?(:clj
  (defn file->hiccup
  "Generates a valid hiccup data structure from markdown
   contained in the .md file located at file-path"
  [file-path]
  (let [contents (slurp file-path)]
    (md->hiccup contents))))
