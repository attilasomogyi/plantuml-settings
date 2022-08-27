#!/bin/sh

java -jar ~/plantuml/plantuml.jar -svg -o "$(pwd)/docs/source/images/" "$(pwd)/examples/*"