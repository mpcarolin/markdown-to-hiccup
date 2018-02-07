(defproject markdown-to-hiccup "0.1.0-SNAPSHOT"
  :description "Simple library for converting markdown into hiccup data structures for Clojure and ClojureScript"
  :url "https://github.com/mpcarolin/markdown-to-hiccup"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [markdown-clj "1.0.2"]
                 [hickory "0.7.1"]]
  :main ^:skip-aot markdown-to-hiccup.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
