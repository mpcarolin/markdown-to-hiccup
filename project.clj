(defproject markdown-to-hiccup "0.3.0"
  :description "Simple library for converting markdown into hiccup data structures for Clojure/Script"
  :url "https://github.com/mpcarolin/markdown-to-hiccup"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.3.443"]
                 [markdown-clj "1.0.2"]
                 [hickory "0.7.1"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.2"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
  :license {:name "MIT License"
            :url "https://opensource.org/licenses/MIT"}
  :jvm-opts ^:replace ["-Xmx1g" "-server" "--add-modules" "java.xml.bind"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets [:target-path "out" "release"]
  :target-path "target")
