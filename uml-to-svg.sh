#!/bin/sh

PLANTUML="$(echo ~)/plantuml/plantuml.jar"
PLANTUML_SVG_DIAGRAMS_DIR="$(pwd)/docs/source/_static/images"
PLANTUML_DIAGRAM_FILES="$(pwd)/examples"
java -jar $PLANTUML -svg -o $PLANTUML_SVG_DIAGRAMS_DIR\
 $PLANTUML_DIAGRAM_FILES || exit 1
 
cd "$PLANTUML_SVG_DIAGRAMS_DIR" || exit 1
TIDY_SETTINGS="\
 -xml\
 -modify\
 -utf8\
 --hide-comments true\
 --output-xml true\
 --indent true\
 --indent-attributes true\
 --indent-spaces 2\
 --vertical-space true\
 --wrap 68\
 --wrap-attributes true\
 --quiet true"

SVG_FILES="*.svg"

tidy $TIDY_SETTINGS $SVG_FILES

