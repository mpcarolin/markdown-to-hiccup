(defproject markdown-to-hiccup "0.6.2"
  :description "Simple library for converting markdown into hiccup data structures for Clojure/Script"
  :url "https://github.com/mpcarolin/markdown-to-hiccup"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [org.clojure/spec.alpha "0.2.176"]
                 [org.apache.commons/commons-lang3 "3.8.1"]
                 [markdown-clj "1.0.7"]
                 [hickory "0.7.1"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.2"]
                                  [figwheel-sidecar "0.5.18"]
                                  [org.clojure/tools.trace "0.7.10"]
                                  [org.clojure/tools.nrepl "0.2.13"]]}}
  :license {:name "MIT License"
            :url "https://opensource.org/licenses/MIT"}
  ;;:jvm-opts ["--add-modules" "java.xml.bind"]
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
