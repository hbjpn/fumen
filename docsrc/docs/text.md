# Text
Several types of text drawings are defined.

| Markdown       | Description  |
| ------------- | -----|
| "text"     | Strings enclosed with double quotation mark is a text which will be drawn at the same vertical level of chords. | 
| 'text'     | Strings enclosed with single quotation mark is a text which will be drawn above the chords. Texts are left aligned within a width of a masure. | 
| 'text'@ C7| Strings enclosed with single quation specified before atmark is a text which are drawn above the first chord after the atmark within a measure. |
| \`text\`@ C7 | Strings enclosed with single grave accent specified before atmark is a text which are drawn below the first chord after the atmark within a measure. |
| , | White space of which width is corresponding to one  simple chord.  |

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[A]
| A "Text at the smae level of Chords" B |
| 'Text above the chord area' A | 
| A 'Text above the paticular chord'@B |
| `Text`@A `below`@B `the chord/2nd line/3rd line`@ C 'Both'@ `Side`@ D|
| , B C D | E  F , G |
<!-- fumen:end -->
