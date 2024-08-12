# Cheat Sheet

## Musical Elements
| Markdown         | Description  |
| ------------- | -----|
| Cm7-5#11   | Chord. See [Chords](chord.md) for detail. |
| C/D        | Chord on bass |
| /D           | Only on bass |
| C:4.          | Chord with duration. Example with dotted quarter. See [Duration Indicator](duration-indicator.md) for detail. |
| <:16 C:2          | Syncopated chord. See [Duration Indicator](duration-indicator.md) for detail. |
| r:4.          | Rest with duration. |
| -2-          | Long rest |
| \|      | Single line boundary |
| \|\|    | Double line boundary |
| \|\|.   | Double line boundary with thicker 2nd line |
| \|\|:   | Start of repeat |
| :\|\|   | End of repeat |
| :\|\|x3   | End of repeat with repeat numbers |
| :\|\|xX   | End of repeat with arbitral repeat numbers |
| :\|\|:  | End and start of repeat |
| ./\|/.  | Boundary with overlapping Simile mark |
| >       | Right align(speicfy it at the head of row) |
| <       | Left align(specify it at the head of row) |
| <Coda\>      | Coda sign. Integer number can be specified after Coda. |
| <to Coda\>   | "To Coda" sign.  Integer number can be specified after Coda. |
| <S\>         | Segno sign. Integer number can be specified after S. |
| <D.S.\>      | Dal segno. Integer number can be specified after D.S. |
| <D.S. al Coda\>      | Dal segno al Coda. al Fine can be also specified. |
| <D.C.\>      | Da Capo. |
| <D.S. al Coda\>      | Da Capo al Coda. al Fine can be also specified. |
| <Fine\>      | Fine. |
| [1.]          | Indicates the measures valid for paticular repeat. Any text can be specified. Normally, used with measure boundary with repeat sign and specifying the repat numbers to apply e.g. "1.", "2-3."  |
| ./.           | Simile mark(single) |
| .//.          | Simile mark(double) |
| "text"     | Strings enclosed with double quotation mark is a text which will be drawn at the same vertical level of chords. | 
| 'text'     | Strings enclosed with single quotation mark is a text which will be drawn above the chords. Texts are left aligned within a width of a masure. | 
| 'text'@ C7| Strings enclosed with single quation specified before atmark is a text which are drawn above the first chord after the atmark within a measure. |
| \`text\`@ C7 | Strings enclosed with single grave accent specified before atmark is a text which are drawn below the first chord after the atmark within a measure. |
| (4/4)          | Time signature. Single integer for denominator and nominator can be specified. | 
| ,         | Space |

## Variables

Variables can be specified with the form of "%VARIABLE_NAME=VALUE". 

| Variable Name        | Value Type          | Description  |
| ------------- |:-------------:| -----|
| TITLE     | String      | Title of the song. | 
| SUB_TITLE     | String      | Sub title of the song. | 
| ARTIST     | String      | Artist name. | 
| KEY        | String      | Key of the song. e.g. C, Gm |
| TRANSPOSE | String\|Integer | Transposed key (String) or transpose interval by integer in semitone unit. See [Transose](transpose.md) for details. |
| KEY_TYPE  | String | Preffered key type(flat/b or sharp/#) for transposing. See [Transpose](transpose.md) for details. |
| SHOW_STAFF | String | "YES" : Force showing staffs. "NO" : Force not showing staffs. Nothing specified(default) means fumen automatically add staff if needed |
| SHOW_FOOTER | String | "YES" : Show footer(default), "NO": Not to show footer.