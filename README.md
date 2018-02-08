[![Clojars Project](https://img.shields.io/clojars/v/markdown-to-hiccup.svg)](https://clojars.org/markdown-to-hiccup)

# markdown-to-hiccup

Simple library for converting markdown strings or files into ClojureScript compatible hiccup data structures

## Installation
### Leiningen/Boot
[markdown-to-hiccup "0.1.0-SNAPSHOT"]

### Clojure CLI/deps.edn
markdown-to-hiccup {:mvn/version "0.1.0-SNAPSHOT"}

### Gradle
compile 'markdown-to-hiccup:markdown-to-hiccup:0.1.0-SNAPSHOT'

## Usage


## Examples
(ns example.core
	(:require [mardown-to-hiccup.core :as m]))

(m/md->hiccup "#Title")

Returns: ([:html {} [:head {}] [:body {} [:h1 {} "Title"]]])

...

### Bugs

...

### Any Other Sections
### That You Think
### Might be Useful

## License

Copyright © 2018 Michael Carolin

Distributed under the MIT License
