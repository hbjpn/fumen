# Structure
Basic fumen mark down source has following components :

* Header
    * Title 
    * Artist
* One or more of [Rehearsal groups](#rehearsal-group) and their contents(measures)
* Footer

Following is the example fumen source having title of "Hello" and artist name "World", and 2 rehearsal marks of A and B.

<!-- fumen:start -->
%TITLE="Hello"
%ARTIST="World"

[A]
| A | B | C | D |

[B]
| E | F | G | A |
<!-- fumen:end -->

## Rehearsal Group
Strings enclosed with square brackets outside the measures means a rehearsal group name. Following the rehearsal group mark, one or more of measures are specified as a contents belongs to that rehearsal group.

The normal reharal group should have at least one empty row between the end of previous measure. If no empty row is inserted, the rehearsal group is tagged with in-line rehearsal group.

If no rehearsal group mark is specified before the definition of measures, one default rehearsal mark with empty name is generated implicitly.

In the default renderer :
- in-line rehearsal mark and its first measure row is rendered in the same row of the last row of previous rehearsal group.
- Rehearsal group mark with empty name is not rendered.

<!-- fumen:start -->
%SHOW_FOOTER="NO"


| B |
[A]
|| C | D |
[B]
| E | F |
| A | C | F | G | A | 

[]
| A | B | C | D | E |
<!-- fumen:end -->

## Block
Set of measures with continuous rows (i.e. seprately by single linebreak) inside a rehearsal group are grouped as a "block". Two or more of line breaks between measures means the measure rows above and below line breaks will belong to differnt blocks.

How to render differnt blocks is up to each renderer implementation. In the default renderer, block is treated as a unit to apply the rendering optimization process. For example, the default renderending try to  vertically align the measure boundaries as much as possible for better readability, but only among the measure rows within a single block. Hence, the measures in differnt blocks may have differnt measure boudnary positions.

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[A]
| A | B | C | D |
| A B C D E F G| B | C | D |

[B]
| A | B | C | D |

| A B C D E F G | B | C | D |
<!-- fumen:end -->


## Measure row
Set of measures specified in the single line in the mark down code is called as a measure row. Block consists of one or more of measure rows.

Treatment of "measure row" in the rendering is up to renderer implementation. In the default renderer, just simply render a single measure row in the mark down as a single row in the rendered image. One implmentation may ignore the measure row(i.e. ignore single line break in the block) and adopt its own strategy to determine number of measures rendered in the singel row.

### Alignment mark
A measure row can be specified with "alignement" mark at the begining of the measure row. 

|  Markdown         | Description  |
| ------- | -----|
| Not specified (Default) | Expand to total width |
| <      | Left align |
| >     | Right align |

This is to indicate the renderer to rendere the measure row by fill out in a total wide, by aligning to leftside or aligning to right side. Details on the outcome of rendering due to these marks are up to renderer implemenation. 

In the default renderer, left align and right align marks are only valid when the number of measures in the nearest upper row without alignment mark have more measures in the measure row. 

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[A]
||: A | B |[1.] C | D :||
>|[2.] A | B ||
<|| A | B | C |

<!-- fumen:end -->

## Measure
Measures are contents of a measur row. It consists of multiple measures bounded by measure boundary marks. 

### Measure boundary

| Boundary markdown       | Description  |
| ------- | -----|
| \|      | Single line boundary |
| \|\|    | Double line boundary |
| \|\|.   | Double line boundary with thicker 2nd line |
| \|\|:   | Start of repeat |
| :\|\|   | End of repeat |
| :\|\|x3   | End of repeat with repeat number |
| :\|\|xX   | End of repeat with arbitral times : X times |
| :\|\|:  | End and start of repeat |
| ./\|/.  | Boundary with overlapping Simile mark |

<!-- fumen:start -->
%SHOW_HEADER="NO"
%SHOW_FOOTER="NO"

[A]
| A || B ||: C :||: D :|| E  ./|/.  |
||: F | G :||:x3 A | B :||xX C | D ||. 
<!-- fumen:end -->

### Measure contents
Various types of contents can be specified. Please refer to the following pages for details.

- [Chords](chord.md)
- [Rests](rest.md)
- [Repeat signs](repeat-sign.md)
- [Time signs](time-sign.md)
- [Texts](text.md)

