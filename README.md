[![Clojars Project](https://img.shields.io/clojars/v/markdown-to-hiccup.svg)](https://clojars.org/markdown-to-hiccup)

# markdown-to-hiccup

Simple library for converting markdown strings or files into Clojure/Script compatible hiccup data structures

## Installation
### Leiningen/Boot
`[markdown-to-hiccup "0.6.2"]`

### Clojure CLI/deps.edn
`markdown-to-hiccup {:mvn/version "0.6.2"}`

### Gradle
`compile 'markdown-to-hiccup:markdown-to-hiccup:0.6.2'`

## Usage
### Clojure and ClojureScript
Use md->hiccup to convert a markdown string to hiccup:
```clojure
(ns example.core
	(:require [markdown-to-hiccup.core :as m]))

(m/md->hiccup "#Title")

=> [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
```

If you just want the hiccup without the html, head, and body tags, pass it through the component function:
```clojure
(->> "#Title\n* Bullet"
     (m/md->hiccup)
     (m/component))

=> [:div {} [:h1 {} "Title"] [:ul {} [:li {} "Bullet"]]]

```

If you want a specific nested hiccup vector, use hiccup-in. It lets you specify the keywords
(and indices for sibling hiccup elements) to extract nested hiccup:
```clojure
(let [hiccup (m/md->hiccup "#Title\n#SecondTitle")]
	(hiccup-in hiccup :html :body :h1 0)) ;; note the integer paired with :h1
=> [:h1 {} "Title"]

vs.

(let [hiccup (m/md->hiccup "#Title\n#SecondTitle")]
	(m/hiccup-in hiccup :html :body :h1 1)) ;; note the integer paired with :h1
=> [:h1 {} "SecondTitle"]
```

If you need to escape html characters (& " > <), pass a map to md->hiccup with the :encode? keyword:

```clojure
(-> "Ben & Jerry's"
     (m/md->hiccup {:encode? true})
     (m/component))

=> [:div {} [:p {} "Ben &amp; Jerry's"]]
```

### Clojure-only
Finally, for just Clojure, there is also a function for automatically reading in a markdown file from disk and outputting hiccup:
```clojure
(m/file->hiccup file-path-to-markdown-file)

=> [:html {} [:head {}] [:body {} [:h1 {} "Title"]]]
```

## License

Copyright © 2019 Michael Carolin

Distributed under the MIT License
