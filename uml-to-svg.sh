#!/bin/sh

java -jar /usr/share/plantuml/plantuml.jar -svg -o "$(pwd)/docs/source/images/" "$(pwd)/examples/*"