# Grammer
## Structure
Basic fumen mark down source has following components :
1. Title
2. Artist
3. Reharsal mark(s) and its(their) contents

Following is the example fumen source having title of "Hello" and artist name "World", and 2 reharsal marks of A and B.
```fumen
%TITLE="Hello"
%ARTIST="World"

[A]
| A | B | C | D |

[B]
| E | F | G | A |
```

## Reharsal mark
Strings enclosed with square brackets outside the measures means a reharsal mark name. Following the reharsal mark, one or more of measures are specified as a contents belongs to the reharsal marks.

## Measures
Measures are contents of reharsal mark. It consists of multiple measures bounded by measure boundary marks.

### Measure boundaries

| Boundary markdown        | Rendering Image (Default Renderer)          | Description  |
| ------- |:--------:| -----|
| \|      | TBD      | Single line boundary |
| \|\|    | TBD      | Double line boundary |
| \|\|.   | TBD      | Double line boundary with thicker 2nd line |
| \|\|:   | TBD      | Start of repeat |
| :\|\|   | TBD      | End of repeat |
| :\|\|:  | TBD      | End and start of repeat |

### Measure contents
Bounded by measure boundary marks, various type of components can be specified.

#### Chord

Chord symbol indicates the chord names with various 

#### Repeat signs

In additionion to the measure boundary mark with repeat sign, following repeat signs can be specified within a measure.

| Markdown        | Rendering Image (Default Renderer)           | Description  |
| ------------- |:-------------:| -----|
| \<Coda\>      | TBD      | Coda sign.  |
| \<to Coda\>   | TBD      | "To Coda" sign.  |
| \<S\>         | TBD      | Segno sign. |
| \<D.S.\>      | TBD      | Dal segno. |
| \<D.C.\>      | TBD      | Da Capo. |
| \<Fine\>      | TBD      | Fine. |

#### Other signs
| Markdown        | Rendering Image (Default Renderer)           | Description  |
| ------------- |:-------------:| -----|
| (4/4)         | TBD      | Time signature. Any integer for denominator and nominator can be specified. | 
| [1.]          | TBD      | Indicates the part valid for 1st repeat. Any integer can be specifeid. Normally, used with measure boundary with repeat sign. |

#### Comments
Several types of comments are defined.

| Markdown        | Rendering Image (Default Renderer)           | Description  |
| ------------- |:-------------:| -----|
| "comment"     | TBD      | Strings enclosed with double quotation mark is a comment which will be drawn at the same vertical level of chords. | 
| 'comment'     | TBD      | Strings enclosed with single quotation mark is a comment which will be drawn above the chords. Comment strings are left aligned within a width of a masure. | 
| C7@'comment' | TBD | Comment with single quation but specified after the chord followed by at mark, the comment strings are drawn above that chord. |

## Variables

Variables are specified by the form of "%VariableName=Value".

| Variable Name        | Value Type          | Description  |
| ------------- |:-------------:| -----|
| TITLE     | String      | Specify the title of the song. | 
| ARTIST     | String      | Specify the artist name. | 
