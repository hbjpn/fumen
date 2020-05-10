webpack
cp dist/fumen.js* ./docsrc/docs/js/
cp dist/fumen.js* ./demo/

node apidocmaker.js > docsrc/docs/api_reference.md
cd docsrc
mkdocs build
cd ..
