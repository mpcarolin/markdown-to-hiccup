(ns markdown-to-hiccup.decode
  #?(:clj (:import [org.apache.commons.lang3 StringEscapeUtils])
     :cljs (:require [goog.string :as gstr])))

(defn- preturn [x] (println "VALUE: " x " TYPE: " (type x)) x)

(defn decode-string
  [s]
  #?(:clj (StringEscapeUtils/unescapeHtml4 s)
     :cljs (gstr/unescapeEntities s)))

(defn encode-string
  [s]
  #?(:clj (StringEscapeUtils/escapeHtml4 s)
     :cljs (throw (.Exception "No yet implemented.")))) ;; need to find a js encoder

(comment
(defn encodable? [x]
  (let [is-encodable (satisfies? HTMLEncodable x)]
    is-encodable)))

(comment
(defn do-iseq
  [iseq coding-fn]
  (map #(if (encodable? %)
          (coding-fn %)
          (identity %))
      (seq iseq))))

(defn do-iseq
  [iseq code-fn]
  (map code-fn (seq iseq)))

(defn dispatch [x]
  "I use standard predicate functions for type checking to support
   both Clojure and ClojureScript, which do not dispatch
   on the same types exactly (e.g. java.util.String vs string)"
  (cond
    (map? x) ::map
    (vector? x) ::vector
    (string? x) ::string
    :else ::ignore))

(defmulti decode dispatch)
(defmethod decode ::string [s] (decode-string s))
(defmethod decode ::map [m] (into (sorted-map) (do-iseq m decode)))
(defmethod decode ::vector [v] (vec (do-iseq v decode)))
(defmethod decode ::ignore [x] (identity x))


;;(def hiccup (markdown-to-hiccup.core/md->hiccup "#&''Foo'***___<##>###*Bullet*<><><><><"))
;(decode hiccup)





(comment
(defprotocol HTMLEncodable
  (decode [x] "Decodes all HTML entities present in x.")
  (encode [x] "Encodes all HTML entities present in x."))

(extend-protocol HTMLEncodable
  #?(:clj java.lang.String :cljs string)
    (decode [s] (decode-string s))
    (encode [s] (encode-string s))
  #?(:clj clojure.lang.PersistentArrayMap :cljs object)
    (decode [m] (into (sorted-map) (do-iseq m decode)))
    (encode [m] (into (sorted-map) (do-iseq m encode)))
  clojure.lang.IPersistentVector
  #?(:clj clojure.lang.IPerjjsistentVector :cljs array)
    (decode [v] (vec (do-iseq v decode)))
    (encode [v] (vec (do-iseq v encode))))

(instance? clojure.lang.IPersistentVector [])

  (require '[markdown-to-hiccup.core :as m])
  (declare mock-md)
  ;;(def hiccup (m/md->hiccup mock-md))
  (def hiccup [:span {:class "foobar"} [:p {} "Hello"]])
  (decode hiccup)

  (def mock-md
    "Ambo trahit est ululare, tinguat vetitos fumant qua suos solito medios, videtur
  pollice, per! Quicquid Cupido. Non terra fruges transformia Argolico licet
  crimina laterique poscit passus. Ego una Orchamus [tantis et
  oracula](http://vestigia.org/) videat: Ossae **voce talis** vestrae et antiquas.
  ## Et tangi capillos tua mirabile coniugiique Pelates
  Aures coniunx serta hoc, et galea Nisi cremata auctor, sua illa motis cara.
  Tamen nisi sine concessa sensit Erymanthidas leni si coniunx in demissam nec
  vota paratus modo patefecit, fautrix coniuge. Rogabam curru. In fulgore est
  virgo certaminis nulla Graiosque scopulo, auxilio fore. Lucentis hebetastis
  talia et ad avem petens in sciret pigeat!
  - Pendet quem
  - Auraeque si pavet pugnat antistita
  - Quae quod
  - Haurite annos decorata fitque meae visceraque coniugis
  ## Est umeris
  *Quam alvum*, ruricolae facias trahens materna. [Fama iano
  veteris](http://moras.net/condidit) verba absit nulla clementissimus tamen et
  felle [ea haec adiectura](http://sidera.io/rurigenae) quoniam. Pariter aristis
  unda sui adstitit Lapithas.
  Est undis caelaverat aureus, Nereis Venerem sagitta miratur, saetiger
  [nisi](http://www.dumsic.com/)? Tactis quin nec fama sors cur tepescunt aqua iam
  aut senectae, pudet, iaculum fit rudibusque. Decus bene et signa! Habet iuvenes,
  vagantem in viguere victibus fronte datas; corpora canities nymphae ipsam.
  Claris diluvio utque Telamone dextra ilex liquitur, fluctus, citius haec inerti:
  obest premebat.
  Multaeque pugnabo tecta animalia totos tertia at pectora coronat inclusaque
  removete mites? Coegit canendo Cnosiaci capitis. Lignum sunt tamen; progeniem
  quoque quidem coloque et ferox pariter hederae nondum conspicit? Est suspenderat
  quicquam cum violavit, genus *hasta novat virgine* poteram **niger** iunctisque.")

)
