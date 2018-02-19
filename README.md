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

=> ([:html {} [:head {}] [:body {} [:h1 {} "Title"]]])
```

For just Clojure, there is also a function for automatically reading in a markdown file and outputting hiccup:
```
(m/file->hiccup file-path-to-markdown-file)
```

## License

Copyright © 2018 Michael Carolin

Distributed under the MIT License
