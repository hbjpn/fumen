webpack
cp dist/fumen.js* ./docsrc/docs/js/
cp dist/fumen.js* ./demo/
cp -r dist/lib/*.js ./docsrc/docs/lib/

node apidocmaker.js > docsrc/docs/api_reference.md
cd docsrc
mkdocs build
cd ..

cp -r docsrc/playground ./docs/

