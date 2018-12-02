(defproject markdown-to-hiccup "0.5.2"
  :description "Simple library for converting markdown into hiccup data structures for Clojure/Script"
  :url "https://github.com/mpcarolin/markdown-to-hiccup"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [markdown-clj "1.0.2"]
                 [org.apache.commons/commons-lang3 "3.8.1"]
                 [hickory "0.7.1"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.10"]
                                  [proto-repl "0.3.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :license {:name "MIT License"
            :url "https://opensource.org/licenses/MIT"}
  :jvm-opts ^:replace ["-Xmx1g" "-server" "--add-modules" "java.xml.bind"]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :id "dev"
                        :compiler {:main markdown-to-hiccup.core.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/out.js"
                                   :output-dir "resources/public/out"}}]}
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets [:target-path "out" "release"]
  :target-path "target")
