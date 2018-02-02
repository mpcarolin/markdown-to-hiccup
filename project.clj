(defproject markdown-to-hiccup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [markdown-clj "1.0.2"]
                 [hickory "0.7.1"]]
  :main ^:skip-aot markdown-to-hiccup.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
