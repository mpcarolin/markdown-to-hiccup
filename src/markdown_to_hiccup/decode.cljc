(ns markdown-to-hiccup.decode
  #?(:clj (:import [org.apache.commons.lang3 StringEscapeUtils])
     :cljs (:require [goog.string :as gstr])))

(defn decode-string
  ([s]
  #?(:clj (StringEscapeUtils/unescapeHtml4 s)
     :cljs (gstr/unescapeEntities s)))
  ([s transform-fn]
   (let [decoded (decode-string s)]
     (transform-fn decoded))))

(defn encode-string
  [s]
  #?(:clj (StringEscapeUtils/escapeHtml4 s)
     :cljs (throw (.Exception "No yet implemented.")))) ;; need to find a js encoder

(declare decode)
(defn decode-iseq
  ([iseq] (map decode (seq iseq)))
  ([iseq transform-str-fn] (map #(decode % transform-str-fn)
                            (seq iseq))))

(defn dispatch [x & rest]
  "I use standard predicate functions for type checking to support
   both Clojure and ClojureScript, which do not dispatch
   on the same types exactly (e.g. java.util.String vs string). Preserves
   polymorphism by also allowing dispatch on a :decode-type key."
  (cond
    (map? x) (or (:decode-type x)
                 ::map)
    (vector? x) ::vector
    (string? x) ::string
    :else ::pass))

(defmulti decode dispatch)
(defmethod decode ::string
  ([s] (decode-string s))
  ([s transform] (decode-string s transform)))
(defmethod decode ::map
  ([m] (into (sorted-map) (decode-iseq m)))
  ([m transform] (into (sorted-map) (decode-iseq m transform))))
(defmethod decode ::vector
  ([v] (vec (decode-iseq v)))
  ([v transform] (vec (decode-iseq v transform))))
(defmethod decode ::pass
  ([x] (identity x))
  ([x f] (identity x)))
