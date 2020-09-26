# Grammer
## Structure
Basic fumen mark down source has following components :
1. Header
  - Title 
  - Artist
2. One or more of Reharsal groups and their contents(measures)
3. Footer

Following is the example fumen source having title of "Hello" and artist name "World", and 2 reharsal marks of A and B.

<!-- fumen:start -->
%TITLE="Hello"
%ARTIST="World"

[A]
| A | B | C | D |

[B]
| E | F | G | A |
<!-- fumen:end -->

## Reharsal Group
Strings enclosed with square brackets outside the measures means a reharsal group name. Following the reharsal group mark, one or more of measures are specified as a contents belongs to that reharsal group.

The normal reharal group should have at least one empty row between the end of previous measure. If no empty row is inserted, the reharsal group is tagged with in-line reharsal group.

If no reharsal group mark is specified before the definition of measures, one default reharsal mark with empty name is generated implicitly.

In the default renderer :
- in-line reharsal mark and its first measure row is rendered in the same row of the last row of previous reharsal group.
- Reharsal group mark with empty name is not rendered.

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
Set of measures with continuous rows (i.e. seprately by single linebreak) inside a reharsal group are grouped as a "block". Two or more of line breaks between measures means the measure rows above and below line breaks will belong to differnt blocks.

How to render differnt blocks is up to each renderer implementation. In the default renderer, block is treated as a unit to apply the rendering optimization process. For example, the default renderending try to  vertically align the measure boundaries as much as possible for better readability, but only among the measure rows within a single block. Hence, the measures in differnt blocks may have differnt measure boudnary positions.

<!-- fumen:start -->
%SHOW_HEADER="NO"
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
%SHOW_HEADER="NO"
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
| :\|\|:  | End and start of repeat |

<!-- fumen:start -->
%SHOW_HEADER="NO"
%SHOW_FOOTER="NO"

[A]
| A || B ||: C :||: D :|| E ||.
<!-- fumen:end -->

### Measure contents
Bounded by measure boundary marks, various type of components can be specified.

#### Chord

Chord symbol indicates the chord names.

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[A]
| A | B | C | D | E | F | G |
| Ab | Bb | Cb | Db | Eb | Fb | Gb |
| A# | B# | C# | D# | E# | F# | G# |

[Majors]
| CM7 | CM9 | C6 |C7 | C9 | C11 | C13 | C69 |

[Minors]
| Cm | Cm6 | Cm7 | Cm9 | Cm11 | Cm7-5 | Cdim | CmM7 |

[Sus chords]
| Csus4 | Csus2 | 
[Auguments/Tensions]
|| C-5 | C+5 | Cadd9 | C7,b9,#11 |
[On chords]
|| C/D | Bb/Ab |
<!-- fumen:end -->

#### Repeat sign

In additionion to the measure boundary mark with repeat sign, following repeat signs can be specified within a measure.

| Markdown         | Description  |
| ------------- | -----|
| \<Coda\>      | Coda sign.  |
| \<to Coda\>   | "To Coda" sign.  |
| \<S\>         | Segno sign. |
| \<D.S.\>      | Dal segno. |
| \<D.C.\>      | Da Capo. |
| \<Fine\>      | Fine. |

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[A]
| A | B | <S> C | D <to Coda> |
| E <D.S.> | F <D.C.> | <Coda> G | A |

[B]
| A | B | <S2> C | D <to Coda2> |
| E <D.S.2> | F | <Coda2> G | A <Fine> |
<!-- fumen:end -->

#### Other sign
| Markdown        | Description  |
| ------------- | -----|
| (4/4)          | Time signature. Any integer for denominator and nominator can be specified. | 
| [1.]           | Indicates the part valid for 1st repeat. Any integer can be specifeid. Normally, used with measure boundary with repeat sign. |

<!-- fumen:start -->
%SHOW_FOOTER="NO"

[A]
| (3/4) A ||:  B | C | D | [1.] A :|| [2.] C |
<!-- fumen:end -->


#### Comment
Several types of comments are defined.

| Markdown       | Description  |
| ------------- | -----|
| "comment"     | Strings enclosed with double quotation mark is a comment which will be drawn at the same vertical level of chords. | 
| 'comment'     | Strings enclosed with single quotation mark is a comment which will be drawn above the chords. Comment strings are left aligned within a width of a masure. | 
| C7@'comment' | Comment with single quation but specified after the chord following the at mark, the comment strings are drawn above that chord. |

## Variable

Variables are specified by the form of "%VariableName=Value".

| Variable Name        | Value Type          | Description  |
| ------------- |:-------------:| -----|
| TITLE     | String      | Title of the song. | 
| ARTIST     | String      | Artist name. | 
| KEY        | String      | Key of the song. e.g. C, Gm |
| TRANSPOSE | String\|Integer | Transposed key (String) or transpose interval by integer in semitone unit. |

### Transpose

Transpose is done by speifying either of followings :

- Specify base key by "%KEY" and transposed key by "%TRANSPOSE".
- Specify base key by "%KEY" and transpose interval (integer) by "%TRANSPOSE" and prefered key type(flat or sharp) by "%KEY_TYPE".

<!-- fumen:start -->
%SHOW_FOOTER="NO"
%KEY="C"
%TRANSPOSE="Db"

[A]
| C | Dm G7 | C |
<!-- fumen:end -->

<!-- fumen:start -->
%SHOW_FOOTER="NO"
%KEY="C"
%TRANSPOSE=1
%KEY_TYPE="#"

[A]
| C | Dm G7 | C |
<!-- fumen:end -->