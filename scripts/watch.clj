(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'markdown-to-hiccup.core
   :output-to "out/markdown_to_hiccup.js"
   :output-dir "out"})
