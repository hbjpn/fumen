# Unfortunately, there is no good workaround to document webpack+babel environment
# as each file needs to be considred as differnt module in jsDoc while the outcome
# of bundled js from webpack does not include the concept of "module".
# As a solution for this issue, to define the Fumen module in each file
# and remove the duplicated outcome from the md file.
npx jsdoc2md \
    ./src/renderer/default_renderer.js \
    ./src/parser/parser.js \
    > ./docsrc/docs/api_reference.md

# Remove duplication



