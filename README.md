[![Clojars Project](https://img.shields.io/clojars/v/markdown-to-hiccup.svg)](https://clojars.org/markdown-to-hiccup)

# markdown-to-hiccup

Simple library for converting markdown strings or files into Clojure/Script compatible hiccup data structures

## Installation
### Leiningen/Boot
`[markdown-to-hiccup "0.2.5"]`

### Clojure CLI/deps.edn
`markdown-to-hiccup {:mvn/version "0.2.5"}`

### Gradle
`compile 'markdown-to-hiccup:markdown-to-hiccup:0.2.5'`

## Usage
Use md->hiccup (available in both Clojure and ClojureScript) to convert a markdown string to hiccup:
```
(ns example.core
	(:require [markdown-to-hiccup.core :as m]))

(m/md->hiccup "#Title")

=> [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
```

If you just want the hiccup without the html, head, and body tags, pass it through the component function:
```
(->> "#Title"
     (m/md->hiccup)
     (m/component))
     
=> [:h1 {} "Title"]
```

If you want some arbitrary tag, use hicc-in:
```
(hicc-in hiccup :body)   
   
=> [:body {} [:h1 {} "Title"]]
```

Finally, for just Clojure, there is also a function for automatically reading in a markdown file from disk and outputting hiccup:
```
(m/file->hiccup file-path-to-markdown-file)

=> [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
```

## License

Copyright © 2018 Michael Carolin

Distributed under the MIT License
